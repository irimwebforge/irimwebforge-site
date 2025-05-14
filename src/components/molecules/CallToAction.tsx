import React from 'react';
import { Typography } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import Link from 'next/link';
import { cn } from '../../lib/utils';

export interface CallToActionProps {
  /** Titre principal de la bannière d'appel à l'action */
  title: string;
  /** Description optionnelle qui apparaît sous le titre */
  description?: string;
  /** Configuration de l'action principale */
  primaryAction?: {
    /** Texte du bouton principal */
    text: string;
    /** URL de destination */
    url: string;
    /** Style visuel du bouton */
    variant?: 'primary' | 'secondary' | 'tertiary' | 'gradient';
  };
  /** Configuration de l'action secondaire */
  secondaryAction?: {
    /** Texte du bouton secondaire */
    text: string;
    /** URL de destination */
    url: string;
    /** Style visuel du bouton */
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'gradient';
  };
  /** Classes CSS additionnelles */
  className?: string;
  /** Style visuel du composant */
  variant?: 'default' | 'card' | 'fullWidth' | 'accent';
  /** Couleur d'accentuation utilisée pour les bordures et éléments visuels */
  color?: 'primary' | 'secondary' | 'tertiary';
  /** Alignement du contenu */
  align?: 'center' | 'left';
  /** Ajoute un fond légèrement coloré */
  withBackground?: boolean;
  /** Couleur personnalisée pour la bordure gauche (remplace color) */
  borderLeft?: string;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  primaryAction,
  secondaryAction,
  className = '',
  variant = 'default',
  color = 'tertiary',
  align = 'center',
  withBackground = false,
  borderLeft,
}) => {
  // Classes pour les différentes variantes
  const variantClasses = {
    default: 'py-12 px-6',
    card: 'py-10 px-8 rounded-lg border border-color shadow-sm',
    fullWidth: 'py-16 px-4 sm:px-6 lg:px-8',
    accent: `py-10 px-8 rounded-lg border-l-4 border-[var(--color-${color})]`,
  };

  // Classes pour l'alignement du contenu
  const alignClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
  };

  // Classes pour le fond
  const backgroundClasses = withBackground
    ? `bg-[var(--color-${color})] bg-opacity-5`
    : 'surface-primary';

  // Classes pour la bordure gauche personnalisée
  const borderLeftClass = borderLeft ? `border-l-4 border-l-[${borderLeft}]` : '';

  return (
    <div
      className={cn(
        'call-to-action',
        variantClasses[variant],
        backgroundClasses,
        borderLeftClass,
        className
      )}
    >
      <div className={cn('max-w-3xl', alignClasses[align])}>
        <Typography
          variant="h2"
          className={cn('mb-4', variant === 'accent' ? `text-[var(--color-${color})]` : '')}
        >
          {title}
        </Typography>

        {description && (
          <Typography variant="lead" className="mb-6 text-secondary">
            {description}
          </Typography>
        )}

        <div
          className={cn(
            'flex flex-wrap gap-4',
            align === 'center' ? 'justify-center' : 'justify-start',
            'mt-6'
          )}
        >
          {primaryAction && (
            <Link href={primaryAction.url}>
              <Button variant={primaryAction.variant || 'gradient'} size="lg">
                {primaryAction.text}
              </Button>
            </Link>
          )}

          {secondaryAction && (
            <Link href={secondaryAction.url}>
              <Button variant={secondaryAction.variant || 'secondary'} size="lg">
                {secondaryAction.text}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
