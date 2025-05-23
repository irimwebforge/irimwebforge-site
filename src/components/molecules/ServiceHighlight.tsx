import React from 'react';
import { Typography } from '../atoms/Typography';
import Link from 'next/link';
import { Button } from '../atoms/Button';
import { cn } from '../../lib/utils';

export interface ServiceHighlightProps {
  /** Titre du service */
  title: string;
  /** Description du service */
  description: string;
  /** Icône représentant le service */
  icon?: React.ReactNode;
  /** Classes CSS additionnelles */
  className?: string;
  /** Texte du bouton d'action */
  ctaText?: string;
  /** Lien du bouton d'action */
  ctaLink?: string;
  /** Style visuel du composant */
  variant?: 'default' | 'compact' | 'featured';
  /** Couleur d'accentuation utilisée */
  color?: 'primary' | 'secondary' | 'tertiary';
  /** Liste des points clés du service */
  bulletPoints?: string[];
}

export const ServiceHighlight: React.FC<ServiceHighlightProps> = ({
  title,
  description,
  icon,
  className = '',
  ctaText = 'En savoir plus',
  ctaLink,
  variant = 'default',
  color = 'primary',
  bulletPoints = [],
}) => {
  // Styles basés sur la variante
  const getVariantClasses = () => {
    switch (variant) {
      case 'compact':
        return {
          container: 'p-4 rounded-md border border-color',
          iconContainer: 'w-10 h-10 mb-2',
          titleSize: 'text-lg',
          spacing: 'mb-2',
        };
      case 'featured':
        return {
          container: `p-6 rounded-lg border-2 border-[var(--color-${color})] shadow-md`,
          iconContainer: 'w-16 h-16 mb-4',
          titleSize: 'text-2xl',
          spacing: 'mb-4',
        };
      default:
        return {
          container: 'p-5 rounded-md border border-color',
          iconContainer: 'w-12 h-12 mb-3',
          titleSize: 'text-xl',
          spacing: 'mb-3',
        };
    }
  };

  const variantClasses = getVariantClasses();

  // Couleur associée au service
  const colorClasses = {
    bg: `bg-[var(--color-${color})] bg-opacity-10`,
    text: `text-[var(--color-${color})]`,
    border: `border-[var(--color-${color})]`,
  };

  return (
    <div className={cn('service-highlight surface-primary', variantClasses.container, className)}>
      {/* Icône */}
      {icon && (
        <div
          className={cn(
            variantClasses.iconContainer,
            colorClasses.bg,
            'rounded-full flex items-center justify-center',
            colorClasses.text
          )}
        >
          {icon}
        </div>
      )}

      {/* Titre */}
      <Typography
        variant={variant === 'featured' ? 'h3' : 'h4'}
        className={cn(
          variantClasses.titleSize,
          'font-bold',
          variantClasses.spacing,
          colorClasses.text
        )}
      >
        {title}
      </Typography>

      {/* Description */}
      <Typography
        variant="p"
        className={cn('text-secondary', bulletPoints.length > 0 ? 'mb-4' : '')}
      >
        {description}
      </Typography>

      {/* Points clés */}
      {bulletPoints.length > 0 && (
        <ul className="mt-3 mb-4 space-y-2">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <span
                className={cn(
                  'mr-2 mt-1 inline-block w-1.5 h-1.5 rounded-full',
                  colorClasses.bg,
                  colorClasses.border,
                  'border'
                )}
              ></span>
              <Typography variant="small" className="text-secondary flex-1">
                {point}
              </Typography>
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      {ctaLink && (
        <div className="mt-4">
          <Link href={ctaLink}>
            <Button
              variant={variant === 'featured' ? 'primary' : 'outline'}
              size="small"
              className={variant === 'featured' ? '' : colorClasses.text}
            >
              {ctaText}
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};
