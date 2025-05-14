'use client';

import React from 'react';
import { Typography } from '../components/atoms/Typography';
import { Button } from '../components/atoms/Button';
import { Container } from '../components/atoms/Container';
import { CallToAction } from '../components/molecules/CallToAction';
import Image from 'next/image';

// Types pour les actions
export type Action = {
  text: string;
  url: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
};

// Types pour les propriétés du composant
export interface CTASectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryAction: Action;
  secondaryAction?: Action;
  variant?: 'default' | 'banner' | 'split' | 'card';
  backgroundColor?: 'light' | 'dark' | 'primary' | 'gradient' | 'transparent';
  textColor?: 'dark' | 'light' | 'auto';
  align?: 'left' | 'center' | 'right';
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right' | 'background';
  className?: string;
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
  borderLeft?: string;
  borderColor?: string;
}

/**
 * Template d'appel à l'action avec diverses options de mise en page et de style
 */
export const CTASection = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  variant = 'default',
  backgroundColor = 'primary',
  textColor = 'auto',
  align = 'center',
  imageSrc,
  imageAlt = 'Image illustrative',
  imagePosition = 'right',
  className = '',
  testimonial,
  borderLeft,
  borderColor,
}: CTASectionProps) => {
  // Si la variante est 'default' et que les actions sont fournies,
  // nous utilisons directement le composant CallToAction
  if (variant === 'default') {
    return (
      <section className={`py-16 ${className}`}>
        <Container>
          <CallToAction
            title={title}
            description={description}
            primaryAction={{
              text: primaryAction.text,
              url: primaryAction.url,
              variant: primaryAction.variant || 'gradient',
            }}
            secondaryAction={
              secondaryAction
                ? {
                    text: secondaryAction.text,
                    url: secondaryAction.url,
                    variant: secondaryAction.variant || 'secondary',
                  }
                : undefined
            }
            variant="accent"
            color="primary"
            align={align as 'left' | 'center'}
            borderLeft={borderLeft}
          />
        </Container>
      </section>
    );
  }

  // Classes pour le fond
  const backgroundClasses = {
    light: 'bg-gray-50 dark:bg-gray-900',
    dark: 'bg-gray-900 text-white',
    primary: 'bg-[var(--color-primary-50)] dark:bg-[var(--color-primary-900)]',
    gradient:
      'bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-secondary-500)] text-white',
    transparent: '',
  };

  // Classes pour l'alignement du texte
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  // Classes pour la couleur du texte
  const textClasses = {
    dark: 'text-gray-900 dark:text-gray-900',
    light: 'text-white',
    auto: backgroundColor === 'dark' || backgroundColor === 'gradient' ? 'text-white' : '',
  };

  // Rendu pour la variante 'banner'
  if (variant === 'banner') {
    return (
      <section
        className={`py-12 px-4 ${backgroundClasses[backgroundColor]} ${textClasses[textColor]} ${className}`}
      >
        <Container>
          <div
            className={`flex flex-col md:flex-row items-center justify-between gap-6 ${alignClasses[align]}`}
          >
            <div className="md:w-2/3">
              <Typography as="h2" variant="h2" className="mb-2 font-bold italic">
                {title}
              </Typography>
              {description && <Typography variant="lead">{description}</Typography>}
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end gap-4">
              <Button
                variant={primaryAction.variant || 'gradient'}
                size={primaryAction.size || 'lg'}
                onClick={() => (window.location.href = primaryAction.url)}
              >
                {primaryAction.text}
              </Button>
              {secondaryAction && (
                <Button
                  variant={secondaryAction.variant || 'secondary'}
                  size={secondaryAction.size || 'lg'}
                  onClick={() => (window.location.href = secondaryAction.url)}
                >
                  {secondaryAction.text}
                </Button>
              )}
            </div>
          </div>
        </Container>
      </section>
    );
  }

  // Rendu pour la variante 'split' (image + texte)
  if (variant === 'split') {
    return (
      <section
        className={`py-16 ${backgroundClasses[backgroundColor]} ${textClasses[textColor]} ${className}`}
      >
        <Container>
          <div
            className={`flex flex-col ${imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}
          >
            {/* Image */}
            {imageSrc && (
              <div className="md:w-1/2 relative">
                <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
              </div>
            )}

            {/* Contenu */}
            <div className={`md:w-1/2 ${alignClasses[align]}`}>
              {subtitle && (
                <Typography as="span" variant="subtle" className="mb-2 inline-block">
                  {subtitle}
                </Typography>
              )}
              <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
                {title}
              </Typography>
              {description && (
                <Typography variant="lead" className="mb-6">
                  {description}
                </Typography>
              )}

              {/* Témoignage */}
              {testimonial && (
                <div className="mb-6 p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg">
                  <Typography variant="p" className="italic mb-2">
                    &quot;{testimonial.quote}&quot;
                  </Typography>
                  <Typography variant="subtle">
                    — {testimonial.author}
                    {testimonial.role ? `, ${testimonial.role}` : ''}
                  </Typography>
                </div>
              )}

              <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
                <Button
                  variant={primaryAction.variant || 'gradient'}
                  size={primaryAction.size || 'lg'}
                  onClick={() => (window.location.href = primaryAction.url)}
                  className="shine-effect"
                >
                  {primaryAction.text}
                </Button>
                {secondaryAction && (
                  <Button
                    variant={secondaryAction.variant || 'secondary'}
                    size={secondaryAction.size || 'lg'}
                    onClick={() => (window.location.href = secondaryAction.url)}
                  >
                    {secondaryAction.text}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  // Rendu pour la variante 'card'
  if (variant === 'card') {
    // Classe pour la bordure colorée si elle est spécifiée
    const borderClass = borderColor ? `border-2 border-[${borderColor}]` : '';

    return (
      <section className={`py-16 ${className}`}>
        <Container>
          <div
            className={`max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl ${backgroundClasses[backgroundColor]} ${textClasses[textColor]} ${borderClass}`}
          >
            {/* Image de fond (si fournie) */}
            {imageSrc && imagePosition === 'background' && (
              <div className="relative h-64 w-full">
                <Image src={imageSrc} alt={imageAlt} fill style={{ objectFit: 'cover' }} />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
            )}

            <div className="p-8 md:p-12">
              <div className={alignClasses[align]}>
                {subtitle && (
                  <Typography as="span" variant="subtle" className="mb-2 inline-block">
                    {subtitle}
                  </Typography>
                )}
                <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
                  {title}
                </Typography>
                {description && (
                  <Typography variant="lead" className="mb-6">
                    {description}
                  </Typography>
                )}

                <div className="flex flex-wrap gap-4 mt-6 justify-center">
                  <Button
                    variant={primaryAction.variant || 'gradient'}
                    size={primaryAction.size || 'lg'}
                    onClick={() => (window.location.href = primaryAction.url)}
                    className="shine-effect"
                  >
                    {primaryAction.text}
                  </Button>
                  {secondaryAction && (
                    <Button
                      variant={secondaryAction.variant || 'secondary'}
                      size={secondaryAction.size || 'lg'}
                      onClick={() => (window.location.href = secondaryAction.url)}
                    >
                      {secondaryAction.text}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  // Fallback - ne devrait jamais arriver grâce aux valeurs par défaut
  return null;
};

export default CTASection;
