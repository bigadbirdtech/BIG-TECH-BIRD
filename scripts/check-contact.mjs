// Offline check of api/contact.ts validation. Run: npm run check (Node 22.18+/24 strips the TS types).
// fetch is stubbed, so this never reaches the CRM or any network.
import assert from "node:assert/strict";
import handler from "../api/contact.ts";

const calls = [];
let crmOk = true;
globalThis.fetch = async (url, init) => {
  calls.push({ url, body: JSON.parse(init.body) });
  return { ok: crmOk, status: crmOk ? 200 : 500 };
};

let n = 0;
async function call(method, body) {
  const out = {};
  const res = {
    status(c) { out.status = c; return res; },
    json(b) { out.body = b; },
    setHeader() {},
  };
  await handler({ method, body, headers: { "x-forwarded-for": `10.0.0.${++n}` } }, res);
  return out;
}

const good = { firstName: "Ada", lastName: "Lovelace", email: "ada@example.com", message: "Hi", phone: "123", smsConsent: false };

delete process.env.CRM_URL;
delete process.env.PORTAL_API_KEY;
assert.equal((await call("GET")).status, 405, "wrong method");
assert.deepEqual(await call("POST", { ...good, website: "bot" }), { status: 200, body: { ok: true } }, "honeypot fakes success");
assert.equal((await call("POST", { ...good, email: "nope" })).status, 400, "bad email");
assert.equal((await call("POST", good)).status, 503, "missing env");
assert.equal(calls.length, 0, "nothing forwarded so far");

process.env.CRM_URL = "https://crm.invalid";
process.env.PORTAL_API_KEY = "test";
assert.equal((await call("POST", good)).status, 200);
assert.equal(calls.at(-1).body.phone, "", "no consent, no phone forwarded");
assert.equal((await call("POST", { ...good, smsConsent: true })).status, 200);
assert.equal(calls.at(-1).body.phone, "123", "consent ticked, phone forwarded");
crmOk = false;
assert.equal((await call("POST", good)).status, 502, "CRM failure is a generic 502");

console.log("check-contact: ok");
