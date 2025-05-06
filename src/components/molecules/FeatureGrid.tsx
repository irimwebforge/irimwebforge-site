import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Card } from '@/components/molecules/Card';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary';
  link?: {
    text: string;
    url: string;
  };
}

export interface FeatureGridProps {
  features: Feature[];
  className?: string;
  columns?: 2 | 3 | 4;
  variant?: 'card' | 'minimal' | 'bordered';
  gap?: 'small' | 'medium' | 'large';
  alignIcon?: 'top' | 'center';
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  features,
  className = '',
  columns = 3,
  variant = 'card',
  gap = 'medium',
  alignIcon = 'top',
}) => {
  // Configuration des colonnes de la grille
  const gridColumnClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  // Configuration de l'espacement de la grille
  const gapClasses = {
    small: 'gap-4',
    medium: 'gap-6',
    large: 'gap-8',
  };

  // Classes pour aligner l'icône
  const iconAlignmentClasses = {
    top: 'items-start',
    center: 'items-center',
  };

  // Rendu d'une fonctionnalité individuelle
  const renderFeature = (feature: Feature) => {
    // Styles pour les couleurs d'accent
    const colorClasses = {
      primary: {
        bg: 'bg-[var(--color-primary)] bg-opacity-10',
        text: 'text-[var(--color-primary)]',
        border: 'border-[var(--color-primary)]',
      },
      secondary: {
        bg: 'bg-[var(--color-secondary)] bg-opacity-10',
        text: 'text-[var(--color-secondary)]',
        border: 'border-[var(--color-secondary)]',
      },
      tertiary: {
        bg: 'bg-[var(--color-tertiary)] bg-opacity-10',
        text: 'text-[var(--color-tertiary)]',
        border: 'border-[var(--color-tertiary)]',
      },
    };

    const featureColor = feature.color || 'primary';
    const colorClass = colorClasses[featureColor];

    // Contenu commun à toutes les variantes
    const featureContent = (
      <>
        {feature.icon && (
          <div 
            className={`${colorClass.bg} rounded-full p-3 flex-shrink-0 ${
              variant === 'minimal' ? 'w-12 h-12' : 'w-14 h-14'
            } flex items-center justify-center ${colorClass.text}`}
          >
            {feature.icon}
          </div>
        )}
        <div className={feature.icon ? 'mt-4' : ''}>
          <Typography 
            variant={variant === 'minimal' ? 'h4' : 'h3'} 
            className={`font-bold mb-2 ${colorClass.text}`}
          >
            {feature.title}
          </Typography>
          <Typography variant="p" className="text-secondary">
            {feature.description}
          </Typography>
          {feature.link && (
            <a 
              href={feature.link.url} 
              className={`inline-block mt-3 ${colorClass.text} font-medium hover:underline`}
            >
              {feature.link.text}
            </a>
          )}
        </div>
      </>
    );

    // Rendu selon la variante sélectionnée
    switch (variant) {
      case 'card':
        return (
          <Card 
            key={feature.id}
            variant="elevated"
            padding="large"
            className="h-full"
          >
            <div className={`flex flex-col ${iconAlignmentClasses[alignIcon]}`}>
              {featureContent}
            </div>
          </Card>
        );
      case 'bordered':
        return (
          <div 
            key={feature.id} 
            className={`border border-color rounded-lg p-5 h-full surface-primary`}
          >
            <div className={`flex flex-col ${iconAlignmentClasses[alignIcon]}`}>
              {featureContent}
            </div>
          </div>
        );
      case 'minimal':
      default:
        return (
          <div key={feature.id} className="h-full">
            <div className={`flex flex-col ${iconAlignmentClasses[alignIcon]}`}>
              {featureContent}
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`grid ${gridColumnClasses[columns]} ${gapClasses[gap]} ${className}`}>
      {features.map(renderFeature)}
    </div>
  );
};

// Composant pour afficher un ensemble complet avec titre et sous-titre
export interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  className?: string;
  columns?: 2 | 3 | 4;
  variant?: 'card' | 'minimal' | 'bordered';
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  features,
  className = '',
  columns = 3,
  variant = 'card',
}) => {
  return (
    <section className={`feature-section ${className}`}>
      <div className="text-center mb-10">
        <Typography variant="h2" className="mb-3">
          {title}
        </Typography>
        
        {subtitle && (
          <Typography variant="lead" className="mx-auto max-w-3xl">
            {subtitle}
          </Typography>
        )}
      </div>
      
      <FeatureGrid 
        features={features} 
        columns={columns} 
        variant={variant} 
      />
    </section>
  );
}; 