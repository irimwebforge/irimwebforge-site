import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon, LucideProps } from 'lucide-react';
import * as Icons from 'lucide-react';

// Créer un objet contenant toutes les icônes valides pour le typage
type IconsType = Omit<typeof Icons, 'createLucideIcon'>;
export type IconName = keyof IconsType;

export interface IconProps extends Omit<LucideProps, 'ref'> {
  name: IconName;
}

export const Icon = ({ 
  name, 
  size = 24, 
  color,
  className,
  ...props 
}: IconProps) => {
  // Vérification dynamique de l'existence de l'icône
  const IconComponent = Icons[name] as LucideIcon;
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in Lucide Icons`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      color={color}
      className={cn(className)}
      aria-hidden="true"
      {...props}
    />
  );
};

// Exporter un composant qui liste toutes les icônes disponibles
export const IconGallery = () => {
  // Filtrer les propriétés qui sont des icônes
  const iconNames = Object.keys(Icons).filter(
    (key) => key !== 'createLucideIcon'
  ) as IconName[];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      {iconNames.map((iconName) => (
        <div 
          key={iconName} 
          className="flex flex-col items-center p-3 border border-color rounded-md hover:shadow-sm"
        >
          <Icon name={iconName} className="mb-2" />
          <span className="text-xs text-tertiary text-center truncate w-full">
            {iconName}
          </span>
        </div>
      ))}
    </div>
  );
}; 