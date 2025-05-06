"use client";

import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import Image from 'next/image';

export interface Technology {
  id: string;
  name: string;
  logo: string;
  description?: string;
  url?: string;
  category?: string;
}

export interface TechnologyStackProps {
  technologies: Technology[];
  className?: string;
  title?: string;
  subtitle?: string;
  variant?: 'grid' | 'list' | 'carousel' | 'grouped';
  logoSize?: 'small' | 'medium' | 'large';
  maxColumns?: 3 | 4 | 5 | 6;
  showLabels?: boolean;
  groupByCategory?: boolean;
}

export const TechnologyStack: React.FC<TechnologyStackProps> = ({
  technologies,
  className = '',
  title,
  subtitle,
  variant = 'grid',
  logoSize = 'medium',
  maxColumns = 5,
  showLabels = true,
  groupByCategory = false,
}) => {
  // Tailles des logos
  const logoSizes = {
    small: { width: 40, height: 40, className: 'w-10 h-10' },
    medium: { width: 60, height: 60, className: 'w-15 h-15' },
    large: { width: 80, height: 80, className: 'w-20 h-20' },
  };
  
  // Classes pour le nombre de colonnes
  const columnsClasses = {
    3: 'grid-cols-2 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5',
    6: 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6',
  };
  
  // Regrouper les technologies par catégorie si nécessaire
  const getTechnologiesByCategory = () => {
    if (!groupByCategory) return { 'all': technologies };
    
    return technologies.reduce((acc, tech) => {
      const category = tech.category || 'Autre';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(tech);
      return acc;
    }, {} as Record<string, Technology[]>);
  };
  
  const technologiesByCategory = getTechnologiesByCategory();
  
  // Rendu d'une technologie (pour les variantes grid et list)
  const renderTechnology = (tech: Technology) => {
    // Composant de base pour le logo
    const TechLogo = () => (
      <div className="flex justify-center">
        <div className={`p-3 rounded-lg bg-white shadow-sm ${logoSizes[logoSize].className}`}>
          <Image
            src={tech.logo}
            alt={tech.name}
            width={logoSizes[logoSize].width}
            height={logoSizes[logoSize].height}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    );
    
    // Rendu pour la variante 'grid'
    if (variant === 'grid') {
      return (
        <div key={tech.id} className="flex flex-col items-center space-y-2">
          {tech.url ? (
            <a 
              href={tech.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-transform hover:scale-105"
            >
              <TechLogo />
            </a>
          ) : (
            <TechLogo />
          )}
          
          {showLabels && (
            <Typography variant="small" className="text-center font-medium">
              {tech.name}
            </Typography>
          )}
        </div>
      );
    }
    
    // Rendu pour la variante 'list'
    if (variant === 'list') {
      return (
        <div key={tech.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
          <div className="flex-shrink-0">
            <TechLogo />
          </div>
          
          <div className="flex-1">
            <Typography variant="h4" className="font-bold">
              {tech.name}
            </Typography>
            
            {tech.description && (
              <Typography variant="small" className="text-secondary mt-1">
                {tech.description}
              </Typography>
            )}
          </div>
          
          {tech.url && (
            <a 
              href={tech.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline"
              aria-label={`En savoir plus sur ${tech.name}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          )}
        </div>
      );
    }
    
    // Pour la variante carousel, on utilisera le même rendu que grid
    return (
      <div key={tech.id} className="flex flex-col items-center space-y-2 px-4">
        <TechLogo />
        
        {showLabels && (
          <Typography variant="small" className="text-center font-medium">
            {tech.name}
          </Typography>
        )}
      </div>
    );
  };
  
  // Rendu pour la variante groupée
  const renderGroupedTechnologies = () => {
    return Object.entries(technologiesByCategory).map(([category, techs]) => (
      <div key={category} className="mb-8 last:mb-0">
        {category !== 'all' && (
          <Typography variant="h3" className="mb-4 pb-2 border-b border-gray-200">
            {category}
          </Typography>
        )}
        
        <div className={`grid ${columnsClasses[maxColumns]} gap-6`}>
          {techs.map(renderTechnology)}
        </div>
      </div>
    ));
  };
  
  // Rendu du contenu principal en fonction de la variante
  const renderContent = () => {
    if (variant === 'carousel') {
      return (
        <div className="relative overflow-x-auto py-4">
          <div className="flex space-x-8 px-4">
            {technologies.map(renderTechnology)}
          </div>
        </div>
      );
    }
    
    if (variant === 'list') {
      return (
        <div className="space-y-3">
          {technologies.map(renderTechnology)}
        </div>
      );
    }
    
    if (variant === 'grouped') {
      return renderGroupedTechnologies();
    }
    
    // Default: grid
    return (
      <div className={`grid ${columnsClasses[maxColumns]} gap-6`}>
        {technologies.map(renderTechnology)}
      </div>
    );
  };
  
  return (
    <div className={`technology-stack ${className}`}>
      {(title || subtitle) && (
        <div className="mb-8">
          {title && (
            <Typography variant="h2" className="mb-2">
              {title}
            </Typography>
          )}
          
          {subtitle && (
            <Typography variant="lead" className="text-secondary">
              {subtitle}
            </Typography>
          )}
        </div>
      )}
      
      {renderContent()}
    </div>
  );
}; 