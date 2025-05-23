'use client';

import React from 'react';
import { Typography } from '../atoms/Typography';
import { Container } from '../atoms/Container';
import { Divider } from '../atoms/Divider';
import { Card } from '../molecules/Card';
import { Button } from '../atoms/Button';
import { FeatureGrid } from '../molecules/FeatureGrid';
import { Badge } from '../atoms/Badge';
import { Icon, type IconName } from '../atoms/Icon';
import Image from 'next/image';
import Link from 'next/link';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode | string;
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
    variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
    isMainCta?: boolean;
  };
}

// Utilisez un type spécifique à la place de any
type IconType = IconName | React.ReactNode;

export interface FeatureActionProps {
  text?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isMainCta?: boolean;
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  onClickAction?: (featureId: string) => void;
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
    light: 'bg-section-primary',
    dark: 'bg-section-secondary text-[var(--foreground)]',
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

  // Adapter les caractéristiques pour FeatureGrid
  const adaptFeaturesForGrid = (features: Feature[]) => {
    return features.map((feature) => ({
      ...feature,
      // Convertir le lien si nécessaire
      link: feature.link
        ? {
            text: feature.link.text,
            url: feature.link.href,
          }
        : undefined,
      // Convertir l'icône string en composant Icon si nécessaire
      icon:
        typeof feature.icon === 'string' ? <Icon name={feature.icon as IconName} /> : feature.icon,
    }));
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
        return (
          <FeatureGrid
            features={adaptFeaturesForGrid(features)}
            columns={columns}
            variant={withNumbers ? 'outline' : 'card'}
          />
        );
    }
  };

  // Layout de type cartes
  const renderCardsLayout = () => {
    return (
      <div className={`grid ${columnClasses[columns]} gap-6 mt-8`}>
        {features.map((feature, index) => (
          <Card key={feature.id} className="p-6" hover>
            <div className="flex flex-col h-full">
              {/* Icône ou index */}
              {renderFeatureIcon(feature.icon as IconType, index, 'small', feature.title)}

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
                  <Link
                    href={feature.link.href}
                    className="text-[var(--color-primary)] hover:underline font-medium"
                  >
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
          <div key={feature.id} className="flex items-start gap-4">
            {/* Icône ou index */}
            <div className="flex-shrink-0 mt-1">
              {renderFeatureIcon(feature.icon as IconType, index, 'large', feature.title)}
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
                  <Link
                    href={feature.link.href}
                    className="text-[var(--color-primary)] hover:underline font-medium"
                  >
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
            <div
              key={feature.id}
              className={`flex flex-col ${isImageRight ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              {/* Contenu textuel */}
              <div className="flex-1">
                {/* Numéro ou icône */}
                {renderFeatureIcon(feature.icon as IconType, index, 'large', feature.title)}

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
                      <Button variant="outline" size="small">
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
                      src={getImageSource(feature.icon as IconType)}
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

  // Helper pour obtenir la source d'image
  const getImageSource = (icon: IconType) => {
    if (typeof icon === 'string') {
      const isImageUrl =
        icon.startsWith('http://') || icon.startsWith('https://') || icon.startsWith('/');
      if (isImageUrl) {
        return icon;
      }
    }
    return '/images/placeholder-feature.svg';
  };

  // Layout compact
  const renderCompactLayout = () => {
    return (
      <div className={`grid ${columnClasses[columns]} gap-6 mt-8`}>
        {features.map((feature, index) => (
          <div key={feature.id} className="flex items-start gap-3">
            {/* Icône ou numéro */}
            {renderFeatureIcon(feature.icon as IconType, index, 'small', feature.title)}

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
  const renderFeatureIcon = (
    icon: IconType,
    index: number,
    size: 'small' | 'medium' | 'large' = 'medium',
    altText?: string
  ) => {
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
    if (icon) {
      if (typeof icon === 'string') {
        // Vérifier si c'est une URL d'image ou un nom d'icône
        const isImageUrl =
          icon.startsWith('http://') || icon.startsWith('https://') || icon.startsWith('/');

        if (isImageUrl) {
          return (
            <div className={iconClasses}>
              <Image
                src={icon}
                alt={altText || ''}
                width={size === 'small' ? 16 : 24}
                height={size === 'small' ? 16 : 24}
              />
            </div>
          );
        } else {
          // C'est un nom d'icône Lucide
          return (
            <div className={iconClasses}>
              <Icon name={icon as IconName} size={size === 'small' ? 16 : 24} />
            </div>
          );
        }
      } else {
        return <div className={iconClasses}>{icon}</div>;
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
        <Icon name="Check" size={size === 'small' ? 16 : 20} />
      </div>
    );
  };

  return (
    <section className={`py-12 ${bgClasses[backgroundColor]} ${className}`}>
      <Container>
        <div
          className={`${alignClasses[textAlign]} ${textAlign === 'center' ? 'max-w-3xl mx-auto' : ''}`}
        >
          {/* Badge (optionnel) */}
          {badge && (
            <Badge variant={badge.variant || 'primary'} className="mb-4" size="medium">
              {badge.text}
            </Badge>
          )}

          {/* Titre de section */}
          <Typography variant="h2" className="text-3xl md:text-4xl font-bold italic mb-4">
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
              <Button
                variant={cta.variant || 'primary'}
                className={cta.variant === 'gradient' || cta.isMainCta ? 'shine-effect' : ''}
              >
                {cta.text}
              </Button>
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
};
