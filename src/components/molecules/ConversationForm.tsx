'use client';

import React, { useState } from 'react';
import { FormField } from '@/components/molecules/FormField';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { Card } from '@/components/molecules/Card';

export interface ConversationFormField {
  id: string;
  type: 'text' | 'email' | 'textarea' | 'select' | 'number' | 'tel' | 'url' | 'password';
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  dependsOn?: { field: string; value: string };
  helperText?: string;
}

export interface ConversationFormProps {
  className?: string;
  title?: string;
  subtitle?: string;
  fields: ConversationFormField[];
  onSubmit?: (formData: Record<string, any>) => void;
  submitButtonText?: string;
  successMessage?: string;
  loading?: boolean;
  variant?: 'default' | 'card' | 'minimal';
}

export const ConversationForm: React.FC<ConversationFormProps> = ({
  className = '',
  title = 'Parlons de votre projet',
  subtitle = 'Répondez à quelques questions pour nous aider à mieux comprendre vos besoins',
  fields,
  onSubmit,
  submitButtonText = 'Envoyer ma demande',
  successMessage = 'Merci pour votre message. Nous vous répondrons dans les meilleurs délais.',
  loading = false,
  variant = 'default',
}) => {
  // État pour suivre l'étape actuelle
  const [currentStep, setCurrentStep] = useState(0);
  
  // États du formulaire
  const [formData, setFormData] = useState<Record<string, any>>({});
  
  // États de validation
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Filtrer les champs pour ne montrer que ceux qui sont pertinents à l'étape actuelle
  const visibleFields = fields.filter((field, index) => {
    // Si le champ dépend d'un autre champ, vérifier si la condition est remplie
    if (field.dependsOn) {
      return formData[field.dependsOn.field] === field.dependsOn.value;
    }
    
    // Sinon, vérifier si c'est l'étape actuelle
    return index === currentStep;
  });
  
  // Gestion des changements dans les champs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value, type } = e.target as HTMLInputElement;
    // On extrait le nom du champ depuis l'id
    const fieldName = id.replace('conversation-', '');
    
    // Gestion spéciale pour les checkboxes
    const fieldValue = type === 'checkbox' 
      ? (e.target as HTMLInputElement).checked 
      : value;
    
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
    
    // Effacer l'erreur quand l'utilisateur commence à corriger
    if (errors[fieldName]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };
  
  // Validation du champ actuel
  const validateCurrentField = (): boolean => {
    const currentField = fields[currentStep];
    if (!currentField) return true;
    
    const newErrors: Record<string, string> = {};
    const fieldName = currentField.id;
    const value = formData[fieldName];
    
    // Vérifier si le champ est requis et vide
    if (currentField.required && (!value || (typeof value === 'string' && !value.trim()))) {
      newErrors[fieldName] = `Ce champ est requis`;
    }
    
    // Validation spécifique pour l'email
    if (currentField.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        newErrors[fieldName] = `L'adresse email n'est pas valide`;
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Passer à l'étape suivante
  const handleNext = () => {
    if (validateCurrentField()) {
      if (currentStep < fields.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    }
  };
  
  // Revenir à l'étape précédente
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Soumission du formulaire
  const handleSubmit = async () => {
    if (!validateCurrentField()) return;
    
    setIsSubmitting(true);
    
    try {
      if (onSubmit) {
        await onSubmit(formData);
      }
      
      setIsSubmitted(true);
    } catch (error) {
      setErrors({
        form: 'Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Déterminer si c'est la dernière étape
  const isLastStep = currentStep === fields.length - 1;
  
  // Afficher le message de succès si le formulaire a été soumis
  if (isSubmitted) {
    return (
      <div className={`p-6 rounded-lg border-2 border-[var(--color-primary)] bg-[var(--color-primary)] bg-opacity-5 ${className}`}>
        <Typography variant="h3" className="text-[var(--color-primary)] mb-3">
          Merci pour votre message !
        </Typography>
        <Typography variant="p">
          {successMessage}
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
          Commencer une nouvelle conversation
        </Button>
      </div>
    );
  }
  
  // Contenu du formulaire
  const formContent = (
    <div className="space-y-6">
      {/* Message d'erreur global */}
      {errors.form && (
        <div className="p-3 rounded-md bg-red-50 border border-red-200 text-red-600">
          <Typography variant="small">{errors.form}</Typography>
        </div>
      )}
      
      {/* Titre de l'étape actuelle */}
      {visibleFields.length > 0 && (
        <div className="mb-6">
          <Typography variant="h4" className="mb-1">
            {visibleFields[0].label}
          </Typography>
          {visibleFields[0].helperText && (
            <Typography variant="small" className="text-tertiary">
              {visibleFields[0].helperText}
            </Typography>
          )}
        </div>
      )}
      
      {/* Champ actuel */}
      {visibleFields.map((field) => (
        <FormField
          key={field.id}
          id={`conversation-${field.id}`}
          label=""
          type={field.type}
          placeholder={field.placeholder}
          options={field.options}
          required={field.required}
          value={formData[field.id] || ''}
          onChange={handleChange}
          error={errors[field.id]}
        />
      ))}
      
      {/* Navigation entre les étapes */}
      <div className="flex justify-between mt-6">
        {currentStep > 0 && (
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            disabled={isSubmitting || loading}
          >
            Précédent
          </Button>
        )}
        
        <Button 
          variant={isLastStep ? "primary" : "secondary"}
          onClick={handleNext}
          loading={isSubmitting || loading}
          disabled={isSubmitting || loading}
          className={currentStep === 0 ? "ml-auto" : ""}
        >
          {isLastStep ? submitButtonText : "Continuer"}
        </Button>
      </div>
      
      {/* Indicateur de progression */}
      <div className="flex items-center justify-center mt-6">
        {fields.map((_, index) => (
          <div 
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              index === currentStep 
                ? 'bg-[var(--color-primary)]' 
                : index < currentStep 
                  ? 'bg-[var(--color-tertiary)]' 
                  : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
  
  // Rendu du formulaire selon la variante
  if (variant === 'card') {
    return (
      <Card className={className}>
        <Typography variant="h3" className="mb-2">{title}</Typography>
        {subtitle && (
          <Typography variant="p" className="mb-6 text-tertiary">
            {subtitle}
          </Typography>
        )}
        {formContent}
      </Card>
    );
  }
  
  if (variant === 'minimal') {
    return (
      <div className={className}>
        {formContent}
      </div>
    );
  }
  
  return (
    <div className={`space-y-6 ${className}`}>
      <Typography variant="h3" className="mb-2">{title}</Typography>
      {subtitle && (
        <Typography variant="p" className="mb-6 text-tertiary">
          {subtitle}
        </Typography>
      )}
      {formContent}
    </div>
  );
}; 