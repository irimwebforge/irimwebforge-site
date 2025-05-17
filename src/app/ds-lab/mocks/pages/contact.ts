export const contactPageMock = {
  header: {
    title: 'Discutons de vos aspirations digitales',
    subtitle: "Initier une conversation, c'est déjà commencer à clarifier votre vision",
    breadcrumb: ['Accueil', 'Contact'],
  },
  form: {
    title: 'Réservez votre diagnostic numérique personnalisé',
    fields: [
      {
        label: 'Nom complet',
        type: 'text',
        required: true,
        placeholder: 'Votre nom complet',
      },
      {
        label: 'Email',
        type: 'email',
        required: true,
        placeholder: 'votre@email.com',
      },
      {
        label: 'Téléphone',
        type: 'tel',
        required: false,
        placeholder: 'Votre numéro (optionnel)',
      },
      {
        label: 'Parlez-moi de votre activité et ce qui vous passionne',
        type: 'textarea',
        required: true,
        placeholder: 'Décrivez votre activité...',
      },
      {
        label: 'Quelle est votre principale frustration avec votre présence digitale actuelle?',
        type: 'textarea',
        required: true,
        placeholder: 'Vos défis actuels...',
      },
      {
        label: 'À quoi ressemblerait le succès pour vous?',
        type: 'textarea',
        required: true,
        placeholder: 'Votre vision du succès...',
      },
      {
        label: 'Comment avez-vous entendu parler de moi?',
        type: 'text',
        required: false,
        placeholder: 'Votre source de découverte',
      },
    ],
    submitButton: {
      text: 'Réserver mon diagnostic',
      variant: 'gradient',
      className: 'shine-effect',
    },
  },
  contactInfo: {
    title: 'Informations directes',
    items: [
      {
        type: 'email',
        value: 'contact@irimwebforge.com',
        icon: 'Mail',
      },
      {
        type: 'phone',
        value: '06 78 76 45 59',
        icon: 'Phone',
      },
      {
        type: 'address',
        value: '11 route de Paris, 67117 Ittenheim',
        icon: 'MapPin',
      },
    ],
  },
  process: {
    title: 'Et ensuite?',
    steps: [
      {
        number: 1,
        description: 'Je vous réponds personnellement sous 24h maximum',
      },
      {
        number: 2,
        description: 'Je planifie une conversation découverte de 45 minutes',
      },
      {
        number: 3,
        description: 'J\'explore avec vous vos besoins et aspirations sans jargon technique',
      },
      {
        number: 4,
        description:
          'Vous recevez des premières pistes de réflexion, que nous travaillions ensemble ou non',
      },
    ],
  },
};
