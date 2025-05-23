import React from 'react';
import { Typography } from '../atoms/Typography';
import Image from 'next/image';
import { cn } from '../../lib/utils';
import { Badge } from '../atoms/Badge';
import { Icon } from '../atoms/Icon';
import type { Project } from '@/templates/ProjectShowcase';

export interface ProjectTag {
  /** Identifiant unique du tag */
  id: string;
  /** Texte d'affichage du tag */
  label: string;
  /** Couleur d'accentuation du tag */
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'info'
    | 'success'
    | 'warning'
    | 'default'
    | 'error';
}

export interface ProjectPreviewProps {
  project: Project;
  variant?: 'default' | 'compact';
  onClick?: () => void;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  project,
  variant = 'default',
  onClick,
}) => {
  const { title, description, imageUrl, tags, clientName, year, onlineUrl } = project;

  return (
    <article
      className={cn(
        'group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-normal',
        variant === 'compact' ? 'h-full' : ''
      )}
      onClick={onClick}
      style={{ cursor: onlineUrl ? 'pointer' : 'default' }}
    >
      {/* Image du projet */}
      <div className="p-3">
        <div
          className={cn(
            'relative overflow-hidden rounded-lg',
            variant === 'compact' ? 'aspect-[4/3]' : 'aspect-[16/9]'
          )}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className={cn(
              'object-cover transition-transform duration-normal',
              onlineUrl && 'group-hover:scale-105'
            )}
          />

          {/* Indicateur de démo disponible */}
          {onlineUrl && (
            <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-normal">
              <Icon name="ExternalLink" className="w-4 h-4 text-[var(--color-primary)]" />
            </div>
          )}
        </div>
      </div>

      {/* Contenu */}
      <div className="px-4 pb-4">
        <Typography as="h3" variant="h3" className="mb-2 group-hover:text-[var(--color-primary)]">
          {title}
        </Typography>

        {variant !== 'compact' && description && (
          <Typography variant="p" className="mb-4 line-clamp-2 text-gray-600 dark:text-gray-300">
            {description}
          </Typography>
        )}

        {/* Meta informations */}
        {(clientName || year) && (
          <div className="flex items-center gap-2 mb-3 text-sm text-gray-500 dark:text-gray-400">
            {clientName && <span>{clientName}</span>}
            {clientName && year && <span>•</span>}
            {year && <span>{year}</span>}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">
          {tags?.map((tag: ProjectTag, index: number) => (
            <Badge key={index} variant={tag.color || 'default'} size="small" shape="pill">
              {tag.label}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
};
