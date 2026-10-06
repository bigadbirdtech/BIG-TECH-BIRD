import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Reveal after animation completes
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAF8F5] text-[#0A0A0A] select-none pointer-events-auto"
        >
          {/* Subtle noise inside preloader */}
          <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="relative flex flex-col items-center">
            {/* Glowing ambient ring behind mascot */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: [0.8, 1.2, 1], opacity: [0, 0.35, 0.15] }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
              className="absolute -top-6 w-44 h-44 rounded-full bg-amber-400 blur-2xl pointer-events-none"
            />

            {/* Official 3D Robot Bird Mascot Reveal */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 25 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-36 h-48 md:w-44 md:h-56 flex items-center justify-center"
            >
              <motion.img
                src="/brand/bird-mascot.webp"
                alt="Big Tech Bird Mascot"
                className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.14)]"
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            {/* Brand Title Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-4 flex flex-col items-center"
            >
              <h2 className="font-serif italic text-3xl tracking-tight text-[#0A0A0A]">
                Big Tech Bird
              </h2>
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#0A0A0A]/60 mt-1">
                Websites · Social · AI
              </span>
            </motion.div>

            {/* Subtle Progress Bar */}
            <div className="w-36 h-[2px] bg-[#0A0A0A]/10 mt-6 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#0A0A0A]"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.9, ease: 'easeInOut' }}
              />
            </div>

            {/* Skip button for rapid navigation */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              whileHover={{ opacity: 1 }}
              onClick={() => {
                setIsVisible(false);
                if (onComplete) onComplete();
              }}
              className="mt-6 text-[10px] uppercase tracking-widest text-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors cursor-pointer"
            >
              Skip Intro
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

