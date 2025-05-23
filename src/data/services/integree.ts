import { Service } from './types';

const integree: Service = {
  id: 'integree',
  title: 'Formule Intégrée',
  shortDescription: 'Tout est connecté. Agenda, factures, site web. Vous mettez à jour une fois.',
  fullDescription:
    'Une solution intégrée qui connecte tous vos outils numériques. Parfaite pour les professionnels qui veulent automatiser leurs tâches administratives et gagner un temps précieux.',
  icon: 'Zap',
  color: 'secondary',
  price: '3 500–5 000€',
  support: '150€/mois',

  targetAudience: {
    description: 'Parfait pour les entreprises qui veulent :',
    points: [
      {
        text: 'Éliminer les tâches répétitives et chronophages',
        icon: 'Clock',
      },
      {
        text: 'Connecter leurs différents outils métier',
        icon: 'Settings',
      },
      {
        text: 'Avoir une vision claire de leurs données',
        icon: 'BarChart',
      },
      {
        text: 'Sécuriser leurs processus métier',
        icon: 'Shield',
      },
    ],
  },

  transformations: [
    {
      before: '2h de saisie manuelle par jour',
      after: 'Synchronisation automatique',
      icon: 'Clock',
    },
    {
      before: "Risques d'erreurs humaines",
      after: 'Fiabilité à 99,9%',
      icon: 'Shield',
    },
    {
      before: 'Outils qui ne communiquent pas',
      after: 'Écosystème parfaitement intégré',
      icon: 'Settings',
    },
    {
      before: 'Données éparpillées',
      after: 'Vision unifiée de votre activité',
      icon: 'BarChart',
    },
  ],

  features: [
    {
      title: 'Audit complet',
      description: 'Analyse détaillée de vos processus actuels',
      icon: 'Search',
    },
    {
      title: 'Développement sur mesure',
      description: 'Intégrations et automatisations personnalisées',
      icon: 'Code2',
    },
    {
      title: 'Formation équipe',
      description: '4h de formation pour toute votre équipe',
      icon: 'Users',
    },
    {
      title: 'Support premium',
      description: 'Hotline dédiée et intervention rapide',
      icon: 'Headphones',
    },
    {
      title: 'Monitoring 24/7',
      description: 'Surveillance continue de vos systèmes',
      icon: 'Activity',
    },
    {
      title: 'API personnalisées',
      description: 'Connexions sur mesure avec vos outils',
      icon: 'Link',
    },
  ],

  processSteps: [
    {
      title: 'Audit approfondi',
      description: 'Analyse complète de vos processus et outils existants.',
      icon: 'Search',
    },
    {
      title: 'Architecture solution',
      description: "Conception de l'écosystème intégré optimal.",
      icon: 'PenTool',
    },
    {
      title: 'Développement',
      description: 'Création des intégrations et automatisations.',
      icon: 'Code2',
    },
    {
      title: 'Déploiement & suivi',
      description: 'Mise en production avec accompagnement personnalisé.',
      icon: 'Rocket',
    },
  ],

  testimonial: {
    quote:
      "Nos équipes ont récupéré 2h par jour. Plus d'erreurs de saisie, tout est automatisé et fiable.",
    author: 'Pierre D.',
    role: "Directeur d'agence",
  },

  cta: 'Je veux cette formule',
  seoDescription:
    "Solution intégrée d'automatisation pour entreprises. Connectez vos outils métier et optimisez vos processus.",
  seoKeywords: ['intégration', 'automatisation', 'entreprise', 'processus', 'productivité'],
};

export default integree;
