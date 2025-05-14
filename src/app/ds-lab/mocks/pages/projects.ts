export const projectsPageMock = {
  header: {
    title: "Des transformations concrètes plutôt que des prouesses techniques",
    subtitle: "Chaque projet est une histoire de libération de temps et d'énergie",
    breadcrumb: ["Accueil", "Projets"]
  },
  filters: {
    categories: [
      { id: "all", label: "Tous" },
      { id: "transformations", label: "Transformations" },
      { id: "interfaces", label: "Interfaces admin" },
      { id: "therapeutes", label: "Thérapeutes" },
      { id: "artisans", label: "Artisans" },
      { id: "professionnels", label: "Professionnels" }
    ]
  },
  projects: [
    {
      id: "corps-et-sens",
      title: "Corps & Sens",
      category: ["therapeutes", "transformations"],
      client: {
        name: "Marie",
        role: "Thérapeute énergétique"
      },
      transformation: {
        before: "7h",
        after: "45min",
        metric: "temps hebdomadaire"
      },
      description: "Interface sur mesure pour thérapeute/artiste avec gestion simplifiée des contenus",
      image: {
        src: "/images/projects/corps-et-sens.jpg",
        alt: "Interface Corps & Sens"
      },
      features: [
        "Interface administrative épurée",
        "Gestion des rendez-vous intégrée",
        "Publication de contenus simplifiée"
      ],
      testimonial: {
        quote: "Je peux enfin me concentrer sur mes patients plutôt que sur mon site web",
        author: "Marie",
        role: "Fondatrice Corps & Sens"
      }
    },
    {
      id: "univers-des-reves",
      title: "Univers des Rêves",
      category: ["therapeutes", "interfaces"],
      client: {
        name: "Sophie",
        role: "Onirologue"
      },
      transformation: {
        before: "5h",
        after: "30min",
        metric: "temps hebdomadaire"
      },
      description: "Interface de gestion pour onirologue avec autonomie éditoriale complète",
      image: {
        src: "/images/projects/univers-reves.jpg",
        alt: "Interface Univers des Rêves"
      },
      features: [
        "Gestion de blog intuitive",
        "Système de réservation personnalisé",
        "Espace membres sécurisé"
      ]
    },
    {
      id: "mr-mrs-cbd",
      title: "Mr&Mrs CBD",
      category: ["artisans", "transformations"],
      client: {
        name: "Alexandre",
        role: "Artisan CBD"
      },
      transformation: {
        before: "350€",
        after: "0€",
        metric: "coût mensuel"
      },
      description: "Libération des coûts mensuels et dépendance technique avec interface admin intuitive",
      image: {
        src: "/images/projects/mr-mrs-cbd.jpg",
        alt: "Interface Mr&Mrs CBD"
      },
      features: [
        "Gestion de stock optimisée",
        "Interface de commande simplifiée",
        "Automatisation des tâches répétitives"
      ]
    }
  ],
  transformationMatrix: {
    title: "Impact mesurable sur votre activité",
    axes: {
      x: "Type de gain",
      y: "Ampleur du gain"
    },
    metrics: [
      {
        type: "temps",
        projects: ["corps-et-sens", "univers-des-reves"],
        reduction: "70%"
      },
      {
        type: "coût",
        projects: ["mr-mrs-cbd"],
        reduction: "100%"
      },
      {
        type: "autonomie",
        projects: ["corps-et-sens", "mr-mrs-cbd", "univers-des-reves"],
        gain: "90%"
      }
    ]
  },
  cta: {
    title: "Votre projet pourrait être le prochain",
    subtitle: "Commençons par discuter de vos aspirations digitales",
    button: {
      text: "Réserver mon diagnostic",
      variant: "gradient",
      className: "shine-effect",
      href: "/contact"
    }
  }
}; 