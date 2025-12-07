'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { FormField } from './FormField';
import { Button } from '../atoms/Button';
import { Typography } from '../atoms/Typography';
import { Card } from './Card';

export interface ConversationFormField {
  id: string;
  type: 'text' | 'email' | 'textarea' | 'select' | 'number' | 'tel' | 'url' | 'password';
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  dependsOn?: { field: string; value: string };
  helperText?: string;
  rows?: number;
}

export interface ConversationFormProps {
  className?: string;
  title?: string;
  subtitle?: string;
  fields: ConversationFormField[];
  onSubmit?: (formData: Record<string, unknown>) => void;
  submitButtonText?: string;
  _successMessage?: string;
  loading?: boolean;
  variant?: 'default' | 'card' | 'minimal';
  steps?: { title: string; description: string }[];
}

export const ConversationForm: React.FC<ConversationFormProps> = ({
  className = '',
  title = 'Parlons de votre projet',
  subtitle = "Répondez à quelques questions pour m'aider à mieux comprendre vos besoins",
  fields,
  onSubmit,
  submitButtonText = 'Envoyer ma demande',
  _successMessage = 'Merci pour votre message. Je vous répondrai dans les meilleurs délais.',
  loading = false,
  variant = 'default',
  steps,
}) => {
  // Regrouper les champs par étapes
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, unknown>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stepDirection, setStepDirection] = useState<'forward' | 'backward'>('forward');

  // Détecter si nous sommes dans un mode multi-étapes
  const isMultiStep = useMemo(() => Boolean(steps && steps.length > 1), [steps]);

  // Gérer les champs de l'étape courante - OPTIMISÉ avec useMemo
  const fieldsPerStep = useMemo(() => {
    // Si pas de steps, tous les champs sont dans une seule étape
    if (!isMultiStep) return [fields];

    // On considère que les champs sont regroupés par chunk de même taille
    const stepCount = steps?.length || 1;
    const result: ConversationFormField[][] = [];

    // Diviser les champs par étape
    const chunkSize = Math.ceil(fields.length / stepCount);
    for (let i = 0; i < fields.length; i += chunkSize) {
      result.push(fields.slice(i, i + chunkSize));
    }

    return result;
  }, [fields, steps, isMultiStep]);

  // Les champs visibles sont ceux de l'étape courante - OPTIMISÉ avec useMemo
  const visibleFields = useMemo(
    () => fieldsPerStep[currentStep] || [],
    [fieldsPerStep, currentStep]
  );

  // Validation de tous les champs visibles de l'étape actuelle - OPTIMISÉ avec useCallback
  const validateCurrentStep = useCallback((): boolean => {
    const newErrors: Record<string, string> = {};
    visibleFields.forEach((field) => {
      const value = formData[field.id];
      if (field.required && (!value || (typeof value === 'string' && !value.trim()))) {
        newErrors[field.id] = `Ce champ est requis`;
      }
      if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (typeof value === 'string' && !emailRegex.test(value)) {
          newErrors[field.id] = `L'adresse email n'est pas valide`;
        }
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [visibleFields, formData]);

  // Passer à l'étape suivante - OPTIMISÉ avec useCallback
  const handleNext = useCallback(() => {
    if (validateCurrentStep()) {
      if (isMultiStep && currentStep < fieldsPerStep.length - 1) {
        setStepDirection('forward');
        setCurrentStep(currentStep + 1);
      } else {
        // C'est la dernière étape, soumettre le formulaire
        if (onSubmit) {
          setIsSubmitting(true);
          onSubmit(formData);
          setIsSubmitting(false);
        }
        setIsSubmitted(true);
      }
    }
  }, [validateCurrentStep, isMultiStep, currentStep, fieldsPerStep.length, onSubmit, formData]);

  // Revenir à l'étape précédente - OPTIMISÉ avec useCallback
  const handlePrevious = useCallback(() => {
    if (currentStep > 0) {
      setStepDirection('backward');
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  // Gestion des changements dans les champs - OPTIMISÉ avec useCallback
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { id, value, type } = e.target as HTMLInputElement;
      const fieldName = id.replace('conversation-', '');
      const fieldValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
      setFormData((prev) => ({
        ...prev,
        [fieldName]: fieldValue,
      }));
      if (errors[fieldName]) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[fieldName];
          return newErrors;
        });
      }
    },
    [errors]
  );

  // Gestion de la touche Enter pour valider - OPTIMISÉ avec useCallback
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && e.target instanceof HTMLInputElement) {
        e.preventDefault();
        handleNext();
      }
    },
    [handleNext]
  );

  // Afficher le message de succès si le formulaire a été soumis
  if (isSubmitted) {
    return (
      <div
        className={`p-6 rounded-lg border-2 border-[var(--color-primary)] bg-[var(--color-primary)] bg-opacity-5 ${className}`}
      >
        <Typography variant="h3" className="text-[var(--color-primary)] mb-3">
          Merci pour votre message !
        </Typography>
        <Typography variant="p">
          Votre demande a bien été enregistrée. Je vous contacterai rapidement pour organiser notre
          conversation.
        </Typography>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => {
            setIsSubmitted(false);
            setCurrentStep(0);
            setFormData({});
          }}
        >
          Démarrer une nouvelle conversation
        </Button>
      </div>
    );
  }

  // Indicateur d'étape
  const stepIndicator = isMultiStep ? (
    <div className="flex items-center justify-center mt-6">
      <Typography variant="small" className="text-gray-500">
        Étape {currentStep + 1}/{fieldsPerStep.length}
      </Typography>
    </div>
  ) : null;

  // En-tête de l'étape actuelle
  const stepHeader =
    isMultiStep && steps ? (
      <div className="mb-6">
        <Typography variant="h4" className="font-bold text-[var(--color-primary)]">
          {steps[currentStep].title}
        </Typography>
        {steps[currentStep].description && (
          <Typography variant="p" className="text-gray-600 dark:text-gray-300 mt-2">
            {steps[currentStep].description}
          </Typography>
        )}
      </div>
    ) : null;

  // Contenu animé de l'étape
  const animatedStepContent = (
    <div
      key={currentStep}
      className={`transition-transform duration-500 ease-in-out will-change-transform animate-fade-slide-${stepDirection}`}
    >
      {/* En-tête de l'étape */}
      {stepHeader}
      {/* Tous les champs de l'étape courante */}
      {visibleFields.map((field) => (
        <FormField
          key={field.id}
          id={`conversation-${field.id}`}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          options={
            field.type === 'select'
              ? [
                  { value: '', label: 'Faites votre choix...', disabled: true },
                  ...(field.options || []),
                ]
              : field.options
          }
          required={field.required}
          value={typeof formData[field.id] === 'string' ? (formData[field.id] as string) : ''}
          onChange={handleChange}
          error={errors[field.id]}
          rows={field.rows}
          helperText={field.helperText}
        />
      ))}
    </div>
  );

  // Contenu du formulaire
  const formContent = (
    <form
      className="space-y-6"
      onKeyDown={handleKeyDown}
      onSubmit={(e) => {
        e.preventDefault();
        handleNext();
      }}
    >
      {/* Message d'erreur global */}
      {errors.form && (
        <div className="p-3 rounded-md bg-red-50 border border-red-200 text-red-600">
          <Typography variant="small">{errors.form}</Typography>
        </div>
      )}

      {/* Contenu animé de l'étape */}
      <div className="relative min-h-[200px]">{animatedStepContent}</div>

      {/* Navigation entre les étapes */}
      <div className="flex justify-between mt-8">
        {currentStep > 0 ? (
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={isSubmitting || loading}
            type="button"
          >
            Précédent
          </Button>
        ) : (
          <div></div>
        )}

        <Button
          variant={isMultiStep && currentStep < fieldsPerStep.length - 1 ? 'secondary' : 'primary'}
          type="submit"
          loading={isSubmitting || loading}
          disabled={isSubmitting || loading}
        >
          {isMultiStep && currentStep < fieldsPerStep.length - 1 ? 'Continuer' : submitButtonText}
        </Button>
      </div>

      {stepIndicator}
      <style jsx global>{`
        @keyframes fade-slide-forward {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fade-slide-backward {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-slide-forward {
          animation: fade-slide-forward 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animate-fade-slide-backward {
          animation: fade-slide-backward 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-slide-forward,
          .animate-fade-slide-backward {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </form>
  );

  // Rendu du formulaire selon la variante
  if (variant === 'card') {
    return (
      <Card className={className}>
        <Typography variant="h3" className="mb-2">
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="p" className="mb-6 text-[var(--text-secondary)]">
            {subtitle}
          </Typography>
        )}
        {formContent}
      </Card>
    );
  }

  if (variant === 'minimal') {
    return <div className={className}>{formContent}</div>;
  }

  return (
    <div className={`space-y-6 ${className}`}>
      <Typography variant="h3" className="mb-2">
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="p" className="mb-6 text-[var(--text-secondary)]">
          {subtitle}
        </Typography>
      )}
      {formContent}
    </div>
  );
};
