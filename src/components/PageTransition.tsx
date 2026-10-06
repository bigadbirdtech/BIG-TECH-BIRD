import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { BirdMascot } from './BirdMascot';

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Bird flight curtain overlay during route change */}
      <AnimatePresence>
        <motion.div
          key={`curtain-${location.pathname}`}
          className="fixed inset-0 pointer-events-none z-[9990]"
          initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
          animate={{
            clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 },
          }}
        >
          {/* Dual wipe layer: Beige then Black */}
          <div className="absolute inset-0 bg-[#0A0A0A]" />

          {/* Bird flying across the transition screen */}
          <motion.div
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full text-[#FAF8F5]"
            initial={{ left: '-10%', top: '60%' }}
            animate={{
              left: '110%',
              top: '40%',
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
            }}
          >
            <BirdMascot
              variant="flight"
              strokeColor="#FAF8F5"
              fillColor="#FAF8F5"
              className="w-20 h-16 md:w-28 md:h-20"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

