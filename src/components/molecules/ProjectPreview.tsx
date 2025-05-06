import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ProjectTag {
  /** Identifiant unique du tag */
  id: string;
  /** Texte d'affichage du tag */
  label: string;
  /** Couleur d'accentuation du tag */
  color?: 'primary' | 'secondary' | 'tertiary' | 'default';
}

export interface ProjectPreviewProps {
  /** Identifiant unique du projet */
  id: string;
  /** Titre du projet */
  title: string;
  /** Slug pour l'URL du projet */
  slug: string;
  /** URL de l'image de présentation du projet */
  imageSrc: string;
  /** Tags associés au projet */
  tags?: ProjectTag[];
  /** Description courte du projet */
  description?: string;
  /** Classes CSS additionnelles */
  className?: string;
  /** Style visuel de la prévisualisation */
  variant?: 'default' | 'compact' | 'featured';
  /** Nom du client du projet */
  clientName?: string;
  /** Année de réalisation du projet */
  year?: string;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  id,
  title,
  slug,
  imageSrc,
  tags = [],
  description,
  className = '',
  variant = 'default',
  clientName,
  year,
}) => {
  // Styles selon variante
  const getVariantClasses = () => {
    switch (variant) {
      case 'compact':
        return {
          container: 'rounded-md overflow-hidden shadow-sm hover:shadow transition-all duration-300',
          imageDimensions: 'aspect-video',
          content: 'p-3',
        };
      case 'featured':
        return {
          container: 'rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-2 border-[var(--color-primary)]',
          imageDimensions: 'aspect-[4/3]',
          content: 'p-6',
        };
      default:
        return {
          container: 'rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-color',
          imageDimensions: 'aspect-[3/2]',
          content: 'p-4',
        };
    }
  };

  const variantClasses = getVariantClasses();

  // Rendu des tags
  const renderTags = () => {
    if (!tags || tags.length === 0) return null;

    return (
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag) => {
          const tagColorClasses = {
            primary: 'bg-[var(--color-primary)] bg-opacity-10 text-[var(--color-primary)]',
            secondary: 'bg-[var(--color-secondary)] bg-opacity-10 text-[var(--color-secondary)]',
            tertiary: 'bg-[var(--color-tertiary)] bg-opacity-10 text-[var(--color-tertiary)]',
            default: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
          };
          
          return (
            <span 
              key={tag.id} 
              className={cn(
                'text-xs px-2 py-1 rounded-full',
                tagColorClasses[tag.color || 'default']
              )}
            >
              {tag.label}
            </span>
          );
        })}
      </div>
    );
  };

  // Informations client et année
  const renderMeta = () => {
    if (!clientName && !year) return null;
    
    return (
      <div className="mt-2 flex items-center text-tertiary">
        {clientName && (
          <Typography variant="small" className="text-secondary">
            {clientName}
          </Typography>
        )}
        
        {clientName && year && (
          <span className="mx-2">•</span>
        )}
        
        {year && (
          <Typography variant="small" className="text-tertiary">
            {year}
          </Typography>
        )}
      </div>
    );
  };

  return (
    <Link 
      href={`/projets/${slug}`} 
      className={cn(
        'project-preview block surface-primary',
        variantClasses.container,
        className
      )}
    >
      {/* Image du projet */}
      <div className={cn(
        'relative overflow-hidden',
        variantClasses.imageDimensions
      )}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      {/* Contenu texte */}
      <div className={variantClasses.content}>
        <Typography 
          variant={variant === 'featured' ? 'h3' : 'h4'} 
          className="font-bold text-primary"
        >
          {title}
        </Typography>
        
        {renderMeta()}
        
        {description && variant !== 'compact' && (
          <Typography variant="small" className="mt-2 text-secondary line-clamp-2">
            {description}
          </Typography>
        )}
        
        {renderTags()}
      </div>
    </Link>
  );
}; 