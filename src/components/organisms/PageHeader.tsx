'use client';

import React from 'react';
import { Typography } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import { Container } from '../atoms/Container';
import { Badge } from '../atoms/Badge';
import { NavLink } from '../atoms/NavLink';
import Image from 'next/image';
import Link from 'next/link';
import { HeroPattern } from '../atoms/HeroPattern';

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  breadcrumbs?: Array<{
    label: string;
    href: string;
  }>;
  actions?: Array<{
    label: string;
    href?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
    isMainCta?: boolean;
    onClick?: () => void;
  }>;
  backgroundImage?: string;
  backgroundOverlay?: boolean;
  backgroundOpacity?: number;
  align?: 'left' | 'center' | 'right';
  size?: 'small' | 'medium' | 'large' | 'hero';
  theme?: 'light' | 'dark' | 'primary' | 'secondary';
  badge?: {
    text: string;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning';
  };
  image?: {
    src: string;
    alt: string;
    position?: 'left' | 'right';
    width?: number;
    height?: number;
  };
  pattern?: boolean;
  waveBottom?: boolean;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  description,
  breadcrumbs = [],
  actions = [],
  backgroundImage,
  backgroundOverlay = true,
  backgroundOpacity = 0.7,
  align = 'left',
  size = 'medium',
  theme = 'light',
  badge,
  image,
  pattern = false,
  waveBottom = false,
  className = '',
}) => {
  // Classes de mise en page basées sur l'alignement
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  // Classes de taille basées sur la taille
  const sizeClasses = {
    small: {
      padding: 'py-8',
      titleSize: 'text-3xl',
      maxWidth: 'max-w-3xl',
    },
    medium: {
      padding: 'py-12 md:py-16',
      titleSize: 'text-4xl',
      maxWidth: 'max-w-4xl',
    },
    large: {
      padding: 'py-16 md:py-20',
      titleSize: 'text-5xl',
      maxWidth: 'max-w-5xl',
    },
    hero: {
      padding: 'py-20 md:py-28',
      titleSize: 'text-5xl md:text-6xl',
      maxWidth: 'max-w-6xl',
    },
  };

  // Classes de thème basées sur le thème
  const themeClasses = {
    light: 'bg-white dark:bg-gray-900 text-foreground',
    dark: 'bg-gray-900 text-white',
    primary: 'bg-[var(--color-primary)] text-white',
    secondary: 'bg-[var(--color-secondary)] text-white',
  };

  // Rendu des breadcrumbs
  const renderBreadcrumbs = () => {
    if (breadcrumbs.length === 0) return null;

    return (
      <nav className={`mb-4 ${alignClasses[align]}`} aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center space-x-1 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="mx-1 text-opacity-60">/</span>}
              <li>
                {index === breadcrumbs.length - 1 ? (
                  <span className="font-medium">{crumb.label}</span>
                ) : (
                  <NavLink href={crumb.href} className="hover:underline text-opacity-80">
                    {crumb.label}
                  </NavLink>
                )}
              </li>
            </React.Fragment>
          ))}
        </ol>
      </nav>
    );
  };

  // Rendu des actions
  const renderActions = () => {
    if (actions.length === 0) return null;

    return (
      <div
        className={`mt-8 flex flex-wrap gap-3 ${align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start'}`}
      >
        {actions.map((action, index) => {
          // Détermine si c'est un CTA principal (pour l'effet brillance)
          const isMainCTA = action.variant === 'gradient' || action.isMainCta;
          const buttonClassName = isMainCTA ? 'shine-effect' : '';

          return action.href ? (
            <Link key={index} href={action.href}>
              <Button variant={action.variant || 'primary'} className={buttonClassName}>
                {action.label}
              </Button>
            </Link>
          ) : (
            <Button
              key={index}
              variant={action.variant || 'primary'}
              className={buttonClassName}
              onClick={action.onClick}
            >
              {action.label}
            </Button>
          );
        })}
      </div>
    );
  };

  // Style pour l'image de fond
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative' as const,
      }
    : {};

  // Rendu de l'overlay si nécessaire
  const renderOverlay = () => {
    if (!backgroundImage || !backgroundOverlay) return null;

    // Choisir la couleur de l'overlay en fonction du thème
    const overlayColor =
      theme === 'light'
        ? `rgba(255, 255, 255, ${backgroundOpacity})`
        : theme === 'dark'
          ? `rgba(17, 24, 39, ${backgroundOpacity})`
          : theme === 'primary'
            ? `var(--color-primary-rgb, 59, 130, 246), ${backgroundOpacity})`
            : `var(--color-secondary-rgb, 107, 114, 128), ${backgroundOpacity})`;

    return <div className="absolute inset-0 z-0" style={{ backgroundColor: overlayColor }} />;
  };

  // Rendu de la vague en bas
  const renderWaveBottom = () => {
    if (!waveBottom) return null;

    return (
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 48"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-12 transform translate-y-1"
        >
          <path
            d="M0 48h1440V22.8C1360 9.1 1280 2.2 1200 0.3 1040 -2.9 960 11.7 840 24 720 36.4 600 46.6 480 43 360 39.4 240 22 120 13 80 9.6 40 7.8 0 9.9v38.1z"
            fill="currentColor"
          />
        </svg>
      </div>
    );
  };

  // Rendu de l'image
  const renderImage = () => {
    if (!image) return null;

    return (
      <div
        className={`hidden lg:block ${image.position === 'left' ? 'order-first mr-8' : 'order-last ml-8'}`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width || 400}
          height={image.height || 400}
          className="object-cover max-w-full h-auto"
        />
      </div>
    );
  };

  // Classes CSS combinées
  const headerClasses = `
    relative
    ${sizeClasses[size].padding}
    ${pattern && !backgroundImage ? 'bg-transparent' : themeClasses[theme]}
    ${className}
  `.trim();

  return (
    <header className={headerClasses} style={backgroundStyle}>
      {renderOverlay()}
      {pattern && !backgroundImage && <HeroPattern />}

      <Container>
        <div className={`relative z-10 ${image ? 'flex items-center' : ''}`}>
          {image && image.position === 'left' && renderImage()}

          <div
            className={`${alignClasses[align]} ${sizeClasses[size].maxWidth} ${align === 'center' ? 'mx-auto' : ''}`}
          >
            {renderBreadcrumbs()}

            {badge && (
              <div className={`${alignClasses[align]}`}>
                <Badge variant={badge.variant || 'primary'} className="mb-4" size="medium">
                  {badge.text}
                </Badge>
              </div>
            )}

            <Typography as="h1" variant="h1" className="mb-4">
              {title}
            </Typography>

            {subtitle && (
              <Typography variant="lead" className="mb-4 opacity-90">
                {subtitle}
              </Typography>
            )}

            {description && (
              <Typography
                variant="lead"
                className={`mb-6 opacity-80 ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`}
              >
                {description}
              </Typography>
            )}

            {renderActions()}
          </div>

          {image && image.position === 'right' && renderImage()}
        </div>
      </Container>

      {renderWaveBottom()}
    </header>
  );
};
