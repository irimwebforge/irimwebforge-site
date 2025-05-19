'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Typography } from '../../components/atoms/Typography';
import { Card } from '../../components/molecules/Card';
import { Logo } from '../../components/atoms/Logo';
import { Icon, type IconName } from '../../components/atoms/Icon';

interface PageItem {
  title: string;
  description: string;
  href: string;
  iconName: IconName;
  variant: 'default' | 'outlined' | 'elevated' | 'accent';
}

const pages: PageItem[] = [
  {
    title: 'Fondamentaux',
    description: 'Couleurs, typographie et fondamentaux du design system',
    href: '/ds-lab/fundamentals',
    iconName: 'Palette',
    variant: 'default',
  },
  {
    title: 'Atomic Design',
    description: 'Bibliothèque de composants atomiques, moléculaires et organismes',
    href: '/ds-lab/components',
    iconName: 'Atom',
    variant: 'default',
  },
  {
    title: 'Templates',
    description: 'Modèles de pages et sections réutilisables',
    href: '/ds-lab/templates',
    iconName: 'FileText',
    variant: 'default',
  },
  {
    title: 'Icônes',
    description: 'Bibliothèque Lucide Icons intégrée au design system',
    href: '/ds-lab/icons',
    iconName: 'Sparkles',
    variant: 'default',
  },
];

export default function DSLabHomePage() {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-12 animate-fadeIn">
      <div className="flex flex-col items-center mb-12">
        <Logo width={150} height={50} className="mb-6 animate-pulse-subtle" />

        <Typography as="h1" variant="h1" className="mb-3 text-center font-bold italic">
          Design System Lab
        </Typography>

        <Typography variant="lead" className="max-w-2xl text-center">
          Environnement de développement et de test pour le design system IrimWebForge
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {pages.map((page, index) => (
          <Link
            href={page.href}
            key={index}
            className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded-md"
            aria-label={`Accéder à la section ${page.title}`}
            onMouseEnter={() => setHoveredCardIndex(index)}
            onMouseLeave={() => setHoveredCardIndex(null)}
            onFocus={() => setHoveredCardIndex(index)}
            onBlur={() => setHoveredCardIndex(null)}
          >
            <Card
              variant={page.variant === 'outlined' ? 'outline' : page.variant}
              className="h-full transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-md"
            >
              <div className="flex items-start p-4">
                <div className="text-3xl mr-4 flex items-center">
                  <Icon
                    name={page.iconName}
                    size={24}
                    className={`text-primary transition-all duration-300 ${
                      hoveredCardIndex === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <Typography as="h2" variant="h4" className="mb-2">
                    {page.title}
                  </Typography>
                  <Typography variant="p" className="text-secondary">
                    {page.description}
                  </Typography>
                </div>
              </div>
              <div className="px-4 pb-2">
                <div className="flex justify-end">
                  <Icon
                    name="ArrowRight"
                    size={16}
                    className={`text-primary transition-all duration-300 ${
                      hoveredCardIndex === index ? 'translate-x-1 opacity-100' : 'opacity-50'
                    }`}
                  />
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link href="/" className="text-primary hover:underline inline-flex items-center gap-2">
          <Icon name="ArrowLeft" size={16} />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
