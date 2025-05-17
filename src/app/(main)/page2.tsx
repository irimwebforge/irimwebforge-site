import React from 'react';
import { HeroSection } from '@/components/organisms/HeroSection';
import { FeatureSection } from '@/components/organisms/FeatureSection';
import { TemporalSplit } from '@/components/organisms/TemporalSplit';
import { ProjectShowcase } from '@/templates/ProjectShowcase';
import { TestimonialSection } from '@/templates/TestimonialSection';
import { CTASection } from '@/templates/CTASection';
import { ComparativeTable } from '@/components/molecules/ComparativeTable';
import { Testimonial } from '@/components/molecules/Testimonial';
import { Icon } from '@/components/atoms/Icon';
import { Typography } from '@/components/atoms/Typography';
import { Container } from '@/components/atoms/Container';

// Types pour le tableau comparatif
import type { ComparisonColumn, ComparisonRow } from '@/components/molecules/ComparativeTable';

export default function HomePage() {
  // 1. Données pour le tableau comparatif
  const comparisonColumns: ComparisonColumn[] = [
    { id: 'standard', title: 'SOLUTIONS CMS STANDARDS', color: 'secondary' },
    { id: 'irimwebforge', title: 'IRIMWEBFORGE', highlight: true, color: 'primary' },
  ];

  const comparisonRows: ComparisonRow[] = [
    {
      id: 'interface',
      feature: 'Adaptation',
      values: [
        "Vous vous adaptez à l'interface",
        { value: "L'interface s'adapte à VOUS", highlight: true },
      ],
    },
    {
      id: 'complexity',
      feature: 'Simplicité',
      values: [
        'Navigation complexe et options inutiles',
        { value: 'Interface épurée sur mesure', highlight: true },
      ],
    },
    {
      id: 'time',
      feature: 'Temps administratif',
      values: [
        '7h/semaine en moyenne pour les mises à jour',
        { value: '45min/semaine pour mêmes tâches', highlight: true },
      ],
    },
    {
      id: 'autonomy',
      feature: 'Autonomie',
      values: ['Dépendance technique', { value: 'Autonomie totale', highlight: true }],
    },
    {
      id: 'cost',
      feature: 'Coût',
      values: [
        'Abonnements mensuels sans fin',
        { value: 'Investissement puis indépendance', highlight: true },
      ],
    },
  ];

  // 2. Données pour la section "Ma différence"
  const differenceFeatures = [
    {
      id: 'understanding',
      title: 'Double compréhension',
      description:
        "Je comprends à la fois votre réalité métier et les solutions techniques. Je pose des questions que d'autres développeurs ne penseraient pas à poser pour comprendre votre métier au-delà de vos besoins techniques.",
      icon: 'Translate' as const,
      color: 'primary' as const,
    },
    {
      id: 'listening',
      title: "Relation d'écoute",
      description:
        "J'accorde autant d'importance à ce que vous dites qu'à ce que vous ne dites pas. Cette capacité d'écoute me permet de créer des solutions qui répondent à vos besoins réels, pas aux suppositions techniques.",
      icon: 'Users' as const, // Remplace EarListen qui n'existe pas dans Lucide
      color: 'secondary' as const,
    },
    {
      id: 'freedom',
      title: 'Libération mentale',
      description:
        "Je prends en charge la responsabilité technique pour que vous restiez concentré sur votre cœur de métier. Vous n'avez pas besoin de comprendre la technique pour bénéficier pleinement de votre solution digitale.",
      icon: 'Brain' as const,
      color: 'tertiary' as const,
    },
  ];

  // 3. Données pour la section "Proposition de valeur"
  const valueFeatures = [
    {
      id: 'autonomy',
      title: 'Autonomie sereine',
      description:
        'Reprenez le contrôle de votre présence en ligne sans dépendance technique. Mettez à jour votre site vous-même, sans crainte de "tout casser" et sans attendre un prestataire.',
      icon: 'ShieldCheck' as const,
      color: 'primary' as const,
    },
    {
      id: 'time',
      title: 'Gain de temps mesurable',
      description:
        "Passez de 7h à 45min d'administration hebdomadaire comme l'a fait mon épouse thérapeute. Récupérez un temps précieux pour vous consacrer à votre cœur de métier et à vos clients.",
      icon: 'Clock' as const,
      color: 'primary' as const,
    },
    {
      id: 'authenticity',
      title: 'Authenticité digitale',
      description:
        'Une présence en ligne qui reflète véritablement qui vous êtes, pas un template standardisé. Vos valeurs et votre identité transpirent dans chaque aspect de votre site.',
      icon: 'Fingerprint' as const,
      color: 'secondary' as const,
    },
    {
      id: 'evolution',
      title: 'Évolution sans friction',
      description:
        "Des solutions qui grandissent avec vous, sans tout reconstruire. Votre présence digitale s'adapte à l'évolution de votre activité, sans recommencer à zéro.",
      icon: 'TrendingUp' as const,
      color: 'tertiary' as const,
    },
  ];

  // 4. Données pour les projets mis en avant
  const featuredProjects = [
    {
      id: 'corps-et-sens',
      title: 'Corps & Sens',
      slug: 'corps-et-sens',
      description:
        "Interface sur mesure pour thérapeute/artiste permettant de gérer facilement planning, contenus et images. Un gain de temps précieux redéployé vers l'accompagnement des patients et la créativité.",
      imageUrl: '/images/projects/corps-et-sens.jpg',
      tags: [
        { id: 'tag1', label: 'Thérapeute', color: 'primary' as const },
        { id: 'tag2', label: 'Interface Admin', color: 'secondary' as const },
      ],
      year: '2023',
      featured: true,
      clientName: 'Thérapeute énergétique',
    },
    {
      id: 'univers-des-reves',
      title: 'Univers des Rêves',
      slug: 'univers-des-reves',
      description:
        "Interface de gestion intuitive pour onirologue permettant l'ajout et la modification de contenus sans aucune intervention technique externe. Une indépendance retrouvée.",
      imageUrl: '/images/projects/univers-des-reves.jpg',
      tags: [
        { id: 'tag1', label: 'Onirologue', color: 'tertiary' as const },
        { id: 'tag2', label: 'Interface Admin', color: 'secondary' as const },
      ],
      year: '2023',
      clientName: 'Univers des Rêves',
    },
    {
      id: 'mr-mrs-cbd',
      title: 'Mr&Mrs CBD',
      slug: 'mr-mrs-cbd',
      description:
        "Fin de la dépendance à un système d'abonnement coûteux (économie de 2640€/an) et reprise de contrôle total sur l'évolution du site. Une rentabilité immédiate.",
      imageUrl: '/images/projects/cbd-site.jpg',
      tags: [
        { id: 'tag1', label: 'E-commerce', color: 'primary' as const },
        { id: 'tag2', label: 'Artisan CBD', color: 'tertiary' as const },
      ],
      year: '2022',
      clientName: 'Mr&Mrs CBD',
    },
  ];

  return (
    <main className="overflow-x-hidden">
      {/* 1. HeroSection - Plus haute et plus immersive */}
      <section className="min-h-[90vh] flex items-center relative">
        <HeroSection
          title="Des sites web qui libèrent votre temps et votre énergie"
          subtitle="Je crée des interfaces qui respectent votre métier, votre identité et votre besoin d'autonomie"
          ctaText="Discutons de vos aspirations digitales"
          ctaHref="/contact"
          secondaryCtaText="Découvrir mon approche"
          secondaryCtaHref="/services"
          className="w-full space-y-12"
        />
      </section>

      {/* 2. Ma différence - Section plus aérée avec un fond subtil */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-20 dark:from-primary-900 dark:opacity-10" />
        <FeatureSection
          title="Le pont entre votre vision et sa concrétisation digitale"
          description="Mon parcours atypique de formateur et gestionnaire de conflit au développement web m'a donné une perspective unique que les développeurs traditionnels n'ont pas. Cette double compétence me permet de voir ce que d'autres manquent."
          features={differenceFeatures}
          layout="cards"
          columns={3}
          backgroundColor="light"
          textAlign="center"
          badge={{ text: 'Ma différence', variant: 'primary' }}
          cta={{
            text: 'Je traduis vos aspirations professionnelles en réalités digitales concrètes et autonomes',
            href: '/a-propos',
            variant: 'outline',
          }}
          className="space-y-16"
        />
      </section>

      {/* 3. Proposition de valeur - Design moderne avec grille décalée */}
      <section className="py-32 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]">
        <FeatureSection
          title="Une approche qui transforme concrètement votre quotidien"
          features={valueFeatures}
          layout="grid"
          columns={4}
          backgroundColor="primary"
          textAlign="center"
          className="space-y-16"
        />
      </section>

      {/* 4. Tableau comparatif - Plus d'espace et meilleure mise en valeur */}
      <section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 opacity-50 dark:from-gray-800 dark:to-gray-800 dark:opacity-30" />
        <Container className="relative z-10 space-y-16">
          <Typography as="h2" variant="h2" className="text-center font-bold italic">
            Solutions standards vs IrimWebForge
          </Typography>
          <ComparativeTable
            columns={comparisonColumns}
            rows={comparisonRows}
            highlightRecommended={true}
            responsiveBreakpoint="md"
          />
        </Container>
      </section>

      {/* 5. Temporalité duale - Section plus haute avec effet de profondeur */}
      <section className="py-32 bg-gray-50 dark:bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/10 to-transparent dark:via-primary-900/5" />
        <TemporalSplit
          title="Mon parcours d'évolution"
          leftContent={{
            title: 'Ce que je réalise actuellement',
            content:
              "Sites web personnalisés avec interfaces de gestion sur mesure. Des sites qui vous ressemblent vraiment, associés à des interfaces d'administration que vous pouvez utiliser sans compétence technique. Mon épouse est passée de 7h à 45min d'administration hebdomadaire grâce à cette approche.",
            example: {
              title: 'Corps & Sens',
              highlight: "De 7h à 45min d'administration hebdomadaire",
            },
            target:
              'Particulièrement adapté aux thérapeutes, artisans et professionnels en transition qui cherchent à reprendre le contrôle de leur présence en ligne sans y consacrer trop de temps.',
          }}
          rightContent={{
            title: "Ce que je développe pour l'avenir",
            content:
              'Pour étendre votre impact au-delà de votre site web. Actuellement en développement avec le projet MoodCycle, une application holistique de suivi de cycle.',
            example: {
              title: 'Applications web/mobiles personnalisées',
            },
            message:
              "Ma vision pour les clients avec qui j'aurai établi une relation de confiance durable. Intégration fluide entre site, gestion, application, et plus encore.",
          }}
          className="space-y-16"
        />
      </section>

      {/* 6. Projets mis en avant - Plus d'espace pour respirer */}
      <section className="py-32 bg-white dark:bg-gray-900">
        <ProjectShowcase
          title="Des transformations concrètes plutôt que des prouesses techniques"
          description="Chaque projet est une histoire de libération de temps et d'énergie. Je mets l'accent sur l'impact concret pour mes clients plutôt que sur les prouesses techniques."
          projects={featuredProjects}
          showFilters={false}
          showMoreButton={true}
          moreButtonText="Voir tous les projets"
          moreButtonLink="/projets"
          className="space-y-16"
        />
      </section>

      {/* 7. Témoignage principal - Section plus immersive */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-secondary-50)] dark:bg-[var(--color-secondary-900)] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent" />
        <Container className="relative z-10">
          <Testimonial
            quote="Eric a fait plus que créer un site web, il a véritablement compris mon métier et mes contraintes. Je ne perds plus mon dimanche à mettre à jour mon site. J'ai maintenant une interface simple qui me correspond et me fait gagner un temps précieux. C'est comme si quelqu'un avait enfin écouté ce dont j'avais besoin au lieu de me vendre une solution technique."
            author="Marie"
            company="thérapeute énergétique"
            variant="featured"
          />
        </Container>
      </section>

      {/* 8. Call-to-action final - Plus impactant */}
      <section className="py-32 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]">
        <CTASection
          title="Prêt à libérer votre temps et votre énergie créative?"
          description="Réservons une conversation découverte de 45 minutes, sans jargon technique"
          primaryAction={{
            text: 'Réserver ma conversation découverte',
            url: '/contact',
            variant: 'gradient',
          }}
          backgroundColor="gradient"
          align="center"
        />
      </section>
    </main>
  );
}
