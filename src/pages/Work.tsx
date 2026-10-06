import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';
import { BirdMascot } from '../components/BirdMascot';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';
import confetti from 'canvas-confetti';
import { ArrowUpRight, X, CheckCircle2, Eye } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Websites' | 'Social' | 'AI Integration';
  year: string;
  tagline: string;
  heroStat: string;
  statLabel: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
}

export const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Websites' | 'Social' | 'AI Integration'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'aetheria',
      title: 'Aetheria Labs Flagship',
      client: 'Aetheria Robotics',
      category: 'Websites',
      year: '2026',
      tagline: 'Art-directed 60fps digital flagship with headless CMS.',
      heroStat: '100 / 100',
      statLabel: 'Lighthouse Performance Score',
      description:
        'A minimalist, ultra-high-performance web presence engineered for an autonomous humanoid robotics firm. Fluid bezier transitions, zero layout shift, and instant edge CDN routing.',
      challenge:
        'The client needed to communicate complex engineering without feeling dry or overwhelming, while maintaining lightning speed for investor presentations globally.',
      solution:
        'We devised an editorial serif aesthetic paired with subtle line-art schematics, custom WebGL canvas simulations, and instantaneous client-side page transitions.',
      results: [
        '340% increase in investor deck inbound queries',
        'Average session duration elevated from 42s to 3m 15s',
        'Awarded Site of the Day honours across design communities',
      ],
    },
    {
      id: 'hyperscale',
      title: 'HyperScale Brand Velocity',
      client: 'HyperScale Capital',
      category: 'Social',
      year: '2026',
      tagline: 'Viral organic reach engine generating 42M+ impressions.',
      heroStat: '42.8M',
      statLabel: 'Verified Organic Impressions',
      description:
        'A comprehensive content creation and algorithmic distribution machine across X, LinkedIn, and TikTok. Zero paid ad spend, purely high-taste editorial and short-form storytelling.',
      challenge:
        'Traditional B2B venture capital content was dull, corporate, and ignored by founders in competitive deal heats.',
      solution:
        'We designed a sharp, provocative thought leadership strategy, producing weekly cinematic video breakdowns and viral carousels that made founders crave partnership.',
      results: [
        '84,000+ new verified founder followers in 90 days',
        'Deal-flow pipeline surged by 210% organically',
        'Featured in industry media as the standout VC brand of the year',
      ],
    },
    {
      id: 'chronos',
      title: 'Chronos Autonomous Engine',
      client: 'Chronos Logistics',
      category: 'AI Integration',
      year: '2026',
      tagline: 'End-to-end inbound qualification & dispatch AI orchestrator.',
      heroStat: '94%',
      statLabel: 'Manual Workflow Hours Eliminated',
      description:
        'A bespoke multi-agent AI system directly integrated into HubSpot and internal ERP, automating freight quotation, lead qualification, and exception escalation.',
      challenge:
        'Inbound quotation took an average of 4.2 hours per inquiry, causing 35% of high-margin contracts to leak to competitors.',
      solution:
        'We deployed a proprietary neural orchestrator with vector memory that evaluates freight documents, calculates margin tiers, and auto-dispatches agreements in under 30 seconds.',
      results: [
        'Average response time reduced from 4.2 hours to 28 seconds',
        'Gross closed deals climbed by $4.2M in first quarter post-launch',
        'Zero human error in compliance documentation',
      ],
    },
    {
      id: 'komorebi',
      title: 'Komorebi Atelier',
      client: 'Komorebi Objects',
      category: 'Websites',
      year: '2025',
      tagline: 'High-luxury e-commerce flagship with tactile physics.',
      heroStat: '4.8x',
      statLabel: 'Mobile Conversion Rate Surge',
      description:
        'A museum-grade digital catalog and checkout experience for artisanal ceramicists and architects. Tactile cursor physics, custom sound design, and sub-second checkout.',
      challenge:
        'High return rates and cart abandonment on mobile due to generic shop templates failing to convey physical material texture.',
      solution:
        'We photographed products in high dynamic range and built an interactive 360-degree light study inspector with tactile haptic feedback on scroll.',
      results: [
        'Average order value jumped from $140 to $390',
        'Mobile cart abandonment dropped by 62%',
        'Recognized with eCommerce Design Excellence awards',
      ],
    },
    {
      id: 'veloce',
      title: 'Veloce Launch Cadence',
      client: 'Veloce EV',
      category: 'Social',
      year: '2025',
      tagline: 'Exponential social pre-order blitz for luxury EV.',
      heroStat: '18,400',
      statLabel: 'Pre-Orders Captured in 72 Hours',
      description:
        'A teaser campaign orchestrated with micro-drops, countdown mechanics, and community-driven easter eggs that ignited massive viral momentum.',
      challenge:
        'Breaking through the saturated electric vehicle news cycle without massive traditional Super Bowl ad budgets.',
      solution:
        'We built an underground referral club with cryptographic invitations, driving exclusive teaser drops that went viral across design & tech feeds.',
      results: [
        '100% pre-order reservation sellout in under 72 hours',
        'Over 1.2M user-generated shares across social channels',
        'Acquisition cost per pre-order was $4.10 vs industry avg of $180',
      ],
    },
    {
      id: 'neurahealth',
      title: 'NeuraHealth Predictive Intelligence',
      client: 'NeuraHealth Inc',
      category: 'AI Integration',
      year: '2025',
      tagline: 'Predictive clinical patient triage & data synthesis agent.',
      heroStat: '99.9%',
      statLabel: 'Compliance & Accuracy Score',
      description:
        'An enterprise-grade, HIPAA-compliant AI agent that digests patient symptom logs and medical histories to generate structured clinical briefings for physicians.',
      challenge:
        'Physicians spent 45% of consultation time typing notes into EHR systems rather than speaking directly with patients.',
      solution:
        'We integrated real-time speech-to-text neural summarization with strict medical terminology validators, generating flawless medical notes automatically.',
      results: [
        'Physician administrative time decreased by 2.5 hours daily',
        'Patient satisfaction scores increased to 98%',
        'Expanded from 1 pilot clinic to 24 hospital networks',
      ],
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="w-full bg-[#FAF8F5] text-[#0A0A0A] overflow-hidden">
      <SEO
        title="Selected Work — Big Tech Bird"
        description="Inspect our archive of award-winning website flagships, viral social engines, and autonomous AI integrations."
      />

      {/* =========================================================
          HERO SECTION (Beige Background)
          ========================================================= */}
      <section className="relative pt-32 md:pt-44 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#0A0A0A]/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0A0A0A]/20 bg-white/70 text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/70 mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>CASE ARCHIVE // 2025 - 2026 • 6 VERIFIED FLAGSHIPS</span>
            </div>
            <h1 className="font-serif italic text-5xl sm:text-7xl md:text-8xl leading-[0.95] text-[#0A0A0A] tracking-tight">
              Selected Work.
            </h1>
            <p className="font-sans text-sm sm:text-base text-[#0A0A0A]/70 mt-3 max-w-xl">
              From ultra-fast robotic flagships to autonomous AI dispatch engines and multi-million-view social campaigns.
            </p>
          </div>

          {/* Filter Pills with kinetic active indicator */}
          <div className="flex flex-wrap gap-2">
            {(['All', 'Websites', 'Social', 'AI Integration'] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer relative ${
                  activeFilter === filter
                    ? 'bg-[#0A0A0A] text-[#FAF8F5] font-bold shadow-lg scale-105'
                    : 'bg-white border border-[#0A0A0A]/20 text-[#0A0A0A]/80 hover:border-[#0A0A0A] hover:text-[#0A0A0A]'
                }`}
              >
                {filter}
                {activeFilter === filter && (
                  <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-amber-400" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECTS GRID (3D Tilt Cards with Kinetic Hover Reveal)
          ========================================================= */}
      <section className="py-12 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.id}
              maxTilt={8}
              onClick={() => setSelectedProject(project)}
              className="bg-white border border-[#0A0A0A]/15 rounded-3xl p-7 flex flex-col justify-between hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden group"
              glowColor="rgba(230,126,34,0.12)"
              dataCursor="view"
            >
              <div>
                {/* Card Top Details */}
                <div className="flex items-center justify-between pb-4 border-b border-[#0A0A0A]/10 text-xs font-mono">
                  <span className="text-[#0A0A0A]/50 font-bold tracking-wider">{project.client}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FAF8F5] text-[#0A0A0A] border border-[#0A0A0A]/10 font-bold text-[10px] uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Decorative Visual Preview with Hover Reveal & CRT Grid */}
                <div className="my-6 h-52 bg-[#FAF8F5] rounded-2xl border border-[#0A0A0A]/10 p-5 relative overflow-hidden flex flex-col justify-between group-hover:bg-[#0A0A0A] transition-colors duration-500">
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] group-hover:bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-[10px] font-mono text-[#0A0A0A]/50 group-hover:text-[#FAF8F5]/60 transition-colors">
                      {project.year} ARCHIVE
                    </span>
                    <BirdMascot
                      variant="flight"
                      strokeColor="#0A0A0A"
                      className="w-5 h-5 text-[#0A0A0A] group-hover:text-[#FAF8F5] transition-colors group-hover:scale-110"
                    />
                  </div>

                  <div className="text-center py-2 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="text-4xl font-serif italic font-bold text-[#0A0A0A] group-hover:text-amber-400 transition-colors"
                    >
                      {project.heroStat}
                    </motion.div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#0A0A0A]/60 group-hover:text-[#FAF8F5]/70 transition-colors mt-1 flex items-center justify-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping group-hover:bg-amber-400" />
                      {project.statLabel}
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-right text-[#0A0A0A]/50 group-hover:text-[#FAF8F5]/70 transition-colors flex items-center justify-end gap-1 relative z-10">
                    <Eye className="w-3 h-3" />
                    <span>INSPECT BLUEPRINT →</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="font-serif italic text-3xl text-[#0A0A0A] group-hover:translate-x-1 transition-transform">
                    {project.title}
                  </h3>
                  <p className="text-xs font-sans text-[#0A0A0A]/70 mt-3 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Bottom Card Bar */}
              <div className="mt-8 pt-4 border-t border-[#0A0A0A]/10 flex items-center justify-between text-xs font-mono text-[#0A0A0A]/60">
                <span className="group-hover:text-[#0A0A0A] font-bold transition-colors">INSPECT CASE STUDY</span>
                <div className="w-7 h-7 rounded-full bg-[#FAF8F5] flex items-center justify-center group-hover:bg-[#0A0A0A] group-hover:text-[#FAF8F5] transition-colors shadow-xs">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* =========================================================
          INTERACTIVE CASE STUDY DETAIL DRAWER / MODAL
          ========================================================= */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9990] bg-[#0A0A0A]/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FAF8F5] text-[#0A0A0A] border-2 border-[#0A0A0A] rounded-3xl p-6 md:p-12 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white border border-[#0A0A0A]/20 flex items-center justify-center hover:bg-[#0A0A0A] hover:text-[#FAF8F5] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Case Study Header */}
              <div className="pb-6 border-b border-[#0A0A0A]/15">
                <div className="flex items-center gap-3 text-xs font-mono text-[#0A0A0A]/60 mb-2">
                  <span>{selectedProject.client}</span>
                  <span>•</span>
                  <span>{selectedProject.category}</span>
                  <span>•</span>
                  <span>{selectedProject.year}</span>
                </div>
                <h2 className="font-serif italic text-4xl sm:text-5xl text-[#0A0A0A]">
                  {selectedProject.title}
                </h2>
                <p className="text-sm font-sans text-[#0A0A0A]/80 mt-3">
                  {selectedProject.description}
                </p>
              </div>

              {/* Stat highlight banner */}
              <div className="my-8 bg-white border border-[#0A0A0A]/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#0A0A0A]/50">
                    Primary Key Metric
                  </div>
                  <div className="font-serif italic text-4xl sm:text-5xl font-bold text-[#0A0A0A] mt-1">
                    {selectedProject.heroStat}
                  </div>
                </div>
                <div className="text-xs font-mono sm:text-right text-[#0A0A0A]/70 max-w-xs">
                  {selectedProject.statLabel}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-6 text-sm font-sans">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-[#0A0A0A]/50 mb-2">
                    The Strategic Bottleneck
                  </h4>
                  <p className="text-[#0A0A0A]/80 leading-relaxed bg-[#F0EAE1]/60 p-4 rounded-xl border border-[#0A0A0A]/10">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-[#0A0A0A]/50 mb-2">
                    Our Bespoke Execution
                  </h4>
                  <p className="text-[#0A0A0A]/80 leading-relaxed bg-[#F0EAE1]/60 p-4 rounded-xl border border-[#0A0A0A]/10">
                    {selectedProject.solution}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-[#0A0A0A]/50 mb-3">
                    Quantified Outcomes
                  </h4>
                  <ul className="space-y-2 font-mono text-xs">
                    {selectedProject.results.map((res, rIdx) => (
                      <li key={rIdx} className="flex items-center gap-2 text-[#0A0A0A]">
                        <CheckCircle2 className="w-4 h-4 text-[#0A0A0A]" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#0A0A0A]/15 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono text-[#0A0A0A]/50">
                  Ready for similar transformative outcomes?
                </span>
                <MagneticButton
                  to="/contact"
                  variant="black"
                  onClick={() => {
                    confetti({
                      particleCount: 50,
                      spread: 60,
                      origin: { y: 0.7 },
                      colors: ['#E67E22', '#F39C12', '#0A0A0A'],
                    });
                    setSelectedProject(null);
                  }}
                >
                  Start a Similar Project
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </MagneticButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          BOTTOM CALL TO ACTION (Black Background)
          ========================================================= */}
      <section className="bg-[#0A0A0A] text-[#FAF8F5] py-24 px-6 md:px-12 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-12 h-12 mx-auto mb-4">
            <BirdMascot variant="flight" strokeColor="#FAF8F5" className="w-full h-full" />
          </div>
          <h2 className="font-serif italic text-4xl sm:text-6xl text-white">
            Have a project in mind? Let's engineer it.
          </h2>
          <p className="text-sm font-sans text-[#FAF8F5]/60 max-w-md mx-auto mt-4">
            We partner with visionary founders and ambitious enterprises globally.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <MagneticButton to="/contact" variant="beige" cursorText="talk">
              Initiate Project Discussion
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

