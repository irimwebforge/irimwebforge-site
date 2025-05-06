'use client';

import React from 'react';
import Image from 'next/image';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'square' | 'rounded';
  name?: string;
  icon?: React.ReactNode;
  className?: string;
  status?: 'online' | 'offline' | 'busy' | 'away';
  badge?: React.ReactNode;
  onClick?: () => void;
  border?: boolean;
  borderColor?: 'primary' | 'secondary' | 'tertiary' | 'default';
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  size = 'md',
  shape = 'circle',
  name,
  icon,
  className = '',
  status,
  badge,
  onClick,
  border = false,
  borderColor = 'default',
}) => {
  // Calculer la taille en pixels et classes
  const sizeMap = {
    xs: { px: 24, textSize: 'text-xs' },
    sm: { px: 32, textSize: 'text-sm' },
    md: { px: 40, textSize: 'text-base' },
    lg: { px: 48, textSize: 'text-lg' },
    xl: { px: 64, textSize: 'text-xl' },
  };
  
  // Classes pour la forme
  const shapeClasses = {
    circle: 'rounded-full',
    square: '',
    rounded: 'rounded-md',
  };
  
  // Couleurs de bordure
  const borderClasses = border ? {
    default: 'border-2 border-gray-200 dark:border-gray-700',
    primary: 'border-2 border-[var(--color-primary)]',
    secondary: 'border-2 border-[var(--color-secondary)]',
    tertiary: 'border-2 border-[var(--color-tertiary)]',
  }[borderColor] : '';
  
  // Couleurs de statut
  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-gray-400',
    busy: 'bg-red-500',
    away: 'bg-yellow-500',
  };
  
  // Générer les initiales à partir du nom
  const getInitials = () => {
    if (!name) return '';
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };
  
  // Générer une couleur de fond cohérente basée sur le nom
  const getBackgroundColor = () => {
    if (!name) return 'bg-gray-300 dark:bg-gray-700';
    
    const colorOptions = [
      'bg-red-500',
      'bg-blue-500',
      'bg-green-500',
      'bg-yellow-500',
      'bg-purple-500',
      'bg-pink-500',
      'bg-indigo-500',
      'bg-teal-500',
    ];
    
    // Utiliser le nom pour sélectionner une couleur de manière déterministe
    const hash = name.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + acc;
    }, 0);
    
    return colorOptions[hash % colorOptions.length];
  };
  
  // Classes de base combinées
  const avatarClasses = `
    inline-flex items-center justify-center
    ${shapeClasses[shape]}
    ${borderClasses}
    ${className}
    ${onClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}
  `.trim();
  
  // Définir la taille et le contenu
  const pixelSize = sizeMap[size].px;
  const textSize = sizeMap[size].textSize;
  
  return (
    <div className="relative inline-block" style={{ width: pixelSize, height: pixelSize }}>
      {/* Avatar principal */}
      <div 
        className={avatarClasses}
        style={{ width: pixelSize, height: pixelSize }}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
      >
        {/* Image si fournie */}
        {src ? (
          <Image
            src={src}
            alt={alt}
            width={pixelSize}
            height={pixelSize}
            className={shapeClasses[shape]}
            style={{ objectFit: 'cover' }}
          />
        ) : icon ? (
          // Icône si fournie
          <div className={`${getBackgroundColor()} ${shapeClasses[shape]} w-full h-full flex items-center justify-center text-white`}>
            {icon}
          </div>
        ) : (
          // Initiales par défaut
          <div className={`${getBackgroundColor()} ${shapeClasses[shape]} w-full h-full flex items-center justify-center text-white ${textSize}`}>
            {getInitials()}
          </div>
        )}
      </div>
      
      {/* Indicateur de statut */}
      {status && (
        <span 
          className={`absolute bottom-0 right-0 block w-3 h-3 ${statusColors[status]} rounded-full ring-2 ring-white dark:ring-gray-900`}
        />
      )}
      
      {/* Badge personnalisé */}
      {badge && (
        <span className="absolute -top-1 -right-1 transform">
          {badge}
        </span>
      )}
    </div>
  );
}; 