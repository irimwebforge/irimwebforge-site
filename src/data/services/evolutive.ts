import { Service } from './types';

const evolutive: Service = {
  id: 'evolutive',
  title: 'Formule Évolutive',
  shortDescription:
    'Votre outil grandit avec vous. Ajoutez des fonctionnalités au fur et à mesure.',
  fullDescription:
    'Une solution flexible qui évolue avec votre entreprise. Idéale pour les entrepreneurs qui veulent démarrer simplement puis ajouter des fonctionnalités selon leurs besoins.',
  icon: 'TrendingUp',
  color: 'tertiary',
  price: '2 500–4 000€',
  support: '100€/mois',

  targetAudience: {
    description: 'Idéal pour les entrepreneurs qui veulent :',
    points: [
      {
        text: 'Démarrer avec un budget maîtrisé',
        icon: 'PiggyBank',
      },
      {
        text: 'Faire évoluer leur outil selon leurs besoins',
        icon: 'TrendingUp',
      },
      {
        text: "Tester et valider avant d'investir davantage",
        icon: 'Target',
      },
      {
        text: 'Avoir un partenaire de confiance dans la durée',
        icon: 'Handshake',
      },
    ],
  },

  transformations: [
    {
      before: 'Investissement lourd dès le départ',
      after: 'Progression par étapes maîtrisées',
      icon: 'TrendingUp',
    },
    {
      before: 'Risque de sur-dimensionnement',
      after: 'Adaptation aux besoins réels',
      icon: 'Target',
    },
    {
      before: 'Solution figée dans le temps',
      after: 'Évolution continue avec votre activité',
      icon: 'RefreshCw',
    },
    {
      before: 'Choix techniques définitifs',
      after: 'Flexibilité et réversibilité',
      icon: 'RotateCcw',
    },
  ],

  features: [
    {
      title: 'Architecture modulaire',
      description: 'Ajoutez des fonctionnalités block par block',
      icon: 'Blocks',
    },
    {
      title: 'Roadmap personnalisée',
      description: "Plan d'évolution adapté à vos objectifs",
      icon: 'Map',
    },
    {
      title: 'Tests utilisateurs',
      description: 'Validation avant chaque évolution majeure',
      icon: 'Users',
    },
    {
      title: 'Support évolutif',
      description: 'Accompagnement adapté à votre croissance',
      icon: 'TrendingUp',
    },
    {
      title: 'Formation continue',
      description: 'Montée en compétences au fil des évolutions',
      icon: 'GraduationCap',
    },
    {
      title: 'Monitoring usage',
      description: 'Données pour optimiser les prochaines étapes',
      icon: 'BarChart',
    },
  ],

  processSteps: [
    {
      title: 'MVP Strategy',
      description: 'Définition du produit minimum viable pour démarrer.',
      icon: 'Rocket',
    },
    {
      title: 'Développement itératif',
      description: 'Cycles courts de développement et feedback.',
      icon: 'RefreshCw',
    },
    {
      title: 'Tests & ajustements',
      description: 'Validation utilisateur et optimisations continues.',
      icon: 'TestTube',
    },
    {
      title: 'Scale-up progressif',
      description: 'Montée en charge selon les besoins réels.',
      icon: 'TrendingUp',
    },
  ],

  testimonial: {
    quote:
      'On a commencé petit et maintenant on gère 500 clients avec le même outil. Il a grandi avec nous.',
    author: 'Julie M.',
    role: 'Fondatrice startup',
  },

  cta: 'Je veux cette formule',
  seoDescription:
    'Solution web évolutive pour entrepreneurs. Démarrez simple et ajoutez des fonctionnalités selon vos besoins.',
  seoKeywords: ['évolutif', 'startup', 'entrepreneur', 'modulaire', 'croissance'],
};

export default evolutive;
