import { Action } from '@/components/templates/CTASection';

// Adaptateur pour transformer le format des actions
export const adaptAction = (mockAction: { label: string; href: string }, isPrimary: boolean = false): Action => {
  return {
    text: mockAction.label,
    url: mockAction.href,
    variant: isPrimary ? 'gradient' : 'secondary'
  };
};

// Newsletter mock pour la variante card
export const newsletterProps = {
  title: "Restez informé des dernières tendances",
  description: "Inscrivez-vous à notre newsletter mensuelle pour recevoir nos conseils et actualités.",
  primaryAction: {
    text: "S'inscrire",
    url: "#",
    variant: 'gradient' as const
  },
  secondaryAction: {
    text: "En savoir plus",
    url: "#",
    variant: 'secondary' as const
  },
  inputLabel: "Email",
  inputPlaceholder: "Votre adresse email",
  disclaimerText: "Nous respectons votre vie privée. Désabonnement possible à tout moment."
}; 