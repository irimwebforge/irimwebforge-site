// mockData.molecules.ts
/**
 * Données mockées pour les composants moléculaires
 * Utilisé dans :
 * - BlogPostCard
 * - ComparativeTable
 * - FAQ
 * - FeatureGrid
 * - PricingPlan
 * - ProjectPreview
 * - Tabs
 *
 * NOTE: Contrairement aux templates qui nécessitent des adaptateurs,
 * ces données peuvent être utilisées directement dans les composants moléculaires
 * car elles correspondent déjà à la structure attendue par ces composants.
 *
 * Exemple d'utilisation:
 *
 * import { FEATURES } from '@/app/ds-lab/mocks/mockData.molecules';
 * import { FeatureGrid } from '@/components/molecules/FeatureGrid';
 *
 * // Utilisation directe des données mockées
 * <FeatureGrid features={FEATURES} />
 */

import { BlogTag } from '@/components/molecules/BlogPostCard';
import { ComparisonColumn, ComparisonRow } from '@/components/molecules/ComparativeTable';
import { FAQItem } from '@/components/molecules/FAQ';
import { Feature } from '@/components/molecules/FeatureGrid';
import { PricingFeature } from '@/components/molecules/PricingPlan';
import { ProjectTag } from '@/components/molecules/ProjectPreview';
import { TabItem } from '@/components/molecules/Tabs';

// BlogPostCard mocks
export const BLOG_TAGS: BlogTag[] = [
  { id: '1', name: 'Design', slug: 'design', color: 'primary' },
  { id: '2', name: 'Développement', slug: 'development', color: 'secondary' },
  { id: '3', name: 'UX/UI', slug: 'ux-ui', color: 'tertiary' },
  { id: '4', name: 'Stratégie', slug: 'strategie', color: 'default' },
];

export const BLOG_POSTS = [
  {
    id: '1',
    title: 'Les tendances du design web en 2024',
    slug: 'tendances-design-web-2024',
    excerpt:
      'Découvrez les tendances émergentes qui façonnent le design web cette année, des interfaces immersives aux micro-interactions.',
    coverImage: '/images/projects/project-placeholder.jpg',
    publishedAt: new Date('2024-01-15'),
    readTime: 5,
    author: {
      name: 'Marie Dubois',
      avatar: 'https://i.pravatar.cc/150?img=1',
      role: 'Designer Senior',
    },
    tags: [BLOG_TAGS[0], BLOG_TAGS[2]],
  },
  {
    id: '2',
    title: 'Architecture progressive pour applications modernes',
    slug: 'architecture-progressive-apps',
    excerpt:
      'Comment structurer vos applications web pour une performance et une scalabilité optimales tout en gardant le code maintenable.',
    coverImage: '/images/projects/project-placeholder.jpg',
    publishedAt: new Date('2024-01-28'),
    readTime: 8,
    author: {
      name: 'Thomas Lefèvre',
      avatar: 'https://i.pravatar.cc/150?img=3',
      role: 'Lead Developer',
    },
    tags: [BLOG_TAGS[1]],
  },
  {
    id: '3',
    title: "Stratégies d'acquisition pour startups B2B",
    slug: 'strategies-acquisition-b2b',
    excerpt:
      "Analyse des stratégies d'acquisition client efficaces pour les startups B2B à budget limité.",
    coverImage: '/images/projects/project-placeholder.jpg',
    publishedAt: new Date('2024-02-05'),
    readTime: 6,
    author: {
      name: 'Sophie Martin',
      avatar: 'https://i.pravatar.cc/150?img=5',
      role: 'Stratège Marketing',
    },
    tags: [BLOG_TAGS[3]],
  },
];

// ComparativeTable mocks
export const COMPARISON_COLUMNS: ComparisonColumn[] = [
  { id: 'plan1', title: 'Basique', description: 'Pour les débutants', color: 'primary' },
  {
    id: 'plan2',
    title: 'Pro',
    description: 'Pour les professionnels',
    highlight: true,
    color: 'secondary',
  },
  { id: 'plan3', title: 'Entreprise', description: 'Pour les grandes équipes', color: 'tertiary' },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    id: 'feature1',
    feature: 'Nombre de projets',
    description: 'Projets actifs simultanés',
    values: ['3 projets', '10 projets', 'Illimité'],
    category: 'Limites',
  },
  {
    id: 'feature2',
    feature: 'Stockage',
    description: 'Capacité de stockage de données',
    values: ['5 Go', '50 Go', '500 Go'],
    category: 'Limites',
  },
  {
    id: 'feature3',
    feature: 'Support technique',
    description: 'Assistance par email et téléphone',
    values: [false, { value: true, highlight: true }, true],
    category: 'Support',
  },
  {
    id: 'feature4',
    feature: 'API',
    description: "Accès à l'API pour intégrations",
    values: [false, true, true],
    category: 'Fonctionnalités',
  },
  {
    id: 'feature5',
    feature: 'Collaborateurs',
    description: "Nombre d'utilisateurs",
    values: ['1 utilisateur', '5 utilisateurs', 'Illimité'],
    category: 'Limites',
    highlight: true,
  },
];

// FAQ mocks
export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Comment démarrer un nouveau projet ?',
    answer:
      'Pour démarrer un nouveau projet, connectez-vous à votre tableau de bord et cliquez sur le bouton "Nouveau projet". Suivez les étapes guidées pour configurer votre projet en fonction de vos besoins.',
    isOpen: true,
  },
  {
    id: 'faq2',
    question: 'Quels sont les délais moyens de réalisation ?',
    answer:
      "Les délais de réalisation varient selon la complexité du projet. Un site vitrine prend généralement 4 à 6 semaines, tandis qu'une application web peut nécessiter 8 à 12 semaines. Nous établissons un calendrier détaillé lors de la phase de planification.",
    isOpen: false,
  },
  {
    id: 'faq3',
    question: 'Comment fonctionne votre processus de support ?',
    answer:
      "Notre support technique est disponible par email 7j/7 et par téléphone du lundi au vendredi de 9h à 18h. Les clients sur les forfaits Pro et Entreprise bénéficient d'un support prioritaire avec des temps de réponse garantis.",
    isOpen: false,
  },
  {
    id: 'faq4',
    question: 'Proposez-vous des services de maintenance ?',
    answer:
      'Oui, nous proposons des contrats de maintenance adaptés à vos besoins, incluant les mises à jour de sécurité, sauvegardes régulières, corrections de bugs et assistance technique. Contactez-nous pour un devis personnalisé.',
    isOpen: false,
  },
];

// FeatureGrid mocks
export const FEATURES: Feature[] = [
  {
    id: 'feature1',
    title: 'Design personnalisé',
    description:
      'Interfaces sur mesure adaptées à votre image de marque et à vos objectifs commerciaux.',
    color: 'primary',
    link: {
      text: 'En savoir plus',
      url: '/services/design',
    },
  },
  {
    id: 'feature2',
    title: 'Développement robuste',
    description: 'Code optimisé et évolutif pour des applications performantes et maintenables.',
    color: 'secondary',
    link: {
      text: 'Voir nos technologies',
      url: '/services/developpement',
    },
  },
  {
    id: 'feature3',
    title: 'Optimisation SEO',
    description:
      'Techniques avancées de référencement pour améliorer votre visibilité sur les moteurs de recherche.',
    color: 'tertiary',
    link: {
      text: 'Nos stratégies SEO',
      url: '/services/seo',
    },
  },
  {
    id: 'feature4',
    title: 'Support réactif',
    description:
      'Assistance technique disponible pour résoudre rapidement vos problèmes et questions.',
    color: 'primary',
    link: {
      text: 'Contacter le support',
      url: '/support',
    },
  },
];

// PricingPlan mocks
export const PRICING_FEATURES: Record<string, PricingFeature[]> = {
  basic: [
    { id: 'f1', text: '3 projets actifs', included: true },
    { id: 'f2', text: '5 Go de stockage', included: true },
    { id: 'f3', text: 'Support email', included: true },
    { id: 'f4', text: 'Mises à jour gratuites', included: true },
    { id: 'f5', text: 'API access', included: false },
    { id: 'f6', text: 'Support téléphonique', included: false },
    { id: 'f7', text: 'Utilisateurs illimités', included: false },
  ],
  pro: [
    { id: 'f1', text: '10 projets actifs', included: true, highlight: true },
    { id: 'f2', text: '50 Go de stockage', included: true },
    { id: 'f3', text: 'Support email', included: true },
    { id: 'f4', text: 'Mises à jour gratuites', included: true },
    { id: 'f5', text: 'API access', included: true, highlight: true },
    { id: 'f6', text: 'Support téléphonique', included: true },
    { id: 'f7', text: 'Utilisateurs illimités', included: false },
  ],
  enterprise: [
    { id: 'f1', text: 'Projets illimités', included: true, highlight: true },
    { id: 'f2', text: '500 Go de stockage', included: true, highlight: true },
    { id: 'f3', text: 'Support email prioritaire', included: true },
    { id: 'f4', text: 'Mises à jour gratuites', included: true },
    { id: 'f5', text: 'API access avancé', included: true },
    { id: 'f6', text: 'Support téléphonique 24/7', included: true, highlight: true },
    { id: 'f7', text: 'Utilisateurs illimités', included: true, highlight: true },
  ],
};

// ProjectPreview mocks
export const PROJECT_TAGS: ProjectTag[] = [
  { id: 'p1', label: 'E-commerce', color: 'primary' },
  { id: 'p2', label: 'Site vitrine', color: 'secondary' },
  { id: 'p3', label: 'Application web', color: 'tertiary' },
  { id: 'p4', label: 'Dashboard', color: 'default' },
];

export const PROJECTS = [
  {
    id: 'proj1',
    title: 'Boutique Élégance',
    slug: 'boutique-elegance',
    imageSrc: '/images/projects/project-placeholder.jpg',
    tags: [PROJECT_TAGS[0], PROJECT_TAGS[1]],
    description:
      'Site e-commerce de produits de luxe avec interface utilisateur simplifiée et système de paiement sécurisé.',
    clientName: 'Élégance Paris',
    year: '2023',
  },
  {
    id: 'proj2',
    title: 'Dashboard Analytics',
    slug: 'dashboard-analytics',
    imageSrc: '/images/projects/project-placeholder.jpg',
    tags: [PROJECT_TAGS[2], PROJECT_TAGS[3]],
    description:
      'Tableau de bord analytique pour entreprises avec visualisations de données en temps réel et rapports personnalisables.',
    clientName: 'DataViz Solutions',
    year: '2023',
  },
  {
    id: 'proj3',
    title: 'Wellness App',
    slug: 'wellness-app',
    imageSrc: '/images/projects/project-placeholder.jpg',
    tags: [PROJECT_TAGS[2]],
    description:
      "Application web de suivi de bien-être avec fonctionnalités de méditation, suivi d'exercices et journal personnel.",
    clientName: 'MindBody Health',
    year: '2022',
  },
];

// Tabs mocks
export const TAB_ITEMS: TabItem[] = [
  {
    id: 'tab1',
    label: 'Présentation',
    content:
      "Notre agence web crée des expériences digitales sur-mesure pour vous aider à atteindre vos objectifs. Fondée sur des valeurs d'expertise, de créativité et d'innovation, nous mettons notre savoir-faire au service de votre réussite.",
    icon: undefined,
  },
  {
    id: 'tab2',
    label: 'Services',
    content:
      "Nous proposons une gamme complète de services digitaux, du design d'interface à la création de sites web, en passant par le développement d'applications, l'optimisation SEO et les stratégies de contenu.",
    badge: 'Nouveaux',
    icon: undefined,
  },
  {
    id: 'tab3',
    label: 'Réalisations',
    content:
      'Découvrez nos projets les plus récents, réalisés pour des clients de tous secteurs. Chaque projet témoigne de notre approche personnalisée et de notre engagement à fournir des résultats exceptionnels.',
    icon: undefined,
  },
];
