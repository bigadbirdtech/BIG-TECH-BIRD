import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';
import { BirdMascot } from '../components/BirdMascot';
import { TiltCard } from '../components/TiltCard';
import { ArrowUpRight, Mail, Phone, Clock, Globe, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'Website Design',
    budget: '', // no preselected tier: the visitor picks one
    message: '',
    smsConsent: false, // consent must be an active choice
    website: '', // honeypot
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [birdOnButton, setBirdOnButton] = useState(false);

  // Compute dynamic form completion percentage
  const filledCount = [
    formState.firstName.trim(),
    formState.lastName.trim(),
    formState.email.trim(),
    formState.message.trim(),
  ].filter(Boolean).length;
  const progressPct = Math.round((filledCount / 4) * 100);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setError(null);
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formState) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.error || 'Something went wrong.');
      setIsSubmitted(true);

      // Trigger celebratory monochrome confetti (only after it really sent)
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FAF8F5', '#FFFFFF', '#E67E22'],
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'We could not send that. Please email admin@bigtechbird.com or call 760-284-7665.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#0A0A0A] text-[#FAF8F5] overflow-hidden">
      <SEO
        title="Contact — Let's Take a Flight"
        description="Initiate a project with Big Tech Bird. Inquire about Website Design, Social Media Management, and AI Integration."
      />

      {/* Film grain noise subtle on black */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative pt-32 md:pt-44 pb-28 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Top Header Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-mono uppercase tracking-widest text-[#FAF8F5]/70 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>INQUIRIES OPEN // WE AIM TO REPLY WITHIN ONE BUSINESS DAY</span>
        </div>

        {/* Giant Inverted Headline */}
        <div className="overflow-hidden mb-12">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif italic text-6xl sm:text-8xl md:text-9xl lg:text-[10vw] leading-[0.9] text-white tracking-tight"
          >
            Let's take a flight.
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-t border-white/10 pt-12">
          {/* Left Column: Direct Contacts & Operations */}
          <div className="lg:col-span-5 space-y-8">
            <p className="font-sans text-base sm:text-lg text-[#FAF8F5]/70 leading-relaxed">
              We collaborate with visionary founders, challenger brands, and enterprise teams seeking an unfair digital advantage.
            </p>

            {/* Global Status Console */}
            <TiltCard
              maxTilt={8}
              className="p-6 bg-white/5 border border-white/15 rounded-3xl space-y-6"
              glowColor="rgba(255,255,255,0.12)"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                <span className="text-[#FAF8F5]/60 flex items-center gap-1.5 font-bold uppercase tracking-wider">
                  <Globe className="w-3.5 h-3.5 text-amber-400" />
                  Digital Operations
                </span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Inquiries Open
                </span>
              </div>

              {/* Digital Metrics */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-[#FAF8F5]/50">STATUS</div>
                  <div className="text-emerald-400 font-bold mt-0.5">ONLINE</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-[#FAF8F5]/50">REPLY AIM</div>
                  <div className="text-white font-bold mt-0.5">1 BUS. DAY</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-[#FAF8F5]/50">CHANNELS</div>
                  <div className="text-amber-400 font-bold mt-0.5">DIRECT</div>
                </div>
              </div>

              <div className="space-y-4 pt-2 text-xs font-mono border-t border-white/10">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="uppercase tracking-widest text-[#FAF8F5]/40 text-[10px]">Priority Inbound</div>
                    <a
                      href="mailto:admin@bigtechbird.com"
                      className="text-sm text-white hover:underline mt-0.5 block font-sans"
                    >
                      admin@bigtechbird.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="uppercase tracking-widest text-[#FAF8F5]/40 text-[10px]">Direct Line</div>
                    <a
                      href="tel:+17602847665"
                      className="text-sm text-white hover:underline mt-0.5 block font-sans"
                    >
                      760-284-7665
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="uppercase tracking-widest text-[#FAF8F5]/40 text-[10px]">Response Time</div>
                    <div className="text-xs text-white/90 font-sans mt-0.5">
                      We aim to reply within one business day.
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Interactive Mascot statement card */}
            <TiltCard
              maxTilt={10}
              onClick={() => {
                confetti({
                  particleCount: 25,
                  spread: 50,
                  origin: { y: 0.8 },
                  colors: ['#E67E22', '#F39C12', '#FAF8F5'],
                });
              }}
              className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-4 cursor-pointer group"
              glowColor="rgba(230,126,34,0.2)"
            >
              <div className="w-14 h-18 shrink-0 group-hover:scale-110 transition-transform">
                <BirdMascot variant="perched" className="w-full h-full" />
              </div>
              <div>
                <p className="text-xs font-serif italic text-amber-100 leading-relaxed">
                  "Direct founder communication. Zero agency middle-management. Sub-second execution."
                </p>
                <span className="text-[9px] font-mono uppercase text-amber-400/80 mt-1 block">
                  ✦ Click Mascot for Wing Flap
                </span>
              </div>
            </TiltCard>

            {/* Quick Link to Terms & Privacy */}
            <div className="pt-2 text-xs font-mono text-[#FAF8F5]/50 flex items-center gap-4">
              <Link to="/terms" className="hover:text-white underline underline-offset-2">
                Terms of Service
              </Link>
              <span>•</span>
              <Link to="/privacy" className="hover:text-white underline underline-offset-2">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Form with Flight Clearance Progress */}
          <div className="lg:col-span-7 bg-white/5 border border-white/15 rounded-3xl p-8 md:p-12 shadow-2xl relative">
            {/* Dynamic Flight Readiness Progress Bar */}
            <div className="mb-8 pb-6 border-b border-white/10">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-[#FAF8F5]/60 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Brief Readiness</span>
                </span>
                <span className={`font-bold ${progressPct === 100 ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {progressPct}% {progressPct === 100 ? '• Trajectory Locked' : '• In Progress'}
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.max(10, progressPct)}%` }}
                  transition={{ duration: 0.4 }}
                  className={`h-full rounded-full transition-colors ${
                    progressPct === 100 ? 'bg-emerald-400' : 'bg-gradient-to-r from-amber-500 to-amber-300'
                  }`}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name Fields: First Name and Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#FAF8F5]/60 mb-2" htmlFor="bt-first-name">
                        First Name *
                      </label>
                      <input
                        id="bt-first-name"
                        type="text"
                        required
                        value={formState.firstName}
                        onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                        placeholder="e.g. Alex"
                        maxLength={60}
                        autoComplete="given-name"
                        className="w-full px-4 py-3.5 bg-white/5 border border-white/15 rounded-xl font-sans text-sm text-white focus:outline-none focus:border-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#FAF8F5]/60 mb-2" htmlFor="bt-last-name">
                        Last Name *
                      </label>
                      <input
                        id="bt-last-name"
                        type="text"
                        required
                        value={formState.lastName}
                        onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                        placeholder="e.g. Vance"
                        maxLength={60}
                        autoComplete="family-name"
                        className="w-full px-4 py-3.5 bg-white/5 border border-white/15 rounded-xl font-sans text-sm text-white focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Number (Phone is optional) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#FAF8F5]/60 mb-2" htmlFor="bt-email">
                        Work Email *
                      </label>
                      <input
                        id="bt-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        maxLength={200}
                        autoComplete="email"
                        className="w-full px-4 py-3.5 bg-white/5 border border-white/15 rounded-xl font-sans text-sm text-white focus:outline-none focus:border-white transition-colors"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#FAF8F5]/60" htmlFor="bt-phone">
                          Phone Number
                        </label>
                        <span className="text-[10px] font-mono text-[#FAF8F5]/40 uppercase">
                          Optional
                        </span>
                      </div>
                      <input
                        id="bt-phone"
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="Your phone number"
                        maxLength={40}
                        autoComplete="tel"
                        className="w-full px-4 py-3.5 bg-white/5 border border-white/15 rounded-xl font-sans text-sm text-white focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#FAF8F5]/60 mb-2" htmlFor="bt-service">
                        Discipline / Service *
                      </label>
                      <select
                        id="bt-service"
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full px-4 py-3.5 bg-[#0A0A0A] border border-white/15 rounded-xl font-sans text-sm text-white focus:outline-none focus:border-white cursor-pointer transition-colors"
                      >
                        <option value="Website Design">01 Website Design</option>
                        <option value="Social Media">02 Social Media Management</option>
                        <option value="AI Integration">03 AI Integration</option>
                        <option value="Full Partnership">Full Partnership (All 3)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#FAF8F5]/60 mb-2" htmlFor="bt-budget">
                        Estimated Budget Tier *
                      </label>
                      <select
                        id="bt-budget"
                        required
                        value={formState.budget}
                        onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                        className="w-full px-4 py-3.5 bg-[#0A0A0A] border border-white/15 rounded-xl font-sans text-sm text-white focus:outline-none focus:border-white cursor-pointer transition-colors"
                      >
                        <option value="" disabled>Choose…</option>
                        <option value="$10k - $25k">$10k – $25k</option>
                        <option value="$25k - $50k">$25k – $50k</option>
                        <option value="$50k - $100k+">$50k – $100k+</option>
                        <option value="Retainer">Monthly Retainer Partnership</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#FAF8F5]/60 mb-2" htmlFor="bt-message">
                      Project Goals & Context *
                    </label>
                    <textarea
                        id="bt-message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share a link to your current website/brand, timeline, and what success looks like..."
                      maxLength={4000}
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/15 rounded-xl font-sans text-sm text-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" value={formState.website} onChange={(e) => setFormState({ ...formState, website: e.target.value })} className="absolute -left-[9999px] h-0 w-0 opacity-0" />

                  {/* Optional contact consent (never pre-ticked; phone only forwarded when ticked) */}
                  <div className="flex items-start gap-3 pt-1">
                    <input
                      type="checkbox"
                      id="sms-consent-checkbox"
                      checked={formState.smsConsent}
                      onChange={(e) => setFormState({ ...formState, smsConsent: e.target.checked })}
                      className="mt-0.5 w-4 h-4 rounded-xs border-white/30 bg-transparent text-[#0A0A0A] accent-[#FAF8F5] cursor-pointer shrink-0"
                    />
                    <label
                      htmlFor="sms-consent-checkbox"
                      className="text-xs font-sans text-[#FAF8F5]/70 leading-relaxed cursor-pointer select-none"
                    >
                      I agree to be contacted by call, text and email at the details I gave. Message and data rates may apply. Reply STOP to opt out.
                    </label>
                  </div>

                  {error && <p role="alert" className="rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</p>}


                  {/* =========================================================
                      SUBMIT BUTTON WITH BIRD LANDING ON IT
                      ========================================================= */}
                  <div className="pt-2 relative flex flex-col items-center sm:items-start">
                    {/* The Mascot Bird Landing on the Submit Button */}
                    <div
                      className="relative w-full"
                      onMouseEnter={() => setBirdOnButton(true)}
                      onMouseLeave={() => setBirdOnButton(false)}
                    >
                      {/* Animated Landing Bird Mascot */}
                      <motion.div
                        animate={{
                          y: birdOnButton ? -28 : -46,
                          x: birdOnButton ? 12 : -10,
                          scale: birdOnButton ? 1.05 : 0.95,
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="absolute left-6 pointer-events-none z-20 flex items-center gap-2"
                      >
                        <BirdMascot
                          variant={birdOnButton ? 'perched' : 'flight'}
                          className="w-8 h-11 filter drop-shadow-md"
                        />
                        <span className="text-[9px] font-mono tracking-widest uppercase bg-[#0A0A0A] border border-white/20 px-2 py-0.5 rounded-full text-[#FAF8F5]/70">
                          {birdOnButton ? 'Perched on Trigger' : 'Approaching'}
                        </span>
                      </motion.div>

                      {/* Main Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4.5 px-8 rounded-full bg-[#FAF8F5] text-[#0A0A0A] font-sans font-bold text-sm tracking-wide uppercase hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 shadow-xl cursor-pointer disabled:opacity-50"
                        data-cursor="fly"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <span className="inline-block w-4 h-4 border-2 border-[#0A0A0A] border-t-transparent rounded-full animate-spin" />
                            <span>Dispatching Brief...</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span>Dispatch Project Inquiry</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        )}
                      </button>
                    </div>

                    <p className="mt-4 w-full text-xs font-sans text-[#FAF8F5]/60">
                      By submitting you agree to our{' '}
                      <Link to="/terms" className="underline text-white hover:opacity-80">Terms</Link> and{' '}
                      <Link to="/privacy" className="underline text-white hover:opacity-80">Privacy Policy</Link>.
                    </p>

                    <div className="mt-4 flex items-center justify-between w-full text-[11px] font-mono text-[#FAF8F5]/40">
                      <span>WE AIM TO REPLY WITHIN ONE BUSINESS DAY</span>
                    </div>
                  </div>
                </motion.form>
              ) : (
                /* Success Confirmation State */
                <motion.div
                  key="success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-6"
                >
                  <div className="w-20 h-20 mx-auto bg-white/10 border border-white/20 rounded-full flex items-center justify-center">
                    <BirdMascot variant="flight" strokeColor="#FAF8F5" className="w-12 h-12" />
                  </div>

                  <h3 className="font-serif italic text-4xl sm:text-5xl text-white">
                    Flight Initiated.
                  </h3>

                  <p className="font-sans text-sm text-[#FAF8F5]/70 max-w-md mx-auto leading-relaxed">
                    Thank you, {formState.firstName || 'friend'}. Your brief has reached our directors.
                    We will review your inquiry and dispatch next steps to {formState.email || 'your email'} shortly.
                    {formState.phone && formState.smsConsent && (
                      <span className="block mt-2 font-mono text-xs text-emerald-400">
                        ✓ Operational check-in notifications enabled for {formState.phone}.
                      </span>
                    )}
                  </p>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full border border-white/20 text-xs font-mono text-[#FAF8F5] hover:bg-white hover:text-[#0A0A0A] transition-colors cursor-pointer"
                    >
                      ← Submit Another Inbound
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

