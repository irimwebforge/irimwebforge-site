import React from 'react';
import { Typography } from '../atoms/Typography';
import Image from 'next/image';
import { cn } from '../../lib/utils';

export interface TestimonialProps {
  /** Texte du témoignage */
  quote: string;
  /** Nom de l'auteur du témoignage */
  author: string;
  /** Nom de l'entreprise de l'auteur */
  company?: string;
  /** URL de l'avatar de l'auteur */
  avatarSrc?: string;
  /** Classes CSS additionnelles */
  className?: string;
  /** Style visuel du témoignage */
  variant?: 'default' | 'compact' | 'featured';
  /** Nom du projet associé au témoignage */
  projectName?: string;
  /** URL du projet associé */
  projectUrl?: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  company,
  avatarSrc,
  className = '',
  variant = 'default',
  projectName,
  projectUrl,
}) => {
  const baseClasses = 'testimonial relative';

  // Styles variantes
  const variantClasses = {
    default: 'p-6 surface-primary border border-color rounded-lg',
    compact: 'p-4 surface-tertiary rounded-lg',
    featured: 'p-8 surface-primary border-2 border-[var(--color-tertiary)] rounded-lg shadow-md',
  };

  // Rendu de la citation avec formatage correct
  const renderQuote = () => {
    return (
      <div className="relative">
        {/* Guillemet décoratif */}
        <span className="absolute -top-8 left-0 text-6xl opacity-10 text-[var(--color-primary)]">
          "
        </span>

        <Typography
          variant="lead"
          className={cn('italic relative z-10', variant === 'compact' ? 'text-base' : 'text-lg')}
        >
          {quote}
        </Typography>
      </div>
    );
  };

  // Rendu des informations sur l'auteur
  const renderAuthor = () => {
    return (
      <div className={cn('flex items-center', variant === 'compact' ? 'mt-3' : 'mt-6')}>
        {avatarSrc && (
          <div className="mr-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={avatarSrc}
                alt={author}
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        )}

        <div>
          <Typography variant="p" className="font-semibold">
            {author}
          </Typography>

          {company && (
            <Typography variant="small" className="text-[var(--text-secondary)]">
              {company}
            </Typography>
          )}

          {projectName && (
            <div className="mt-1">
              <Typography variant="small" className="text-[var(--text-secondary)]">
                {projectUrl ? (
                  <a href={projectUrl} className="text-[var(--color-primary)] hover:underline">
                    Projet : {projectName}
                  </a>
                ) : (
                  <>Projet : {projectName}</>
                )}
              </Typography>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={cn(baseClasses, variantClasses[variant], className)}>
      {renderQuote()}
      {renderAuthor()}
    </div>
  );
};
