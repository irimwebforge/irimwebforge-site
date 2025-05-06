import React from 'react';
import { cn } from '@/lib/utils';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'dotted';
  color?: 'primary' | 'secondary' | 'tertiary' | 'default';
  thickness?: 'thin' | 'medium' | 'thick';
  className?: string;
  label?: React.ReactNode;
  labelPosition?: 'start' | 'center' | 'end';
  spacing?: 'small' | 'medium' | 'large';
  highlight?: boolean;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  variant = 'solid',
  color = 'default',
  thickness = 'thin',
  className = '',
  label,
  labelPosition = 'center',
  spacing = 'medium',
  highlight = false,
}) => {
  // Détermination des classes de style
  const colorClasses = {
    default: 'border-color',
    primary: 'border-[var(--color-primary)]',
    secondary: 'border-[var(--color-secondary)]',
    tertiary: 'border-[var(--color-tertiary)]',
  };

  const thicknessClasses = {
    horizontal: {
      thin: 'border-t',
      medium: 'border-t-2',
      thick: 'border-t-4',
    },
    vertical: {
      thin: 'border-l',
      medium: 'border-l-2',
      thick: 'border-l-4',
    },
  };

  const variantClasses = {
    solid: '',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
  };

  const spacingClasses = {
    small: 'my-2',
    medium: 'my-4',
    large: 'my-8',
  };

  // Classe de base selon l'orientation
  const baseClasses = orientation === 'horizontal'
    ? `w-full ${spacingClasses[spacing]}`
    : 'h-full self-stretch mx-2';
    
  // Classe de mise en évidence (background)
  const highlightClass = highlight && color === 'tertiary' 
    ? 'bg-amber-50 p-4 rounded-md' 
    : '';

  // Classes combinées
  const dividerClasses = cn(
    baseClasses,
    thicknessClasses[orientation][thickness],
    colorClasses[color],
    variantClasses[variant],
    className
  );

  // Si un label est fourni et que l'orientation est horizontale
  if (label && orientation === 'horizontal') {
    const labelColor = color !== 'default' 
      ? `text-[var(--color-${color})]` 
      : 'text-secondary';

    return (
      <div className={cn('flex items-center', spacingClasses[spacing], highlightClass)}>
        {labelPosition === 'start' && (
          <span className={cn('pr-3 text-sm font-medium', labelColor)}>
            {label}
          </span>
        )}
        <div className={dividerClasses} />
        {labelPosition === 'center' && (
          <span className={cn('px-3 text-sm font-medium', labelColor)}>
            {label}
          </span>
        )}
        {labelPosition !== 'start' && labelPosition !== 'center' && (
          <div className={dividerClasses} />
        )}
        {labelPosition === 'end' && (
          <span className={cn('pl-3 text-sm font-medium', labelColor)}>
            {label}
          </span>
        )}
      </div>
    );
  }

  // Divider simple
  return <div className={cn(dividerClasses, highlightClass)} />;
}; 