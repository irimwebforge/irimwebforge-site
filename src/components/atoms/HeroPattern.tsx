'use client';

import React from 'react';

const HeroPattern: React.FC<{ className?: string }> = ({ className = '' }) => {
  // Pattern CSS simple et performant - remplace le SVG complexe
  const patternStyles = {
    backgroundImage: `
      radial-gradient(circle at 1px 1px, rgba(0, 179, 179, 0.15) 1px, transparent 0),
      radial-gradient(circle at 25px 25px, rgba(0, 68, 102, 0.08) 1px, transparent 0)
    `,
    backgroundSize: '50px 50px, 100px 100px',
    backgroundPosition: '0 0, 25px 25px',
  };

  return (
    <div
      className={`w-full h-full absolute inset-0 pattern-optimized ${className}`}
      style={{
        ...patternStyles,
        zIndex: 0,
      }}
    />
  );
};

export { HeroPattern };
