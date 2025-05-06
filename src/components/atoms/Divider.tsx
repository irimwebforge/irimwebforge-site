import React from 'react';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'dotted';
  color?: 'primary' | 'secondary' | 'tertiary' | 'default';
  thickness?: 'thin' | 'medium' | 'thick';
  className?: string;
  label?: React.ReactNode;
  labelPosition?: 'start' | 'center' | 'end';
  spacing?: 'small' | 'medium' | 'large';
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

  // Classes combinées
  const dividerClasses = `
    ${baseClasses}
    ${thicknessClasses[orientation][thickness]}
    ${colorClasses[color]}
    ${variantClasses[variant]}
    ${className}
  `.trim();

  // Si un label est fourni et que l'orientation est horizontale
  if (label && orientation === 'horizontal') {
    const labelPositionClasses = {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
    };

    return (
      <div className={`flex items-center ${spacingClasses[spacing]}`}>
        {labelPosition === 'start' && (
          <span className="pr-3 text-secondary text-sm">{label}</span>
        )}
        <div className={`flex-grow ${dividerClasses}`} />
        {labelPosition === 'center' && (
          <span className="px-3 text-secondary text-sm">{label}</span>
        )}
        {labelPosition !== 'start' && labelPosition !== 'center' && (
          <div className={`flex-grow ${dividerClasses}`} />
        )}
        {labelPosition === 'end' && (
          <span className="pl-3 text-secondary text-sm">{label}</span>
        )}
      </div>
    );
  }

  // Divider simple
  return <div className={dividerClasses} />;
}; 