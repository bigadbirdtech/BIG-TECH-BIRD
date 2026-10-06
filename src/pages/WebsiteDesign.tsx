import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { BirdMascot } from '../components/BirdMascot';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';
import {
  Monitor,
  Smartphone,
  Zap,
  Search,
  Database,
  Palette,
  CheckCircle2,
  ArrowUpRight,
  Layers,
} from 'lucide-react';

export const WebsiteDesign: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [wireframeManualProgress, setWireframeManualProgress] = useState(0.85);

  // Before & After draggable comparison slider state
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const comparisonRef = useRef<HTMLDivElement>(null);

  const handleComparisonMove = (clientX: number) => {
    if (!comparisonRef.current) return;
    const rect = comparisonRef.current.getBoundingClientRect();
    const position = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  useEffect(() => {
    const handleGlobalMove = (e: MouseEvent) => {
      if (isDragging) {
        handleComparisonMove(e.clientX);
      }
    };
    const handleGlobalTouch = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) {
        handleComparisonMove(e.touches[0].clientX);
      }
    };
    const handleGlobalUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleGlobalMove);
      window.addEventListener('mouseup', handleGlobalUp);
      window.addEventListener('touchmove', handleGlobalTouch);
      window.addEventListener('touchend', handleGlobalUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleGlobalMove);
      window.removeEventListener('mouseup', handleGlobalUp);
      window.removeEventListener('touchmove', handleGlobalTouch);
      window.removeEventListener('touchend', handleGlobalUp);
    };
  }, [isDragging]);

  // What's included feature cards
  const features = [
    {
      icon: Palette,
      title: 'Bespoke UX & Editorial UI',
      desc: 'No templates, ever. Every layout is art-directed with custom typographic scales, generous negative space, and custom vector icons.',
      tag: 'CRAFT',
    },
    {
      icon: Zap,
      title: 'Sub-Second Speed (100 Lighthouse)',
      desc: 'Optimized server-side rendering, intelligent asset compression, lazy loading, and edge caching for instant time-to-first-byte.',
      tag: 'PERFORMANCE',
    },
    {
      icon: Smartphone,
      title: 'Adaptive Multi-Device Engineering',
      desc: 'Responsive layouts built mobile-first, ensuring flawless interaction physics on desktop 4K, iPad touch, and mobile screens.',
      tag: 'RESPONSIVE',
    },
    {
      icon: Search,
      title: 'Dominant Technical SEO',
      desc: 'Schema.org JSON-LD microdata, semantic HTML5 hierarchy, OpenGraph metadata, and canonical routing that search engines reward.',
      tag: 'VISIBILITY',
    },
    {
      icon: Database,
      title: 'Headless CMS Architecture',
      desc: 'Empower your marketing team to edit copy and publish case studies in seconds with Sanity, Strapi, or Contentful.',
      tag: 'CONTROL',
    },
    {
      icon: Layers,
      title: 'Fluid 60fps Physics & Motion',
      desc: 'Velvety smooth scrolling with Lenis, GSAP motion curves, and non-blocking SVG transitions that mesmerize without lagging.',
      tag: 'MOTION',
    },
  ];

  // Packages / Process Tiers
  const packages = [
    {
      name: 'The Flagship',
      tagline: 'Ideal for VC-backed startups and modern brands looking to establish market dominance.',
      timeline: '3 - 4 Weeks',
      deliverables: [
        '5 - 7 Bespoke High-Impact Pages',
        'Framer / Next.js / Vite Custom Code',
        'Custom Micro-Interactions & GSAP Animations',
        'Full Technical SEO & Analytics Setup',
        'CMS Integration for Instant Publishing',
      ],
      featured: false,
    },
    {
      name: 'The Powerhouse',
      tagline: 'Our signature full-stack experience with custom 3D / WebGL canvas and interactive toolings.',
      timeline: '5 - 7 Weeks',
      deliverables: [
        '10+ Art-Directed Responsive Pages',
        'Custom Inline Mascot & WebGL Graphics',
        'Interactive Product Calculators & Funnels',
        'Advanced Conversion Rate Optimization (CRO)',
        '30-Day Post-Launch Growth Warranty',
      ],
      featured: true,
    },
    {
      name: 'Growth Retainer',
      tagline: 'Ongoing design engineering, AB testing, and iterative feature development for scale.',
      timeline: 'Quarterly',
      deliverables: [
        'Dedicated Senior Creative Technologist',
        'Continuous Landing Page Experiments',
        'Rapid Feature Turnaround (< 48 hrs)',
        'Quarterly UX Audits & Benchmarking',
        'Direct Slack & Asana Channel Access',
      ],
      featured: false,
    },
  ];

  return (
    <div ref={containerRef} className="w-full bg-[#FAF8F5] text-[#0A0A0A] overflow-hidden">
      <SEO
        title="Website Design — Award-Level Web Engineering"
        description="Bespoke websites designed for high conversion, 60fps interaction, and undeniable cultural presence."
      />

      {/* =========================================================
          HERO SECTION: BIRD PERCHED ON BROWSER + WIREFRAME DRAW
          ========================================================= */}
      <section className="relative pt-32 md:pt-44 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0A0A0A]/20 bg-white/50 text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/70 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0A0A0A]" />
            <span>DISCIPLINE 01 • WEBSITE DESIGN</span>
          </div>

          <h1 className="font-serif italic text-5xl sm:text-7xl md:text-8xl leading-[0.95] text-[#0A0A0A] tracking-tight">
            Websites that feel alive and convert like clockwork.
          </h1>

          <p className="font-sans text-base md:text-lg text-[#0A0A0A]/70 max-w-2xl mx-auto mt-6 leading-relaxed">
            We reject the template era. Every project we engineer combines editorial typography,
            sub-second performance, and fluid interaction physics to command attention.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <MagneticButton to="/contact" variant="black" cursorText="build">
              Book Website Project
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </MagneticButton>
            <MagneticButton to="/work" variant="outline" cursorText="view">
              View Live Case Studies
            </MagneticButton>
          </div>
        </div>

        {/* =========================================================
            BROWSER FRAME WITH BIRD LANDING & WIREFRAME FILLING IN
            ========================================================= */}
        <div className="relative mt-8 max-w-5xl mx-auto">
          {/* Bird perched on the top-left of the browser window frame */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="absolute -top-12 sm:-top-14 left-8 sm:left-14 z-30 flex items-center gap-2"
          >
            <BirdMascot
              variant="perched"
              className="w-14 h-18 sm:w-16 sm:h-22 filter drop-shadow-md"
            />
            <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest uppercase bg-white border border-[#0A0A0A]/10 px-2 py-0.5 rounded-full shadow-xs">
              Mascot Live Wireframe
            </span>
          </motion.div>

          {/* Browser Window Chrome */}
          <div className="bg-white border-2 border-[#0A0A0A] rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden">
            {/* Browser Header Bar */}
            <div className="bg-[#FAF8F5] border-b-2 border-[#0A0A0A] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#0A0A0A]" />
                <div className="w-3 h-3 rounded-full border border-[#0A0A0A]" />
                <div className="w-3 h-3 rounded-full border border-[#0A0A0A]" />
              </div>

              {/* Address bar */}
              <div className="flex items-center gap-2 bg-white px-4 py-1 rounded-full border border-[#0A0A0A]/20 text-xs font-mono text-[#0A0A0A]/70 max-w-sm w-full mx-4 truncate">
                <span className="text-[#0A0A0A]">https://</span>
                <span className="text-[#0A0A0A] font-semibold">bigadbird.com/</span>
                <span className="text-[#0A0A0A]/50">live-preview</span>
              </div>

              {/* Interactive wireframe fill slider control */}
              <div className="flex items-center gap-2">
                <span className="hidden md:inline-block text-[10px] font-mono uppercase text-[#0A0A0A]/50">
                  Wireframe Fill:
                </span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={wireframeManualProgress}
                  onChange={(e) => setWireframeManualProgress(parseFloat(e.target.value))}
                  className="w-16 sm:w-24 accent-[#0A0A0A] cursor-pointer"
                  title="Adjust Wireframe to Polished state"
                />
              </div>
            </div>

            {/* Browser Content Area: Dynamic Wireframe to Polished State */}
            <div className="p-6 md:p-12 bg-white min-h-[460px] flex flex-col justify-between relative overflow-hidden">
              {/* Wireframe Grid SVG Overlay showing stroke drawing */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="smallGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                    <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#0A0A0A" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#smallGrid)" />
              </svg>

              {/* Top Navigation Mockup inside browser */}
              <div className="flex items-center justify-between pb-6 border-b border-[#0A0A0A]/10 relative z-10">
                <div className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-sm border-2 border-[#0A0A0A] flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: wireframeManualProgress > 0.5 ? '#0A0A0A' : 'transparent',
                    }}
                  >
                    <BirdMascot
                      variant="perched"
                      strokeColor={wireframeManualProgress > 0.5 ? '#FAF8F5' : '#0A0A0A'}
                      className="w-5 h-5"
                    />
                  </div>
                  <div
                    className="font-serif italic font-bold text-lg transition-all"
                    style={{ opacity: wireframeManualProgress > 0.3 ? 1 : 0.4 }}
                  >
                    Vanguard Digital
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono">
                  <span style={{ opacity: wireframeManualProgress > 0.4 ? 1 : 0.3 }}>Overview</span>
                  <span style={{ opacity: wireframeManualProgress > 0.6 ? 1 : 0.3 }}>Index</span>
                  <span
                    className="px-3 py-1 rounded-full border border-[#0A0A0A] text-[10px]"
                    style={{
                      backgroundColor: wireframeManualProgress > 0.7 ? '#0A0A0A' : 'transparent',
                      color: wireframeManualProgress > 0.7 ? '#FAF8F5' : '#0A0A0A',
                    }}
                  >
                    Launch 2026
                  </span>
                </div>
              </div>

              {/* Main Content inside browser mockup */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-8 relative z-10 items-center">
                <div className="md:col-span-7 space-y-4">
                  <div
                    className="h-2 w-24 bg-[#0A0A0A] rounded-xs transition-all"
                    style={{ opacity: wireframeManualProgress > 0.2 ? 1 : 0.3 }}
                  />
                  <h2
                    className="font-serif italic text-3xl sm:text-5xl text-[#0A0A0A] transition-all duration-300"
                    style={{
                      filter: wireframeManualProgress < 0.3 ? 'blur(1px)' : 'none',
                    }}
                  >
                    Architected for maximum clarity & conversion.
                  </h2>
                  <p
                    className="text-xs sm:text-sm font-sans text-[#0A0A0A]/70 leading-relaxed transition-opacity duration-300"
                    style={{ opacity: wireframeManualProgress > 0.4 ? 1 : 0.3 }}
                  >
                    This is how your brand presents to the world: pristine typography, responsive spatial rhythm,
                    and fluid interactive micro-moments.
                  </p>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      className="px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all duration-300"
                      style={{
                        backgroundColor: wireframeManualProgress > 0.5 ? '#0A0A0A' : '#FAF8F5',
                        color: wireframeManualProgress > 0.5 ? '#FAF8F5' : '#0A0A0A',
                        border: '1px solid #0A0A0A',
                      }}
                    >
                      {wireframeManualProgress > 0.5 ? 'Interactive Live Action' : 'Wireframe Spec'}
                    </button>
                    <span className="text-[10px] font-mono text-[#0A0A0A]/60">
                      State: {Math.round(wireframeManualProgress * 100)}% Complete
                    </span>
                  </div>
                </div>

                {/* Right side interactive card block */}
                <div className="md:col-span-5">
                  <div
                    className="rounded-2xl border-2 border-[#0A0A0A] p-6 transition-all duration-500"
                    style={{
                      backgroundColor: wireframeManualProgress > 0.6 ? '#FAF8F5' : '#FFFFFF',
                      boxShadow: wireframeManualProgress > 0.7 ? '0 12px 30px rgba(0,0,0,0.1)' : 'none',
                    }}
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-[#0A0A0A]/10">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#0A0A0A]/60">
                        Performance Metric
                      </span>
                      <span className="text-xs font-mono font-bold">100 / 100</span>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-xs font-sans">
                        <span>Speed Index:</span>
                        <span className="font-mono font-bold">0.4s</span>
                      </div>
                      <div className="flex justify-between text-xs font-sans">
                        <span>Cumulative Layout Shift:</span>
                        <span className="font-mono font-bold">0.000</span>
                      </div>
                      <div className="flex justify-between text-xs font-sans">
                        <span>Time to Interactive:</span>
                        <span className="font-mono font-bold">0.6s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom mockup bar */}
              <div className="pt-4 border-t border-[#0A0A0A]/10 flex items-center justify-between text-[10px] font-mono text-[#0A0A0A]/50 relative z-10">
                <span>STROKE-DASHOFFSET ENGINE: ACTIVE</span>
                <span>SCROLL OR DRAG SLIDER TO REVEAL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT'S INCLUDED: ANIMATED FEATURE CARDS (White Background)
          ========================================================= */}
      <section className="bg-white py-28 md:py-36 px-6 md:px-12 border-y border-[#0A0A0A]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/40 mb-3 block">
                Technical Capabilities
              </span>
              <h2 className="font-serif italic text-4xl md:text-6xl text-[#0A0A0A]">
                Everything built in. Nothing outsourced.
              </h2>
            </div>
            <p className="text-sm font-sans text-[#0A0A0A]/60 max-w-sm">
              We engineer full systems from conceptual sketches to production deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <TiltCard
                  key={idx}
                  className="bg-[#FAF8F5]/40 border border-[#0A0A0A]/10 p-8 flex flex-col justify-between"
                  maxTilt={10}
                >
                  <div>
                    <div className="flex items-center justify-between pb-6 border-b border-[#0A0A0A]/10">
                      <span className="text-[10px] font-mono font-bold text-[#0A0A0A]/40 uppercase tracking-widest">
                        {feat.tag}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-white border border-[#0A0A0A]/10 flex items-center justify-center text-[#0A0A0A] shadow-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="mt-6">
                      <h3 className="font-serif italic text-2xl text-[#0A0A0A]">{feat.title}</h3>
                      <p className="text-xs font-sans text-[#0A0A0A]/70 mt-2.5 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#0A0A0A]/10 flex items-center justify-between text-[10px] font-mono text-[#0A0A0A]/50">
                    <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      60FPS ACCELERATED
                    </span>
                    <span>SPEC // 0{idx + 1}</span>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          DEVICE MOCKUP SECTION (DESKTOP & PHONE PARALLAX)
          ========================================================= */}
      <section className="bg-[#F0EAE1] py-28 md:py-36 px-6 md:px-12 border-b border-[#0A0A0A]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/60 mb-2 block">
              Multi-Form Factor Harmony
            </span>
            <h2 className="font-serif italic text-4xl md:text-6xl text-[#0A0A0A]">
              Pixel-perfect across every screen.
            </h2>
            <p className="text-sm font-sans text-[#0A0A0A]/70 mt-4">
              Over 68% of executive traffic begins on mobile devices. We ensure your brand looks as commanding on an iPhone as it does on a Pro Display XDR.
            </p>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
            {/* Desktop Mockup */}
            <div className="w-full lg:w-2/3 bg-white border-2 border-[#0A0A0A] rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-[#0A0A0A] text-[#FAF8F5] px-4 py-2 flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                </div>
                <span>Desktop Experience (1920x1080)</span>
                <Monitor className="w-3.5 h-3.5" />
              </div>

              <div className="p-8 bg-[#FAF8F5]/30 min-h-[300px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <BirdMascot variant="perched" className="w-6 h-6" strokeWidth={2} />
                    <span className="font-serif italic font-bold">Big Tech Bird</span>
                  </div>
                  <h3 className="font-serif text-3xl text-[#0A0A0A] leading-tight">
                    "A masterclass in modern digital identity."
                  </h3>
                  <p className="text-xs font-sans text-[#0A0A0A]/70 mt-2">
                    Dynamic fluid grid, typographic hierarchy, and instant interactive response.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#0A0A0A]/10 text-center text-xs font-mono">
                  <div className="p-2 bg-white rounded-lg border border-[#0A0A0A]/10 font-bold">100ms TBT</div>
                  <div className="p-2 bg-white rounded-lg border border-[#0A0A0A]/10 font-bold">Zero CLS</div>
                  <div className="p-2 bg-white rounded-lg border border-[#0A0A0A]/10 font-bold">60 FPS</div>
                </div>
              </div>
            </div>

            {/* Mobile Mockup (Parallax Overlay) */}
            <div className="w-64 sm:w-72 bg-white border-2 border-[#0A0A0A] rounded-[36px] shadow-2xl overflow-hidden p-2">
              <div className="bg-[#0A0A0A] text-[#FAF8F5] rounded-[28px] p-4 min-h-[420px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[10px] font-mono">
                    <span>9:41</span>
                    <Smartphone className="w-3.5 h-3.5" />
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <BirdMascot variant="flight" strokeColor="#FAF8F5" className="w-6 h-6" />
                    <span className="font-serif italic text-base">BTB Mobile</span>
                  </div>
                  <h4 className="font-serif text-xl mt-4 leading-tight text-white">
                    Touch-optimized navigation & buttery gestural physics.
                  </h4>
                  <div className="mt-4 p-3 rounded-xl bg-white/10 text-[11px] font-sans text-white/80">
                    Thumb-friendly bottom action sheets and instant touch feedback.
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <div className="w-full py-2 bg-white text-[#0A0A0A] text-center rounded-full text-xs font-mono font-bold">
                    Book Project Call
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          "BEFORE VS AFTER" DRAGGABLE SLIDER SECTION (Black Background)
          ========================================================= */}
      <section className="bg-[#0A0A0A] text-[#FAF8F5] py-28 md:py-36 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FAF8F5]/40 mb-2 block">
              The Radical Transformation
            </span>
            <h2 className="font-serif italic text-4xl md:text-6xl text-white">
              Before vs. After Big Tech Bird.
            </h2>
            <p className="text-sm font-sans text-[#FAF8F5]/60 mt-4">
              Drag the interactive slider below to inspect the contrast between an ordinary template and our signature bespoke execution.
            </p>
          </div>

          {/* Interactive Drag Slider Frame */}
          <div
            ref={comparisonRef}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            onClick={(e) => handleComparisonMove(e.clientX)}
            className="relative w-full h-[480px] sm:h-[520px] rounded-3xl overflow-hidden border-2 border-white/20 select-none cursor-ew-resize group"
            data-cursor="drag"
          >
            {/* "AFTER" Layer (Full width, underneath) */}
            <div className="absolute inset-0 bg-[#FAF8F5] text-[#0A0A0A] p-6 sm:p-10 md:p-14 flex flex-col justify-between overflow-hidden">
              <div className="pl-4 sm:pl-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BirdMascot variant="flight" className="w-8 h-8 text-[#0A0A0A]" />
                    <span className="font-serif italic font-bold text-2xl">Big Tech Bird Standard</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#0A0A0A] text-[#FAF8F5] text-xs font-mono font-bold">
                    AFTER
                  </span>
                </div>

                <div className="mt-8 sm:mt-12 max-w-lg">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/50 font-bold">
                    High Conversion & Prestige
                  </span>
                  <h3 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#0A0A0A] mt-2 leading-tight">
                    Editorial charisma that commands high enterprise contracts.
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-[#0A0A0A]/80 mt-3 sm:mt-4 leading-relaxed">
                    Custom typography, 60fps micro-interactions, sub-second load times, and magnetic storytelling that turns visitors into evangelists.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono pl-4 sm:pl-8 pt-4 border-t border-[#0A0A0A]/10">
                <span className="font-bold text-[#0A0A0A]">✓ 4.8x Conversion Rate</span>
                <span className="font-bold text-[#0A0A0A]">✓ 100% Lighthouse Score</span>
                <span className="font-bold text-[#0A0A0A]">✓ Award Recognition</span>
              </div>
            </div>

            {/* "BEFORE" Layer (Clipped by slider position) */}
            <div
              className="absolute inset-0 bg-white text-[#0A0A0A] p-6 sm:p-10 md:p-14 flex flex-col justify-between border-r-2 border-[#0A0A0A] overflow-hidden"
              style={{
                clipPath: `polygon(0% 0%, ${sliderPosition}% 0%, ${sliderPosition}% 100%, 0% 100%)`,
              }}
            >
              <div className="pr-4 sm:pr-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm uppercase text-[#0A0A0A]/50 font-bold">
                    Generic Agency Template
                  </span>
                  <span className="px-3 py-1 rounded-full bg-neutral-200 text-[#0A0A0A] text-xs font-mono font-bold">
                    BEFORE
                  </span>
                </div>

                <div className="mt-8 sm:mt-12 max-w-lg">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
                    Generic Layout
                  </span>
                  <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl text-neutral-800 font-bold mt-2 leading-tight">
                    Cluttered stock templates that blend into the crowd.
                  </h3>
                  <p className="text-sm font-sans text-neutral-500 mt-3 sm:mt-4 leading-relaxed">
                    Bloated WordPress themes, sluggish 3.8s load times, generic stock photos, and high bounce rates that silently drain your ad budget.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-neutral-400 pr-4 sm:pr-8 pt-4 border-t border-neutral-200">
                <span>✗ High bounce rate</span>
                <span>✗ 48 Lighthouse score</span>
                <span>✗ Forgettable presence</span>
              </div>
            </div>

            {/* Drag Handle Divider */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#0A0A0A] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#0A0A0A] text-[#FAF8F5] flex items-center justify-center shadow-2xl border-2 border-white text-xs font-mono transition-transform group-hover:scale-110">
                ↔
              </div>
            </div>
          </div>

          {/* Quick Preset Buttons & Interactive Drag Telemetry */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setSliderPosition(100)}
                className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                  sliderPosition >= 90
                    ? 'bg-white text-black font-bold border-white shadow-xs'
                    : 'bg-white/5 text-white/70 border-white/20 hover:border-white'
                }`}
              >
                Show 100% Before
              </button>
              <button
                type="button"
                onClick={() => setSliderPosition(50)}
                className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                  sliderPosition >= 40 && sliderPosition <= 60
                    ? 'bg-white text-black font-bold border-white shadow-xs'
                    : 'bg-white/5 text-white/70 border-white/20 hover:border-white'
                }`}
              >
                50 / 50 Comparison
              </button>
              <button
                type="button"
                onClick={() => setSliderPosition(0)}
                className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                  sliderPosition <= 10
                    ? 'bg-amber-400 text-black font-bold border-amber-400 shadow-xs'
                    : 'bg-white/5 text-white/70 border-white/20 hover:border-white'
                }`}
              >
                Show 100% After (Big Tech Bird)
              </button>
            </div>

            <div className="text-[#FAF8F5]/50 flex items-center gap-2">
              <span>DRAG SLIDER FREELY (0% — 100%)</span>
              <span className="font-bold text-white bg-white/10 px-2 py-0.5 rounded-md">
                {Math.round(sliderPosition)}%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRICING & PROCESS TIERS (Beige Background)
          ========================================================= */}
      <section className="py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/40 mb-2 block">
            Transparent Engagements
          </span>
          <h2 className="font-serif italic text-4xl md:text-6xl text-[#0A0A0A]">
            Selected partnership tiers.
          </h2>
          <p className="text-sm font-sans text-[#0A0A0A]/60 mt-4">
            Fixed scope, transparent delivery milestones, and zero hidden agency overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <TiltCard
              key={idx}
              maxTilt={8}
              className={`p-8 flex flex-col justify-between ${
                pkg.featured
                  ? 'bg-[#0A0A0A] text-[#FAF8F5] border-2 border-amber-500/40 shadow-2xl'
                  : 'bg-white text-[#0A0A0A] border border-[#0A0A0A]/10'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-current/10">
                  <h3 className="font-serif italic text-3xl">{pkg.name}</h3>
                  <span
                    className={`text-xs font-mono px-3 py-1 rounded-full ${
                      pkg.featured
                        ? 'bg-[#FAF8F5] text-[#0A0A0A] font-bold'
                        : 'bg-[#FAF8F5] text-[#0A0A0A]'
                    }`}
                  >
                    {pkg.timeline}
                  </span>
                </div>

                <p
                  className={`text-xs font-sans mt-6 leading-relaxed ${
                    pkg.featured ? 'text-[#FAF8F5]/70' : 'text-[#0A0A0A]/70'
                  }`}
                >
                  {pkg.tagline}
                </p>

                <div className="mt-8 pt-6 border-t border-current/10">
                  <div className="text-[10px] font-mono uppercase tracking-widest opacity-60 mb-4">
                    Deliverables Included:
                  </div>
                  <ul className="space-y-3 text-xs font-sans">
                    {pkg.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            pkg.featured ? 'text-[#FAF8F5]' : 'text-[#0A0A0A]'
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-current/10">
                <MagneticButton
                  to="/contact"
                  variant={pkg.featured ? 'beige' : 'black'}
                  className="w-full text-center"
                  cursorText="inquire"
                >
                  Inquire For Availability
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </MagneticButton>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* =========================================================
          PAGE CTA
          ========================================================= */}
      <section className="bg-white py-24 px-6 md:px-12 border-t border-[#0A0A0A]/10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-12 h-12 mx-auto mb-4">
            <BirdMascot variant="flight" className="w-full h-full text-[#0A0A0A]" />
          </div>
          <h2 className="font-serif italic text-4xl sm:text-6xl text-[#0A0A0A]">
            Ready to upgrade your web presence?
          </h2>
          <p className="text-sm font-sans text-[#0A0A0A]/60 max-w-md mx-auto mt-4">
            We are currently scheduling exploratory calls for the upcoming quarter.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <MagneticButton to="/contact" variant="black" cursorText="talk">
              Start Project Discussion
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </MagneticButton>
            <MagneticButton to="/social-media" variant="outline" cursorText="next">
              Next: Social Media →
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

