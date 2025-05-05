import React from 'react';
import Image from 'next/image';
import { Typography } from '../atoms/Typography';
import { Button } from '../atoms/Button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick?: () => void;
  imageSrc?: string;
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  ctaText,
  onCtaClick,
  imageSrc,
  className,
}: HeroSectionProps) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Typography as="h1" variant="h1">{title}</Typography>
            <Typography variant="lead">{subtitle}</Typography>
            <Button variant="gradient" size="lg" onClick={onCtaClick}>
              {ctaText}
            </Button>
          </div>
          {imageSrc && (
            <div className="order-first md:order-last relative w-full aspect-video">
              <Image
                src={imageSrc}
                alt="Hero illustration"
                fill
                className="object-cover rounded-lg shadow-md"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}