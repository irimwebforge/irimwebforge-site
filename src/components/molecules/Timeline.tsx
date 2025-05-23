'use client';

import React from 'react';
import { Typography } from '../atoms/Typography';
import { Icon, IconName } from '../atoms/Icon';

export interface TimelineStep {
  id: string;
  title: string;
  description: string;
  date: string;
  icon?: IconName;
  color?: 'primary' | 'secondary' | 'tertiary';
  link?: {
    text: string;
    url: string;
  };
}

export interface TimelineProps {
  steps: TimelineStep[];
  className?: string;
  _variant?: 'default' | 'compact' | 'detailed';
  orientation?: 'vertical' | 'horizontal';
  withDates?: boolean;
}

export const Timeline = ({
  steps,
  className = '',
  _variant = 'default',
  orientation = 'vertical',
  withDates = true,
}: TimelineProps) => {
  // Configuration des couleurs par variante
  const getColorClasses = (color: TimelineStep['color'] = 'primary') => {
    const colorConfig = {
      primary: {
        bg: 'bg-[var(--color-primary)]',
        border: 'border-[var(--color-primary)]',
        text: 'text-[var(--color-primary)]',
        light: 'bg-[var(--color-primary-100)]',
      },
      secondary: {
        bg: 'bg-[var(--color-secondary)]',
        border: 'border-[var(--color-secondary)]',
        text: 'text-[var(--color-secondary)]',
        light: 'bg-[var(--color-secondary-100)]',
      },
      tertiary: {
        bg: 'bg-[var(--color-tertiary)]',
        border: 'border-[var(--color-tertiary)]',
        text: 'text-[var(--color-tertiary)]',
        light: 'bg-[var(--color-tertiary-100)]',
      },
    };

    return colorConfig[color];
  };

  const timelineClasses =
    orientation === 'horizontal' ? 'flex flex-row overflow-x-auto space-x-8 pb-4' : 'space-y-8';

  return (
    <div className={`${timelineClasses} ${className}`}>
      {steps.map((step, index) => {
        const colorClasses = getColorClasses(step.color);
        const isLast = index === steps.length - 1;

        return (
          <div
            key={step.id}
            className={`relative ${orientation === 'vertical' ? 'pl-8' : 'pt-8'} ${!isLast ? (orientation === 'vertical' ? 'pb-8' : 'pr-8') : ''} animate-fade-in`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Ligne de connexion */}
            {!isLast && (
              <div
                className={`
                  absolute 
                  ${
                    orientation === 'vertical'
                      ? 'left-[15px] top-[30px] w-0.5 h-full'
                      : 'top-[15px] left-[30px] h-0.5 w-full'
                  }
                  -ml-px ${colorClasses.bg} opacity-20
                `}
              />
            )}

            {/* Point et icône */}
            <div
              className={`
                absolute 
                ${orientation === 'vertical' ? 'left-0 top-0' : 'top-0 left-0'}
                w-8 h-8 rounded-full
                ${colorClasses.light} 
                flex items-center justify-center
                transition-transform duration-normal hover:scale-110
              `}
            >
              <Icon name={step.icon || 'Circle'} size={20} className={colorClasses.text} />
            </div>

            {/* Contenu */}
            <div className={orientation === 'vertical' ? 'pt-1' : 'pt-12'}>
              {/* Date */}
              {withDates && (
                <Typography variant="small" className={`font-medium mb-1 ${colorClasses.text}`}>
                  {step.date}
                </Typography>
              )}

              {/* Titre */}
              <Typography
                variant="h4"
                className="font-bold mb-2 transition-colors duration-normal hover:text-[var(--color-primary)]"
              >
                {step.title}
              </Typography>

              {/* Description */}
              <Typography variant="p" className="text-gray-600 dark:text-gray-300 mb-3">
                {step.description}
              </Typography>

              {/* Lien optionnel */}
              {step.link && (
                <a
                  href={step.link.url}
                  className={`
                    inline-flex items-center gap-1 text-sm font-medium
                    ${colorClasses.text}
                    transition-all duration-normal
                    hover:gap-2
                  `}
                >
                  {step.link.text}
                  <Icon name="ArrowRight" size={16} />
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
