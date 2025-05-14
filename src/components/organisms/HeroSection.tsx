import React from 'react';
import { Button } from '../atoms/Button';
import { Typography } from '../atoms/Typography';

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
  const style = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {};

  return (
    <section
      className={`py-20 px-4 flex items-center justify-center relative ${className}`}
      style={style}
    >
      <div className="max-w-4xl mx-auto text-center">
        <Typography as="h1" variant="h1" className="mb-4 font-bold italic">
          {title}
        </Typography>

        <Typography as="p" variant="lead" className="mb-8 max-w-2xl mx-auto">
          {subtitle}
        </Typography>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            variant="gradient"
            size="lg"
            className="shine-effect"
            onClick={() => (window.location.href = ctaHref)}
          >
            {ctaText}
          </Button>

          {secondaryCtaText && (
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = secondaryCtaHref || '')}
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
