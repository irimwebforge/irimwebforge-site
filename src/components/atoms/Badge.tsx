import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info'
    | 'default';
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded' | 'pill';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
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
      ? 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
      : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
    primary: isSolid
      ? 'bg-[var(--color-primary)] text-white'
      : 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]',
    secondary: isSolid
      ? 'bg-[var(--color-secondary)] text-white'
      : 'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]',
    tertiary: isSolid
      ? 'bg-[var(--color-tertiary)] text-white'
      : 'bg-amber-50 text-[var(--color-tertiary)]',
    success: isSolid
      ? 'bg-green-600 text-white'
      : 'bg-green-100 text-green-800 dark:bg-green-900 dark:bg-opacity-20 dark:text-green-400',
    warning: isSolid
      ? 'bg-yellow-500 text-white'
      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:bg-opacity-20 dark:text-yellow-400',
    error: isSolid
      ? 'bg-red-600 text-white'
      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:bg-opacity-20 dark:text-red-400',
    info: isSolid
      ? 'bg-blue-600 text-white'
      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:bg-opacity-20 dark:text-blue-400',
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
    ? `border border-current bg-transparent ${
        variant === 'default' ? 'text-gray-600 dark:text-gray-300' : ''
      }`
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
