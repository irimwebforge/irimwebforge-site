"use client";

import React from 'react';
import { Button } from '../atoms/Button';
import { Typography } from '../atoms/Typography';
import { HeroPattern } from '../atoms/HeroPattern';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  backgroundImage?: string;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  backgroundImage,
  className = '',
}) => {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative' as const,
        color: 'white'
      }
    : {
        position: 'relative' as const
      };

  return (
    <section
      className={`py-20 px-4 flex items-center justify-center ${className}`}
      style={backgroundStyle}
    >
      {!backgroundImage && <HeroPattern />}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Typography 
          as="h1" 
          variant="h1" 
          className={`mb-4 font-bold italic ${backgroundImage ? 'text-white' : ''}`}
        >
          {title}
        </Typography>

        <Typography 
          as="p" 
          variant="lead" 
          className={`mb-8 max-w-2xl mx-auto ${backgroundImage ? 'text-white' : ''}`}
        >
          {subtitle}
        </Typography>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            variant="gradient"
            size="lg"
            href={ctaHref}
            className="shine-effect"          >
            {ctaText}
          </Button>

          {secondaryCtaText && (
            <Button
              variant={backgroundImage ? "outline" : "outline"}
              size="lg"
              href={secondaryCtaHref || ''}
              className={backgroundImage ? "text-white border-white hover:bg-white/20" : ""}
            >
              {secondaryCtaText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
