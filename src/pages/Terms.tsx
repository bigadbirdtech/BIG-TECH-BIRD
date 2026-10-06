import React from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

export const Terms: React.FC = () => {
  return (
    <div className="w-full bg-[#FAF8F5] text-[#0A0A0A] overflow-hidden min-h-screen">
      <SEO
        title="Terms & Conditions — Big Tech Bird"
        description="Terms and Conditions and Client Agreements for Big Tech Bird."
      />

      {/* Hero Header */}
      <section className="relative pt-32 md:pt-40 pb-16 px-6 md:px-12 max-w-5xl mx-auto border-b border-[#0A0A0A]/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0A0A0A]/20 bg-white/50 text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/70 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#0A0A0A]" />
          <span>LEGAL PROTOCOL // EFFECTIVE OCTOBER 2026</span>
        </div>

        <h1 className="font-serif italic text-5xl sm:text-7xl md:text-8xl leading-[0.95] text-[#0A0A0A] tracking-tight">
          Terms & Conditions.
        </h1>

        <p className="font-sans text-base md:text-lg text-[#0A0A0A]/70 max-w-2xl mt-6 leading-relaxed">
          These Terms govern your engagement with Big Tech Bird. Please review our service agreements,
          intellectual property clauses, and client communication standards.
        </p>
      </section>

      {/* Main Content: Uniform Articles */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="space-y-12">
          {/* Article 01 */}
          <div className="border-t border-[#0A0A0A]/15 pt-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/50">
              Article 01
            </span>
            <h2 className="font-serif italic text-3xl text-[#0A0A0A] mt-1 mb-4">
              Services & Project Engagements
            </h2>
            <p className="text-sm font-sans text-[#0A0A0A]/80 leading-relaxed">
              Big Tech Bird provides professional services in Website Design & Development, Social Media Management,
              and AI Integration & Workflow Automation. Specific deliverables, project milestones, and production schedules
              are detailed in mutually executed Statements of Work (SOW) or proposal contracts.
            </p>
          </div>

          {/* Article 02 */}
          <div className="border-t border-[#0A0A0A]/15 pt-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/50">
              Article 02
            </span>
            <h2 className="font-serif italic text-3xl text-[#0A0A0A] mt-1 mb-4">
              Client Collaboration & Approvals
            </h2>
            <p className="text-sm font-sans text-[#0A0A0A]/80 leading-relaxed">
              Timely delivery requires constructive, iterative communication. Clients agree to provide brand assets,
              credentials, and design milestone feedback within five (5) business days of receipt. Delays in feedback
              may result in corresponding adjustments to scheduled launch windows.
            </p>
          </div>

          {/* Article 03 */}
          <div className="border-t border-[#0A0A0A]/15 pt-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/50">
              Article 03
            </span>
            <h2 className="font-serif italic text-3xl text-[#0A0A0A] mt-1 mb-4">
              Intellectual Property & Ownership
            </h2>
            <p className="text-sm font-sans text-[#0A0A0A]/80 leading-relaxed">
              Upon complete settlement of all agreed project fees, all custom designs, codebase repositories, and assets
              created specifically for the client become the exclusive property of the client. Big Tech Bird retains the
              right to feature completed work and non-confidential case metrics in its portfolio and award submissions.
            </p>
          </div>

          {/* Article 04: SMS & Client Communications (Uniform with all other articles) */}
          <div className="border-t border-[#0A0A0A]/15 pt-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/50">
              Article 04
            </span>
            <h2 className="font-serif italic text-3xl text-[#0A0A0A] mt-1 mb-4">
              Client Communications & Operational SMS Policy
            </h2>
            <div className="space-y-4 text-sm font-sans text-[#0A0A0A]/80 leading-relaxed">
              <p>
                To coordinate effectively with clients, Big Tech Bird may utilize email, client portals, and occasional
                SMS text messaging. When you provide a mobile phone number on our website or during client onboarding,
                you consent to receive occasional operational SMS messages.
              </p>
              <p>
                <strong>Operational Purpose & Non-Solicitation:</strong> SMS messaging is used solely to communicate with clients
                better—including checking in on campaign status, confirming design reviews, providing sprint updates, and
                coordinating consultations. We do <em>not</em> use SMS to market, solicit, or send promotional sales messages.
              </p>
              <p className="text-xs font-mono text-[#0A0A0A]/70">
                • <strong>Frequency:</strong> Varies based on project activity, typically 1 to 4 operational check-ins per month during active delivery.<br />
                • <strong>Rates:</strong> Standard message and data rates may apply depending on your mobile carrier.<br />
                • <strong>Opt-Out:</strong> You may opt out of SMS messages at any time by replying <code>STOP</code> to any message received, or by emailing <code>tech@bigadbird.com</code>. For assistance, reply <code>HELP</code>.
              </p>
            </div>
          </div>

          {/* Article 05 */}
          <div className="border-t border-[#0A0A0A]/15 pt-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/50">
              Article 05
            </span>
            <h2 className="font-serif italic text-3xl text-[#0A0A0A] mt-1 mb-4">
              Invoicing & Payment Terms
            </h2>
            <p className="text-sm font-sans text-[#0A0A0A]/80 leading-relaxed">
              Project fees are structured on milestone-based deposits or monthly retainers as outlined in your SOW.
              Invoices are payable upon receipt via bank wire, ACH, or credit card. Late payments exceeding 14 calendar
              days may pause active development sprints until accounts are reconciled.
            </p>
          </div>

          {/* Article 06 */}
          <div className="border-t border-[#0A0A0A]/15 pt-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/50">
              Article 06
            </span>
            <h2 className="font-serif italic text-3xl text-[#0A0A0A] mt-1 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-sm font-sans text-[#0A0A0A]/80 leading-relaxed">
              Big Tech Bird is not liable for indirect, incidental, or consequential damages resulting from third-party hosting
              downtime, third-party API interruptions, algorithm shifts on external social media networks, or LLM infrastructure
              service interruptions outside our reasonable control.
            </p>
          </div>

          {/* Article 07 */}
          <div className="border-t border-[#0A0A0A]/15 pt-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/50">
              Article 07
            </span>
            <h2 className="font-serif italic text-3xl text-[#0A0A0A] mt-1 mb-4">
              Privacy & Confidentiality
            </h2>
            <p className="text-sm font-sans text-[#0A0A0A]/80 leading-relaxed">
              All proprietary business data, strategic briefs, and client telemetry remain strictly confidential.
              Mobile numbers and contact details provided to us are never sold or shared with outside marketing aggregators.
              For complete details, please refer to our{' '}
              <Link to="/privacy" className="underline font-bold text-[#0A0A0A] hover:opacity-70">
                Privacy Policy
              </Link>.
            </p>
          </div>

          {/* Footer Navigation */}
          <div className="pt-12 border-t border-[#0A0A0A]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#0A0A0A]/60">
            <span>LAST REVISED: OCTOBER 2026</span>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="hover:text-[#0A0A0A] underline underline-offset-4">
                View Privacy Policy →
              </Link>
              <Link to="/contact" className="hover:text-[#0A0A0A] underline underline-offset-4">
                Contact Legal →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

