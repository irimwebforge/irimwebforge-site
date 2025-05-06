// Mock data pour les templates

// Types - Définis localement pour éviter les erreurs d'import
type Tag = {
  id: string;
  label: string;
};

type ProjectType = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: Tag[];
  url: string;
  featured: boolean;
};

type ServiceType = {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  imageUrl: string;
  callToAction: {
    label: string;
    href: string;
  };
  price: {
    amount: string;
    details: string;
  };
};

type Value = {
  id: string;
  title: string;
  description: string;
  icon: string | React.ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary';
};

type Stat = {
  id?: string; // Optionnel pour compatibilité
  value: string;
  label: string;
  description: string;
};

type TestimonialItem = {
  quote: string;
  author: string;
  company?: string;
  projectName?: string;
  projectUrl?: string;
};

type Action = {
  label: string;
  href: string;
};

// Projects mock data
export const mockProjects: ProjectType[] = [
  {
    id: 'proj-1',
    title: 'MisterCBD E-commerce',
    description: 'Boutique en ligne moderne de produits CBD avec interface d\'administration personnalisée',
    imageUrl: '/images/projects/mister-cbd.jpg',
    tags: [
      { id: 'tag-1', label: 'E-commerce' },
      { id: 'tag-2', label: 'Interface Admin' }
    ],
    url: '#',
    featured: true
  },
  {
    id: 'proj-2',
    title: 'Echo des Rêves',
    description: 'Site vitrine pour un artisan bijoutier avec catalogue de produits',
    imageUrl: '/images/projects/echo-reves.jpg',
    tags: [
      { id: 'tag-3', label: 'Site Vitrine' },
      { id: 'tag-4', label: 'Artisanat' }
    ],
    url: '#',
    featured: true
  },
  {
    id: 'proj-3',
    title: 'MoodCycle App',
    description: 'Application mobile de suivi d\'humeur avec visualisation de données',
    imageUrl: '/images/projects/moodcycle.jpg',
    tags: [
      { id: 'tag-5', label: 'Application' },
      { id: 'tag-6', label: 'Santé' }
    ],
    url: '#',
    featured: false
  },
  {
    id: 'proj-4',
    title: 'GreenLeaf CRM',
    description: 'CRM personnalisé pour une entreprise de jardinage',
    imageUrl: '/images/projects/greenleaf.jpg',
    tags: [
      { id: 'tag-7', label: 'CRM' },
      { id: 'tag-2', label: 'Interface Admin' }
    ],
    url: '#',
    featured: false
  },
  {
    id: 'proj-5',
    title: 'TechConf Landing',
    description: 'Landing page pour une conférence tech avec système d\'inscription',
    imageUrl: '/images/projects/techconf.jpg',
    tags: [
      { id: 'tag-8', label: 'Landing Page' },
      { id: 'tag-9', label: 'Événementiel' }
    ],
    url: '#',
    featured: false
  },
  {
    id: 'proj-6',
    title: 'FoodFast Delivery',
    description: 'Plateforme de livraison de repas avec tableau de bord en temps réel',
    imageUrl: '/images/projects/foodfast.jpg',
    tags: [
      { id: 'tag-10', label: 'Plateforme' },
      { id: 'tag-11', label: 'Food' }
    ],
    url: '#',
    featured: false
  }
];

// Services mock data
export const mockServices: ServiceType[] = [
  {
    id: 'service-1',
    title: 'Sites Web sur Mesure',
    description: 'Des sites web professionnels adaptés à votre image de marque et optimisés pour la conversion.',
    icon: '🌐',
    features: [
      'Design personnalisé selon votre identité visuelle',
      'Optimisé pour le référencement SEO',
      'Compatible mobile et tablette',
      'Performances optimisées',
      'Sécurité renforcée'
    ],
    imageUrl: '/images/services/website.jpg',
    callToAction: {
      label: 'Découvrir cette offre',
      href: '#'
    },
    price: {
      amount: 'À partir de 1800€',
      details: 'Prix incluant design, développement et mise en ligne'
    }
  },
  {
    id: 'service-2',
    title: 'Applications Web',
    description: 'Applications web intuitives et performantes pour améliorer vos processus métiers.',
    icon: '📱',
    features: [
      'Interface utilisateur intuitive',
      'Synchronisation temps réel',
      'Fonctionnement hors ligne',
      'Sécurité avancée',
      'Évolutivité garantie'
    ],
    imageUrl: '/images/services/webapp.jpg',
    callToAction: {
      label: 'Découvrir cette offre',
      href: '#'
    },
    price: {
      amount: 'À partir de 2900€',
      details: 'Prix selon complexité et fonctionnalités'
    }
  },
  {
    id: 'service-3',
    title: 'Interfaces Admin',
    description: 'Des interfaces d\'administration sur mesure pour gérer efficacement votre contenu et vos données.',
    icon: '⚙️',
    features: [
      'Tableau de bord personnalisé',
      'Gestion de contenu intuitive',
      'Statistiques et rapports détaillés',
      'Gestion des utilisateurs et permissions',
      'Automatisation des tâches répétitives'
    ],
    imageUrl: '/images/services/admin.jpg',
    callToAction: {
      label: 'Découvrir cette offre',
      href: '#'
    },
    price: {
      amount: 'À partir de 1200€',
      details: 'Prix dépendant de la complexité'
    }
  }
];

// Values mock data
export const mockValues: Value[] = [
  {
    id: 'value-1',
    title: 'Artisanat Digital',
    description: 'Chaque ligne de code est écrite avec soin, comme un artisan façonne son œuvre.',
    icon: '🛠️',
    color: 'primary'
  },
  {
    id: 'value-2',
    title: 'Simplicité Efficace',
    description: 'Des solutions qui vont à l\'essentiel, sans complexité inutile.',
    icon: '✨',
    color: 'secondary'
  },
  {
    id: 'value-3',
    title: 'Authenticité',
    description: 'Des interfaces qui reflètent fidèlement votre identité et vos valeurs.',
    icon: '🔍',
    color: 'tertiary'
  },
  {
    id: 'value-4',
    title: 'Sur-mesure',
    description: 'Chaque projet est unique et mérite une approche personnalisée.',
    icon: '✂️',
    color: 'primary'
  }
];

// Stats mock data
export const mockStats: Stat[] = [
  {
    id: 'stat-1',
    value: '98%',
    label: 'Satisfaction client',
    description: 'Nos clients sont pleinement satisfaits de nos livrables'
  },
  {
    id: 'stat-2',
    value: '45+',
    label: 'Projets livrés',
    description: 'Des projets variés dans différents secteurs'
  },
  {
    id: 'stat-3',
    value: '15min',
    label: 'Temps de réponse',
    description: 'Un support réactif pour répondre à vos questions'
  },
  {
    id: 'stat-4',
    value: '87%',
    label: 'Taux de conversion',
    description: 'Augmentation moyenne des conversions après refonte'
  }
];

// Testimonials mock data
export const mockTestimonials: TestimonialItem[] = [
  {
    quote: "IrimWebForge a transformé notre vision en une interface utilisateur exceptionnelle. Leur équipe a été à l'écoute et proactive tout au long du projet.",
    author: "Marie Dumas",
    company: "DirecteurTech",
    projectName: "Plateforme CRM",
    projectUrl: "#"
  },
  {
    quote: "Enfin un site qui nous ressemble vraiment, sans nous ruiner chaque mois. L'interface d'administration est si intuitive que même notre stagiaire peut l'utiliser!",
    author: "Thomas B.",
    company: "Mister & Misses CBD",
    projectName: "E-commerce CBD",
    projectUrl: "#"
  },
  {
    quote: "La qualité du code et de l'expérience utilisateur est remarquable. Notre taux de conversion a augmenté de 35% depuis la mise en ligne du nouveau site.",
    author: "Julie Martin",
    company: "Echo des Rêves",
    projectName: "Boutique en ligne",
    projectUrl: "#"
  }
];

// CTA mock data
export const mockCTAVariants = {
  simple: {
    title: "Prêt à transformer votre présence numérique ?",
    description: "Réservez une consultation gratuite de 45 minutes pour discuter de votre projet.",
    primaryAction: {
      label: "Réserver ma consultation",
      href: "#contact"
    },
    secondaryAction: {
      label: "En savoir plus",
      href: "#services"
    }
  },
  withImage: {
    title: "Créons ensemble votre projet digital",
    description: "Un site qui vous ressemble, une interface qui simplifie votre quotidien.",
    primaryAction: {
      label: "Démarrer mon projet",
      href: "#contact"
    },
    secondaryAction: {
      label: "Voir nos réalisations",
      href: "#projets"
    },
    imageUrl: "/images/cta-illustration.svg"
  },
  newsletter: {
    title: "Restez informé des dernières tendances",
    description: "Inscrivez-vous à notre newsletter mensuelle pour recevoir nos conseils et actualités.",
    inputPlaceholder: "Votre adresse email",
    buttonLabel: "S'inscrire",
    disclaimerText: "Nous respectons votre vie privée. Désabonnement possible à tout moment."
  }
}; 