"use client";

import React, { useState } from 'react';
import { FormField } from '@/components/molecules/FormField';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';

export interface ContactFormProps {
  className?: string;
  onSubmit?: (formData: ContactFormData) => void;
  submitButtonText?: string;
  successMessage?: string;
  loading?: boolean;
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
  successMessage = 'Merci pour votre message. Nous vous répondrons dans les meilleurs délais.',
  loading = false,
}) => {
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
      newErrors.email = 'L\'adresse email n\'est pas valide';
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
    return Object.keys(newErrors).length === 0;
  };
  
  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      if (onSubmit) {
        await onSubmit(formData);
      }
      
      // Réinitialiser le formulaire après la soumission
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
      });
      
      setIsSubmitted(true);
    } catch (error) {
      setErrors({
        form: 'Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.'
      });
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
  if (isSubmitted) {
    return (
      <div className={`p-6 rounded-lg border-2 border-[var(--color-primary)] bg-[var(--color-primary)] bg-opacity-5 ${className}`}>
        <Typography variant="h3" className="text-[var(--color-primary)] mb-3">
          Demande envoyée !
        </Typography>
        <Typography variant="p">
          {successMessage}
        </Typography>
        <Button 
          variant="outline" 
          className="mt-4"
          onClick={() => setIsSubmitted(false)}
        >
          Envoyer un nouveau message
        </Button>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className={`space-y-5 ${className}`}>
      {/* Message d'erreur global */}
      {errors.form && (
        <div className="p-3 rounded-md bg-red-50 border border-red-200 text-red-600 mb-4">
          <Typography variant="small">{errors.form}</Typography>
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
        />
        
        {/* Email */}
        <FormField
          id="contact-email"
          label="Adresse email"
          type="email"
          placeholder="exemple@domaine.com"
          required
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Téléphone */}
        <FormField
          id="contact-phone"
          label="Téléphone"
          type="tel"
          placeholder="06 12 34 56 78"
          helperText="Facultatif"
          value={formData.phone}
          onChange={handleChange}
        />
        
        {/* Type de projet */}
        <FormField
          id="contact-projectType"
          label="Type de projet"
          type="select"
          placeholder="Sélectionnez une option"
          options={projectTypeOptions}
          required
          value={formData.projectType}
          onChange={handleChange}
          error={errors.projectType}
        />
      </div>
      
      {/* Message */}
      <FormField
        id="contact-message"
        label="Votre projet"
        type="textarea"
        placeholder="Décrivez votre projet, vos besoins et votre univers"
        helperText="Plus vous serez précis, plus la réponse sera pertinente"
        rows={6}
        required
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
      />
      
      {/* Bouton d'envoi */}
      <div className="mt-6">
        <Button 
          type="submit" 
          variant="primary"
          fullWidth
          loading={isSubmitting || loading}
          disabled={isSubmitting || loading}
        >
          {submitButtonText}
        </Button>
      </div>
    </form>
  );
}; 