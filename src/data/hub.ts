import type { Project } from '@/templates/ProjectShowcase';
import type { BlogPostCardProps } from '@/components/molecules/BlogPostCard';

// =============================================================================
// TYPES
// =============================================================================

// Proof utilise le type Project du DS pour compatibilité avec ProjectPreview
export type Proof = Project;

// Réutilise l'interface de TestimonialSection
export interface HubTestimonial {
  quote: string;
  author: string;
  company?: string;
  projectName?: string;
  avatarSrc?: string;
}

// Article compatible avec BlogPostCard
export type Article = Pick<
  BlogPostCardProps,
  'id' | 'title' | 'slug' | 'excerpt' | 'coverImage' | 'publishedAt' | 'readTime' | 'tags'
>;

export interface FooterLinkColumn {
  title: string;
  links: Array<{
    label: string;
    href: string;
    external?: boolean;
  }>;
}

// =============================================================================
// DATA
// =============================================================================

export const proofs: Proof[] = [
  {
    id: 'resetpulse',
    title: 'ResetPulse',
    slug: 'resetpulse',
    description:
      'App Time Timer pour cerveaux neuroatypiques. 15 palettes, 16 activités, multilingue.',
    imageUrl: '/images/projects/resetpulse.webp',
    tags: [{ id: 'reach', label: '177 pays', color: 'primary' }],
    year: '2025',
    onlineUrl: 'https://resetpulse.irimwebforge.com',
  },
  {
    id: 'demoforge',
    title: 'DemoForge',
    slug: 'demoforge',
    description:
      'Plateforme démo interactive multi-univers. Testez la modification des produits en temps réel.',
    imageUrl: '/images/projects/demoforge.webp',
    tags: [{ id: 'status', label: 'Live', color: 'success' }],
    year: '2025',
    onlineUrl: 'https://demoforge.irimwebforge.com',
  },
  {
    id: 'libera-luminosa',
    title: 'Libera Luminosa',
    slug: 'libera-luminosa',
    description: 'Site de Séverine Koehler thérapeute et accompagnatrice',
    imageUrl: '/images/projects/libera-luminosa.webp',
    tags: [{ id: 'status', label: 'Client actif', color: 'secondary' }],
    year: '2025',
    onlineUrl: 'https://liberaluminosa.fr',
  },
];

export const testimonials: HubTestimonial[] = [
  {
    quote:
      "Mon site m'a apporté de nouveaux clients grâce au référencement et à la réservation en ligne. La synchronisation agenda me simplifie la vie et me libère du temps pour mes patients.",
    author: 'Jezabel',
    company: 'Thérapeute',
    projectName: 'Corps & Sens',
  },
  {
    quote: 'Ce site me ressemble. Un gros poids est parti avec sa création. Merci pour tout.',
    author: 'Séverine',
    company: 'Thérapeute',
    projectName: 'Libera Luminosa',
  },
];

// Tags réutilisables
const tags = {
  parcours: { id: 'parcours', name: 'Parcours', slug: 'parcours', color: 'primary' as const },
  services: { id: 'services', name: 'Services', slug: 'services', color: 'secondary' as const },
  processus: { id: 'processus', name: 'Processus', slug: 'processus', color: 'primary' as const },
  projet: { id: 'projet', name: 'Étude de cas', slug: 'projet', color: 'tertiary' as const },
  tarifs: { id: 'tarifs', name: 'Tarifs', slug: 'tarifs', color: 'secondary' as const },
};

export const articles: Article[] = [
  {
    id: 'parcours',
    title: 'Mon parcours',
    slug: 'mon-parcours',
    excerpt: 'De formateur a developpeur. Une experience personnelle transformatrice.',
    coverImage: '/images/about/eric-profile.png',
    publishedAt: '2025-03-15',
    readTime: 5,
    tags: [tags.parcours],
  },
  {
    id: 'methode',
    title: 'Ma methode',
    slug: 'ma-methode',
    excerpt: '6 etapes de la decouverte a l\'autonomie. FAQ incluse.',
    coverImage: '/images/logo/Logo.png',
    publishedAt: '2025-05-22',
    readTime: 4,
    tags: [tags.processus],
  },
  {
    id: 'services',
    title: 'Mes services',
    slug: 'mes-services',
    excerpt: '3 formules : Presence, Integree, Evolutive. A partir de 500€.',
    coverImage: '/images/logo/Logo.png',
    publishedAt: '2025-08-07',
    readTime: 6,
    tags: [tags.services, tags.tarifs],
  },
  {
    id: 'realisations',
    title: 'Mes realisations',
    slug: 'mes-realisations',
    excerpt: '14 projets : apps mobiles, sites clients, formations.',
    coverImage: '/images/projects/corps-et-sens.webp',
    publishedAt: '2025-11-18',
    readTime: 8,
    tags: [tags.projet],
  },
];

export const footerLinks: FooterLinkColumn[] = [
  {
    title: 'Articles',
    links: [
      { label: 'Mon parcours', href: '/blog/mon-parcours' },
      { label: 'Mes services', href: '/blog/services' },
      { label: 'Comment je travaille', href: '/blog/processus' },
      { label: 'Corps & Sens — étude de cas', href: '/blog/corps-et-sens' },
      { label: 'ResetPulse — behind the scenes', href: '/blog/resetpulse' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Portfolio complet', href: 'https://portfolio.irimwebforge.com', external: true },
      { label: 'DS-Lab — design system', href: '/ds-lab' },
      { label: 'ResetPulse', href: 'https://resetpulse.irimwebforge.com', external: true },
      { label: 'DemoForge', href: 'https://demoforge.irimwebforge.com', external: true },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ericzuber/', external: true },
      { label: 'GitHub', href: 'https://github.com/Ricomaldo', external: true },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
      {
        label: 'Réserver un échange',
        href: 'https://cal.com/eric-zuber-nxxypt/30min',
        external: true,
      },
    ],
  },
];
