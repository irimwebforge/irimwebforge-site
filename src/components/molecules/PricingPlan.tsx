"use client";

import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/molecules/Card';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface PricingFeature {
  /** Identifiant unique de la fonctionnalité */
  id: string;
  /** Description de la fonctionnalité */
  text: string;
  /** Indique si la fonctionnalité est incluse dans ce forfait */
  included: boolean;
  /** Mise en évidence visuelle */
  highlight?: boolean;
}

export interface PricingPlanProps {
  /** Titre du forfait */
  title: string;
  /** Description courte du forfait */
  description?: string;
  /** Informations sur le prix */
  price: {
    amount: number | string;
    currency?: string;
    period?: string;
    suffix?: string;
    prefix?: string;
  };
  /** Liste des fonctionnalités incluses/exclues */
  features: PricingFeature[];
  /** Texte du bouton d'action */
  ctaText?: string;
  /** Lien du bouton d'action */
  ctaLink?: string;
  /** Classes CSS additionnelles */
  className?: string;
  /** Style visuel de la carte */
  variant?: 'default' | 'featured' | 'compact';
  /** Badge affiché sur la carte (ex: "Populaire") */
  badge?: string;
  /** Couleur d'accentuation utilisée */
  color?: 'primary' | 'secondary' | 'tertiary';
  /** Fonction appelée au clic sur le bouton */
  onCtaClick?: () => void;
}

export const PricingPlan: React.FC<PricingPlanProps> = ({
  title,
  description,
  price,
  features,
  ctaText = 'Sélectionner',
  ctaLink,
  className = '',
  variant = 'default',
  badge,
  color = 'primary',
  onCtaClick,
}) => {
  // Classes pour les couleurs d'accent
  const colorClasses = {
    primary: 'text-[var(--color-primary)] border-[var(--color-primary)] bg-[var(--color-primary)]',
    secondary: 'text-[var(--color-secondary)] border-[var(--color-secondary)] bg-[var(--color-secondary)]',
    tertiary: 'text-[var(--color-tertiary)] border-[var(--color-tertiary)] bg-[var(--color-tertiary)]',
  };
  
  // Formatage du prix
  const formattedPrice = () => {
    const currency = price.currency || '€';
    const period = price.period ? `/${price.period}` : '';
    const prefix = price.prefix || '';
    const suffix = price.suffix || '';
    
    return (
      <div className="flex items-baseline justify-center">
        {prefix && <span className="text-lg mr-1">{prefix}</span>}
        <span className="text-3xl font-bold">
          {typeof price.amount === 'number' ? `${price.amount}` : price.amount}
        </span>
        <span className="text-xl ml-1">{currency}</span>
        {period && <span className="text-sm text-gray-500 ml-1">{period}</span>}
        {suffix && <span className="text-sm ml-1">{suffix}</span>}
      </div>
    );
  };
  
  // Classes pour les variantes
  const variantClasses = {
    default: '',
    featured: `border-2 ${colorClasses[color].split(' ')[1]} shadow-md`,
    compact: 'p-4',
  };
  
  // Rendu du badge
  const renderBadge = () => {
    if (!badge) return null;
    
    return (
      <div className={cn(
        'absolute -top-3 right-4 text-white text-xs font-bold px-3 py-1 rounded-full bg-opacity-90',
        colorClasses[color].split(' ')[2]
      )}>
        {badge}
      </div>
    );
  };
  
  // Rendu des fonctionnalités
  const renderFeatures = () => {
    return (
      <ul className={cn(
        'my-6 space-y-3',
        variant === 'compact' ? 'text-sm' : ''
      )}>
        {features.map((feature) => (
          <li key={feature.id} className={cn(
            'flex items-start',
            feature.highlight ? 'font-medium' : ''
          )}>
            <span className={cn(
              'mr-2 mt-1',
              feature.included ? `text-[var(--color-${color})]` : 'text-gray-400'
            )}>
              {feature.included ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              )}
            </span>
            <Typography variant="small" className={cn(
              !feature.included ? 'text-gray-400 line-through' : ''
            )}>
              {feature.text}
            </Typography>
          </li>
        ))}
      </ul>
    );
  };
  
  // Contenu principal
  const content = (
    <div className="relative h-full flex flex-col">
      {renderBadge()}
      
      <div className={cn(
        'text-center',
        variant === 'compact' ? 'mb-3' : 'mb-6'
      )}>
        <Typography variant={variant === 'compact' ? 'h4' : 'h3'} className="mb-2">
          {title}
        </Typography>
        
        {description && (
          <Typography variant="small" className="text-gray-500">
            {description}
          </Typography>
        )}
      </div>
      
      <div className={cn(
        'text-center',
        variant === 'compact' ? 'py-2' : 'py-4',
        colorClasses[color].split(' ')[0]
      )}>
        {formattedPrice()}
      </div>
      
      {renderFeatures()}
      
      <div className="mt-auto pt-4">
        {ctaLink ? (
          <Link href={ctaLink} className="block w-full">
            <Button 
              variant={variant === 'featured' ? 'primary' : 'outline'}
              fullWidth 
              onClick={onCtaClick}
            >
              {ctaText}
            </Button>
          </Link>
        ) : (
          <Button 
            variant={variant === 'featured' ? 'primary' : 'outline'}
            fullWidth 
            onClick={onCtaClick}
          >
            {ctaText}
          </Button>
        )}
      </div>
    </div>
  );
  
  // Si la variante est 'featured', on wrap avec une Card
  if (variant === 'featured') {
    return (
      <Card
        className={cn(
          'overflow-visible',
          variantClasses[variant],
          className
        )}
        padding="large"
      >
        {content}
      </Card>
    );
  }
  
  // Sinon, on utilise une Card standard
  return (
    <Card
      className={cn(
        variantClasses[variant],
        className
      )}
      padding={variant === 'compact' ? 'small' : 'normal'}
    >
      {content}
    </Card>
  );
};

// Composant pour afficher une grille de plans tarifaires
export interface PricingGridProps {
  /** Liste des forfaits à afficher */
  plans: PricingPlanProps[];
  /** Titre de la section */
  title?: string;
  /** Sous-titre de la section */
  subtitle?: string;
  /** Classes CSS additionnelles */
  className?: string;
  /** Nombre de colonnes dans la grille */
  columns?: 2 | 3 | 4;
}

export const PricingGrid: React.FC<PricingGridProps> = ({
  plans,
  title,
  subtitle,
  className = '',
  columns = 3,
}) => {
  // Configuration des colonnes
  const columnClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };
  
  return (
    <div className={cn('pricing-grid', className)}>
      {(title || subtitle) && (
        <div className="text-center mb-10">
          {title && (
            <Typography variant="h2" className="mb-3">
              {title}
            </Typography>
          )}
          
          {subtitle && (
            <Typography variant="lead" className="mx-auto max-w-3xl">
              {subtitle}
            </Typography>
          )}
        </div>
      )}
      
      <div className={cn(
        'grid grid-cols-1 gap-6',
        columnClasses[columns]
      )}>
        {plans.map((plan, index) => (
          <PricingPlan key={`${plan.title}-${index}`} {...plan} />
        ))}
      </div>
    </div>
  );
}; 