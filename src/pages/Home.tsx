import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BirdMascot } from '../components/BirdMascot';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';
import { SEO } from '../components/SEO';
import confetti from 'canvas-confetti';
import {
  ArrowUpRight,
  Monitor,
  TrendingUp,
  Cpu,
  Compass,
  Layers,
  Rocket,
  Zap,
  Bot,
  Heart,
  CheckCircle2,
  Sparkles,
  Activity,
} from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);

  // 3D Mouse Tracking State for the Spatial Mascot
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Kinetic Rotating Words State
  const rotatingWords = ['AUTONOMOUS', 'HYPER-SCALED', 'UNFAIR'];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);

  // Soundwave visualizer bar amplitudes
  const [waveAmplitudes, setWaveAmplitudes] = useState([8, 16, 24, 12, 28, 18, 14, 22]);

  // B.I.R.D. AI Spotlight live simulation on Home
  const [homeSimMode, setHomeSimMode] = useState<'qualify' | 'crm' | 'chat'>('qualify');
  const [socialLikes, setSocialLikes] = useState(18400);


  // Word rotator interval
  useEffect(() => {
    const wordTimer = setInterval(() => {
      setCurrentWordIdx((prev) => (prev + 1) % rotatingWords.length);
    }, 2400);
    return () => clearInterval(wordTimer);
  }, [rotatingWords.length]);

  // Soundwave jitter simulation
  useEffect(() => {
    const waveTimer = setInterval(() => {
      setWaveAmplitudes([
        Math.floor(Math.random() * 20) + 6,
        Math.floor(Math.random() * 26) + 8,
        Math.floor(Math.random() * 32) + 10,
        Math.floor(Math.random() * 18) + 6,
        Math.floor(Math.random() * 30) + 10,
        Math.floor(Math.random() * 24) + 8,
        Math.floor(Math.random() * 16) + 6,
        Math.floor(Math.random() * 28) + 8,
      ]);
    }, 280);
    return () => clearInterval(waveTimer);
  }, []);

  // Track mouse coordinates over the hero container for real 3D perspective
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setMousePos({ x, y });
  };

  const handleHeroMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMascotClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    confetti({
      particleCount: 45,
      spread: 80,
      origin: { x: 0.75, y: 0.45 },
      colors: ['#E67E22', '#F39C12', '#0A0A0A', '#FFFFFF'],
    });
  };

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSocialLikes((prev) => prev + 1);
    confetti({
      particleCount: 30,
      spread: 70,
      origin: { x: 0.5, y: 0.6 },
      colors: ['#E67E22', '#F39C12', '#0A0A0A'],
    });
  };

  const services = [
    {
      id: '01',
      title: 'Website Design',
      path: '/website-design',
      tagline: 'High-Impact Digital Flagships',
      description: '60fps interaction physics, editorial typography, and sub-second performance built to command market attention.',
      icon: Monitor,
      previewType: 'website',
    },
    {
      id: '02',
      title: 'Social Media',
      path: '/social-media',
      tagline: 'Viral Distribution Engines',
      description: 'Audience capture pipelines, short-form video creative, and explosive organic reach across every platform.',
      icon: TrendingUp,
      previewType: 'social',
    },
    {
      id: '03',
      title: 'B.I.R.D. AI Integration',
      path: '/ai-integration',
      tagline: 'Proprietary Autonomous Agent',
      description: 'Meet B.I.R.D. AI: our in-house agent trained to qualify leads, automate CRM ops, and handle client support 24/7.',
      icon: Cpu,
      previewType: 'ai',
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Discover',
      lead: 'Radical Clarity',
      desc: 'Mapping your market advantage and technical blueprint.',
      icon: Compass,
    },
    {
      num: '02',
      title: 'Design & Code',
      lead: 'Bespoke Digital Craft',
      desc: 'Bespoke layouts, 60fps animations, and custom vector motion.',
      icon: Layers,
    },
    {
      num: '03',
      title: 'Automate With B.I.R.D. AI',
      lead: 'Intelligent Scale',
      desc: 'Plugging our autonomous agent into your CRM, SMS & sales funnels.',
      icon: Zap,
    },
    {
      num: '04',
      title: 'Launch & Compound',
      lead: 'Market Domination',
      desc: 'Zero-downtime release with viral social distribution engines.',
      icon: Rocket,
    },
  ];

  return (
    <div className="w-full bg-[#FAF8F5] text-[#0A0A0A] overflow-hidden select-none">
      <SEO
        title="Big Tech Bird — Websites, Social Media & B.I.R.D. AI"
        description="We build the web, grow your brand, and deploy B.I.R.D. AI to make your business smarter."
      />

      {/* =========================================================
          INSANE MOTION GRAPHICS HERO SECTION
          ========================================================= */}
      <section
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleHeroMouseLeave}
        className="relative min-h-[96vh] lg:min-h-screen pt-28 md:pt-36 pb-12 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-between overflow-hidden"
      >
        {/* Generative Interactive Motion Grid & Crosshair Matrix */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          {/* Subtle Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A0A0A_1px,transparent_1px),linear-gradient(to_bottom,#0A0A0A_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10" />

          {/* Interactive Cursor Spotlight Glow */}
          <motion.div
            animate={{
              x: (mousePos.x * 250) + 'px',
              y: (mousePos.y * 180) + 'px',
            }}
            transition={{ type: 'spring', damping: 30, stiffness: 150 }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-400/15 via-orange-400/10 to-transparent rounded-full blur-3xl pointer-events-none"
          />
        </div>

        {/* Ambient Giant Typographic Background Watermark (Parallax Drifting) */}
        <motion.div
          style={{
            x: mousePos.x * -35,
            y: mousePos.y * -25,
          }}
          className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
        >
          <span className="font-serif italic font-bold text-[14vw] tracking-tighter text-[#0A0A0A]/[0.025] whitespace-nowrap">
            BIG TECH BIRD
          </span>
        </motion.div>

        {/* Top Editorial Telemetry Bar */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono tracking-widest text-[#0A0A0A]/60 uppercase border-b border-[#0A0A0A]/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-bold text-[#0A0A0A]">INDEX // 2026</span>
            <span className="hidden sm:inline-block text-[#0A0A0A]/30">|</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[#0A0A0A]/70">
              <Activity className="w-3 h-3 text-amber-600" />
              60 FPS MOTION RUNTIME
            </span>
          </div>


          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-[#0A0A0A]">GLOBAL DIGITAL OPERATIONS</span>
          </div>
        </div>

        {/* Main Hero Split Stage: Kinetic Headline (Left) & 3D Spatial Robot Mascot (Right) */}
        <div className="relative z-10 my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Kinetic Typography (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Kinetic Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0A0A0A]/15 shadow-xs mb-6 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-xs font-mono font-bold tracking-wider text-[#0A0A0A]">
                TRI-PILLAR CREATIVE ENGINEERING
              </span>
            </div>

            {/* Kinetic Dynamic Headline with Morphing Word Flipper */}
            <div className="space-y-1">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif italic text-5xl sm:text-6xl md:text-7xl lg:text-[5.4vw] leading-[0.94] tracking-tight font-normal text-[#0A0A0A]"
                >
                  We engineer
                </motion.h1>
              </div>

              {/* Kinetic Animated Word Rotator Badge */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 py-1">
                <div className="min-h-[52px] sm:min-h-[64px] md:min-h-[74px] overflow-hidden relative inline-flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentWordIdx}
                      initial={{ y: 35, opacity: 0, rotateX: -45 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -35, opacity: 0, rotateX: 45 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-[#0A0A0A] text-[#FAF8F5] font-mono font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight shadow-xl flex items-center gap-2 sm:gap-2.5 border border-amber-500/40 whitespace-nowrap shrink-0 leading-none select-none"
                    >
                      <span className="text-amber-400 text-sm sm:text-base">✦</span>
                      <span className="whitespace-nowrap">{rotatingWords[currentWordIdx]}</span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <span className="font-serif italic text-5xl sm:text-6xl md:text-7xl lg:text-[5.4vw] leading-[0.94] tracking-tight font-normal text-[#0A0A0A]">
                  websites,
                </span>
              </div>

              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif italic text-5xl sm:text-6xl md:text-7xl lg:text-[5.4vw] leading-[0.94] tracking-tight font-normal text-[#0A0A0A]"
                >
                  ignite viral brands,
                </motion.h1>
              </div>

              <div className="overflow-hidden flex items-center gap-4 flex-wrap">
                <motion.h1
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif italic text-5xl sm:text-6xl md:text-7xl lg:text-[5.4vw] leading-[0.94] tracking-tight font-normal text-[#0A0A0A]"
                >
                  and deploy <span className="text-amber-600 underline decoration-amber-500/40 underline-offset-8">B.I.R.D. AI</span>.
                </motion.h1>

                {/* Live Soundwave Frequency Equalizer */}
                <div className="hidden sm:flex items-end gap-1 h-9 px-3 py-1.5 rounded-xl bg-white border border-[#0A0A0A]/10 shadow-xs">
                  {waveAmplitudes.map((amp, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: `${amp}px` }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="w-1 bg-amber-500 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Punchy Subtitle with High-Impact Badges */}
            <p className="mt-6 text-sm sm:text-base font-sans text-[#0A0A0A]/70 max-w-xl leading-relaxed">
              We replace fragmented agencies with an all-in-one powerhouse:
              bespoke 60fps web flagships, organic distribution engines, and our proprietary autonomous AI agent.
            </p>

            {/* Quick Action CTA Dock */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton to="/contact" variant="black" cursorText="start">
                Launch Project
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </MagneticButton>
              <MagneticButton to="/ai-integration" variant="outline" cursorText="agent">
                Test Drive B.I.R.D. AI
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: 3D Moving Spatial Robot Mascot Stage (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* 3D Spatial Rig Container with Perspective */}
            <div
              className="relative w-72 h-88 sm:w-84 sm:h-96 md:w-96 md:h-[420px] flex items-center justify-center cursor-pointer group select-none"
              style={{ perspective: 1200 }}
              onClick={handleMascotClick}
              data-cursor="wave"
            >
              {/* Outer Holographic Orbital Ring (Layer 1 - Tilted 3D Orbit) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-amber-500/40 pointer-events-none"
                style={{
                  transform: `rotateX(68deg) rotateY(${mousePos.x * 15}deg)`,
                }}
              />

              {/* Counter-Rotating Orbital Ring (Layer 2) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border border-amber-400/20 pointer-events-none"
                style={{
                  transform: `rotateX(-55deg) rotateY(${mousePos.x * -15}deg)`,
                }}
              />

              {/* Expanding Concentric Sonar Pulses */}
              <motion.div
                animate={{ scale: [1, 1.4, 1.8], opacity: [0.35, 0.15, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeOut' }}
                className="absolute w-60 h-60 rounded-full border border-amber-500/40 pointer-events-none"
              />

              {/* Spatial 3D Mascot Body (Reacts to Cursor in 3D Perspective) */}
              <motion.div
                style={{
                  rotateY: mousePos.x * 26,
                  rotateX: -mousePos.y * 18,
                  scale: isHovered ? 1.08 : 1.02,
                  translateZ: 60,
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 180 }}
                animate={{
                  y: [0, -10, 0],
                }}
                className="relative w-56 h-72 sm:w-64 sm:h-84 flex items-center justify-center z-20"
              >
                {/* 3D Mascot Image with Dynamic Lighting and Shadow */}
                <BirdMascot
                  variant="perched"
                  animated={true}
                  className="w-full h-full filter drop-shadow-[0_24px_48px_rgba(230,126,34,0.24)] transition-transform duration-300"
                />

                {/* Floating Interactive HUD Pin attached to Mascot */}
                <motion.div
                  style={{
                    x: mousePos.x * -14,
                    y: mousePos.y * -10,
                  }}
                  className="absolute -top-4 -right-2 bg-white/95 border border-[#0A0A0A]/15 backdrop-blur-md rounded-2xl px-3 py-1.5 shadow-xl flex items-center gap-2 pointer-events-none"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono font-bold text-[#0A0A0A] leading-tight">
                      B.I.R.D. AI AGENT
                    </span>
                    <span className="text-[8px] font-mono text-[#0A0A0A]/50 leading-tight">
                      Tracking Cursor: 3D Spatial
                    </span>
                  </div>
                </motion.div>

                {/* Lower Click Me Floating Trigger Pill */}
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0A0A0A] text-[#FAF8F5] text-[10px] font-mono uppercase tracking-widest px-4 py-1.5 rounded-full shadow-2xl border border-white/20 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                  <span>Click B.I.R.D. for Energy Burst</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Discipline Switcher Dock */}
        <div className="relative z-10 pt-6 border-t border-[#0A0A0A]/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div
            onClick={() => navigate('/website-design')}
            className="p-4 rounded-2xl bg-white/80 border border-[#0A0A0A]/10 hover:border-[#0A0A0A]/30 transition-all cursor-pointer flex items-center justify-between group shadow-xs hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#0A0A0A]/10 flex items-center justify-center text-[#0A0A0A] group-hover:bg-[#0A0A0A] group-hover:text-white transition-colors">
                <Monitor className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-[#0A0A0A]">01 WEBSITE DESIGN</div>
                <div className="text-[10px] font-mono text-[#0A0A0A]/60">60FPS Editorial UI</div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#0A0A0A]/40 group-hover:text-[#0A0A0A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>

          <div
            onClick={() => navigate('/social-media')}
            className="p-4 rounded-2xl bg-white/80 border border-[#0A0A0A]/10 hover:border-[#0A0A0A]/30 transition-all cursor-pointer flex items-center justify-between group shadow-xs hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#0A0A0A]/10 flex items-center justify-center text-[#0A0A0A] group-hover:bg-[#0A0A0A] group-hover:text-white transition-colors">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-[#0A0A0A]">02 SOCIAL MEDIA</div>
                <div className="text-[10px] font-mono text-[#0A0A0A]/60">Viral Distribution Engine</div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#0A0A0A]/40 group-hover:text-[#0A0A0A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>

          <div
            onClick={() => navigate('/ai-integration')}
            className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 hover:border-amber-500/60 transition-all cursor-pointer flex items-center justify-between group shadow-xs hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-black flex items-center justify-center font-bold">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-[#0A0A0A]">03 B.I.R.D. AI AGENT</div>
                <div className="text-[10px] font-mono text-amber-700 font-bold">Autonomous CRM & Ops</div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-amber-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
        </div>
      </section>

      {/* =========================================================
          INFINITE MARQUEE
          ========================================================= */}
      <div className="bg-[#0A0A0A] text-[#FAF8F5] py-5 overflow-hidden select-none border-y border-white/10">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
          className="flex whitespace-nowrap text-lg sm:text-xl md:text-2xl font-serif tracking-widest uppercase italic"
        >
          {Array(8)
            .fill(null)
            .map((_, i) => (
              <span key={i} className="flex items-center mx-4">
                <span>WEBSITES</span>
                <span className="mx-4 text-xs not-italic text-amber-400">✦</span>
                <span>SOCIAL MEDIA</span>
                <span className="mx-4 text-xs not-italic text-amber-400">✦</span>
                <span>B.I.R.D. AI AGENT</span>
                <span className="mx-4 text-xs not-italic text-amber-400">✦</span>
                <span>AUTONOMOUS OPERATIONS</span>
                <span className="mx-4 text-xs not-italic text-amber-400">✦</span>
              </span>
            ))}
        </motion.div>
      </div>

      {/* =========================================================
          SERVICES SECTION (3 Visual Interactive Cards)
          ========================================================= */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/40 mb-2 block">
              THREE ENGINES
            </span>
            <h2 className="font-serif italic text-4xl md:text-6xl text-[#0A0A0A]">
              Crafted for unfair market dominance.
            </h2>
          </div>
          <p className="text-sm font-sans text-[#0A0A0A]/60 max-w-sm">
            Explore our core capabilities. Click any card to inspect the interactive suite.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <TiltCard
              key={service.id}
              onClick={() => navigate(service.path)}
              className="group bg-white border border-[#0A0A0A]/10 p-8 flex flex-col justify-between cursor-pointer"
              dataCursor="view"
              maxTilt={12}
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#0A0A0A]/10">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#0A0A0A]/40 group-hover:text-[#0A0A0A] transition-colors">
                    {service.id}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#0A0A0A]/10 flex items-center justify-center group-hover:bg-[#0A0A0A] group-hover:text-[#FAF8F5] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-serif italic text-3xl md:text-4xl text-[#0A0A0A] group-hover:translate-x-1 transition-transform">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-amber-700 font-semibold uppercase tracking-wider mt-1.5">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm font-sans text-[#0A0A0A]/70 mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Mini Live Preview of Animation inside each card */}
              <div className="my-8 h-44 bg-[#FAF8F5] rounded-2xl border border-[#0A0A0A]/10 p-4 relative overflow-hidden flex items-center justify-center group-hover:border-[#0A0A0A]/30 transition-colors">
                {service.previewType === 'website' && (
                  <div className="w-full h-full flex flex-col justify-between">
                    <div className="flex items-center gap-1.5 pb-2 border-b border-[#0A0A0A]/10">
                      <div className="w-2 h-2 rounded-full bg-[#0A0A0A]/30" />
                      <div className="w-2 h-2 rounded-full bg-[#0A0A0A]/30" />
                      <div className="w-2 h-2 rounded-full bg-[#0A0A0A]/30" />
                      <div className="ml-2 h-2 w-24 bg-white rounded-full border border-[#0A0A0A]/10" />
                    </div>
                    <div className="space-y-2 my-auto">
                      <motion.div
                        animate={{ width: ['45%', '80%', '45%'] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="h-3 bg-[#0A0A0A] rounded-xs"
                      />
                      <motion.div
                        animate={{ width: ['70%', '50%', '70%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="h-2 bg-[#0A0A0A]/30 rounded-xs"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-8 bg-white border border-[#0A0A0A]/10 rounded-md flex items-center justify-center text-[9px] font-mono font-bold">
                        60FPS
                      </div>
                      <div className="h-8 bg-white border border-[#0A0A0A]/10 rounded-md flex items-center justify-center text-[9px] font-mono font-bold">
                        SEO 100
                      </div>
                      <div className="h-8 bg-[#0A0A0A] text-white rounded-md flex items-center justify-center text-[9px] font-mono font-bold">
                        FAST
                      </div>
                    </div>
                  </div>
                )}

                {service.previewType === 'social' && (
                  <div className="w-full flex items-center justify-center relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      onClick={handleHeartClick}
                      className="bg-white border border-[#0A0A0A]/15 rounded-xl p-3 shadow-md w-full max-w-[220px]"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-6">
                            <BirdMascot variant="perched" className="w-full h-full" />
                          </div>
                          <span className="text-[10px] font-mono font-bold">@bigtechbird</span>
                        </div>
                        <span className="text-[8px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                          EXAMPLE
                        </span>
                      </div>
                      <div className="h-8 bg-[#FAF8F5] rounded my-2 flex items-center justify-center px-2">
                        <span className="text-[10px] font-serif italic truncate">
                          Organic Reach Exploding
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono pt-1 border-t border-[#0A0A0A]/5">
                        <span className="flex items-center gap-1 font-bold text-amber-600">
                          <Heart className="w-3 h-3 fill-amber-500 text-amber-500" />
                          {socialLikes.toLocaleString()}
                        </span>
                        <span className="text-[#0A0A0A]/50">Click ♥ to test</span>
                      </div>
                    </motion.div>
                  </div>
                )}

                {service.previewType === 'ai' && (
                  <div className="w-full h-full relative flex items-center justify-between bg-[#0A0A0A] text-[#FAF8F5] rounded-xl p-3">
                    <div className="flex flex-col justify-between h-full">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[10px] font-mono text-amber-400 font-bold">B.I.R.D. AI · EXAMPLE</span>
                      </div>
                      <div>
                        <div className="text-[9px] font-mono text-white/50">LEAD QUALIFIED</div>
                        <div className="text-xs font-mono font-bold text-emerald-400">$45,000 ARR</div>
                      </div>
                      <div className="text-[9px] font-mono text-white/40">Latency: 0.22s</div>
                    </div>
                    <div className="w-16 h-20">
                      <BirdMascot variant="perched" animated={true} className="w-full h-full" />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0A]/70 group-hover:text-[#0A0A0A]">
                <span>Explore Discipline</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* =========================================================
          SPECIAL FEATURE SPOTLIGHT: B.I.R.D. AI AGENT (PROPRIETARY)
          ========================================================= */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12 border-y border-[#0A0A0A]/10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#0A0A0A] text-[#FAF8F5] rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Left Content */}
            <div className="max-w-xl z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                OUR PROPRIETARY IN-HOUSE AGENT
              </div>

              <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
                We built B.I.R.D. AI to scale our company.
                <br />
                <span className="text-amber-400">Now we integrate him into yours.</span>
              </h2>

              <p className="font-sans text-sm md:text-base text-[#FAF8F5]/70 mt-4 leading-relaxed">
                B.I.R.D. AI handles our inbound client qualification, automates CRM workflows, sends SMS check-ins, and manages calendar booking 24/7. We train and deploy customized versions into your business.
              </p>

              {/* Action Simulation Chips */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                <button
                  onClick={() => setHomeSimMode('qualify')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                    homeSimMode === 'qualify' ? 'bg-amber-500 text-black font-bold' : 'bg-white/10 text-white'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" /> Qualify Inbound Leads
                </button>
                <button
                  onClick={() => setHomeSimMode('crm')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                    homeSimMode === 'crm' ? 'bg-amber-500 text-black font-bold' : 'bg-white/10 text-white'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" /> Automate CRM Pipeline
                </button>
                <button
                  onClick={() => setHomeSimMode('chat')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                    homeSimMode === 'chat' ? 'bg-amber-500 text-black font-bold' : 'bg-white/10 text-white'
                  }`}
                >
                  <Bot className="w-3.5 h-3.5" /> 24/7 Voice & Chat Concierge
                </button>
              </div>

              <div className="mt-10">
                <MagneticButton to="/ai-integration" variant="beige" cursorText="deploy">
                  Explore Full B.I.R.D. AI Engine
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </MagneticButton>
              </div>
            </div>

            {/* Right Interactive Mascot Terminal Card */}
            <div className="w-full lg:w-80 bg-white/5 border border-white/10 rounded-2xl p-6 relative flex flex-col items-center text-center z-10 shadow-lg">
              <div className="w-36 h-48 mb-4">
                <BirdMascot variant="perched" animated={true} className="w-full h-full" />
              </div>

              <div className="w-full bg-black/60 border border-white/10 rounded-xl p-3 text-left font-mono text-[11px] space-y-1.5">
                <div className="text-amber-400 font-bold flex items-center justify-between">
                  <span>● B.I.R.D. AI AGENT</span>
                  <span className="text-[9px] text-white/50">DEMO</span>
                </div>
                <div className="text-white/80">
                  {homeSimMode === 'qualify' && '✓ Parsing inbound lead budget: $50K verified. Reserved on Calendly.'}
                  {homeSimMode === 'crm' && '✓ Synced with CRM database. Invoice webhook triggered in 0.2s.'}
                  {homeSimMode === 'chat' && '✓ Resolved client inquiry via WhatsApp & SMS. Zero human touch.'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS SECTION (Horizontal Step Timeline)
          ========================================================= */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/40 mb-2 block">
              EXECUTION BLUEPRINT
            </span>
            <h2 className="font-serif italic text-4xl md:text-6xl text-[#0A0A0A]">
              From concept to dominant market presence.
            </h2>
          </div>
        </div>

        {/* Animated Cybernetic Connector Line */}
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent pointer-events-none -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <TiltCard
                  key={step.num}
                  className="bg-white border border-[#0A0A0A]/10 p-6 flex flex-col justify-between"
                  maxTilt={8}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                        STEP {step.num}
                      </span>
                      <div className="w-9 h-9 rounded-2xl bg-[#FAF8F5] border border-[#0A0A0A]/10 flex items-center justify-center text-[#0A0A0A] shadow-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="font-serif italic text-2xl text-[#0A0A0A]">{step.title}</h3>
                    <div className="text-xs font-mono text-[#0A0A0A]/50 mt-1 uppercase tracking-wider">
                      {step.lead}
                    </div>
                    <p className="text-xs font-sans text-[#0A0A0A]/70 mt-3 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#0A0A0A]/5 flex items-center justify-between text-[10px] font-mono text-[#0A0A0A]/40">
                    <span>STATUS: READY</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CALL TO ACTION (Inverted High Contrast)
          ========================================================= */}
      <section className="bg-[#0A0A0A] text-[#FAF8F5] py-28 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
          <div className="w-16 h-22 mb-6">
            <BirdMascot variant="flight" className="w-full h-full text-[#FAF8F5]" />
          </div>

          <h2 className="font-serif italic text-5xl sm:text-6xl md:text-7xl leading-tight">
            Let's build something extraordinary.
          </h2>

          <p className="font-sans text-base text-[#FAF8F5]/70 max-w-xl mt-6 leading-relaxed">
            Whether you need a flagship website, viral distribution, or an autonomous B.I.R.D. AI deployment—we deliver exceptional results.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton to="/contact" variant="beige" cursorText="start">
              Start Your Project
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </MagneticButton>
            <MagneticButton to="/ai-integration" variant="outline-white" cursorText="agent">
              Meet B.I.R.D. AI
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};
