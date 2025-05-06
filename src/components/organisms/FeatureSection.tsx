'use client';

import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Container } from '@/components/atoms/Container';
import { Divider } from '@/components/atoms/Divider';
import { Card } from '@/components/molecules/Card';
import { Button } from '@/components/atoms/Button';
import { FeatureGrid } from '@/components/molecules/FeatureGrid';
import { Badge } from '@/components/atoms/Badge';
import Image from 'next/image';
import Link from 'next/link';

export interface Feature {
  id: string;
  icon?: string | React.ReactNode;
  title: string;
  description: string;
  link?: {
    text: string;
    href: string;
  };
  color?: 'primary' | 'secondary' | 'tertiary';
}

export interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  layout?: 'grid' | 'cards' | 'list' | 'alternating' | 'compact';
  withImages?: boolean;
  imageSide?: 'left' | 'right';
  mainImage?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  backgroundColor?: 'primary' | 'secondary' | 'tertiary' | 'light' | 'dark' | 'none';
  textAlign?: 'left' | 'center' | 'right';
  withDividers?: boolean;
  withNumbers?: boolean;
  className?: string;
  badge?: {
    text: string;
    variant?: 'primary' | 'secondary' | 'tertiary';
  };
  cta?: {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  };
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  description,
  features,
  columns = 3,
  layout = 'grid',
  withImages = true,
  imageSide = 'right',
  mainImage,
  backgroundColor = 'none',
  textAlign = 'left',
  withDividers = false,
  withNumbers = false,
  className = '',
  badge,
  cta,
}) => {
  // Classes basées sur l'alignement du texte
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  // Classes basées sur la couleur de fond
  const bgClasses = {
    none: '',
    light: 'bg-gray-50 dark:bg-gray-900',
    dark: 'bg-gray-900 text-white',
    primary: 'bg-[var(--color-primary)] bg-opacity-5',
    secondary: 'bg-[var(--color-secondary)] bg-opacity-5',
    tertiary: 'bg-[var(--color-tertiary)] bg-opacity-5',
  };
  
  // Classes basées sur le nombre de colonnes
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };
  
  // Rendu des fonctionnalités selon le layout choisi
  const renderFeatures = () => {
    switch (layout) {
      case 'cards':
        return renderCardsLayout();
      case 'list':
        return renderListLayout();
      case 'alternating':
        return renderAlternatingLayout();
      case 'compact':
        return renderCompactLayout();
      default:
        // Grid layout (default)
        // Adapter les features pour le FeatureGrid
        const adaptedFeatures = features.map(feature => ({
          ...feature,
          // Convertir le lien si nécessaire
          link: feature.link ? {
            text: feature.link.text,
            url: feature.link.href,
          } : undefined,
        }));
        
        return (
          <FeatureGrid 
            features={adaptedFeatures}
            columns={columns}
            variant={withNumbers ? 'bordered' : 'card'}
          />
        );
    }
  };
  
  // Layout de type cartes
  const renderCardsLayout = () => {
    return (
      <div className={`grid ${columnClasses[columns]} gap-6 mt-8`}>
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className="p-6"
            hover
          >
            <div className="flex flex-col h-full">
              {/* Icône ou index */}
              {renderFeatureIcon(feature, index)}
              
              {/* Titre */}
              <Typography variant="h3" className="text-xl font-bold mt-4 mb-2">
                {feature.title}
              </Typography>
              
              {/* Description */}
              <Typography variant="p" className="text-secondary flex-grow">
                {feature.description}
              </Typography>
              
              {/* Lien (optionnel) */}
              {feature.link && (
                <div className="mt-4">
                  <Link href={feature.link.href} className="text-[var(--color-primary)] hover:underline font-medium">
                    {feature.link.text}
                  </Link>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    );
  };
  
  // Layout de type liste
  const renderListLayout = () => {
    return (
      <div className="space-y-8 mt-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4">
            {/* Icône ou index */}
            <div className="flex-shrink-0 mt-1">
              {renderFeatureIcon(feature, index, 'large')}
            </div>
            
            <div>
              {/* Titre */}
              <Typography variant="h3" className="text-xl font-bold mb-2">
                {feature.title}
              </Typography>
              
              {/* Description */}
              <Typography variant="p" className="text-secondary">
                {feature.description}
              </Typography>
              
              {/* Lien (optionnel) */}
              {feature.link && (
                <div className="mt-2">
                  <Link href={feature.link.href} className="text-[var(--color-primary)] hover:underline font-medium">
                    {feature.link.text}
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  // Layout en alternance (texte/image)
  const renderAlternatingLayout = () => {
    return (
      <div className="space-y-16 mt-8">
        {features.map((feature, index) => {
          // Alterner la position de l'image
          const isImageRight = (index % 2 === 0) === (imageSide === 'right');
          
          return (
            <div key={index} className={`flex flex-col ${isImageRight ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
              {/* Contenu textuel */}
              <div className="flex-1">
                {/* Numéro ou icône */}
                {renderFeatureIcon(feature, index, 'large')}
                
                {/* Titre */}
                <Typography variant="h3" className="text-2xl font-bold mt-4 mb-3">
                  {feature.title}
                </Typography>
                
                {/* Description */}
                <Typography variant="p" className="text-secondary">
                  {feature.description}
                </Typography>
                
                {/* Lien (optionnel) */}
                {feature.link && (
                  <div className="mt-4">
                    <Link href={feature.link.href}>
                      <Button variant="outline" size="sm">
                        {feature.link.text}
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Image */}
              {withImages && (
                <div className="flex-1">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={typeof feature.icon === 'string' ? feature.icon : '/images/placeholder-feature.svg'}
                      alt={feature.title}
                      fill
                      className="object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };
  
  // Layout compact
  const renderCompactLayout = () => {
    return (
      <div className={`grid ${columnClasses[columns]} gap-6 mt-8`}>
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            {/* Icône ou numéro */}
            {renderFeatureIcon(feature, index, 'small')}
            
            <div>
              {/* Titre */}
              <Typography variant="h4" className="font-semibold mb-1">
                {feature.title}
              </Typography>
              
              {/* Description */}
              <Typography variant="small" className="text-secondary">
                {feature.description}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  // Fonction utilitaire pour rendre l'icône ou le numéro de la fonctionnalité
  const renderFeatureIcon = (feature: Feature, index: number, size: 'small' | 'medium' | 'large' = 'medium') => {
    // Dimensions selon la taille
    const dimensions = {
      small: 'w-6 h-6',
      medium: 'w-10 h-10',
      large: 'w-12 h-12',
    };
    
    // Classes CSS selon la taille
    const iconClasses = `
      ${dimensions[size]}
      flex items-center justify-center
      rounded-full
      ${withNumbers ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-primary)] bg-opacity-10'}
      ${withNumbers ? 'text-white' : 'text-[var(--color-primary)]'}
    `;
    
    // Si une icône est fournie
    if (feature.icon) {
      if (typeof feature.icon === 'string') {
        return (
          <div className={iconClasses}>
            <Image src={feature.icon} alt="" width={size === 'small' ? 16 : 24} height={size === 'small' ? 16 : 24} />
          </div>
        );
      } else {
        return (
          <div className={iconClasses}>
            {feature.icon}
          </div>
        );
      }
    }
    
    // Si on utilise des numéros
    if (withNumbers) {
      return (
        <div className={iconClasses}>
          <Typography variant="p" className="font-bold">
            {index + 1}
          </Typography>
        </div>
      );
    }
    
    // Par défaut, retourner un espace réservé
    return (
      <div className={iconClasses}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    );
  };
  
  return (
    <section className={`py-12 ${bgClasses[backgroundColor]} ${className}`}>
      <Container>
        <div className={`${alignClasses[textAlign]} ${textAlign === 'center' ? 'max-w-3xl mx-auto' : ''}`}>
          {/* Badge (optionnel) */}
          {badge && (
            <Badge variant={badge.variant || 'primary'} className="mb-4" size="medium">
              {badge.text}
            </Badge>
          )}
          
          {/* Titre de section */}
          <Typography
            variant="h2"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {title}
          </Typography>
          
          {/* Sous-titre (optionnel) */}
          {subtitle && (
            <Typography variant="lead" className="text-xl text-foreground-secondary mb-3">
              {subtitle}
            </Typography>
          )}
          
          {/* Description (optionnelle) */}
          {description && (
            <Typography
              variant="p"
              className={`max-w-prose ${textAlign === 'center' ? 'mx-auto' : ''} mb-8`}
            >
              {description}
            </Typography>
          )}
          
          {/* Séparateur (optionnel) */}
          {withDividers && <Divider className="my-8" />}
        </div>
        
        {/* Image principale (optionnelle) */}
        {mainImage && (
          <div className="mt-8 mb-12">
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              width={mainImage.width || 1200}
              height={mainImage.height || 600}
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        )}
        
        {/* Affichage des fonctionnalités */}
        {renderFeatures()}
        
        {/* CTA (optionnel) */}
        {cta && (
          <div className={`mt-12 ${textAlign === 'center' ? 'text-center' : ''}`}>
            <Link href={cta.href}>
              <Button variant={cta.variant || 'primary'}>
                {cta.text}
              </Button>
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}; 