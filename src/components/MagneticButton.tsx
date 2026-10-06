import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface MagneticButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'black' | 'beige' | 'outline' | 'outline-white' | 'pill';
  cursorText?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  to,
  href,
  onClick,
  className = '',
  variant = 'black',
  cursorText,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  // Base styling depending on variant
  let baseClasses =
    'relative inline-flex items-center justify-center font-sans font-medium text-sm transition-all duration-300 rounded-full group overflow-hidden select-none ';

  if (variant === 'black') {
    baseClasses += 'bg-[#0A0A0A] text-[#FAF8F5] px-7 py-3.5 border border-[#0A0A0A]';
  } else if (variant === 'beige') {
    baseClasses += 'bg-[#FAF8F5] text-[#0A0A0A] px-7 py-3.5 border border-[#FAF8F5]';
  } else if (variant === 'outline') {
    baseClasses += 'bg-transparent text-[#0A0A0A] px-7 py-3.5 border border-[#0A0A0A]/30 hover:border-[#0A0A0A]';
  } else if (variant === 'outline-white') {
    baseClasses += 'bg-transparent text-[#FAF8F5] px-7 py-3.5 border border-white/40 hover:border-white shadow-xs';
  } else if (variant === 'pill') {
    baseClasses += 'bg-[#0A0A0A] text-[#FAF8F5] px-5 py-2 text-xs tracking-wider uppercase';
  }

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
      className={`${baseClasses} ${className}`}
      data-cursor={cursorText}
    >
      {/* Curved bottom wipe fill overlay */}
      <span
        className={`absolute inset-0 w-full h-full transform translate-y-full rounded-t-full transition-transform duration-500 ease-out group-hover:translate-y-0 ${
          variant === 'black'
            ? 'bg-white'
            : variant === 'outline'
            ? 'bg-[#0A0A0A]'
            : variant === 'outline-white'
            ? 'bg-white'
            : variant === 'beige'
            ? 'bg-[#0A0A0A]'
            : 'bg-[#FAF8F5]'
        }`}
      />

      {/* Button content */}
      <span
        className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${
          variant === 'black'
            ? 'group-hover:text-[#0A0A0A]'
            : variant === 'outline'
            ? 'group-hover:text-[#FAF8F5]'
            : variant === 'outline-white'
            ? 'group-hover:text-[#0A0A0A]'
            : variant === 'beige'
            ? 'group-hover:text-[#FAF8F5]'
            : 'group-hover:text-[#0A0A0A]'
        }`}
      >
        {children}
      </span>
    </motion.div>
  );

  if (to) {
    return (
      <Link to={to} className="inline-block" onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block" onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block bg-transparent border-none p-0 cursor-pointer">
      {content}
    </button>
  );
};

