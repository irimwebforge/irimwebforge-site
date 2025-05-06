"use client";

import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Container } from '@/components/atoms/Container';
import { ServiceHighlight } from '@/components/molecules/ServiceHighlight';
import { FeatureGrid } from '@/components/molecules/FeatureGrid';
import { Button } from '@/components/atoms/Button';
import Link from 'next/link';

// Types pour les services
export type Service = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary';
  slug?: string;
  bulletPoints?: string[];
  ctaText?: string;
  featured?: boolean;
};

// Types pour les caractéristiques
export type Feature = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary';
  link?: {
    text: string;
    url: string;
  };
};

// Types pour les propriétés du composant
export interface ServiceOverviewProps {
  title: string;
  subtitle?: string;
  description?: string;
  services: Service[];
  features?: Feature[];
  showFeatures?: boolean;
  showCtaButton?: boolean;
  ctaButtonText?: string;
  ctaButtonLink?: string;
  variant?: 'grid' | 'alternating' | 'cards';
  backgroundColor?: 'light' | 'dark' | 'primary' | 'transparent';
  className?: string;
}

/**
 * Template de présentation des services avec options de mise en page variées
 */
export const ServiceOverview = ({
  title,
  subtitle,
  description,
  services,
  features = [],
  showFeatures = true,
  showCtaButton = true,
  ctaButtonText = 'Contactez-moi',
  ctaButtonLink = '/contact',
  variant = 'grid',
  backgroundColor = 'transparent',
  className = '',
}: ServiceOverviewProps) => {
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
        <div className="text-center mb-12">
          <Typography as="h2" variant="h2" className="mb-3">
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
        
        {/* Présentation des services */}
        {variant === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <ServiceHighlight
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color || 'primary'}
                variant={service.featured ? 'featured' : 'default'}
                ctaLink={service.slug ? `/services/${service.slug}` : undefined}
                ctaText={service.ctaText || 'En savoir plus'}
                bulletPoints={service.bulletPoints}
              />
            ))}
          </div>
        )}
        
        {variant === 'alternating' && (
          <div className="space-y-16 mb-12">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                <div className="flex-1">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-[var(--color-${service.color || 'primary'}-100)]`}>
                    {service.icon}
                  </div>
                  <Typography as="h3" variant="h3" className="mb-3">
                    {service.title}
                  </Typography>
                  <Typography variant="p" className="mb-4">
                    {service.description}
                  </Typography>
                  
                  {service.bulletPoints && service.bulletPoints.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {service.bulletPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className={`text-[var(--color-${service.color || 'primary'})]`}>✓</span>
                          <Typography variant="p">{point}</Typography>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {service.slug && (
                    <Link href={`/services/${service.slug}`}>
                      <Button variant="outline" size="sm">
                        {service.ctaText || 'En savoir plus'}
                      </Button>
                    </Link>
                  )}
                </div>
                <div className="flex-1 relative h-64 md:h-full rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
                  {/* Emplacement pour une image ou illustration du service */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl p-6">{service.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {variant === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="rounded-lg p-6 border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md"
              >
                <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 bg-[var(--color-${service.color || 'primary'}-100)]`}>
                  {service.icon}
                </div>
                <Typography as="h3" variant="h4" className="mb-3">
                  {service.title}
                </Typography>
                <Typography variant="p" className="mb-4">
                  {service.description}
                </Typography>
                
                {service.slug && (
                  <Link 
                    href={`/services/${service.slug}`}
                    className="text-[var(--color-primary)] hover:underline inline-flex items-center gap-1"
                  >
                    {service.ctaText || 'En savoir plus'}
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
        
        {/* Caractéristiques supplémentaires */}
        {showFeatures && features.length > 0 && (
          <div className="mt-16">
            <Typography as="h3" variant="h3" className="text-center mb-8">
              Pourquoi me choisir?
            </Typography>
            
            <FeatureGrid
              features={features}
              variant="bordered"
              columns={3}
            />
          </div>
        )}
        
        {/* Bouton d'appel à l'action */}
        {showCtaButton && (
          <div className="text-center mt-12">
            <Link href={ctaButtonLink}>
              <Button variant="primary" size="lg">
                {ctaButtonText}
              </Button>
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ServiceOverview; 