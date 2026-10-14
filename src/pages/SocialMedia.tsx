import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';
import { BirdMascot } from '../components/BirdMascot';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';
import confetti from 'canvas-confetti';
import {
  Heart,
  MessageCircle,
  Share2,
  Calendar,
  Sparkles,
  BarChart2,
  Users,
  ArrowUpRight,
  TrendingUp,
  X,
  Play,
} from 'lucide-react';

export const SocialMedia: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax state for floating cards in hero
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 40;
    const y = (clientY / window.innerHeight - 0.5) * 40;
    setMousePos({ x, y });
  };

  // Ticking counters state
  const [likes, setLikes] = useState(14820);
  const [comments, setComments] = useState(1240);
  const [shares, setShares] = useState(4890);

  // Interactive Chart & Calendar State
  const [activeMetricTab, setActiveMetricTab] = useState<'followers' | 'impressions'>('followers');
  const [hoveredMilestone, setHoveredMilestone] = useState<{
    month: string;
    label: string;
    value: string;
    sub: string;
  } | null>(null);
  const [activeDayModal, setActiveDayModal] = useState<{
    day: string;
    format: string;
    topic: string;
    status: string;
    views: string;
  } | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLikes((prev) => prev + Math.floor(Math.random() * 5) + 1);
      setComments((prev) => prev + (Math.random() > 0.6 ? 1 : 0));
      setShares((prev) => prev + (Math.random() > 0.7 ? 1 : 0));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  // Services offered
  const services = [
    {
      icon: Sparkles,
      title: 'Content Creation & Direction',
      desc: 'High-production short-form video, editorial carousels, and culturally acute copywriting designed to stop thumbs instantly.',
      num: '01',
    },
    {
      icon: Calendar,
      title: 'Precision Algorithmic Scheduling',
      desc: 'Predictive distribution timing tailored to peak follower activity and platform algorithm shifts across X, Instagram, LinkedIn, and TikTok.',
      num: '02',
    },
    {
      icon: Users,
      title: 'High-Touch Community Management',
      desc: 'Turning casual lurkers into fierce brand advocates with witty, authentic, real-time comment section engagement.',
      num: '03',
    },
    {
      icon: BarChart2,
      title: 'Attribution & Velocity Analytics',
      desc: 'Full-funnel attribution tracking revenue, profile conversions, earned media value, and algorithmic compounding.',
      num: '04',
    },
  ];

  // Auto-scrolling feed posts for Phone Mockup
  const feedPosts = [
    {
      author: 'Big Tech Bird',
      handle: '@bigtechbird',
      tag: 'VIRAL HOOK',
      content: 'Most B2B websites look like tax software. Design for emotion. Conversion follows beauty.',
      likes: '34.2K',
      comments: '1.2K',
    },
    {
      author: 'AI Insight',
      handle: '@bigtechbird',
      tag: 'AI WORKFLOW',
      content: 'Why autonomous agent workflows are replacing bloated marketing agencies in 2026. The play-by-play breakdown.',
      likes: '22.1K',
      comments: '940',
    },
    {
      author: 'Design Thesis',
      handle: '@bigtechbird',
      tag: 'CREATIVE',
      content: 'Editorial serif typography + sub-second interactions = unfair market advantage. Here is the framework.',
      likes: '29.7K',
      comments: '1.4K',
    },
  ];

  // Content calendar days (Month overview)
  const calendarDays = [
    { day: 'Mon 02', format: 'Carousel', topic: 'UX Blueprint', status: 'Published', views: '28K' },
    { day: 'Tue 03', format: 'Shorts / Reel', topic: 'Behind the Scenes', status: 'Published', views: '64K' },
    { day: 'Wed 04', format: 'Editorial Post', topic: 'AI Infrastructure', status: 'Published', views: '39K' },
    { day: 'Thu 05', format: 'Thread / Essay', topic: 'Why Taste Matters', status: 'Published', views: '82K' },
    { day: 'Fri 06', format: 'Interactive Poll', topic: 'Tool Stack 2026', status: 'Published', views: '45K' },
    { day: 'Sat 07', format: 'Story Drop', topic: 'Client Victory', status: 'Scheduled', views: '—' },
    { day: 'Mon 09', format: 'Carousel', topic: 'Conversion Teardown', status: 'Scheduled', views: '—' },
    { day: 'Tue 10', format: 'Shorts / Reel', topic: 'The Flying Bird', status: 'Scheduled', views: '—' },
    { day: 'Wed 11', format: 'Case Study Drop', topic: 'Fintech Rebrand', status: 'Scheduled', views: '—' },
    { day: 'Thu 12', format: 'Manifesto Piece', topic: 'The Anti-Template', status: 'Scheduled', views: '—' },
    { day: 'Fri 13', format: 'Meme / Culture', topic: 'Figma Archetypes', status: 'Scheduled', views: '—' },
    { day: 'Sat 14', format: 'Weekly Wrap', topic: 'Insights & Data', status: 'Drafting', views: '—' },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="w-full bg-[#FAF8F5] text-[#0A0A0A] overflow-hidden"
    >
      <SEO
        title="Social Media Management — High-Impact Brand Growth"
        description="We build viral organic distribution engines, produce thumb-stopping creative, and turn audiences into revenue."
      />

      {/* =========================================================
          HERO SECTION: BIRD FEATHER BURST INTO FLOATING POST CARDS
          ========================================================= */}
      <section className="relative pt-32 md:pt-44 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-[95vh] flex flex-col justify-between">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0A0A0A]/20 bg-white/50 text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/70 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0A0A0A]" />
            <span>DISCIPLINE 02 • SOCIAL MEDIA MANAGEMENT</span>
          </div>

          <h1 className="font-serif italic text-5xl sm:text-7xl md:text-8xl leading-[0.95] text-[#0A0A0A] tracking-tight">
            Stop buying clicks. Engineer cultural obsession.
          </h1>

          <p className="font-sans text-base md:text-lg text-[#0A0A0A]/70 max-w-2xl mx-auto mt-6 leading-relaxed">
            We turn brands into cultural media properties. High-taste creative direction, viral short-form production,
            and algorithmic distribution that compounds month after month.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <MagneticButton to="/contact" variant="black" cursorText="grow">
              Grow Your Brand
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </MagneticButton>
            <MagneticButton to="/work" variant="outline" cursorText="view">
              View Concept Work
            </MagneticButton>
          </div>
        </div>

        {/* Center Mascot & Floating Feathers / Cards Burst */}
        <div className="relative my-12 h-[380px] sm:h-[420px] flex items-center justify-center">
          {/* Central Bird Mascot with pulse */}
          <div className="relative z-20 flex flex-col items-center">
            <motion.div
              animate={{ y: [-8, 8, -8], scale: [1, 1.03, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-28 h-36 sm:w-36 sm:h-48 relative flex items-center justify-center cursor-pointer group"
              onClick={() => {
                confetti({
                  particleCount: 25,
                  spread: 60,
                  origin: { x: 0.5, y: 0.5 },
                  colors: ['#E67E22', '#F39C12', '#0A0A0A'],
                });
              }}
            >
              <BirdMascot variant="flight" className="w-full h-full filter drop-shadow-[0_12px_28px_rgba(230,126,34,0.2)]" />
            </motion.div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#0A0A0A]/50 mt-2 bg-white px-3 py-1 rounded-full border border-[#0A0A0A]/10 shadow-xs">
              ✦ Click Bird to Trigger Heart Burst
            </span>
            <span className="mt-1 text-[10px] font-mono uppercase tracking-widest text-[#0A0A0A]/50">
              Example figures, not client results
            </span>
          </div>

          {/* Floating White Post Cards Bursting Outward (with Mouse Parallax) */}
          {/* Card 1: Top Left */}
          <motion.div
            style={{
              x: mousePos.x * 1.2,
              y: mousePos.y * 1.2,
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute top-4 left-4 sm:left-12 bg-white border border-[#0A0A0A]/20 rounded-2xl p-4 shadow-xl w-60 z-10 hidden sm:block"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#0A0A0A]/10">
              <span className="text-[10px] font-mono font-bold text-[#0A0A0A]">POST 01 • VIRAL HOOK</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <p className="text-xs font-serif italic text-[#0A0A0A] mt-2">
              "Most B2B websites look like tax software. Design for emotion."
            </p>
            <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#0A0A0A]">
              <span className="flex items-center gap-1 font-bold">
                <Heart className="w-3.5 h-3.5 fill-black" /> {likes.toLocaleString()}
              </span>
              <span className="flex items-center gap-1 text-[#0A0A0A]/60">
                <MessageCircle className="w-3.5 h-3.5" /> {comments.toLocaleString()}
              </span>
            </div>
          </motion.div>

          {/* Card 2: Top Right */}
          <motion.div
            style={{
              x: -mousePos.x * 0.9,
              y: mousePos.y * 0.9,
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute top-2 right-4 sm:right-12 bg-white border border-[#0A0A0A]/20 rounded-2xl p-4 shadow-xl w-56 z-10 hidden sm:block"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#0A0A0A]/10">
              <span className="text-[10px] font-mono font-bold text-[#0A0A0A]">RETENTION METRIC</span>
              <span className="text-[10px] font-mono text-[#0A0A0A]/60">+312%</span>
            </div>
            <div className="text-2xl font-serif text-[#0A0A0A] font-bold mt-2">84.6% Avg Watch</div>
            <div className="w-full bg-[#FAF8F5] h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-[#0A0A0A] h-full w-[85%]" />
            </div>
          </motion.div>

          {/* Card 3: Bottom Left */}
          <motion.div
            style={{
              x: mousePos.x * 0.8,
              y: -mousePos.y * 0.8,
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute bottom-2 left-8 sm:left-24 bg-white border border-[#0A0A0A]/20 rounded-2xl p-4 shadow-xl w-64 z-10"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#0A0A0A] flex items-center justify-center text-[10px] font-mono text-[#FAF8F5]">
                BTB
              </div>
              <div>
                <div className="text-xs font-mono font-bold leading-tight">Weekly Reach Wave</div>
                <div className="text-[10px] font-mono text-[#0A0A0A]/60">Shares accelerating</div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-xs font-mono">
              <span className="flex items-center gap-1 font-bold">
                <Share2 className="w-3.5 h-3.5" /> {shares.toLocaleString()} reposts
              </span>
              <span className="text-emerald-700 font-bold">● Live Spike</span>
            </div>
          </motion.div>

          {/* Card 4: Bottom Right */}
          <motion.div
            style={{
              x: -mousePos.x * 1.3,
              y: -mousePos.y * 1.3,
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute bottom-4 right-6 sm:right-20 bg-white border border-[#0A0A0A]/20 rounded-2xl p-4 shadow-xl w-56 z-10"
          >
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#0A0A0A]/50">
              Community Inflow
            </div>
            <div className="text-xl font-serif italic text-[#0A0A0A] mt-1 font-bold">
              +14,200 New Followers
            </div>
            <div className="text-[10px] font-mono text-emerald-800 font-bold mt-1">
              ↑ 480% Organic MoM
            </div>
          </motion.div>
        </div>

        {/* Hero bottom ticker */}
        <div className="pt-8 border-t border-[#0A0A0A]/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#0A0A0A]/60 gap-4">
          <span>ALGORITHMIC VELOCITY ENGINE: OPTIMIZED</span>
          <span>TIKTOK • INSTAGRAM • X • LINKEDIN • YOUTUBE SHORTS</span>
        </div>
      </section>

      {/* =========================================================
          SERVICES SECTION (White Background)
          ========================================================= */}
      <section className="bg-white py-28 md:py-36 px-6 md:px-12 border-y border-[#0A0A0A]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/40 mb-3 block">
                Social Growth Architecture
              </span>
              <h2 className="font-serif italic text-4xl md:text-6xl text-[#0A0A0A]">
                The complete distribution machinery.
              </h2>
            </div>
            <p className="text-sm font-sans text-[#0A0A0A]/60 max-w-sm">
              We manage the entire lifecycle from ideation and filming to algorithmic optimization and CRM retargeting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <TiltCard
                  key={idx}
                  className="bg-[#FAF8F5]/30 border border-[#0A0A0A]/10 p-6 flex flex-col justify-between group"
                  maxTilt={10}
                  dataCursor="view"
                >
                  <div>
                    <div className="flex items-center justify-between pb-6 border-b border-[#0A0A0A]/10">
                      <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                        {item.num}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-white border border-[#0A0A0A]/10 flex items-center justify-center text-[#0A0A0A] shadow-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="mt-6">
                      <h3 className="font-serif italic text-2xl text-[#0A0A0A]">{item.title}</h3>
                      <p className="text-xs font-sans text-[#0A0A0A]/70 mt-3 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#0A0A0A]/10 flex items-center justify-between text-[10px] font-mono text-[#0A0A0A]/40">
                    <span>MANAGED IN-HOUSE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#0A0A0A] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PHONE MOCKUP WITH AUTO-SCROLLING FEED & ANIMATED GROWTH CHART (Beige Background)
          ========================================================= */}
      <section className="py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Phone Mockup with Auto-Scrolling Feed */}
          <div className="lg:col-span-5 flex flex-col items-center gap-3">
            <TiltCard maxTilt={12} className="w-72 sm:w-80 bg-white border-2 border-[#0A0A0A] rounded-[42px] shadow-2xl p-2.5 overflow-hidden">
              {/* Inner phone shell */}
              <div className="bg-[#FAF8F5]/40 rounded-[34px] border border-[#0A0A0A]/10 overflow-hidden flex flex-col h-[520px]">
                {/* Phone Top Notch */}
                <div className="bg-white px-5 py-3 border-b border-[#0A0A0A]/10 flex items-center justify-between text-[11px] font-mono">
                  <span>9:41</span>
                  <div className="w-20 h-4 bg-[#0A0A0A] rounded-full" />
                  <span>5G ●</span>
                </div>

                {/* Auto-scrolling feed container */}
                <div className="flex-1 overflow-hidden relative p-3">
                  <motion.div
                    animate={{ y: ['0%', '-50%'] }}
                    transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                    className="space-y-4"
                  >
                    {[...feedPosts, ...feedPosts].map((post, pIdx) => (
                      <div
                        key={pIdx}
                        className="bg-white border border-[#0A0A0A]/15 rounded-2xl p-4 shadow-sm"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-[#0A0A0A] flex items-center justify-center">
                              <BirdMascot variant="perched" strokeColor="#FAF8F5" className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-[11px] font-mono font-bold leading-none">
                                {post.author}
                              </div>
                              <div className="text-[9px] font-mono text-[#0A0A0A]/50">
                                {post.handle}
                              </div>
                            </div>
                          </div>
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#FAF8F5] border border-[#0A0A0A]/10 font-bold">
                            {post.tag}
                          </span>
                        </div>

                        <p className="text-xs font-serif italic text-[#0A0A0A] mt-3 leading-snug">
                          {post.content}
                        </p>

                        <div className="mt-3 pt-2 border-t border-[#0A0A0A]/10 flex items-center justify-between text-[10px] font-mono">
                          <span className="flex items-center gap-1 font-bold">
                            <Heart className="w-3 h-3 fill-black" /> {post.likes}
                          </span>
                          <span className="flex items-center gap-1 text-[#0A0A0A]/60">
                            <MessageCircle className="w-3 h-3" /> {post.comments}
                          </span>
                          <Share2 className="w-3 h-3 text-[#0A0A0A]/60" />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Phone Bottom Dock */}
                <div className="bg-white p-3 border-t border-[#0A0A0A]/10 flex justify-around text-xs font-mono">
                  <span className="font-bold">FEED</span>
                  <span className="text-[#0A0A0A]/40">REELS</span>
                  <span className="text-[#0A0A0A]/40">ANALYTICS</span>
                </div>
              </div>
            </TiltCard>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#0A0A0A]/50">Example feed, illustrative figures</span>
          </div>

          {/* Right: Animated Growth Chart */}
          <div className="lg:col-span-7">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/40 mb-2 block">
              Compounding Trajectory
            </span>
            <h2 className="font-serif italic text-4xl sm:text-5xl text-[#0A0A0A] leading-tight">
              Exponential organic curves. No bot farms.
            </h2>
            <p className="text-sm font-sans text-[#0A0A0A]/70 mt-4 leading-relaxed max-w-xl">
              We combine high-end editorial aesthetics with rigorous short-form algorithmic hooks.
            </p>

            {/* SVG Line Chart that draws on scroll */}
            <div className="mt-8 bg-white border-2 border-[#0A0A0A] rounded-3xl p-6 md:p-8 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#0A0A0A]/10 gap-4">
                <div>
                  <div className="text-xs font-mono font-bold text-[#0A0A0A] flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <span>EXAMPLE • 6-MONTH REACH TRAJECTORY</span>
                  </div>
                  <div className="text-[10px] font-mono text-[#0A0A0A]/60 mt-0.5">
                    Illustrative figures, not client results. Hover the pins to inspect.
                  </div>
                </div>

                {/* Metric Tab Selector */}
                <div className="flex items-center gap-2 bg-[#FAF8F5] p-1 rounded-full border border-[#0A0A0A]/10">
                  <button
                    type="button"
                    onClick={() => setActiveMetricTab('followers')}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                      activeMetricTab === 'followers'
                        ? 'bg-[#0A0A0A] text-white font-bold shadow-xs'
                        : 'text-[#0A0A0A]/60 hover:text-[#0A0A0A]'
                    }`}
                  >
                    Followers (+418%)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveMetricTab('impressions')}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                      activeMetricTab === 'impressions'
                        ? 'bg-[#0A0A0A] text-white font-bold shadow-xs'
                        : 'text-[#0A0A0A]/60 hover:text-[#0A0A0A]'
                    }`}
                  >
                    Impressions (18.4M)
                  </button>
                </div>
              </div>

              {/* Chart SVG with Interactive Milestone Pins */}
              <div className="relative h-56 sm:h-64 w-full pt-6">
                {/* Active Hover Tooltip floating above chart */}
                {hoveredMilestone && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-2 left-1/2 -translate-x-1/2 z-20 bg-[#0A0A0A] text-[#FAF8F5] px-4 py-2 rounded-xl text-xs font-mono shadow-2xl flex items-center gap-3 border border-white/20 pointer-events-none"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <div>
                      <span className="text-[10px] text-[#FAF8F5]/60 block">{hoveredMilestone.month}: {hoveredMilestone.label}</span>
                      <span className="font-bold text-sm text-white">{hoveredMilestone.value}</span>
                    </div>
                    <span className="text-[10px] text-amber-400 font-bold border-l border-white/20 pl-2">
                      {hoveredMilestone.sub}
                    </span>
                  </motion.div>
                )}

                <svg className="w-full h-full overflow-visible" viewBox="0 0 500 200">
                  {/* Grid Lines */}
                  <line x1="0" y1="40" x2="500" y2="40" stroke="#0A0A0A" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.15" />
                  <line x1="0" y1="90" x2="500" y2="90" stroke="#0A0A0A" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.15" />
                  <line x1="0" y1="140" x2="500" y2="140" stroke="#0A0A0A" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.15" />
                  <line x1="0" y1="190" x2="500" y2="190" stroke="#0A0A0A" strokeWidth="1" opacity="0.3" />

                  {/* Growth Curve Line 1: Followers (Solid Black) */}
                  <motion.path
                    d="M 10 180 C 80 170, 160 150, 240 120 C 320 90, 400 40, 490 20"
                    fill="none"
                    stroke="#0A0A0A"
                    strokeWidth={activeMetricTab === 'followers' ? 4 : 2}
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: 'easeInOut' }}
                    className={activeMetricTab === 'followers' ? 'opacity-100' : 'opacity-40'}
                  />

                  {/* Growth Curve Line 2: Impressions / Engagement (Amber Dotted) */}
                  <motion.path
                    d="M 10 185 C 90 180, 180 160, 260 110 C 340 60, 420 25, 490 10"
                    fill="none"
                    stroke="#E67E22"
                    strokeWidth={activeMetricTab === 'impressions' ? 4 : 2}
                    strokeDasharray="5 5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.2, ease: 'easeInOut' }}
                    className={activeMetricTab === 'impressions' ? 'opacity-100' : 'opacity-40'}
                  />

                  {/* Interactive Milestone Nodes on Month 2, 4, 6 */}
                  {/* Node 1: Month 2 */}
                  <g
                    className="cursor-pointer"
                    onMouseEnter={() =>
                      setHoveredMilestone({
                        month: 'MONTH 02',
                        label: 'Initial Hook Validation',
                        value: '+14,800 Followers',
                        sub: '3 Viral Hits',
                      })
                    }
                    onMouseLeave={() => setHoveredMilestone(null)}
                  >
                    <circle cx="120" cy="160" r="10" fill="transparent" />
                    <circle cx="120" cy="160" r="5" fill="#0A0A0A" className="transition-transform hover:scale-150" />
                  </g>

                  {/* Node 2: Month 4 */}
                  <g
                    className="cursor-pointer"
                    onMouseEnter={() =>
                      setHoveredMilestone({
                        month: 'MONTH 04',
                        label: 'Algorithmic Compounding',
                        value: '84,200 Followers',
                        sub: 'Top 1% Creator Velocity',
                      })
                    }
                    onMouseLeave={() => setHoveredMilestone(null)}
                  >
                    <circle cx="260" cy="110" r="10" fill="transparent" />
                    <circle cx="260" cy="110" r="6" fill="#E67E22" className="transition-transform hover:scale-150" />
                  </g>

                  {/* Node 3: Month 6 */}
                  <g
                    className="cursor-pointer"
                    onMouseEnter={() =>
                      setHoveredMilestone({
                        month: 'MONTH 06',
                        label: 'All-Time High (ATH)',
                        value: '+418.5% Net Growth',
                        sub: '18.4M Impressions',
                      })
                    }
                    onMouseLeave={() => setHoveredMilestone(null)}
                  >
                    <circle cx="490" cy="15" r="12" fill="transparent" />
                    <circle cx="490" cy="15" r="7" fill="#10B981" className="transition-transform hover:scale-150" />
                  </g>
                </svg>

                {/* X Axis labels */}
                <div className="flex justify-between text-[10px] font-mono text-[#0A0A0A]/50 mt-3 border-t border-[#0A0A0A]/10 pt-2">
                  <span>MONTH 01</span>
                  <span>MONTH 02</span>
                  <span>MONTH 03</span>
                  <span>MONTH 04</span>
                  <span>MONTH 05</span>
                  <span className="font-bold text-[#0A0A0A]">MONTH 06 (ATH)</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#0A0A0A]/10 flex flex-wrap items-center justify-between text-[11px] font-mono gap-2">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 font-bold text-[#0A0A0A]">
                    <span className="w-3 h-0.5 bg-[#0A0A0A]" /> Verified Followers
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-700 font-bold">
                    <span className="w-3 h-0.5 border-t border-dashed border-amber-600" /> Impressions Reach
                  </span>
                </div>
                <span className="text-[#0A0A0A]/40">AUDITED BY MIXPANEL & GA4</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MONTHLY CONTENT CALENDAR GRID (Black Background)
          ========================================================= */}
      <section className="bg-[#0A0A0A] text-[#FAF8F5] py-28 md:py-36 px-6 md:px-12 border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FAF8F5]/40 mb-3 block">
                Editorial Cadence
              </span>
              <h2 className="font-serif italic text-4xl md:text-6xl text-white">
                Monthly production calendar matrix.
              </h2>
            </div>
            <p className="text-sm font-sans text-[#FAF8F5]/60 max-w-sm">
              We plan, film, edit, and queue your content weeks in advance. Click any slot to inspect the production brief.
            </p>
          </div>

          {/* Calendar Matrix Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {calendarDays.map((item, idx) => (
              <TiltCard
                key={idx}
                maxTilt={6}
                onClick={() => setActiveDayModal(item)}
                className="bg-white/5 border border-white/10 rounded-2xl p-4.5 hover:border-amber-400/50 transition-all flex flex-col justify-between cursor-pointer group hover:bg-white/10"
                glowColor="rgba(230,126,34,0.15)"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono">
                    <span className="font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.day}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[9px] ${
                        item.status === 'Published'
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : item.status === 'Scheduled'
                          ? 'bg-white/10 text-white'
                          : 'bg-amber-500/20 text-amber-300'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="mt-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#FAF8F5]/50 flex items-center justify-between">
                      <span>{item.format}</span>
                      <Play className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                    </span>
                    <h4 className="font-serif text-lg text-white mt-1 leading-snug group-hover:translate-x-0.5 transition-transform">
                      {item.topic}
                    </h4>
                  </div>
                </div>

                <div className="mt-4 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#FAF8F5]/40">
                  <span>REACH:</span>
                  <span className="text-white font-bold">{item.views}</span>
                </div>
              </TiltCard>
            ))}
          </div>

          <div className="mt-8 text-center text-xs font-mono text-[#FAF8F5]/40">
            EXAMPLE CALENDAR • CLICK ANY SLOT TO INSPECT CREATIVE BRIEF
          </div>
        </div>

        {/* Modal for Selected Calendar Day */}
        <AnimatePresence>
          {activeDayModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9990] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setActiveDayModal(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0A0A0A] text-[#FAF8F5] border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative"
              >
                <button
                  type="button"
                  onClick={() => setActiveDayModal(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-amber-500 text-black font-bold">
                    {activeDayModal.day}
                  </span>
                  <span className="text-xs font-mono text-[#FAF8F5]/60 uppercase">
                    {activeDayModal.format}
                  </span>
                </div>

                <h3 className="font-serif italic text-3xl text-white mb-2">
                  {activeDayModal.topic}
                </h3>

                <p className="text-xs font-sans text-[#FAF8F5]/70 leading-relaxed mb-6">
                  Engineered with an immediate 2-second visual pattern interrupt, custom motion graphics audio stings, and high-contrast typography.
                </p>

                <div className="space-y-3 bg-white/5 rounded-2xl p-4 border border-white/10 text-xs font-mono mb-6">
                  <div className="flex justify-between">
                    <span className="text-[#FAF8F5]/50">Target Platforms:</span>
                    <span className="text-white font-bold">TikTok · Reels · X · LinkedIn</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#FAF8F5]/50">Audio Layer:</span>
                    <span className="text-white font-bold">Original High-Fidelity Master</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#FAF8F5]/50">Projected Engagement:</span>
                    <span className="text-emerald-400 font-bold">Top 5% Algorithmic Tier</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveDayModal(null)}
                  className="w-full py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-[#FAF8F5] transition-colors"
                >
                  Close Inspection
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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
            Turn your brand into an organic powerhouse.
          </h2>
          <p className="text-sm font-sans text-[#0A0A0A]/60 max-w-md mx-auto mt-4">
            Schedule a strategy audit to review your current reach, creative bottlenecks, and untapped virality potential.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <MagneticButton to="/contact" variant="black" cursorText="talk">
              Book Social Strategy Call
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </MagneticButton>
            <MagneticButton to="/ai-integration" variant="outline" cursorText="next">
              Next: AI Integration →
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

