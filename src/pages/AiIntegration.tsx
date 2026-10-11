import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';
import { BirdMascot } from '../components/BirdMascot';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';
import confetti from 'canvas-confetti';
import {
  Bot,
  Zap,
  ArrowUpRight,
  Send,
  GitMerge,
  Building2,
  ShoppingBag,
  Briefcase,
  Stethoscope,
  CheckCircle2,
  Activity,
  Terminal,
} from 'lucide-react';

export const AiIntegration: React.FC = () => {
  // Active Simulation Mode
  const [activeSimulation, setActiveSimulation] = useState<'qualify' | 'crm' | 'support' | 'intel'>('qualify');
  const [isSimulating, setIsSimulating] = useState(false);

  // Live Terminal Chat state
  const [chatMessages, setChatMessages] = useState([
    {
      role: 'assistant',
      text: "⚡ BIRD AI ONLINE: I run Big Tech Bird's operations, lead qualification, and 24/7 support. Click any mission chip above or ask me how I integrate into your business!",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Industry Tab Switcher
  const [activeIndustry, setActiveIndustry] = useState<number>(0);

  const triggerSimulation = (mode: 'qualify' | 'crm' | 'support' | 'intel') => {
    setActiveSimulation(mode);
    setIsSimulating(true);
    setIsTyping(true);

    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#E67E22', '#F39C12', '#0A0A0A'],
    });

    let message = '';
    if (mode === 'qualify') {
      message = '🎯 [MISSION: QUALIFY] Enterprise inbound parsed. Firmographic score: 98/100. Budget: $45K+ ARR verified. Executive meeting automatically reserved on CEO Calendly.';
    } else if (mode === 'crm') {
      message = '⚡ [MISSION: CRM AUTOMATION] Lead synced into CRM pipeline. Custom proposal PDF generated. Notification pushed to #deals Slack channel. Execution time: 0.28s.';
    } else if (mode === 'support') {
      message = '💬 [MISSION: 24/7 CONCIERGE] Technical inquiry resolved using trained knowledge embeddings. Zero human touch required. Client satisfaction rating: 5/5.';
    } else {
      message = '📈 [MISSION: BUSINESS INTEL] Weekly telemetry audited: 1,420 conversations summarized. Top buyer objection extracted. Executive growth report dispatched.';
    }

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        { role: 'assistant', text: message },
      ]);
      setIsSimulating(false);
      setIsTyping(false);
    }, 800);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userText = inputValue;
    setInputValue('');
    setChatMessages((prev) => [...prev, { role: 'user', text: userText }]);
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      const lower = userText.toLowerCase();
      if (lower.includes('cost') || lower.includes('pricing') || lower.includes('price')) {
        reply = "✦ Bird AI Deployments start with a 2-week custom sprint: we ingest your company knowledge, connect your API endpoints (CRM, Slack, SMS), and deploy your dedicated agent. Let's build yours!";
      } else if (lower.includes('crm') || lower.includes('hubspot') || lower.includes('salesforce')) {
        reply = "✦ Bird AI is built to connect to CRMs and tools like HubSpot, Salesforce, Notion and Supabase, or to your own database through webhooks. We scope each integration with you first.";
      } else {
        reply = `✦ BIRD AI Execution: Analyzed request "${userText}". We can scope how Bird AI would automate this workflow for your team. Send us a message and we will take it from there.`;
      }

      setChatMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
      setIsTyping(false);
    }, 900);
  };

  // Industries Bird AI deploys into
  const industries = [
    {
      id: 'real-estate',
      title: 'High-Ticket Real Estate & Luxury',
      icon: Building2,
      badge: 'PRE-VETTING & BOOKINGS',
      impact: '100% Leads Responded In < 60s',
      description: 'Bird AI chats with buyers, qualifies net-worth, answers property specs, and locks in private showings automatically.',
      previewMetrics: [
        { label: 'Avg Inbound Response', value: '18 sec' },
        { label: 'Qualified Showings', value: '+340%' },
        { label: 'Human Time Saved', value: '28 hrs/wk' },
      ],
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce & DTC Brands',
      icon: ShoppingBag,
      badge: 'OMNICHANNEL RETENTION',
      impact: '24/7 SMS & WhatsApp Sales',
      description: 'Recovers abandoned carts, tracks shipments, handles returns, and offers personalized VIP recommendations on autopilot.',
      previewMetrics: [
        { label: 'Cart Recovery Lift', value: '+31.4%' },
        { label: 'Ticket Resolution', value: '88% Instant' },
        { label: 'Repeat Purchase Rate', value: '2.4x' },
      ],
    },
    {
      id: 'b2b-saas',
      title: 'B2B Agencies & Software',
      icon: Briefcase,
      badge: 'PIPELINE ACCELERATION',
      impact: 'Zero-Touch Client Onboarding',
      description: 'Collects onboarding assets, spins up client project boards, syncs invoices with Stripe, and updates CRM pipeline stages.',
      previewMetrics: [
        { label: 'Onboarding Velocity', value: '4x Faster' },
        { label: 'Data Accuracy', value: '99.9%' },
        { label: 'Pipeline Velocity', value: '+55%' },
      ],
    },
    {
      id: 'clinical',
      title: 'Medical, Clinics & Local Services',
      icon: Stethoscope,
      badge: 'CALENDAR OPTIMIZATION',
      impact: 'Zero Missed Appointments',
      description: 'Answers patient questions after hours, reschedules cancellations to fill empty slots, and manages SMS check-in reminders.',
      previewMetrics: [
        { label: 'No-Show Rate Drop', value: '-62%' },
        { label: 'After-Hours Bookings', value: '44%' },
        { label: 'Staff Admin Overhead', value: '-50%' },
      ],
    },
  ];

  return (
    <div className="w-full bg-[#FAF8F5] text-[#0A0A0A] overflow-hidden">
      <SEO
        title="Bird AI — Autonomous AI Agent Integration"
        description="Meet Bird AI: our proprietary in-house autonomous agent. We build, train, and deploy custom Bird AI engines for modern businesses."
      />

      {/* =========================================================
          HERO SECTION: MEET BIRD AI (STAR OF THE SHOW)
          ========================================================= */}
      <section className="relative pt-32 md:pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col items-center text-center relative z-10">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#0A0A0A]/15 bg-white/80 shadow-xs mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0A0A0A]">
              PROPRIETARY AUTONOMOUS AGENT
            </span>
          </div>

          {/* Big Editorial Headline */}
          <h1 className="font-serif italic text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.92] text-[#0A0A0A]">
            Meet Bird AI.
          </h1>

          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#0A0A0A]/80 mt-4 max-w-3xl leading-snug">
            The autonomous agent we built to run our own company.
            <br />
            <span className="italic font-normal">Now customized and deployed for your business.</span>
          </p>

          {/* Interactive 3D Mascot Showcase */}
          <div className="mt-12 relative flex flex-col items-center">
            {/* Holographic Radar Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-10 border border-dashed border-amber-500/30 rounded-full pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-20 border border-[#0A0A0A]/5 rounded-full pointer-events-none"
            />

            {/* Mascot Float */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-44 h-56 md:w-56 md:h-72 cursor-pointer group"
              onClick={() => triggerSimulation('qualify')}
              data-cursor="interact"
            >
              <BirdMascot
                variant="perched"
                animated={true}
                className="w-full h-full filter drop-shadow-[0_16px_32px_rgba(230,126,34,0.18)] transition-transform duration-300 group-hover:scale-105"
              />

              {/* Status Badge Pin */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0A0A0A] text-[#FAF8F5] text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full shadow-lg flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                <span>Agent Status: Online</span>
              </div>
            </motion.div>

            {/* Quick Action Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 max-w-2xl">
              <span className="px-3 py-1 bg-white border border-[#0A0A0A]/10 rounded-full text-xs font-mono text-[#0A0A0A]/70 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Custom Trained On Your Data
              </span>
              <span className="px-3 py-1 bg-white border border-[#0A0A0A]/10 rounded-full text-xs font-mono text-[#0A0A0A]/70 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Zero-Touch Operations
              </span>
              <span className="px-3 py-1 bg-white border border-[#0A0A0A]/10 rounded-full text-xs font-mono text-[#0A0A0A]/70 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                WhatsApp · SMS · Web · CRM
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTERACTIVE BIRD AI COMMAND STATION (HANDS-ON SIMULATION)
          ========================================================= */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="bg-[#0A0A0A] text-[#FAF8F5] rounded-3xl p-6 md:p-10 shadow-2xl border border-white/10 relative overflow-hidden">
          {/* Top Bar with Audio Waves & Telemetry */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-400">
                    BIRD AI COMMAND STATION
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-white/10 text-[9px] font-mono text-white/70">
                    v4.2 PROPRIETARY
                  </span>
                </div>
                <p className="text-xs text-[#FAF8F5]/60 font-sans mt-0.5">
                  Click a mission to test Bird AI's live autonomous logic
                </p>
              </div>
            </div>

            {/* Simulated Audio Frequency Visualizer */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">
              <Activity className="w-3.5 h-3.5 text-amber-400" />
              <div className="flex items-end gap-1 h-3.5">
                {[4, 10, 14, 8, 12, 6, 14, 9].map((height, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: isSimulating || isTyping ? [3, height, 4] : [2, 5, 2] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.08 }}
                    className="w-1 bg-amber-400 rounded-full"
                  />
                ))}
              </div>
              <span className="text-[10px] font-mono text-[#FAF8F5]/60 pl-1">
                {isSimulating || isTyping ? 'PROCESSING' : 'LISTENING'}
              </span>
            </div>
          </div>

          {/* Interactive Mission Buttons */}
          <div className="py-6 flex flex-wrap gap-2.5">
            <button
              onClick={() => triggerSimulation('qualify')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-2 ${
                activeSimulation === 'qualify'
                  ? 'bg-amber-500 text-black shadow-md font-bold'
                  : 'bg-white/10 text-[#FAF8F5] hover:bg-white/15'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              01 Qualify $50K Lead
            </button>
            <button
              onClick={() => triggerSimulation('crm')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-2 ${
                activeSimulation === 'crm'
                  ? 'bg-amber-500 text-black shadow-md font-bold'
                  : 'bg-white/10 text-[#FAF8F5] hover:bg-white/15'
              }`}
            >
              <GitMerge className="w-3.5 h-3.5" />
              02 Automate CRM & Operations
            </button>
            <button
              onClick={() => triggerSimulation('support')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-2 ${
                activeSimulation === 'support'
                  ? 'bg-amber-500 text-black shadow-md font-bold'
                  : 'bg-white/10 text-[#FAF8F5] hover:bg-white/15'
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              03 24/7 AI Concierge
            </button>
            <button
              onClick={() => triggerSimulation('intel')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-2 ${
                activeSimulation === 'intel'
                  ? 'bg-amber-500 text-black shadow-md font-bold'
                  : 'bg-white/10 text-[#FAF8F5] hover:bg-white/15'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              04 Business Intel Digest
            </button>
          </div>

          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-white/40">Interactive demo: scripted examples of what Bird AI does, not a live model.</p>

          {/* Terminal Console Output */}
          <div className="bg-black/60 rounded-2xl border border-white/10 p-4 md:p-6 min-h-[220px] max-h-[300px] overflow-y-auto space-y-3 font-mono text-xs">
            <AnimatePresence>
              {chatMessages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 leading-relaxed ${
                    msg.role === 'user' ? 'text-amber-300' : 'text-[#FAF8F5]/90'
                  }`}
                >
                  <span className="text-white/40 select-none">
                    {msg.role === 'user' ? 'YOU >' : 'BIRD >'}
                  </span>
                  <span>{msg.text}</span>
                </motion.div>
              ))}
            </AnimatePresence>
            {isTyping && (
              <div className="flex items-center gap-2 text-amber-400 text-xs">
                <span>BIRD &gt;</span>
                <span className="animate-pulse">Thinking and querying tool pipelines...</span>
              </div>
            )}
          </div>

          {/* User Input Bar */}
          <form onSubmit={handleSendMessage} className="mt-4 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask Bird AI anything (e.g. 'Can you automate my WhatsApp leads?')"
              className="flex-1 bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-xs font-mono text-[#FAF8F5] placeholder:text-white/40 focus:outline-none focus:border-amber-400"
            />
            <button
              type="submit"
              disabled={isTyping}
              className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-black rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
            >
              Send
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </section>

      {/* =========================================================
          HOW BIRD AI INTEGRATES INTO ANY BUSINESS IDEA
          ========================================================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#0A0A0A]/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/50 mb-2 block">
              ADAPTABLE INTELLIGENCE
            </span>
            <h2 className="font-serif italic text-4xl md:text-6xl text-[#0A0A0A] leading-tight">
              One agent. Infinite business models.
            </h2>
          </div>
          <p className="text-sm font-sans text-[#0A0A0A]/70 max-w-md">
            We don't hand you generic ChatGPT wrappers. We configure Bird AI's memory, tools, and API webhooks specifically around your business bottlenecks.
          </p>
        </div>

        {/* Industry Interactive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            const isSelected = activeIndustry === i;
            return (
              <TiltCard
                key={ind.id}
                onClick={() => setActiveIndustry(i)}
                maxTilt={8}
                className={`p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#0A0A0A] shadow-xl'
                    : 'bg-white/70 border-[#0A0A0A]/10 hover:border-[#0A0A0A]/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-[#0A0A0A] text-[#FAF8F5]' : 'bg-[#FAF8F5] text-[#0A0A0A]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider font-bold uppercase text-[#0A0A0A]/50">
                      {ind.badge}
                    </span>
                  </div>

                  <h3 className="font-serif italic text-2xl text-[#0A0A0A] mb-2">{ind.title}</h3>
                  <p className="text-xs font-sans text-[#0A0A0A]/70 leading-relaxed mb-6">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0A0A0A]/10 space-y-2">
                  <div className="text-[10px] font-mono uppercase text-[#0A0A0A]/50">Key Metric</div>
                  <div className="font-mono text-sm font-bold text-amber-600">{ind.impact}</div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Selected Industry Deep-Dive Metric Preview */}
        <div className="mt-8 bg-white border border-[#0A0A0A]/10 rounded-3xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif italic text-2xl text-[#0A0A0A]">
                  {industries[activeIndustry].title} Automation Architecture
                </h4>
                <p className="text-xs font-mono text-[#0A0A0A]/60 mt-0.5">
                  Pre-configured pipeline ready to connect to your domain in 14 days
                </p>
              </div>
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-3 gap-6 text-center">
              {industries[activeIndustry].previewMetrics.map((met, mIdx) => (
                <div key={mIdx} className="px-4 py-2 rounded-xl bg-[#FAF8F5] border border-[#0A0A0A]/5">
                  <div className="font-serif text-2xl font-bold text-[#0A0A0A]">{met.value}</div>
                  <div className="text-[10px] font-mono text-[#0A0A0A]/60 mt-0.5">{met.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LIVE ANIMATED DATA FLOW DIAGRAM (MOTION GRAPHICS PIPELINE)
          ========================================================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#0A0A0A]/10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0A0A0A]/15 bg-white text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/70 mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            <span>REAL-TIME STREAM ARCHITECTURE</span>
          </div>
          <h2 className="font-serif italic text-4xl md:text-5xl text-[#0A0A0A]">
            Zero friction between inquiry and revenue.
          </h2>
          <p className="text-sm font-sans text-[#0A0A0A]/70 mt-3 max-w-lg mx-auto">
            Click any node below to inspect live packet payloads and autonomous routing rules.
          </p>
        </div>

        {/* Animated Conduit Line (Desktop SVG) */}
        <div className="relative mb-6 hidden md:block">
          <svg className="w-full h-8 overflow-visible" viewBox="0 0 1000 32" preserveAspectRatio="none">
            {/* Background conduit pipe */}
            <line x1="125" y1="16" x2="875" y2="16" stroke="#0A0A0A" strokeWidth="2" strokeDasharray="6 6" opacity="0.2" />
            {/* Animated glowing energy packets travelling left to right */}
            <motion.line
              x1="125"
              y1="16"
              x2="875"
              y2="16"
              stroke="#E67E22"
              strokeWidth="3"
              strokeDasharray="20 180"
              strokeLinecap="round"
              animate={{ strokeDashoffset: [-200, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            {/* Intermediate node pins */}
            <circle cx="125" cy="16" r="5" fill="#0A0A0A" />
            <circle cx="375" cy="16" r="6" fill="#E67E22" />
            <circle cx="625" cy="16" r="5" fill="#0A0A0A" />
            <circle cx="875" cy="16" r="5" fill="#10B981" />
          </svg>
        </div>

        {/* Visual Pipeline Flow Cards with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
          <TiltCard
            maxTilt={8}
            className="p-6 bg-white border border-[#0A0A0A]/15 rounded-3xl flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-all"
            glowColor="rgba(10,10,10,0.06)"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#0A0A0A]/10 flex items-center justify-center text-xs font-mono font-bold text-[#0A0A0A]">
                  01
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#0A0A0A]/50 bg-[#FAF8F5] px-2 py-0.5 rounded-full">
                  CAPTURE
                </span>
              </div>
              <h4 className="font-serif italic text-2xl text-[#0A0A0A] mb-2">Inbound Touchpoint</h4>
              <p className="text-xs font-sans text-[#0A0A0A]/70 leading-relaxed">
                Lead submits website inquiry, sends WhatsApp audio message, or replies to automated SMS.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#0A0A0A]/10 text-[10px] font-mono text-[#0A0A0A]/60 flex items-center justify-between">
              <span>LATENCY: 12ms</span>
              <span className="text-emerald-600 font-bold">READY</span>
            </div>
          </TiltCard>

          <TiltCard
            maxTilt={10}
            className="p-6 bg-amber-500/10 border-2 border-amber-500/40 rounded-3xl flex flex-col justify-between group cursor-pointer shadow-lg hover:shadow-2xl transition-all"
            glowColor="rgba(230,126,34,0.18)"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-amber-500 text-black flex items-center justify-center text-xs font-mono font-bold shadow-sm">
                  02
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded-full font-bold">
                  BIRD AI CORE
                </span>
              </div>
              <h4 className="font-serif italic text-2xl text-[#0A0A0A] mb-2">Neural Extraction</h4>
              <p className="text-xs font-sans text-[#0A0A0A]/80 leading-relaxed">
                Understands intent, scores budget tier, matches calendar availability, and queries custom vector database.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-amber-500/20 text-[10px] font-mono text-amber-900 font-bold flex items-center justify-between">
              <span>TOKEN COMPUTE: 420ms</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                ACTIVE
              </span>
            </div>
          </TiltCard>

          <TiltCard
            maxTilt={8}
            className="p-6 bg-white border border-[#0A0A0A]/15 rounded-3xl flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-all"
            glowColor="rgba(10,10,10,0.06)"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#0A0A0A]/10 flex items-center justify-center text-xs font-mono font-bold text-[#0A0A0A]">
                  03
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#0A0A0A]/50 bg-[#FAF8F5] px-2 py-0.5 rounded-full">
                  ACTION
                </span>
              </div>
              <h4 className="font-serif italic text-2xl text-[#0A0A0A] mb-2">Tool Execution</h4>
              <p className="text-xs font-sans text-[#0A0A0A]/70 leading-relaxed">
                Auto-syncs HubSpot/Salesforce, creates Stripe invoices, pings Slack channel, and triggers Google Meet invites.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#0A0A0A]/10 text-[10px] font-mono text-[#0A0A0A]/60 flex items-center justify-between">
              <span>API WEBHOOKS: 5</span>
              <span className="text-emerald-600 font-bold">200 OK</span>
            </div>
          </TiltCard>

          <TiltCard
            maxTilt={10}
            className="p-6 bg-[#0A0A0A] text-[#FAF8F5] border border-white/20 rounded-3xl flex flex-col justify-between group cursor-pointer shadow-xl hover:shadow-2xl transition-all"
            glowColor="rgba(255,255,255,0.12)"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-xs font-mono font-bold">
                  04
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-white/10 px-2 py-0.5 rounded-full font-bold">
                  REVENUE
                </span>
              </div>
              <h4 className="font-serif italic text-2xl text-white mb-2">Deal Won</h4>
              <p className="text-xs font-sans text-[#FAF8F5]/70 leading-relaxed">
                Meeting scheduled or contract signed while your human sales team is asleep. Zero manual data entry.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-[10px] font-mono text-emerald-400 font-bold flex items-center justify-between">
              <span>HUMAN EFFORT: 0%</span>
              <span className="text-white">CONVERTED</span>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* =========================================================
          CALL TO ACTION
          ========================================================= */}
      <section className="bg-[#0A0A0A] text-[#FAF8F5] py-28 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
          <div className="w-20 h-28 mb-6">
            <BirdMascot variant="perched" className="w-full h-full" />
          </div>

          <h2 className="font-serif italic text-5xl sm:text-6xl md:text-7xl leading-tight">
            Ready to deploy Bird AI into your business?
          </h2>

          <p className="font-sans text-base text-[#FAF8F5]/70 max-w-xl mt-6 leading-relaxed">
            Tell us your operational bottlenecks. In two weeks, your custom Bird AI agent will be running circles around your competition.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton to="/contact" variant="beige" cursorText="deploy">
              Deploy Your Bird AI Agent
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </MagneticButton>
            <MagneticButton to="/work" variant="outline-white" cursorText="view">
              Explore Our Work
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};
