import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BirdMascot } from './BirdMascot';
import { ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Footer: React.FC = () => {
  const [isHoveringBird, setIsHoveringBird] = useState(false);

  const triggerBirdConfetti = () => {
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.9 },
      colors: ['#E67E22', '#F39C12', '#FAF8F5'],
    });
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#FAF8F5] pt-0 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Animated Live Status Marquee */}
      <div className="border-b border-white/10 bg-white/[0.02] py-3 overflow-hidden select-none">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="flex whitespace-nowrap gap-8 text-[11px] font-mono tracking-widest text-[#FAF8F5]/60 uppercase items-center"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="flex items-center gap-2 text-emerald-400 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                SYSTEM STATUS: 100% OPERATIONAL
              </span>
              <span>•</span>
              <span>60 FPS HARDWARE ACCELERATED</span>
              <span>•</span>
              <span className="text-amber-400 font-bold">BIRD AI CORE V2.4 ONLINE</span>
              <span>•</span>
              <span>24-HOUR DISPATCH GUARANTEE</span>
              <span>•</span>
              <span className="text-white font-bold">CURRENTLY ACCEPTING Q3/Q4 PARTNERS</span>
              <span>•</span>
              <span>EDITORIAL ALABASTER #FAF8F5</span>
              <span>•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Noise overlay inside footer */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="flex items-center gap-3 no-underline group inline-block">
                <BirdMascot
                  variant="perched"
                  strokeColor="#FAF8F5"
                  fillColor="none"
                  className="w-10 h-10 transition-transform group-hover:-translate-y-1"
                />
                <span className="font-serif italic text-3xl font-bold tracking-tight text-[#FAF8F5]">
                  Big Tech Bird
                </span>
              </Link>
              <p className="mt-4 text-sm text-[#FAF8F5]/60 max-w-sm font-sans leading-relaxed">
                Crafting next-generation web flagships, viral organic growth engines, and
                business-transforming AI systems.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 text-xs font-mono text-[#FAF8F5]/40">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>CURRENTLY ACCEPTING Q3/Q4 PARTNERS</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#FAF8F5]/40 mb-4">
              Disciplines
            </h4>
            <ul className="space-y-3 text-sm font-sans">
              <li>
                <Link
                  to="/website-design"
                  className="text-[#FAF8F5]/80 hover:text-white transition-colors no-underline flex items-center justify-between group"
                >
                  <span>01 Website Design</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/social-media"
                  className="text-[#FAF8F5]/80 hover:text-white transition-colors no-underline flex items-center justify-between group"
                >
                  <span>02 Social Media</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-integration"
                  className="text-[#FAF8F5]/80 hover:text-white transition-colors no-underline flex items-center justify-between group"
                >
                  <span>03 AI Integration</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#FAF8F5]/40 mb-4">
              Company & Legal
            </h4>
            <ul className="space-y-3 text-sm font-sans">
              <li>
                <Link to="/work" className="text-[#FAF8F5]/80 hover:text-white transition-colors no-underline">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#FAF8F5]/80 hover:text-white transition-colors no-underline">
                  Initiate Project
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-[#FAF8F5]/80 hover:text-white transition-colors no-underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-[#FAF8F5]/80 hover:text-white transition-colors no-underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="#top"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[#FAF8F5]/60 hover:text-white transition-colors no-underline text-xs font-mono"
                >
                  ↑ Back to Top
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Flapping Bird Mascot */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#FAF8F5]/40 mb-4">
                Network
              </h4>
              <div className="space-y-2 text-sm font-sans">
                <div>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#FAF8F5]/80 hover:text-white transition-colors no-underline flex items-center gap-1.5"
                  >
                    X / Twitter <ArrowUpRight className="w-3 h-3 text-[#FAF8F5]/40" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#FAF8F5]/80 hover:text-white transition-colors no-underline flex items-center gap-1.5"
                  >
                    LinkedIn <ArrowUpRight className="w-3 h-3 text-[#FAF8F5]/40" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#FAF8F5]/80 hover:text-white transition-colors no-underline flex items-center gap-1.5"
                  >
                    Instagram <ArrowUpRight className="w-3 h-3 text-[#FAF8F5]/40" />
                  </a>
                </div>
              </div>
            </div>

            {/* Small flapping bird mascot in bottom corner */}
            <div
              className="mt-6 flex items-center gap-3 cursor-pointer group"
              onMouseEnter={() => setIsHoveringBird(true)}
              onMouseLeave={() => setIsHoveringBird(false)}
              onClick={triggerBirdConfetti}
              data-cursor="flap"
            >
              <div className="w-9 h-9 relative">
                <BirdMascot
                  variant={isHoveringBird ? 'flapping' : 'flight'}
                  strokeColor="#FAF8F5"
                  className={`w-full h-full transition-transform duration-300 ${
                    isHoveringBird ? 'scale-125 -rotate-6' : 'hover:scale-110'
                  }`}
                  animated={isHoveringBird}
                />
              </div>
              <span className="text-[11px] font-mono text-[#FAF8F5]/50 group-hover:text-[#FAF8F5] transition-colors">
                {isHoveringBird ? 'Flying High' : 'Hover to Flap'}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar with explicit Terms & Privacy links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-[#FAF8F5]/40 gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <p>© {new Date().getFullYear()} Big Tech Bird. All rights reserved.</p>
            <span className="hidden sm:inline">•</span>
            <Link to="/terms" className="hover:text-[#FAF8F5] transition-colors underline underline-offset-2">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link to="/privacy" className="hover:text-[#FAF8F5] transition-colors underline underline-offset-2">
              Privacy Policy
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span>BEIGE #FAF8F5</span>
            <span>•</span>
            <span>BLACK #0A0A0A</span>
            <span>•</span>
            <span>WHITE #FFFFFF</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

