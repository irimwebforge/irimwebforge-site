import { Service } from './types';

const presence: Service = {
  id: 'presence',
  title: 'Formule Présence',
  shortDescription: "Vous gérez votre site en toute sérénité. Plus besoin d'attendre quelqu'un.",
  fullDescription:
    "Une solution complète pour gérer votre présence en ligne de manière autonome. Idéale pour les indépendants et thérapeutes qui veulent se concentrer sur leur métier sans dépendre d'un prestataire technique.",
  icon: 'Laptop',
  color: 'primary',
  price: '1 500–2 200€',
  support: '70€/mois',

  targetAudience: {
    description: 'Idéal pour les indépendants et thérapeutes qui veulent :',
    points: [
      {
        text: 'Gagner du temps sur leurs tâches administratives',
        icon: 'Clock',
      },
      {
        text: 'Être autonomes dans la gestion de leur présence en ligne',
        icon: 'Key',
      },
      {
        text: 'Se concentrer sur leurs clients plutôt que sur la technique',
        icon: 'Users',
      },
      {
        text: 'Avoir un outil fiable et professionnel sans se ruiner',
        icon: 'Shield',
      },
    ],
  },

  transformations: [
    {
      before: '30 minutes pour modifier une page',
      after: '5 minutes pour tout mettre à jour',
      icon: 'Clock',
    },
    {
      before: 'Attente du prestataire technique',
      after: 'Autonomie totale sur vos contenus',
      icon: 'Key',
    },
    {
      before: 'Interface complexe peu intuitive',
      after: 'Navigation simple comme votre téléphone',
      icon: 'Smartphone',
    },
    {
      before: 'Stress des mises à jour',
      after: 'Sérénité et confiance en vos outils',
      icon: 'Heart',
    },
  ],

  features: [
    {
      title: 'Site responsive',
      description: "Votre site s'adapte parfaitement à tous les appareils",
      icon: 'Smartphone',
    },
    {
      title: 'Interface intuitive',
      description: 'Administration simple comme votre téléphone',
      icon: 'Layout',
    },
    {
      title: 'Formation 2h',
      description: 'Avec aide-mémoire personnalisé inclus',
      icon: 'GraduationCap',
    },
    {
      title: 'Migration contenus',
      description: 'Je transfère tous vos contenus existants',
      icon: 'FileImport',
    },
    {
      title: 'Support réactif',
      description: 'Réponse garantie sous 24h ouvrées',
      icon: 'Headphones',
    },
    {
      title: 'Mises à jour simples',
      description: 'Modifiez vos contenus en quelques clics',
      icon: 'RefreshCw',
    },
  ],

  processSteps: [
    {
      title: 'Échange découverte',
      description: 'On discute de vos besoins et je comprends votre façon de travailler.',
      icon: 'Coffee',
    },
    {
      title: 'Conception interface',
      description: 'Je crée une interface simple qui correspond à votre quotidien.',
      icon: 'PenTool',
    },
    {
      title: 'Formation personnalisée',
      description: '2h pour maîtriser votre outil, avec un aide-mémoire sur mesure.',
      icon: 'GraduationCap',
    },
    {
      title: 'Accompagnement',
      description: 'Je reste disponible pour vous aider à devenir autonome.',
      icon: 'Heart',
    },
  ],

  testimonial: {
    quote:
      'Vous mettez à jour votre planning en 5 minutes chaque semaine. Vos clients voient toujours vos vraies disponibilités. Fini le stress du dimanche soir.',
    author: 'Marie L.',
    role: 'Thérapeute',
  },

  cta: 'Découvrir la formule Présence',
  seoDescription:
    'Solution de site web clé en main pour indépendants et thérapeutes. Gestion autonome, formation incluse et support technique.',
  seoKeywords: ['site web', 'indépendant', 'thérapeute', 'autonomie', 'formation'],
};

export default presence;
