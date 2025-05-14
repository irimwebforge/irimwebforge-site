import React from 'react';
import { Typography } from '../atoms/Typography';
import { Card } from './Card';
import { cn } from '../../lib/utils';

export interface Feature {
  /** Identifiant unique de la fonctionnalité */
  id: string;
  /** Titre de la fonctionnalité */
  title: string;
  /** Description de la fonctionnalité */
  description: string;
  /** Icône représentant la fonctionnalité */
  icon?: React.ReactNode;
  /** Couleur d'accentuation utilisée */
  color?: 'primary' | 'secondary' | 'tertiary';
  /** Lien optionnel vers plus d'informations */
  link?: {
    text: string;
    url: string;
  };
}

export interface FeatureGridProps {
  /** Liste des fonctionnalités à afficher */
  features: Feature[];
  /** Classes CSS additionnelles */
  className?: string;
  /** Nombre de colonnes dans la grille */
  columns?: 2 | 3 | 4;
  /** Style visuel des fonctionnalités */
  variant?: 'card' | 'ghost' | 'outline';
  /** Espacement entre les éléments */
  gap?: 'small' | 'medium' | 'large';
  /** Position de l'icône */
  alignIcon?: 'left' | 'center' | 'top';
  /** Utiliser des icônes tertiaires par défaut */
  withDefaultTertiaryIcons?: boolean;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  features,
  className = '',
  columns = 3,
  variant = 'card',
  gap = 'medium',
  alignIcon = 'top',
  withDefaultTertiaryIcons = true,
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

    const featureColor = feature.color || (withDefaultTertiaryIcons ? 'tertiary' : 'primary');
    const colorClass = colorClasses[featureColor];

    // Contenu commun à toutes les variantes
    const featureContent = (
      <>
        {feature.icon && (
          <div
            className={cn(
              colorClass.bg,
              'rounded-full p-3 flex-shrink-0 flex items-center justify-center',
              colorClass.text,
              variant === 'ghost' ? 'w-12 h-12' : 'w-14 h-14'
            )}
          >
            {feature.icon}
          </div>
        )}
        <div className={feature.icon ? 'mt-4' : ''}>
          <Typography
            variant={variant === 'ghost' ? 'h4' : 'h3'}
            className={cn('font-bold mb-2', colorClass.text)}
          >
            {feature.title}
          </Typography>
          <Typography variant="p" className="text-secondary">
            {feature.description}
          </Typography>
          {feature.link && (
            <a
              href={feature.link.url}
              className={cn('inline-block mt-3 font-medium hover:underline', colorClass.text)}
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
          <Card key={feature.id} variant="elevated" padding="large" className="h-full">
            <div
              className={cn(
                'flex flex-col',
                iconAlignmentClasses[alignIcon as keyof typeof iconAlignmentClasses]
              )}
            >
              {featureContent}
            </div>
          </Card>
        );
      case 'outline':
        return (
          <div
            key={feature.id}
            className={cn('border border-color rounded-lg p-5 h-full surface-primary')}
          >
            <div
              className={cn(
                'flex flex-col',
                iconAlignmentClasses[alignIcon as keyof typeof iconAlignmentClasses]
              )}
            >
              {featureContent}
            </div>
          </div>
        );
      case 'ghost':
      default:
        return (
          <div key={feature.id} className="h-full">
            <div
              className={cn(
                'flex flex-col',
                iconAlignmentClasses[alignIcon as keyof typeof iconAlignmentClasses]
              )}
            >
              {featureContent}
            </div>
          </div>
        );
    }
  };

  return (
    <div className={cn('grid', gridColumnClasses[columns], gapClasses[gap], className)}>
      {features.map(renderFeature)}
    </div>
  );
};

// Composant pour afficher un ensemble complet avec titre et sous-titre
export interface FeatureSectionProps {
  /** Titre de la section */
  title: string;
  /** Sous-titre ou description de la section */
  subtitle?: string;
  /** Liste des fonctionnalités à afficher */
  features: Feature[];
  /** Classes CSS additionnelles */
  className?: string;
  /** Nombre de colonnes dans la grille */
  columns?: 2 | 3 | 4;
  /** Style visuel des fonctionnalités */
  variant?: 'card' | 'ghost' | 'outline';
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
    <section className={cn('feature-section', className)}>
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

      <FeatureGrid features={features} columns={columns} variant={variant} />
    </section>
  );
};
