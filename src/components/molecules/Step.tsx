import React from 'react';
import { Typography } from '../atoms/Typography';

export interface StepProps {
  number: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  isActive?: boolean;
  isCompleted?: boolean;
  onClick?: () => void;
}

export const Step: React.FC<StepProps> = ({
  number,
  title,
  description,
  icon,
  className = '',
  isActive = false,
  isCompleted = false,
  onClick,
}) => {
  // Détermination de l'état pour les couleurs et styles
  const getStateClasses = () => {
    if (isCompleted) {
      return {
        circle: 'bg-[var(--color-primary)] text-white',
        border: 'border-[var(--color-primary)]',
        title: 'text-[var(--color-primary)]',
      };
    }

    if (isActive) {
      return {
        circle: 'bg-[var(--color-tertiary)] text-white',
        border: 'border-[var(--color-tertiary)]',
        title: 'text-[var(--color-tertiary)]',
      };
    }

    return {
      circle: 'surface-tertiary text-primary',
      border: 'border-color',
      title: 'text-primary',
    };
  };

  const stateClasses = getStateClasses();
  const isClickable = !!onClick;

  return (
    <div
      className={`step relative ${className} ${isClickable ? 'cursor-pointer hover:opacity-90' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-start">
        {/* Cercle numéroté ou icône */}
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-full ${stateClasses.circle} flex items-center justify-center font-bold text-lg z-10`}
        >
          {icon || number}
        </div>

        {/* Contenu */}
        <div className="ml-4 pt-1">
          <Typography as="h3" className={`font-bold ${stateClasses.title} text-lg`}>
            {title}
          </Typography>

          <Typography as="p" variant="p" className="mt-1 text-secondary">
            {description}
          </Typography>
        </div>
      </div>

      {/* Ligne de connexion verticale (sauf pour le dernier élément) */}
      <div
        className={`absolute top-10 left-5 w-0.5 h-full -ml-px ${stateClasses.border} bg-gray-100`}
      ></div>
    </div>
  );
};

// Composant conteneur pour afficher une liste d'étapes
export interface StepListProps {
  steps: Omit<StepProps, 'className'>[];
  className?: string;
  activeStep?: number;
  verticalConnect?: boolean;
}

export const StepList: React.FC<StepListProps> = ({
  steps,
  className = '',
  activeStep,
  verticalConnect = true,
}) => {
  return (
    <div className={`steps-list ${className}`}>
      {steps.map((step, index) => (
        <div
          key={index}
          className={`${verticalConnect && index < steps.length - 1 ? 'mb-8 pb-4' : ''}`}
        >
          <Step
            {...step}
            isActive={activeStep === index + 1}
            isCompleted={activeStep !== undefined && index + 1 < activeStep}
            className={`${!verticalConnect || index === steps.length - 1 ? 'after:hidden' : ''}`}
          />
        </div>
      ))}
    </div>
  );
};
