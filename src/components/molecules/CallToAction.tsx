import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import Link from 'next/link';

export interface CallToActionProps {
  title: string;
  description?: string;
  primaryAction?: {
    text: string;
    url: string;
    variant?: 'primary' | 'secondary' | 'outline';
  };
  secondaryAction?: {
    text: string;
    url: string;
    variant?: 'primary' | 'secondary' | 'outline';
  };
  className?: string;
  variant?: 'default' | 'card' | 'fullWidth' | 'accent';
  accentColor?: 'primary' | 'secondary' | 'tertiary';
  align?: 'center' | 'left';
  withBackground?: boolean;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  primaryAction,
  secondaryAction,
  className = '',
  variant = 'default',
  accentColor = 'primary',
  align = 'center',
  withBackground = false,
}) => {
  // Classes pour les différentes variantes
  const variantClasses = {
    default: 'py-12 px-6',
    card: 'py-10 px-8 rounded-lg border border-color shadow-sm',
    fullWidth: 'py-16 px-4 sm:px-6 lg:px-8',
    accent: `py-10 px-8 rounded-lg border-l-4 border-[var(--color-${accentColor})]`,
  };

  // Classes pour l'alignement du contenu
  const alignClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
  };

  // Classes pour le fond
  const backgroundClasses = withBackground 
    ? `bg-[var(--color-${accentColor})] bg-opacity-5` 
    : 'surface-primary';

  return (
    <div 
      className={`call-to-action ${variantClasses[variant]} ${backgroundClasses} ${className}`}
    >
      <div className={`max-w-3xl ${alignClasses[align]}`}>
        <Typography 
          variant="h2" 
          className={`mb-4 ${variant === 'accent' ? `text-[var(--color-${accentColor})]` : ''}`}
        >
          {title}
        </Typography>
        
        {description && (
          <Typography 
            variant="lead" 
            className="mb-6 text-secondary"
          >
            {description}
          </Typography>
        )}
        
        <div className={`flex flex-wrap gap-4 ${align === 'center' ? 'justify-center' : 'justify-start'} mt-6`}>
          {primaryAction && (
            <Link href={primaryAction.url}>
              <Button variant={primaryAction.variant || 'primary'} size="lg">
                {primaryAction.text}
              </Button>
            </Link>
          )}
          
          {secondaryAction && (
            <Link href={secondaryAction.url}>
              <Button variant={secondaryAction.variant || 'outline'} size="lg">
                {secondaryAction.text}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

// Variante compacte pour utilisation dans les cartes et sections
export interface CompactCallToActionProps {
  text: string;
  ctaText: string;
  ctaUrl: string;
  icon?: React.ReactNode;
  className?: string;
  color?: 'primary' | 'secondary' | 'tertiary';
}

export const CompactCallToAction: React.FC<CompactCallToActionProps> = ({
  text,
  ctaText,
  ctaUrl,
  icon,
  className = '',
  color = 'primary',
}) => {
  return (
    <div className={`flex items-center justify-between p-4 rounded-lg bg-[var(--color-${color})] bg-opacity-5 ${className}`}>
      <div className="flex items-center">
        {icon && (
          <div className={`mr-3 text-[var(--color-${color})]`}>
            {icon}
          </div>
        )}
        <Typography variant="p" className="font-medium">
          {text}
        </Typography>
      </div>
      
      <Link href={ctaUrl}>
        <Button 
          variant="outline" 
          size="sm" 
          className={`text-[var(--color-${color})] border-[var(--color-${color})]`}
        >
          {ctaText}
        </Button>
      </Link>
    </div>
  );
}; 