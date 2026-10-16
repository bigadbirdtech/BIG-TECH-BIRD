// Vercel serverless function: receives the /contact form and files it in the BIG AD BIRD CRM as a lead (tag "client-enquiry").
// Needs two environment variables on this Vercel project: CRM_URL (e.g. https://system.bigadbird.com) and PORTAL_API_KEY (same value as the CRM's).
// ponytail: in-memory rate limit, per function instance. Use Upstash/Redis if spam becomes a problem.

type Req = { method?: string; body?: unknown; headers: Record<string, string | string[] | undefined> };
type Res = { status: (n: number) => Res; json: (b: unknown) => void; setHeader: (k: string, v: string) => void };

const hits = new Map<string, number[]>();
const clip = (v: unknown, n: number) => (typeof v === "string" ? v.trim().slice(0, n) : "");

export default async function handler(req: Req, res: Res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const b = (typeof req.body === "string" ? safeParse(req.body) : req.body) as Record<string, unknown> | null;
  if (!b || typeof b !== "object") return res.status(400).json({ error: "Invalid request." });
  if (b.website) return res.status(200).json({ ok: true }); // honeypot

  const firstName = clip(b.firstName, 60);
  const lastName = clip(b.lastName, 60);
  const email = clip(b.email, 200);
  const message = clip(b.message, 4000);
  if (!firstName || !lastName || !message) return res.status(400).json({ error: "Please fill in your name and project goals." });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return res.status(400).json({ error: "Please enter a valid email address so we can reply." });

  const fwd = req.headers["x-forwarded-for"];
  const ip = (Array.isArray(fwd) ? fwd[0] : fwd)?.split(",")[0].trim() ?? "local";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  if (recent.length >= 5) return res.status(429).json({ error: "Too many messages from one place. Please try again in a few minutes." });
  hits.set(ip, [...recent, now]);

  const base = process.env.CRM_URL;
  const key = process.env.PORTAL_API_KEY;
  if (!base || !key) return res.status(503).json({ error: "Our contact form is being set up. Please email contact@bigadbird.com or call 760-284-7665." });

  const phone = clip(b.phone, 40);
  // ponytail: same consent wording as the checkbox on src/pages/Contact.tsx; keep the two in step.
  const consent = b.smsConsent === true && phone
    ? 'Ticked on the form: "I agree to be contacted by call, text and email at the details I gave. Message and data rates may apply. Reply STOP to opt out."'
    : "Consent box not ticked.";
  try {
    const r = await fetch(`${base}/api/portal/enquiry`, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        email,
        phone: b.smsConsent === true ? phone : "", // no consent, no phone number stored for texting
        role: clip(b.service, 80),
        volume: clip(b.budget, 80),
        message: `${message}\n\n${consent}`,
        source: "bigtechbird.tech",
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (r.ok) return res.status(200).json({ ok: true });
    console.error("contact: CRM answered", r.status); // status only, never the visitor's details
  } catch (e) {
    console.error("contact: CRM request failed", e instanceof Error ? e.name : "unknown");
  }
  return res.status(502).json({ error: "We couldn't send that just now. Please try again in a minute, or email contact@bigadbird.com or call 760-284-7665." });
}

function safeParse(s: string) {
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
}
