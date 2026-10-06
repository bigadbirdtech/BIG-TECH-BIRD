import React from 'react';
import { motion } from 'framer-motion';

interface BirdMascotProps {
  className?: string;
  variant?: 'perched' | 'flight' | 'minimal' | 'flapping' | 'outline' | 'vector';
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
  animated?: boolean;
  useImage?: boolean;
}

export const BirdMascot: React.FC<BirdMascotProps> = ({
  className = 'w-12 h-12',
  variant = 'perched',
  strokeColor = '#0A0A0A',
  fillColor = 'none',
  strokeWidth = 1.6,
  animated = false,
  useImage = true,
}) => {
  // If useImage is true and not explicitly requesting vector, render the official 3D brand mascot
  if (useImage && variant !== 'vector') {
    const getVariantClasses = () => {
      switch (variant) {
        case 'flight':
          return 'transform -rotate-12 scale-105';
        case 'flapping':
          return 'transform -rotate-6';
        default:
          return '';
      }
    };

    return (
      <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
        <motion.img
          src="/brand/bird-mascot.webp"
          alt="Big Tech Bird Official Mascot"
          className={`w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-transform duration-300 ${getVariantClasses()}`}
          animate={
            animated
              ? {
                  y: [0, -5, 0],
                  rotate: variant === 'flight' ? [-12, -8, -12] : [0, 2, -2, 0],
                }
              : undefined
          }
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileHover={{
            scale: 1.1,
            rotate: [0, 4, -4, 0],
            transition: { duration: 0.35 },
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/brand/bird-mascot.png';
          }}
        />
      </div>
    );
  }

  // Precise vector representation of the official Robot Bird character
  // (Faceted crown, headphones with orange rings, smiling eyes, open beak, chest core, waving wing)
  return (
    <svg
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Big Tech Bird Mascot Vector"
    >
      {/* Head & Crown Feather */}
      <path
        d="M 52 14 C 58 8, 66 6, 72 4 C 68 12, 64 20, 60 26"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Head low-poly silhouette */}
      <path
        d="M 40 32 L 60 26 L 82 34 L 88 56 L 78 72 L 44 72 L 34 54 Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fillColor}
      />
      {/* Left Headphone */}
      <rect
        x="26"
        y="42"
        width="8"
        height="18"
        rx="3"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill={strokeColor}
      />
      {/* Right Headphone */}
      <rect
        x="88"
        y="42"
        width="8"
        height="18"
        rx="3"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill={strokeColor}
      />
      {/* Headband */}
      <path
        d="M 30 42 C 34 22, 88 22, 92 42"
        stroke={strokeColor}
        strokeWidth={strokeWidth * 0.9}
        strokeLinecap="round"
      />
      {/* Smiling Curved Eyes */}
      <path
        d="M 46 48 Q 51 43 56 48"
        stroke={strokeColor}
        strokeWidth={strokeWidth * 1.2}
        strokeLinecap="round"
      />
      <path
        d="M 66 48 Q 71 43 76 48"
        stroke={strokeColor}
        strokeWidth={strokeWidth * 1.2}
        strokeLinecap="round"
      />
      {/* Open Triangular Beak */}
      <path
        d="M 55 52 L 67 52 L 61 64 Z"
        stroke="#E67E22"
        strokeWidth={strokeWidth}
        fill="#E67E22"
        strokeLinejoin="round"
      />
      {/* Neck Joint */}
      <rect x="48" y="72" width="26" height="4" rx="2" fill={strokeColor} />
      {/* Body Silhouette */}
      <path
        d="M 42 76 L 80 76 L 88 96 L 78 116 L 44 116 L 34 96 Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fillColor}
      />
      {/* Octagonal Chest Core */}
      <path
        d="M 56 86 L 66 86 L 71 91 L 71 99 L 66 104 L 56 104 L 51 99 L 51 91 Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill={strokeColor}
      />
      {/* Glowing Core Center */}
      <circle cx="61" cy="95" r="3" fill="#F39C12" />
      {/* Left Wing (at rest) */}
      <path
        d="M 34 82 L 18 96 L 22 114 L 38 104 Z"
        stroke="#E67E22"
        strokeWidth={strokeWidth}
        fill="#E67E22"
        strokeLinejoin="round"
      />
      {/* Right Wing (waving high!) */}
      <path
        d="M 88 82 L 108 60 L 112 76 L 98 94 Z"
        stroke="#E67E22"
        strokeWidth={strokeWidth}
        fill="#E67E22"
        strokeLinejoin="round"
      />
      {/* Legs & Feet */}
      <path
        d="M 50 116 L 50 126 M 72 116 L 72 126"
        stroke={strokeColor}
        strokeWidth={strokeWidth * 1.2}
        strokeLinecap="round"
      />
      <ellipse cx="48" cy="128" rx="8" ry="4" fill="#E67E22" />
      <ellipse cx="74" cy="128" rx="8" ry="4" fill="#E67E22" />
    </svg>
  );
};
