'use client';

import React from 'react';
import { Typography } from '../atoms/Typography';
import Image from 'next/image';

export interface TimelineStep {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  date?: string;
  completed?: boolean;
  current?: boolean;
}

export interface ProcessTimelineProps {
  steps: TimelineStep[];
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  accentColor?: 'primary' | 'secondary' | 'tertiary';
  title?: string;
  subtitle?: string;
  withNumbers?: boolean;
  compact?: boolean;
  currentStep?: number;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({
  steps,
  className = '',
  orientation = 'vertical',
  accentColor = 'tertiary',
  title,
  subtitle,
  withNumbers = true,
  compact = false,
  currentStep,
}) => {
  // Classes pour la couleur d'accent
  const colorClass = `text-[var(--color-${accentColor})] bg-[var(--color-${accentColor})] border-[var(--color-${accentColor})]`;

  // Classes pour l'orientation
  const containerClasses = {
    horizontal: 'flex flex-col md:flex-row gap-2',
    vertical: 'flex flex-col gap-6',
  };

  // Rendu d'une étape
  const renderStep = (step: TimelineStep, index: number) => {
    // Déterminer l'état de l'étape
    const isCompleted = step.completed || (currentStep !== undefined && index + 1 < currentStep);
    const isCurrent = step.current || (currentStep !== undefined && index + 1 === currentStep);

    // Classes pour l'état de l'étape
    const stepStateClasses = {
      completed: `border-${accentColor} ${colorClass}`,
      current: `border-${accentColor} bg-white ${colorClass.split(' ')[0]}`,
      pending: 'border-gray-300 bg-gray-100 text-gray-400',
    };

    // Déterminer la classe d'état
    const stateClass = isCompleted
      ? stepStateClasses.completed
      : isCurrent
        ? stepStateClasses.current
        : stepStateClasses.pending;

    // Rendu d'une étape horizontale
    if (orientation === 'horizontal') {
      return (
        <div
          key={step.id}
          className={`flex-1 relative ${index < steps.length - 1 ? 'before:hidden md:before:block before:absolute before:h-0.5 before:w-full before:top-6 before:left-1/2 before:bg-gray-200 before:z-0' : ''}`}
        >
          <div className="flex flex-col items-center">
            {/* Indicateur d'étape */}
            <div className="relative z-10">
              {step.icon ? (
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full border-2 ${stateClass}`}
                >
                  {step.icon}
                </div>
              ) : (
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full border-2 ${stateClass}`}
                >
                  {withNumbers && (
                    <span className={`text-lg font-bold ${isCompleted ? 'text-white' : ''}`}>
                      {index + 1}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Contenu de l'étape */}
            <div className={`mt-3 ${compact ? 'w-24' : 'w-full'} text-center`}>
              <Typography variant={compact ? 'h4' : 'h3'} className="mb-1">
                {step.title}
              </Typography>

              {!compact && (
                <Typography variant="small" className="text-secondary">
                  {step.description}
                </Typography>
              )}

              {step.date && (
                <Typography
                  variant="small"
                  className={`${colorClass.split(' ')[0]} font-medium mt-1`}
                >
                  {step.date}
                </Typography>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Rendu d'une étape verticale
    return (
      <div key={step.id} className="relative pl-10">
        {/* Ligne verticale */}
        {index < steps.length - 1 && (
          <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gray-200 -ml-px"></div>
        )}

        {/* Indicateur d'étape */}
        <div className="absolute left-0 top-0">
          {step.icon ? (
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${stateClass}`}
            >
              {step.icon}
            </div>
          ) : (
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${stateClass}`}
            >
              {withNumbers && (
                <span className={`text-md font-bold ${isCompleted ? 'text-white' : ''}`}>
                  {index + 1}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Contenu de l'étape */}
        <div className="pb-8">
          <div className="flex items-center mb-1">
            <Typography variant="h3" className="font-bold">
              {step.title}
            </Typography>

            {step.date && (
              <Typography
                variant="small"
                className={`${colorClass.split(' ')[0]} font-medium ml-2`}
              >
                {step.date}
              </Typography>
            )}
          </div>

          <Typography variant="p" className="text-secondary mb-3">
            {step.description}
          </Typography>

          {step.image && (
            <div className="mt-3 rounded-lg overflow-hidden">
              <Image
                src={step.image}
                alt={step.title}
                width={300}
                height={200}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={`process-timeline ${className}`}>
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

      <div className={containerClasses[orientation]}>{steps.map(renderStep)}</div>
    </div>
  );
};
