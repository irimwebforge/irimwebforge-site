import React from 'react';
import { cn } from '../../lib/utils';

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Titre de la carte. Peut être une chaîne ou un nœud React */
  title?: React.ReactNode | string;
  /** Sous-titre optionnel. Peut être une chaîne ou un nœud React */
  subtitle?: React.ReactNode | string;
  /** Élément média (image/vidéo) affiché en haut de la carte */
  media?: React.ReactNode;
  /** Contenu du pied de carte (boutons, liens d'action) */
  footer?: React.ReactNode;
  /** Style visuel de la carte */
  variant?: 'default' | 'outline' | 'elevated' | 'accent' | 'highlight';
  /** Couleur d'accentuation utilisée pour les bordures et éléments visuels */
  color?: 'primary' | 'secondary' | 'tertiary';
  /** Position de l'élément d'accentuation (pour la variante 'accent') */
  accentPosition?: 'top' | 'left' | 'bottom' | 'right';
  /** Espacement interne de la carte */
  padding?: 'none' | 'small' | 'normal' | 'large';
  /** Active l'effet de survol (ombre et changement de bordure) */
  hover?: boolean;
  /** Applique un dégradé à l'en-tête de la carte */
  gradient?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      title,
      subtitle,
      media,
      footer,
      children,
      variant = 'default',
      color = 'primary',
      accentPosition = 'left',
      padding = 'normal',
      hover = true,
      gradient = false,
      ...props
    },
    ref
  ) => {
    // Base classes
    const baseClasses = 'rounded-md overflow-hidden surface-primary';

    // Variant classes
    const variantClasses = {
      default: 'border border-color',
      outline: 'border border-color',
      elevated: 'shadow-md',
      accent: 'border border-color',
      highlight: 'border border-color border-l-4 border-l-[var(--color-tertiary)] bg-amber-50/30',
    };

    // Padding classes
    const paddingClasses = {
      none: '',
      small: 'p-2',
      normal: 'p-4',
      large: 'p-6',
    };

    // Accent classes - seulement appliquer si la variante est 'accent'
    const accentClasses =
      variant === 'accent'
        ? {
            top: `border-t-4 border-t-[var(--color-${color})]`,
            bottom: `border-b-4 border-b-[var(--color-${color})]`,
            left: `border-l-4 border-l-[var(--color-${color})]`,
            right: `border-r-4 border-r-[var(--color-${color})]`,
          }
        : {};

    // Hover effect
    const hoverClasses = hover
      ? 'transition-all duration-200 hover:shadow-md hover:border-color-hover'
      : '';

    // Gradient effect
    const gradientClasses = gradient ? 'relative overflow-hidden' : '';

    // Gradient effect header (si gradient est true)
    const gradientHeaderClasses = gradient
      ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white p-4'
      : '';

    return (
      <div
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          variant === 'accent' ? accentClasses[accentPosition] : '',
          hoverClasses,
          gradientClasses,
          className
        )}
        {...props}
      >
        {gradient && (
          <div className={gradientHeaderClasses}>
            {typeof title === 'string' ? (
              <h3 className="text-lg font-bold text-white">{title}</h3>
            ) : (
              title
            )}
            {subtitle && (
              <div className="mt-1">
                {typeof subtitle === 'string' ? (
                  <p className="text-sm text-white/80">{subtitle}</p>
                ) : (
                  subtitle
                )}
              </div>
            )}
          </div>
        )}

        {media && !gradient && <div className="w-full">{media}</div>}

        {(title || subtitle) && !gradient && (
          <div
            className={cn(
              padding !== 'none' ? paddingClasses[padding] : 'p-4',
              'border-b border-color'
            )}
          >
            {typeof title === 'string' ? (
              <h3 className="text-lg font-bold text-[var(--color-primary)]">{title}</h3>
            ) : (
              title
            )}
            {subtitle && (
              <div className="mt-1">
                {typeof subtitle === 'string' ? (
                  <p className="text-sm text-secondary">{subtitle}</p>
                ) : (
                  subtitle
                )}
              </div>
            )}
          </div>
        )}

        <div
          className={cn(paddingClasses[padding], (title || subtitle) && !gradient ? 'pt-0' : '')}
        >
          {children}
        </div>

        {footer && <div className="px-4 py-3 border-t border-color">{footer}</div>}
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card };
