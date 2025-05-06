"use client";

import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Card } from '@/components/molecules/Card';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface BlogTag {
  /** Identifiant unique du tag */
  id: string;
  /** Nom du tag affiché */
  name: string;
  /** Slug utilisé pour les URL de filtrage */
  slug: string;
  /** Couleur d'accentuation du tag */
  color?: 'primary' | 'secondary' | 'tertiary' | 'default';
}

export interface BlogPostCardProps {
  /** Identifiant unique de l'article */
  id: string;
  /** Titre de l'article */
  title: string;
  /** Slug pour l'URL de l'article */
  slug: string;
  /** Extrait ou résumé de l'article */
  excerpt?: string;
  /** URL de l'image de couverture */
  coverImage?: string;
  /** Date de publication (chaîne ou objet Date) */
  publishedAt: string | Date;
  /** Temps de lecture estimé */
  readTime?: string | number;
  /** Informations sur l'auteur */
  author?: {
    name: string;
    avatar?: string;
    role?: string;
  };
  /** Tags associés à l'article */
  tags?: BlogTag[];
  /** Classes CSS additionnelles */
  className?: string;
  /** Style visuel de la carte */
  variant?: 'default' | 'featured' | 'compact' | 'horizontal';
  /** Fonction appelée au clic sur la carte */
  onClick?: () => void;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  id,
  title,
  slug,
  excerpt,
  coverImage,
  publishedAt,
  readTime,
  author,
  tags = [],
  className = '',
  variant = 'default',
  onClick,
}) => {
  // Formater la date
  const formatDate = (date: string | Date): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    
    // Options pour le formatage de la date
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    
    return dateObj.toLocaleDateString('fr-FR', options);
  };
  
  // Formater le temps de lecture
  const formatReadTime = (time: string | number | undefined): string => {
    if (!time) return '';
    
    const timeNumber = typeof time === 'string' ? parseInt(time, 10) : time;
    return `${timeNumber} min${timeNumber > 1 ? 's' : ''} de lecture`;
  };
  
  // Rendu des tags
  const renderTags = () => {
    if (!tags || tags.length === 0) return null;
    
    return (
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map(tag => {
          const tagColor = tag.color || 'default';
          const tagColorClasses = {
            primary: 'bg-[var(--color-primary)] bg-opacity-10 text-[var(--color-primary)]',
            secondary: 'bg-[var(--color-secondary)] bg-opacity-10 text-[var(--color-secondary)]',
            tertiary: 'bg-[var(--color-tertiary)] bg-opacity-10 text-[var(--color-tertiary)]',
            default: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
          };
          
          return (
            <span 
              key={tag.id} 
              className={cn(
                'text-xs px-2 py-1 rounded-full hover:opacity-80 transition-opacity cursor-pointer',
                tagColorClasses[tagColor]
              )}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                // Naviguer via programmation au lieu d'utiliser un lien imbriqué
                window.location.href = `/blog/tag/${tag.slug}`;
              }}
            >
              {tag.name}
            </span>
          );
        })}
      </div>
    );
  };
  
  // Rendu de l'auteur
  const renderAuthor = () => {
    if (!author) return null;
    
    return (
      <div className="flex items-center mt-4">
        {author.avatar && (
          <div className="mr-3">
            <Image 
              src={author.avatar} 
              alt={author.name} 
              width={32} 
              height={32}
              className="rounded-full object-cover" 
            />
          </div>
        )}
        <div>
          <Typography variant="small" className="font-medium">
            {author.name}
          </Typography>
          {author.role && (
            <Typography variant="small" className="text-gray-500 text-xs">
              {author.role}
            </Typography>
          )}
        </div>
      </div>
    );
  };
  
  // Rendu de la méta-information (date et temps de lecture)
  const renderMeta = () => {
    return (
      <div className="flex items-center text-gray-500 text-sm mt-2">
        <time dateTime={new Date(publishedAt).toISOString()}>
          {formatDate(publishedAt)}
        </time>
        
        {readTime && (
          <>
            <span className="mx-2">•</span>
            <span>{formatReadTime(readTime)}</span>
          </>
        )}
      </div>
    );
  };
  
  // Configuration des variantes
  const cardContent = () => {
    // Variante horizontale 
    if (variant === 'horizontal') {
      return (
        <div className="flex flex-col md:flex-row">
          {coverImage && (
            <div className="md:w-1/3 flex-shrink-0">
              <div className="relative h-48 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none overflow-hidden">
                <Image
                  src={coverImage}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
          
          <div className={cn(
            'p-5 flex flex-col',
            coverImage ? 'md:w-2/3' : 'w-full'
          )}>
            {renderTags()}
            
            <Typography variant="h3" className="mt-2">
              {title}
            </Typography>
            
            {excerpt && (
              <Typography variant="p" className="mt-2 text-secondary line-clamp-2">
                {excerpt}
              </Typography>
            )}
            
            {renderMeta()}
            
            {renderAuthor()}
          </div>
        </div>
      );
    }
    
    // Variantes default, featured et compact
    return (
      <>
        {coverImage && (
          <div className="relative h-48 sm:h-64 rounded-t-lg overflow-hidden">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}
        
        <div className={cn(
          'p-5',
          variant === 'featured' ? 'p-6' : ''
        )}>
          {renderTags()}
          
          <Typography 
            variant={variant === 'compact' ? 'h4' : 'h3'} 
            className="mt-2"
          >
            {title}
          </Typography>
          
          {excerpt && variant !== 'compact' && (
            <Typography variant="p" className="mt-2 text-secondary line-clamp-3">
              {excerpt}
            </Typography>
          )}
          
          {renderMeta()}
          
          {variant !== 'compact' && renderAuthor()}
        </div>
      </>
    );
  };
  
  // Gestion du clic
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  
  // Classes de variante pour la Card
  const cardVariant = variant === 'featured' ? 'elevated' : 'default';
  const cardPadding = 'none'; // Nous gérons le padding manuellement
  
  return (
    <Link href={`/blog/${slug}`} passHref className={cn('block', className)}>
      <Card
        variant={cardVariant}
        padding={cardPadding}
        className={cn(
          'overflow-hidden h-full transition-transform duration-300',
          variant === 'featured' ? 'hover:shadow-xl' : 'hover:shadow-md',
          variant === 'featured' ? 'border-[var(--color-primary)]' : ''
        )}
        onClick={handleClick}
      >
        {cardContent()}
      </Card>
    </Link>
  );
};

// Composant pour une grille d'articles
export interface BlogPostGridProps {
  /** Liste des articles à afficher */
  posts: BlogPostCardProps[];
  /** Classes CSS additionnelles */
  className?: string;
  /** Nombre de colonnes dans la grille */
  columns?: 1 | 2 | 3 | 4;
  /** Afficher un article en vedette */
  featuredPost?: boolean;
  /** Titre de la section */
  title?: string;
  /** Sous-titre de la section */
  subtitle?: string;
  /** URL vers la page listant tous les articles */
  viewAllLink?: string;
  /** Texte du lien "voir tout" */
  viewAllText?: string;
}

export const BlogPostGrid: React.FC<BlogPostGridProps> = ({
  posts,
  className = '',
  columns = 3,
  featuredPost = true,
  title,
  subtitle,
  viewAllLink,
  viewAllText = 'Voir tous les articles',
}) => {
  if (!posts || posts.length === 0) return null;
  
  // Classes pour le nombre de colonnes
  const columnsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };
  
  return (
    <div className={cn('blog-post-grid', className)}>
      {(title || subtitle) && (
        <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
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
          
          {viewAllLink && (
            <Link 
              href={viewAllLink}
              className="text-[var(--color-primary)] hover:underline mt-4 md:mt-0 font-medium"
            >
              {viewAllText}
            </Link>
          )}
        </div>
      )}
      
      <div className="space-y-8">
        {featuredPost && posts.length > 0 && (
          <BlogPostCard {...posts[0]} variant="featured" />
        )}
        
        {posts.length > (featuredPost ? 1 : 0) && (
          <div className={cn('grid gap-6', columnsClasses[columns])}>
            {posts.slice(featuredPost ? 1 : 0).map(post => (
              <BlogPostCard key={post.id} {...post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}; 