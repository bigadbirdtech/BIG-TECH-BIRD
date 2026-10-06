import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BirdMascot } from './BirdMascot';
import { MagneticButton } from './MagneticButton';
import { ChevronDown, ArrowUpRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const services = [
    {
      num: '01',
      title: 'Website Design',
      desc: 'Bespoke, high-converting digital flagships with fluid interactions.',
      path: '/website-design',
    },
    {
      num: '02',
      title: 'Social Media',
      desc: 'High-impact organic growth, creative direction & audience capture.',
      path: '/social-media',
    },
    {
      num: '03',
      title: 'AI Integration',
      desc: 'Autonomous workflows, custom neural agents & intelligent systems.',
      path: '/ai-integration',
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[9900] transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#FAF8F5]/80 backdrop-blur-md border-b border-[#0A0A0A]/10 shadow-xs'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group text-[#0A0A0A] no-underline focus:outline-none"
            data-cursor="home"
          >
            <div className="w-8 h-10 md:w-9 md:h-11 relative flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5">
              <BirdMascot variant="perched" className="w-full h-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif italic font-bold text-xl md:text-2xl tracking-tight leading-none text-[#0A0A0A]">
                Big Tech Bird
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#0A0A0A]/60 -mt-0.5">
                DIGITAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 text-sm font-medium text-[#0A0A0A] hover:text-[#0A0A0A]/70 transition-colors py-2 cursor-pointer focus:outline-none"
                onClick={() => setServicesOpen((prev) => !prev)}
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-80 bg-[#FFFFFF] border border-[#0A0A0A]/10 shadow-2xl rounded-2xl p-3 z-50 mt-1"
                  >
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#0A0A0A]/40 px-3 py-1">
                      Our Disciplines
                    </div>
                    {services.map((s) => (
                      <Link
                        key={s.path}
                        to={s.path}
                        className={`group block p-3 rounded-xl transition-all duration-200 no-underline ${
                          location.pathname === s.path
                            ? 'bg-[#FAF8F5]/50 text-[#0A0A0A]'
                            : 'hover:bg-[#FAF8F5]/30 text-[#0A0A0A]'
                        }`}
                        data-cursor="view"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-semibold text-[#0A0A0A]/50">
                              {s.num}
                            </span>
                            <span className="text-sm font-medium text-[#0A0A0A] group-hover:translate-x-1 transition-transform">
                              {s.title}
                            </span>
                          </div>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#0A0A0A]" />
                        </div>
                        <p className="text-xs text-[#0A0A0A]/60 mt-1 font-sans line-clamp-1">
                          {s.desc}
                        </p>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/work"
              className={`text-sm font-medium transition-colors no-underline ${
                location.pathname === '/work'
                  ? 'text-[#0A0A0A] border-b-2 border-[#0A0A0A] pb-0.5'
                  : 'text-[#0A0A0A] hover:text-[#0A0A0A]/70'
              }`}
              data-cursor="view"
            >
              Work
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors no-underline ${
                location.pathname === '/contact'
                  ? 'text-[#0A0A0A] border-b-2 border-[#0A0A0A] pb-0.5'
                  : 'text-[#0A0A0A] hover:text-[#0A0A0A]/70'
              }`}
              data-cursor="talk"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <MagneticButton to="/contact" variant="pill" cursorText="talk">
              Let's talk
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 text-[#0A0A0A] hover:opacity-70 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Animated Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at top right)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9890] bg-[#0A0A0A] text-[#FAF8F5] flex flex-col justify-between p-8 pt-24 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FAF8F5]/50">
                Menu Navigation
              </span>
              <div className="flex flex-col gap-4">
                <Link
                  to="/"
                  className="font-serif italic text-4xl text-[#FAF8F5] no-underline hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>

                <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#FAF8F5]/40">
                    Services
                  </span>
                  <Link
                    to="/website-design"
                    className="font-serif text-2xl text-[#FAF8F5]/90 pl-3 no-underline"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    01 Website Design
                  </Link>
                  <Link
                    to="/social-media"
                    className="font-serif text-2xl text-[#FAF8F5]/90 pl-3 no-underline"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    02 Social Media
                  </Link>
                  <Link
                    to="/ai-integration"
                    className="font-serif text-2xl text-[#FAF8F5]/90 pl-3 no-underline"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    03 AI Integration
                  </Link>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <Link
                    to="/work"
                    className="font-serif italic text-4xl text-[#FAF8F5] no-underline hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Selected Work
                  </Link>
                </div>

                <div>
                  <Link
                    to="/contact"
                    className="font-serif italic text-4xl text-[#FAF8F5] no-underline hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#FAF8F5]/60">
                <span>EST. 2026</span>
                <span>BIG TECH BIRD</span>
              </div>
              <MagneticButton
                to="/contact"
                variant="beige"
                className="w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Let's talk — Start a Project
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

