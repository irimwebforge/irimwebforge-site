import React from 'react';
import { ColorVariant, StatusVariant, SizeVariant, PositionVariant } from '@/types/common';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: ColorVariant | StatusVariant | 'default';
  size?: SizeVariant;
  shape?: 'rounded' | 'pill';
  icon?: React.ReactNode;
  iconPosition?: PositionVariant;
  className?: string;
  isSolid?: boolean;
  isOutlined?: boolean;
  dot?: boolean;
  count?: number;
  maxCount?: number;
  onClick?: () => void;
}

// Fonction utilitaire pour déterminer si un badge devrait utiliser la couleur tertiaire par défaut
const shouldUseTertiary = (children: React.ReactNode): boolean => {
  if (typeof children !== 'string') return false;

  const text = children.toLowerCase();
  return (
    text.includes('nouveau') ||
    text.includes('new') ||
    text.includes('featured') ||
    text.includes('à la une') ||
    text.includes('important') ||
    text.includes('promo')
  );
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant: providedVariant,
  size = 'medium',
  shape = 'rounded',
  icon,
  iconPosition = 'left',
  className = '',
  isSolid = false,
  isOutlined = false,
  dot = false,
  count,
  maxCount = 99,
  onClick,
}) => {
  // Utiliser la couleur tertiaire par défaut pour certains badges
  const variant = providedVariant || (shouldUseTertiary(children) ? 'tertiary' : 'default');

  // Couleurs de base selon la variante
  const variantClasses = {
    default: isSolid
      ? 'bg-[var(--color-border)] text-[var(--foreground)]'
      : 'surface-secondary text-[var(--text-secondary)]',
    primary: isSolid
      ? 'bg-[var(--color-primary)] text-white'
      : 'bg-[var(--color-primary-bg-accessible)] text-[var(--color-primary-accessible)]',
    secondary: isSolid
      ? 'bg-[var(--color-secondary)] text-white'
      : 'bg-[var(--color-secondary-bg-accessible)] text-[var(--color-secondary-accessible)]',
    tertiary: isSolid
      ? 'bg-[var(--color-tertiary)] text-white'
      : 'bg-[var(--color-tertiary-bg-accessible)] text-[var(--color-tertiary-accessible)]',
    success: isSolid
      ? 'bg-[var(--color-success)] text-white'
      : 'bg-[var(--color-success)]/10 text-[var(--color-success)]',
    warning: isSolid
      ? 'bg-[var(--color-warning)] text-white'
      : 'bg-[var(--color-warning)]/10 text-[var(--color-warning)]',
    error: isSolid
      ? 'bg-[var(--color-accent)] text-white'
      : 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]',
    info: isSolid
      ? 'bg-[var(--color-info)] text-white'
      : 'bg-[var(--color-info)]/10 text-[var(--color-info)]',
  };

  // Classes de taille
  const sizeClasses = {
    small: 'text-xs px-1.5 py-0.5',
    medium: 'text-xs px-2 py-1',
    large: 'text-sm px-2.5 py-1.5',
  };

  // Classes de forme
  const shapeClasses = {
    rounded: 'rounded',
    pill: 'rounded-full',
  };

  // Classes de contour
  const outlineClasses = isOutlined
    ? `border border-current bg-transparent ${variant === 'default' ? 'text-[var(--text-secondary)]' : ''}`
    : '';

  // Classes de base
  const baseClasses = 'inline-flex items-center justify-center font-medium whitespace-nowrap';

  // Classes combinées
  const badgeClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${shapeClasses[shape]}
    ${variantClasses[variant]}
    ${outlineClasses}
    ${className}
    ${onClick ? 'cursor-pointer transition-opacity hover:opacity-80' : ''}
  `.trim();

  // Contenu du badge
  let content = children;

  // Afficher un nombre avec une limite max
  if (count !== undefined) {
    content = count > maxCount ? `${maxCount}+` : count;
  }

  // Afficher un point (dot)
  if (dot) {
    content = (
      <>
        <span className={`inline-block w-2 h-2 rounded-full mr-1.5 bg-current`}></span>
        {children}
      </>
    );
  }

  // Gérer l'icône
  const leftIcon = icon && iconPosition === 'left' ? <span className="mr-1">{icon}</span> : null;

  const rightIcon = icon && iconPosition === 'right' ? <span className="ml-1">{icon}</span> : null;

  return (
    <span
      className={badgeClasses}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {leftIcon}
      {content}
      {rightIcon}
    </span>
  );
};
