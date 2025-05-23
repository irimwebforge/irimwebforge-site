'use client';

import React from 'react';
import { Typography } from '../atoms/Typography';
import { Container } from '../atoms/Container';
import { Icon } from '../atoms/Icon';

export interface TemporalSplitContent {
  title: string;
  content: string;
  example?: {
    title: string;
    highlight?: string;
  };
  target?: string;
  message?: string;
}

export interface TemporalSplitProps {
  title: string;
  leftContent: TemporalSplitContent;
  rightContent: TemporalSplitContent;
  className?: string;
}

export const TemporalSplit: React.FC<TemporalSplitProps> = ({
  title,
  leftContent,
  rightContent,
  className = '',
}) => {
  return (
    <section
      className={`py-12 sm:py-16 lg:py-20 ${className}`}
      aria-labelledby="temporal-split-title"
    >
      <Container>
        {/* Titre principal */}
        <Typography
          as="h2"
          variant="h2"
          id="temporal-split-title"
          className="text-center mb-12 font-bold italic"
        >
          {title}
        </Typography>

        {/* Conteneur des colonnes */}
        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Ligne de séparation verticale (visible uniquement sur desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--border-color)] to-transparent transform -translate-x-1/2" />

          {/* Colonne gauche */}
          <div className="relative p-6 rounded-lg bg-[var(--surface-primary)] shadow-md transition-transform hover:scale-[1.02] duration-300 border border-[var(--border-color)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)] rounded-t-lg" />
            <Typography as="h3" variant="h3" className="mb-4 font-semibold">
              {leftContent.title}
            </Typography>
            <Typography variant="p" className="mb-6 text-[var(--text-secondary)]">
              {leftContent.content}
            </Typography>
            {leftContent.example && (
              <div className="mb-4 p-4 bg-[var(--surface-secondary)] rounded-lg">
                <Typography variant="h4" className="text-sm font-semibold mb-2">
                  Exemple : {leftContent.example.title}
                </Typography>
                {leftContent.example.highlight && (
                  <Typography variant="accent" className="text-[var(--color-primary)] font-medium">
                    {leftContent.example.highlight}
                  </Typography>
                )}
              </div>
            )}
            {leftContent.target && (
              <Typography variant="p" className="text-sm text-[var(--text-tertiary)]">
                <Icon name="Users" className="inline-block mr-2" />
                {leftContent.target}
              </Typography>
            )}
          </div>

          {/* Colonne droite */}
          <div className="relative p-6 rounded-lg bg-[var(--surface-primary)] shadow-md transition-transform hover:scale-[1.02] duration-300 border border-[var(--border-color)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary)] rounded-t-lg" />
            <Typography as="h3" variant="h3" className="mb-4 font-semibold">
              {rightContent.title}
            </Typography>
            <Typography variant="p" className="mb-6 text-[var(--text-secondary)]">
              {rightContent.content}
            </Typography>
            {rightContent.example && (
              <div className="mb-4 p-4 bg-[var(--surface-secondary)] rounded-lg">
                <Typography variant="h4" className="text-sm font-semibold mb-2">
                  Exemple : {rightContent.example.title}
                </Typography>
                {rightContent.example.highlight && (
                  <Typography variant="accent" className="text-[var(--color-primary)] font-medium">
                    {rightContent.example.highlight}
                  </Typography>
                )}
              </div>
            )}
            {rightContent.message && (
              <Typography
                variant="accent"
                className="mt-6 text-center italic text-[var(--color-secondary)] font-medium"
              >
                {rightContent.message}
              </Typography>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
