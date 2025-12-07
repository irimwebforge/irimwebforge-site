'use client';

import React from 'react';
import { Typography } from '../atoms/Typography';
import { Card } from './Card';
import { cn } from '../../lib/utils';

export interface StatCardProps {
  /** Titre de la statistique */
  title: string;
  /** Valeur numérique ou textuelle de la statistique */
  value: string | number;
  /** Texte descriptif supplémentaire */
  subtitle?: string;
  /** Icône associée à la statistique */
  icon?: React.ReactNode;
  /** Informations sur la tendance */
  trend?: {
    value: string | number;
    direction: 'up' | 'down' | 'neutral';
    label?: string;
  };
  /** Classes CSS additionnelles */
  className?: string;
  /** Style visuel de la carte */
  variant?: 'default' | 'outline' | 'ghost' | 'accent';
  /** Couleur d'accentuation utilisée */
  color?: 'primary' | 'secondary' | 'tertiary';
  /** Disposition des éléments */
  layout?: 'vertical' | 'horizontal';
  /** Taille du composant */
  size?: 'small' | 'medium' | 'large';
  /** Préfixe à afficher avant la valeur */
  valuePrefix?: string;
  /** Suffixe à afficher après la valeur */
  valueSuffix?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  valuePrefix = '',
  valueSuffix = '',
  subtitle,
  icon,
  trend,
  color = 'primary',
  variant = 'default',
  className = '',
  size = 'medium',
  layout = 'vertical',
}) => {
  // Classes pour les couleurs d'accentuation
  const accentColorClass = `text-[var(--color-${color})]`;
  const accentBgClass = `bg-[var(--color-${color})] bg-opacity-10`;
  const accentBorderClass = `border-[var(--color-${color})]`;

  // Classes pour la taille
  const sizeClasses = {
    small: {
      container: 'p-3',
      title: 'text-sm',
      value: 'text-xl font-bold',
      subtitle: 'text-xs',
    },
    medium: {
      container: 'p-4',
      title: 'text-base',
      value: 'text-2xl font-bold',
      subtitle: 'text-sm',
    },
    large: {
      container: 'p-5',
      title: 'text-lg',
      value: 'text-3xl font-bold',
      subtitle: 'text-base',
    },
  };

  // Classes pour la variante
  const variantClasses = {
    default: '',
    outline: 'border-2',
    ghost: 'shadow-none border-0',
    accent: `${accentBgClass} border-l-4 ${accentBorderClass}`,
  };

  // Classes pour le layout
  const layoutClasses = {
    vertical: 'flex flex-col',
    horizontal: 'flex items-center',
  };

  // Rendu de l'icône
  const renderIcon = () => {
    if (!icon) return null;

    return (
      <div
        className={cn(
          layout === 'horizontal' ? 'mr-4' : 'mb-3',
          variant === 'accent' ? accentColorClass : '',
          size === 'small' ? 'text-lg' : size === 'medium' ? 'text-xl' : 'text-2xl'
        )}
      >
        {icon}
      </div>
    );
  };

  // Rendu de la tendance
  const renderTrend = () => {
    if (!trend) return null;

    const { value: trendValue, direction, label } = trend;

    // Classes pour les couleurs de tendance
    const trendColorClasses = {
      up: 'text-[var(--color-success)]',
      down: 'text-[var(--color-accent)]',
      neutral: 'text-[var(--text-secondary)]',
    };

    // Icônes pour les tendances
    const trendIcons = {
      up: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 inline mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
            clipRule="evenodd"
          />
        </svg>
      ),
      down: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 inline mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
            clipRule="evenodd"
          />
        </svg>
      ),
      neutral: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 inline mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    };

    return (
      <div className={cn('mt-1 text-sm font-medium', trendColorClasses[direction])}>
        {trendIcons[direction]}
        <span>{trendValue}</span>
        {label && <span className="ml-1 text-[var(--text-secondary)] text-xs">{label}</span>}
      </div>
    );
  };

  // Rendu du contenu principal
  const content = (
    <div className={cn(layoutClasses[layout], sizeClasses[size].container)}>
      {renderIcon()}

      <div className={cn('flex flex-col', layout === 'horizontal' && icon ? 'flex-1' : '')}>
        <Typography
          variant="small"
          className={cn('text-[var(--text-secondary)]', sizeClasses[size].title)}
        >
          {title}
        </Typography>

        <div className="flex items-baseline">
          {valuePrefix && <span className="mr-1 text-[var(--text-secondary)]">{valuePrefix}</span>}
          <Typography
            variant="h2"
            className={cn(sizeClasses[size].value, variant === 'accent' ? accentColorClass : '')}
          >
            {value}
          </Typography>
          {valueSuffix && <span className="ml-1 text-[var(--text-secondary)]">{valueSuffix}</span>}
        </div>

        {subtitle && (
          <Typography
            variant="small"
            className={cn('text-[var(--text-secondary)]', sizeClasses[size].subtitle)}
          >
            {subtitle}
          </Typography>
        )}

        {renderTrend()}
      </div>
    </div>
  );

  // Rendu avec ou sans Card (variante minimale)
  if (variant === 'ghost') {
    return <div className={className}>{content}</div>;
  }

  // Rendu avec Card
  return (
    <Card
      variant={variant === 'accent' ? 'default' : variant === 'outline' ? 'outline' : 'default'}
      padding="none"
      className={cn('overflow-hidden', variantClasses[variant], className)}
    >
      {content}
    </Card>
  );
};

// Composant pour afficher un groupe de statistiques
export interface StatGroupProps {
  /** Liste des statistiques à afficher */
  stats: StatCardProps[];
  /** Classes CSS additionnelles */
  className?: string;
  /** Nombre de colonnes dans la grille */
  columns?: 2 | 3 | 4;
  /** Titre de la section */
  title?: string;
  /** Sous-titre de la section */
  subtitle?: string;
  /** Hauteur égale pour toutes les cartes */
  equalHeight?: boolean;
  /** Style visuel des cartes */
  variant?: 'default' | 'outline' | 'ghost' | 'accent';
  /** Disposition des éléments */
  layout?: 'vertical' | 'horizontal';
}

export const StatGroup: React.FC<StatGroupProps> = ({
  stats,
  className = '',
  columns = 3,
  title,
  subtitle,
  equalHeight = true,
  variant = 'default',
  layout = 'vertical',
}) => {
  // Classes pour le nombre de colonnes
  const columnClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={cn('stat-group', className)}>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <Typography variant="h2" className="mb-2">
              {title}
            </Typography>
          )}

          {subtitle && (
            <Typography variant="lead" className="text-[var(--text-secondary)]">
              {subtitle}
            </Typography>
          )}
        </div>
      )}

      <div className={cn('grid gap-6', columnClasses[columns], equalHeight ? 'h-full' : '')}>
        {stats.map((stat, index) => (
          <StatCard
            key={`${stat.title}-${index}`}
            {...stat}
            variant={stat.variant || variant}
            layout={stat.layout || layout}
            className={cn(equalHeight ? 'h-full' : '', stat.className || '')}
          />
        ))}
      </div>
    </div>
  );
};
