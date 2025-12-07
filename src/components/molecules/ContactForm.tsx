'use client';

import React, { useState, useRef } from 'react';
import { FormField } from './FormField';
import { Button } from '../atoms/Button';
import { Typography } from '../atoms/Typography';
import { useFormAnnouncements } from '../../hooks/useAccessibility';

export interface ContactFormProps {
  className?: string;
  onSubmit?: (formData: ContactFormData) => void;
  submitButtonText?: string;
  successMessage?: string;
  loading?: boolean;
  resetOnSuccess?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  message: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  className = '',
  onSubmit,
  submitButtonText = 'Envoyer ma demande',
  successMessage = 'Merci pour votre message. Je vous répondrai dans les meilleurs délais.',
  loading = false,
  resetOnSuccess = true,
}) => {
  // ✅ ACCESSIBILITÉ : Refs pour la gestion du focus
  const formRef = useRef<HTMLFormElement>(null);
  const firstErrorRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  // ✅ ACCESSIBILITÉ : Hook pour les annonces
  const { announceError, announceSuccess } = useFormAnnouncements();

  // États du formulaire
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  // États de validation
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [_isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Réinitialisation du formulaire
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: '',
    });
    setErrors({});
  };

  // Gestion des changements dans les champs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    // On extrait le nom du champ depuis l'id (supprime 'contact-' du début)
    const fieldName = id.replace('contact-', '');

    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
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

  // Validation du formulaire
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Validation du nom
    if (!formData.name.trim()) {
      newErrors.name = 'Veuillez entrer votre nom';
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Veuillez entrer votre adresse email';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "L'adresse email n'est pas valide";
    }

    // Validation du type de projet
    if (!formData.projectType) {
      newErrors.projectType = 'Veuillez sélectionner un type de projet';
    }

    // Validation du message
    if (!formData.message.trim()) {
      newErrors.message = 'Veuillez entrer votre message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Votre message doit contenir au moins 10 caractères';
    }

    setErrors(newErrors);

    // ✅ ACCESSIBILITÉ : Annoncer les erreurs et déplacer le focus
    if (Object.keys(newErrors).length > 0) {
      const firstError = Object.keys(newErrors)[0];
      const firstErrorMessage = newErrors[firstError];
      announceError(firstError, firstErrorMessage);

      // Déplacer le focus vers le premier champ en erreur
      setTimeout(() => {
        const firstErrorElement = document.getElementById(`contact-${firstError}`);
        if (firstErrorElement) {
          firstErrorElement.focus();
        }
      }, 100);
    }

    return Object.keys(newErrors).length === 0;
  };

  // Soumettre le formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Valider le formulaire avant l'envoi
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Simulation de délai d'envoi
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log('Form data submitted:', formData);
      }

      setIsSuccess(true);

      // ✅ ACCESSIBILITÉ : Annoncer le succès et déplacer le focus
      announceSuccess(successMessage);
      setTimeout(() => {
        if (successRef.current) {
          successRef.current.focus();
        }
      }, 100);

      // Réinitialiser le formulaire si demandé
      if (resetOnSuccess) {
        resetForm();
      }
    } catch {
      const errorMessage = 'Une erreur est survenue, veuillez réessayer plus tard.';
      setSubmitError(errorMessage);
      announceError('formulaire', errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Options pour le type de projet
  const projectTypeOptions = [
    { value: 'site-web', label: 'Site web personnalisé' },
    { value: 'application', label: 'Application sur mesure' },
    { value: 'interface-admin', label: 'Interface administration' },
    { value: 'maintenance', label: 'Maintenance/évolution' },
    { value: 'autre', label: 'Autre (précisez dans le message)' },
  ];

  // Afficher le message de succès si le formulaire a été soumis
  if (isSuccess) {
    return (
      <div
        ref={successRef}
        className={`p-6 rounded-lg border-2 border-[var(--color-primary)] bg-[var(--color-primary)] bg-opacity-5 ${className}`}
        role="region"
        aria-labelledby="success-title"
        tabIndex={-1}
      >
        <Typography variant="h3" className="text-[var(--color-primary)] mb-3" id="success-title">
          Demande envoyée !
        </Typography>
        <Typography variant="p">{successMessage}</Typography>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => {
            setIsSuccess(false);
            setIsSubmitted(false);
            // ✅ ACCESSIBILITÉ : Déplacer le focus vers le premier champ
            setTimeout(() => {
              const firstField = document.getElementById('contact-name');
              if (firstField) {
                firstField.focus();
              }
            }, 100);
          }}
        >
          Envoyer un nouveau message
        </Button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={`space-y-5 ${className}`}
      // ✅ ARIA : Attributs de formulaire
      role="form"
      aria-labelledby="contact-form-title"
      noValidate
    >
      {/* ✅ ACCESSIBILITÉ : Titre du formulaire pour les lecteurs d'écran */}
      <Typography variant="h2" className="sr-only" id="contact-form-title">
        Formulaire de contact
      </Typography>

      {/* ✅ ARIA : Message d'erreur global avec live region */}
      {submitError && (
        <div
          ref={firstErrorRef}
          className="p-3 rounded-md bg-red-50 border border-red-200 text-red-600 mb-4"
          role="alert"
          aria-live="assertive"
          tabIndex={-1}
        >
          <Typography variant="small">{submitError}</Typography>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Nom */}
        <FormField
          id="contact-name"
          label="Nom complet"
          placeholder="Votre nom et prénom"
          required
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          helperText="Votre nom et prénom complets"
        />

        {/* Email */}
        <FormField
          id="contact-email"
          type="email"
          label="Adresse email"
          placeholder="votre@email.com"
          required
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          helperText="Nous vous répondrons à cette adresse"
        />

        {/* Téléphone */}
        <FormField
          id="contact-phone"
          type="tel"
          label="Téléphone"
          placeholder="06 12 34 56 78"
          value={formData.phone}
          onChange={handleChange}
          helperText="Optionnel - pour un premier échange téléphonique"
        />

        {/* Type de projet */}
        <FormField
          id="contact-projectType"
          type="select"
          label="Type de projet"
          required
          value={formData.projectType}
          onChange={handleChange}
          error={errors.projectType}
          options={projectTypeOptions}
          placeholder="Choisissez un type de projet"
          helperText="Sélectionnez le type qui correspond le mieux à votre besoin"
        />
      </div>

      {/* Message */}
      <FormField
        id="contact-message"
        type="textarea"
        label="Votre message"
        placeholder="Décrivez-nous votre projet, vos besoins, vos contraintes..."
        required
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        rows={6}
        helperText="Plus vous êtes précis, mieux nous pourrons vous répondre"
      />

      {/* ✅ ARIA : Bouton de soumission avec états appropriés */}
      <Button
        type="submit"
        variant="gradient"
        size="large"
        fullWidth
        loading={isSubmitting || loading}
        disabled={isSubmitting || loading}
        aria-describedby="submit-help"
        className="shine-effect"
      >
        {isSubmitting ? 'Envoi en cours...' : submitButtonText}
      </Button>

      {/* ✅ ACCESSIBILITÉ : Information sur la soumission */}
      <Typography
        variant="small"
        className="text-[var(--text-secondary)] text-center"
        id="submit-help"
      >
        En envoyant ce formulaire, vous acceptez d'être recontacté concernant votre demande.
      </Typography>
    </form>
  );
};
