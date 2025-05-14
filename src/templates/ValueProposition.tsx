'use client';

import React from 'react';
import { Typography } from '../components/atoms/Typography';
import { Container } from '../components/atoms/Container';
import { FeatureGrid } from '../components/molecules/FeatureGrid';
import { StatGroup } from '../components/molecules/StatCard';
import { Testimonial } from '../components/molecules/Testimonial';
import Image from 'next/image';

// Types pour les valeurs
export type Value = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary';
};

// Types pour les statistiques
export type Stat = {
  title: string;
  value: string;
  valueSuffix?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  accentColor?: 'primary' | 'secondary' | 'tertiary';
  trend?: {
    value: string;
    direction: 'up' | 'down';
    label?: string;
  };
};

// Types pour les témoignages
export type TestimonialItem = {
  quote: string;
  author: string;
  company?: string;
  projectName?: string;
  projectUrl?: string;
};

// Types pour les propriétés du composant
export interface ValuePropositionProps {
  title: string;
  subtitle?: string;
  description?: string;
  values: Value[];
  stats?: Stat[];
  showStats?: boolean;
  testimonials?: TestimonialItem[];
  showTestimonials?: boolean;
  valueLayout?: 'grid' | 'list' | 'cards';
  imageUrl?: string;
  imagePosition?: 'left' | 'right' | 'top';
  backgroundColor?: 'light' | 'dark' | 'primary' | 'transparent';
  className?: string;
}

/**
 * Template de présentation des valeurs, statistiques et témoignages
 */
export const ValueProposition = ({
  title,
  subtitle,
  description,
  values,
  stats = [],
  showStats = true,
  testimonials = [],
  showTestimonials = true,
  valueLayout = 'grid',
  imageUrl,
  imagePosition = 'right',
  backgroundColor = 'transparent',
  className = '',
}: ValuePropositionProps) => {
  // Classes pour le fond
  const backgroundClasses = {
    light: 'bg-gray-50 dark:bg-gray-900',
    dark: 'bg-gray-900 text-white',
    primary: 'bg-[var(--color-primary-50)] dark:bg-[var(--color-primary-900)]',
    transparent: '',
  };

  return (
    <section className={`py-16 ${backgroundClasses[backgroundColor]} ${className}`}>
      <Container>
        {/* En-tête de la section */}
        <div
          className={`text-center mb-12 ${imageUrl && imagePosition === 'top' ? 'grid gap-8' : ''}`}
        >
          {imageUrl && imagePosition === 'top' && (
            <div className="max-w-md mx-auto relative h-64">
              <Image
                src={imageUrl}
                alt="Illustration des valeurs"
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
              />
            </div>
          )}

          <div>
            <Typography as="h2" variant="h2" className="mb-3 font-bold italic">
              {title}
            </Typography>

            {subtitle && (
              <Typography as="h3" variant="h3" className="mb-4">
                {subtitle}
              </Typography>
            )}

            {description && (
              <Typography variant="lead" className="max-w-3xl mx-auto">
                {description}
              </Typography>
            )}
          </div>
        </div>

        {/* Image + Valeurs en disposition côte à côte */}
        {imageUrl && (imagePosition === 'left' || imagePosition === 'right') ? (
          <div
            className={`flex flex-col ${imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 mb-16`}
          >
            <div className="md:w-2/5 relative">
              <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg">
                <Image
                  src={imageUrl}
                  alt="Illustration des valeurs"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="md:w-3/5">
              <FeatureGrid
                features={values.map((value) => ({
                  id: value.id,
                  title: value.title,
                  description: value.description,
                  icon: value.icon,
                  color: value.color,
                }))}
                variant={
                  valueLayout === 'cards' ? 'card' : valueLayout === 'list' ? 'ghost' : 'outline'
                }
                columns={2}
              />
            </div>
          </div>
        ) : (
          <div className="mb-16">
            <FeatureGrid
              features={values.map((value) => ({
                id: value.id,
                title: value.title,
                description: value.description,
                icon: value.icon,
                color: value.color,
              }))}
              variant={
                valueLayout === 'cards' ? 'card' : valueLayout === 'list' ? 'ghost' : 'outline'
              }
              columns={3}
            />
          </div>
        )}

        {/* Statistiques */}
        {showStats && stats.length > 0 && (
          <div className="mb-16">
            <StatGroup
              stats={stats}
              columns={Math.min(4, Math.max(2, stats.length)) as 2 | 3 | 4}
              variant="default"
            />
          </div>
        )}

        {/* Témoignages */}
        {showTestimonials && testimonials.length > 0 && (
          <div className="mt-16">
            <Typography as="h3" variant="h3" className="text-center mb-8">
              Ce qu&apos;en disent nos clients
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  company={testimonial.company}
                  projectName={testimonial.projectName}
                  projectUrl={testimonial.projectUrl}
                  variant={index === 0 ? 'featured' : 'default'}
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ValueProposition;
