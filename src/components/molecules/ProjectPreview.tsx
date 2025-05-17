import React from 'react';
import { Typography } from '../atoms/Typography';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '../../lib/utils';

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
    const baseClasses = {
      container: cn(
        'rounded-md overflow-hidden shadow-sm',
        'border border-color hover:border-2 hover:border-[var(--color-primary)]',
        'hover:shadow-lg group',
        'transition-all duration-300 ease-in-out'
      ),
      imageDimensions: 'aspect-[4/3] min-h-[280px]',
      content: 'p-4 transition-all duration-300 ease-in-out group-hover:p-6',
      title:
        variant === 'featured'
          ? 'text-lg md:text-xl font-bold text-primary transition-all duration-300 ease-in-out group-hover:text-xl md:group-hover:text-2xl'
          : 'text-base md:text-lg font-bold text-primary transition-all duration-300 ease-in-out group-hover:text-lg md:group-hover:text-xl',
    };

    return baseClasses;
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

        {clientName && year && <span className="mx-2">•</span>}

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
        'project-preview block surface-primary min-h-[500px]',
        variantClasses.container,
        className
      )}
    >
      {/* Image du projet */}
      <div className={cn('relative overflow-hidden', variantClasses.imageDimensions)}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Contenu texte */}
      <div className={variantClasses.content}>
        <Typography
          as="h3"
          variant={variant === 'featured' ? 'h3' : 'h4'}
          className={variantClasses.title}
        >
          {title}
        </Typography>

        {renderMeta()}

        {description && (
          <Typography
            variant="small"
            className={cn(
              'mt-2 text-secondary line-clamp-2',
              variant === 'featured'
                ? 'text-sm group-hover:text-base'
                : 'text-xs group-hover:text-sm'
            )}
          >
            {description}
          </Typography>
        )}

        {renderTags()}
      </div>
    </Link>
  );
};
