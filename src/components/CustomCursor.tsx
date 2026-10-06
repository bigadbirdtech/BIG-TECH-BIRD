import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouch, setIsTouch] = useState<boolean>(false);

  const mouseX = useSpring(0, { damping: 28, stiffness: 350 });
  const mouseY = useSpring(0, { damping: 28, stiffness: 350 });

  useEffect(() => {
    // Check if device has fine pointer (mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check target element or closest parent for data-cursor or clickable tags
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorHolder = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorHolder) {
        const text = cursorHolder.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
        return;
      }

      const interactive = target.closest('a, button, [role="button"], input, textarea, select');
      if (interactive) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouch || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        animate={{
          width: cursorText ? 64 : isHovered ? 40 : 12,
          height: cursorText ? 64 : isHovered ? 40 : 12,
          backgroundColor: isHovered ? '#0A0A0A' : '#0A0A0A',
          borderColor: '#FAF8F5',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="rounded-full flex items-center justify-center border border-white/20 shadow-md backdrop-blur-[1px]"
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-[10px] font-sans font-semibold tracking-wider uppercase text-[#FAF8F5] select-none text-center"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
};

