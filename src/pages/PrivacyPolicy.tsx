import React from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="w-full bg-[#FAF8F5] text-[#0A0A0A] overflow-hidden min-h-screen">
      <SEO
        title="Privacy Policy — Big Tech Bird"
        description="Privacy Policy and Mobile Data Protection Standards for Big Tech Bird."
      />

      {/* Hero Header */}
      <section className="relative pt-32 md:pt-40 pb-16 px-6 md:px-12 max-w-5xl mx-auto border-b border-[#0A0A0A]/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0A0A0A]/20 bg-white/50 text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/70 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#0A0A0A]" />
          <span>DATA INTEGRITY // PRIVACY DISCLOSURE 2026</span>
        </div>

        <h1 className="font-serif italic text-5xl sm:text-7xl md:text-8xl leading-[0.95] text-[#0A0A0A] tracking-tight">
          Privacy Policy.
        </h1>

        <p className="font-sans text-base md:text-lg text-[#0A0A0A]/70 max-w-2xl mt-6 leading-relaxed">
          At Big Tech Bird, your privacy is treated with the same uncompromising precision as our design engineering.
          We believe in total transparency, zero spam, and complete protection of client telemetry.
        </p>
      </section>

      {/* Main Content: Uniform Sections */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="space-y-12">
          {/* Section 01 */}
          <div className="border-t border-[#0A0A0A]/15 pt-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/50">
              Section 01
            </span>
            <h2 className="font-serif italic text-3xl text-[#0A0A0A] mt-1 mb-4">
              Information We Collect
            </h2>
            <div className="space-y-3 text-sm font-sans text-[#0A0A0A]/80 leading-relaxed">
              <p>
                <strong>Inquiry & Project Data:</strong> When you complete an inquiry or project brief on our website,
                we collect your first name, last name, work email address, optional mobile phone number, discipline of interest,
                budget tier, and project description.
              </p>
              <p>
                <strong>Technical Telemetry:</strong> We collect non-personally identifiable technical telemetry including
                browser user-agent, device viewport dimensions, referral headers, and page interaction timestamps to ensure
                flawless 60fps rendering physics and core web vitals.
              </p>
            </div>
          </div>

          {/* Section 02 */}
          <div className="border-t border-[#0A0A0A]/15 pt-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/50">
              Section 02
            </span>
            <h2 className="font-serif italic text-3xl text-[#0A0A0A] mt-1 mb-4">
              How We Use Your Information
            </h2>
            <div className="space-y-3 text-sm font-sans text-[#0A0A0A]/80 leading-relaxed">
              <p>We process your data strictly for legitimate operational purposes, including:</p>
              <ul className="space-y-2 text-xs sm:text-sm font-mono pt-1">
                <li>• Delivering bespoke proposals, technical architectural scopes, and project estimates.</li>
                <li>• Collaborating with you throughout active design sprints, code releases, and social campaigns.</li>
                <li>• Upholding enterprise security standards, preventing unauthorized access, and maintaining confidentiality.</li>
              </ul>
            </div>
          </div>

          {/* Section 03: Mobile Phone Numbers & SMS (Uniform Section) */}
          <div className="border-t border-[#0A0A0A]/15 pt-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/50">
              Section 03
            </span>
            <h2 className="font-serif italic text-3xl text-[#0A0A0A] mt-1 mb-4">
              Mobile Phone Numbers & SMS Communications
            </h2>
            <div className="space-y-4 text-sm font-sans text-[#0A0A0A]/80 leading-relaxed">
              <p>
                Providing your mobile phone number on our website forms is entirely optional. When you choose to provide
                your phone number, it is utilized purely to communicate with you better and check in on your campaign.
              </p>
              <p>
                <strong>Operational Check-Ins Only:</strong> We do not engage in telemarketing, automated promotional campaigns,
                or sales solicitation via SMS. Messages are sent solely for project coordination—such as checking in on campaign progress,
                notifying you of design milestones, and scheduling calls.
              </p>
              <p>
                <strong>No Sharing or Sale of Mobile Data:</strong> No mobile information will be shared with third parties or
                affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator
                opt-in data and consent; this information will not be shared with any third parties.
              </p>
              <p className="text-xs font-mono text-[#0A0A0A]/70">
                • <strong>Opt-Out:</strong> You may opt out of receiving SMS messages at any time by replying <code>STOP</code> to any message received, or by emailing <code>tech@bigadbird.com</code>. For help, reply <code>HELP</code>.
              </p>
            </div>
          </div>

          {/* Section 04 */}
          <div className="border-t border-[#0A0A0A]/15 pt-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/50">
              Section 04
            </span>
            <h2 className="font-serif italic text-3xl text-[#0A0A0A] mt-1 mb-4">
              Data Security & Storage
            </h2>
            <p className="text-sm font-sans text-[#0A0A0A]/80 leading-relaxed">
              All data transmitted through our website is encrypted in transit using modern TLS 1.3 encryption and stored with
              AES-256 encryption at rest. Access to client information is strictly restricted to authorized company principals
              and engineering staff with role-based credentials.
            </p>
          </div>

          {/* Section 05 */}
          <div className="border-t border-[#0A0A0A]/15 pt-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/50">
              Section 05
            </span>
            <h2 className="font-serif italic text-3xl text-[#0A0A0A] mt-1 mb-4">
              Your Privacy Rights (GDPR & CCPA)
            </h2>
            <p className="text-sm font-sans text-[#0A0A0A]/80 leading-relaxed">
              You retain the right to inspect, correct, export, or permanently delete any personal information we hold
              about you at any time. To submit a request, contact our data privacy officer at{' '}
              <a href="mailto:tech@bigadbird.com" className="underline font-bold text-[#0A0A0A] hover:opacity-70">
                tech@bigadbird.com
              </a>.
            </p>
          </div>

          {/* Section 06 */}
          <div className="border-t border-[#0A0A0A]/15 pt-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/50">
              Section 06
            </span>
            <h2 className="font-serif italic text-3xl text-[#0A0A0A] mt-1 mb-4">
              Policy Revisions & Inquiries
            </h2>
            <p className="text-sm font-sans text-[#0A0A0A]/80 leading-relaxed">
              We may update this Privacy Policy periodically to reflect technological or regulatory advancements.
              Any modifications will be posted directly to this page with an updated revision date.
            </p>
          </div>

          {/* Footer Navigation */}
          <div className="pt-12 border-t border-[#0A0A0A]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#0A0A0A]/60">
            <span>LAST REVISED: OCTOBER 2026</span>
            <div className="flex items-center gap-4">
              <Link to="/terms" className="hover:text-[#0A0A0A] underline underline-offset-4">
                View Terms & Conditions →
              </Link>
              <Link to="/contact" className="hover:text-[#0A0A0A] underline underline-offset-4">
                Contact Support →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

