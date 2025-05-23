'use client';

import React, { useState } from 'react';
import { PageHeader } from '@/components/organisms/PageHeader';
import { Typography } from '@/components/atoms/Typography';
import { Container } from '@/components/atoms/Container';
import { Icon, IconName } from '@/components/atoms/Icon';
import { ProjectShowcase } from '@/templates/ProjectShowcase';
import { CTASection } from '@/templates/CTASection';
import { Alert } from '@/components/molecules/Alert';
import { Divider } from '@/components/atoms/Divider';
import Image from 'next/image';
import { NavLink } from '@/components/atoms/NavLink';
import { Card } from '@/components/molecules/Card';
import { DemoModal } from '@/components/molecules/Modal';

export default function ProjetsPage() {
  const [selectedDemo, setSelectedDemo] = useState<{
    title: string;
    url: string;
    description?: string;
  } | null>(null);

  // Bannière de vision
  const _VisionBanner = () => (
    <Alert variant="info" title="" className="mb-8 mx-auto max-w-5xl">
      <p className="text-sm text-blue-800 dark:text-blue-200">
        Cette page présente mon projet fondateur (Corps & Sens) ainsi que des projets en
        développement et conceptuels qui illustrent ma vision. Je privilégie la transparence sur mon
        parcours entrepreneurial.
      </p>
    </Alert>
  );

  const projectTags = {
    solution: [
      { id: 'site-gestion', label: 'Site + Interface Admin', color: 'primary' as const },
      { id: 'app-mobile', label: 'Application Mobile', color: 'secondary' as const },
      { id: 'site-vitrine', label: 'Site Vitrine', color: 'tertiary' as const },
      { id: 'prototype', label: 'Prototype/Concept', color: 'info' as const },
    ],
    clientele: [
      { id: 'therapeutes', label: 'Thérapeutes', color: 'primary' as const },
      { id: 'artisans', label: 'Artisans & Commerçants', color: 'secondary' as const },
      { id: 'creatifs', label: 'Créatifs & Artistes', color: 'tertiary' as const },
      { id: 'associations', label: 'Associations', color: 'info' as const },
      { id: 'personnel', label: 'Projet Personnel', color: 'success' as const },
    ],
    statut: [
      { id: 'realise', label: 'Réalisé', color: 'success' as const },
      { id: 'en-cours', label: 'En Développement', color: 'warning' as const },
      { id: 'concept', label: 'Concept', color: 'info' as const },
      { id: 'formation', label: 'Formation', color: 'default' as const },
    ],
  };

  const getTagsForProject = (solutionId: string, clienteleId?: string, statutId?: string) => {
    const tags = [];
    if (solutionId) {
      const tag = projectTags.solution.find((t) => t.id === solutionId);
      if (tag) tags.push(tag);
    }
    if (clienteleId) {
      const tag = projectTags.clientele.find((t) => t.id === clienteleId);
      if (tag) tags.push(tag);
    }
    if (statutId) {
      const tag = projectTags.statut.find((t) => t.id === statutId);
      if (tag) tags.push(tag);
    }
    return tags;
  };

  const projects = [
    {
      id: 'mr-mrs-cbd',
      title: 'Mr&Mrs CBD',
      slug: 'mr-mrs-cbd',
      imageUrl: '/images/projects/cbd-site.jpg',
      tags: getTagsForProject('site-gestion', 'artisans', 'concept'),
      description:
        "Projet en développement visant à libérer un commerce local de ses abonnements coûteux. L'objectif est une économie annuelle de 2640€ et une reprise de contrôle totale sur l'évolution du site.",
      year: '2025',
    },
    {
      id: 'univers-des-reves',
      title: 'Univers des Rêves',
      slug: 'univers-des-reves',
      imageUrl: '/images/projects/univers-des-reves.webp',
      tags: getTagsForProject('site-gestion', 'therapeutes', 'realise'),
      description:
        "Concept d'interface intuitive permettant à un onirologue de gérer ses contenus sans intervention technique externe. Une vision de l'autonomie numérique que je souhaite permettre.",
      year: '2025',
      onlineUrl: 'https://www.universdesreves.com/',
    },
    {
      id: 'moodcycle',
      title: 'MoodCycle',
      slug: 'moodcycle',
      imageUrl: '/images/projects/moodcycle.jpg',
      tags: getTagsForProject('app-mobile', 'personnel', 'en-cours'),
      description:
        "Application holistique de suivi de cycle menstruel en développement. Un projet personnel qui explore les possibilités d'interfaces intuitives sur mobile avec React Native.",
      year: '2025',
    },
    {
      id: 'nina-carducci',
      title: 'Nina Carducci – SEO & Accessibilité',
      slug: 'nina-carducci',
      imageUrl: '/images/projects/nina-carducci.webp',
      tags: getTagsForProject('site-vitrine', 'creatifs', 'formation'),
      description: "Optimisation du référencement et de l'accessibilité d'un site de photographe.",
      year: '2025',
      onlineUrl: 'https://portfolio.irimwebforge.com/projects/OC_IW_P8_Nina-Carducci',
    },
    {
      id: '724events',
      title: '724Events – Debug & Tests',
      slug: '724events',
      imageUrl: '/images/projects/724events.webp',
      tags: getTagsForProject('site-vitrine', 'artisans', 'formation'),
      description: "Débogage et plan de tests pour le site d'une agence événementielle.",
      year: '2025',
      onlineUrl: 'https://portfolio.irimwebforge.com/projects/OC_IW_P9_724Events',
    },
    {
      id: 'corps-et-sens',
      title: 'Corps & Sens',
      slug: 'corps-et-sens',
      imageUrl: 'images/projects/corps-et-sens.jpg',
      tags: getTagsForProject('site-gestion', 'therapeutes', 'realise'),
      description:
        "Projet réalisé pour mon épouse thérapeute qui a transformé 7h d'administration hebdomadaire en 45min. Une interface simplifiée pour la gestion du planning et des contenus.",
      featured: true,
      year: '2024',
      onlineUrl: 'https://corpsetsenstherapie.com/',
    },
    {
      id: 'Riding-Cities',
      title: 'Riding Cities',
      slug: 'Riding-Cities',
      imageUrl: '/images/projects/Riding-Cities.webp',
      tags: getTagsForProject('site-vitrine', 'associations', 'formation'),
      description:
        "Intégration de la page d'accueil d'une association avec HTML & CSS à partir d'une maquette Figma.",
      year: '2024',
      onlineUrl: 'https://portfolio.irimwebforge.com/projects/OC_IW_P2_Riding-Cities/',
    },
    {
      id: 'booki',
      title: 'Booki – Agence de voyage',
      slug: 'booki',
      imageUrl: '/images/projects/booki.webp',
      tags: getTagsForProject('site-vitrine', 'artisans', 'formation'),
      description:
        "Intégration de la page d'accueil d'une agence de voyage avec HTML & CSS à partir d'une maquette Figma.",
      year: '2024',
      onlineUrl: 'https://portfolio.irimwebforge.com/projects/OC_IW_P3_Booki',
    },
    {
      id: 'ohmyfood',
      title: 'OhMyFood – Animations CSS',
      slug: 'ohmyfood',
      imageUrl: '/images/projects/ohmyfood.webp',
      tags: getTagsForProject('site-vitrine', 'artisans', 'formation'),
      description:
        "Implémentation d'un site foodtech mobile-first avec animations CSS avancées (Sass).",
      year: '2024',
      onlineUrl: 'https://portfolio.irimwebforge.com/projects/OC_IW_P4_Ohmyfood',
    },
    {
      id: 'print-it',
      title: 'Print-it – Carousel JS',
      slug: 'print-it',
      imageUrl: '/images/projects/print-it.webp',
      tags: getTagsForProject('site-vitrine', 'artisans', 'formation'),
      description: "Création d'un carousel pour le site d'une imprimerie avec JavaScript.",
      year: '2024',
      onlineUrl: 'https://portfolio.irimwebforge.com/projects/OC_IW_P5_Print-it',
    },
    {
      id: 'sophie-bluel',
      title: 'Sophie Bluel – Site dynamique JS',
      slug: 'sophie-bluel',
      imageUrl: '/images/projects/sophie-bluel.webp',
      tags: getTagsForProject('site-gestion', 'creatifs', 'formation'),
      description:
        "Création d'un site dynamique pour une architecte, intégration d'une API et gestion des événements utilisateur.",
      year: '2024',
      onlineUrl: 'https://portfolio.irimwebforge.com/projects/OC_IW_P6_Sophie-Bluel/FrontEnd',
    },
    {
      id: 'kasa',
      title: 'Kasa – Application React',
      slug: 'kasa',
      imageUrl: '/images/projects/kasa.webp',
      tags: getTagsForProject('site-vitrine', 'artisans', 'formation'),
      description:
        'Développement du front-end de Kasa, application de location immobilière, avec React et React Router.',
      year: '2024',
      onlineUrl: 'https://portfolio.irimwebforge.com/projects/OC_IW_P7_Kasa',
    },
    {
      id: 'echos-des-reves',
      title: 'Echos des Rêves – Projet HTML/CSS',
      slug: 'echos-des-reves',
      imageUrl: '/images/projects/echos-des-reves.jpg',
      tags: getTagsForProject('app-mobile', 'personnel', 'realise'),
      description:
        'Premiers pas sur le langage HTML et CSS en analysant et complétant une page web.',
      year: '2024',
    },
  ];

  const transformationCategories = [
    {
      title: 'De la frustration à la sérénité',
      description:
        "Comment une interface bien pensée peut transformer l'anxiété administrative en confiance",
      examples: [
        'Réduction du temps administratif hebdomadaire',
        'Simplification des mises à jour de contenu',
        'Interface adaptée au niveau de confort technique',
      ],
      icon: 'Smile' as IconName,
      color: 'primary' as const,
    },
    {
      title: "De la fragmentation à l'unité",
      description:
        'Créer des écosystèmes numériques cohérents qui remplacent les outils disparates',
      examples: [
        'Centralisation des informations clients',
        'Synchronisation automatique entre site et planning',
        'Communication fluide entre modules',
      ],
      icon: 'Layers' as IconName,
      color: 'secondary' as const,
    },
    {
      title: "De la dépendance à l'autonomie",
      description:
        "Reprendre le contrôle de sa présence en ligne sans dépendre d'un expert technique",
      examples: [
        'Formation adaptée au niveau technique de chacun',
        'Documentation visuelle facile à consulter',
        'Interfaces intuitives qui guident naturellement',
      ],
      icon: 'Key' as IconName,
      color: 'tertiary' as const,
    },
  ];

  return (
    <main className="overflow-x-hidden">
      <PageHeader
        title="Mon portfolio: entre réalisations et vision"
        description="Un mélange de projets qui raconte mon parcours et illustre ma direction
              professionnelle."
        align="center"
        size="medium"
        pattern={true}
      />

      {/* <Container>
        <VisionBanner />
      </Container> */}

      <section className="py-8">
        {/* <div className="text-center mb-12">
            <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
              Mon portfolio: entre réalisations et vision
            </Typography>
            <Typography variant="lead" className="mb-8 max-w-3xl mx-auto">
              Un mélange de projets qui raconte mon parcours et illustre ma direction
              professionnelle.
            </Typography>
          </div> */}

        <ProjectShowcase
          title=""
          projects={projects}
          showFilters={true}
          _showMoreButton={false}
          className="projects-showcase"
          onProjectClick={(project) => {
            if (project.onlineUrl) {
              setSelectedDemo({
                title: project.title,
                url: project.onlineUrl,
                description: project.description,
              });
            }
          }}
        />
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="text-center mb-12">
            <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
              Impacts concrets au-delà de la technique
            </Typography>
            <Typography variant="lead" className="mb-8 max-w-3xl mx-auto">
              Ces changements dans votre quotidien professionnel sont ma véritable motivation.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transformationCategories.map((category, index) => (
              <Card
                key={index}
                variant="accent"
                color={category.color as 'primary' | 'secondary' | 'tertiary'}
                accentPosition="top"
                padding="large"
                hover
                className="group transition-transform duration-150 ease-in-out hover:scale-105 hover:shadow-xl"
              >
                <div className="mb-4 flex justify-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-150 group-hover:scale-110 group-hover:shadow-lg bg-[var(--color-${category.color}-100)] dark:bg-[var(--color-${category.color}-900)]`}
                  >
                    <Icon
                      name={category.icon}
                      className={`w-8 h-8 text-[var(--color-${category.color}-600)] dark:text-[var(--color-${category.color}-400)]`}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <Typography as="h3" variant="h3" className="mb-3 text-center">
                  {category.title}
                </Typography>

                <Typography
                  variant="p"
                  className="text-gray-600 dark:text-gray-300 mb-4 text-center"
                >
                  {category.description}
                </Typography>

                <Divider className="my-4" />

                <Typography
                  as="h4"
                  variant="h4"
                  className="text-sm uppercase text-gray-500 dark:text-gray-400 mb-3"
                >
                  Exemples concrets
                </Typography>

                <ul className="space-y-2">
                  {category.examples.map((example, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon
                        name="Check"
                        className={`text-[var(--color-${category.color}-600)] dark:text-[var(--color-${category.color}-400)] mt-1 flex-shrink-0`}
                        size={16}
                      />
                      <Typography variant="p" className="text-sm">
                        {example}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
                  Corps & Sens
                </Typography>
                <Typography as="h3" variant="h3" className="text-[var(--color-primary)] mb-6">
                  L'expérience qui a tout inspiré
                </Typography>

                <Typography variant="p" className="mb-4">
                  Ce projet personnel pour mon épouse thérapeute a été le déclencheur de ma vision.
                  En créant une interface adaptée à ses besoins spécifiques, j'ai pu transformer:
                </Typography>

                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 dark:border-red-700 transition-all duration-300 hover:bg-red-100 dark:hover:bg-red-900/30">
                  <Typography variant="p" className="font-medium text-red-700 dark:text-red-400">
                    AVANT
                  </Typography>
                  <Typography variant="p" className="text-gray-800 dark:text-gray-200">
                    7 heures par semaine de lutte avec une interface générique, stress, erreurs
                    fréquentes, et temps perdu loin de ses patients.
                  </Typography>
                </div>

                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500 dark:border-green-700 transition-all duration-300 hover:bg-green-100 dark:hover:bg-green-900/30">
                  <Typography
                    variant="p"
                    className="font-medium text-green-700 dark:text-green-400"
                  >
                    APRÈS
                  </Typography>
                  <Typography variant="p" className="text-gray-800 dark:text-gray-200">
                    45 minutes d'administration sereine, mise à jour simple du planning, plus de
                    temps pour ses patients et sa formation continue.
                  </Typography>
                </div>

                <Typography variant="p" className="mb-6">
                  Cette transformation concrète m'a montré l'impact qu'une interface bien conçue
                  peut avoir sur le quotidien d'un indépendant. C'est ce type de changement que
                  j'aimerais rendre possible pour d'autres professionnels.
                </Typography>

                <NavLink
                  href="https://www.corpsetsenstherapie.com/"
                  className="inline-flex items-center px-6 py-3 rounded-md bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-600)] transition-colors duration-normal"
                >
                  Découvrir ce projet
                  <Icon name="ArrowRight" className="ml-2" />
                </NavLink>
              </div>

              <div className="relative h-full min-h-[400px]">
                <Image
                  src="/images/projects/corps-et-sens-detail.png"
                  alt="Interface Corps & Sens"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <DemoModal
        isOpen={selectedDemo !== null}
        onClose={() => setSelectedDemo(null)}
        title={selectedDemo?.title || ''}
        siteUrl={selectedDemo?.url || ''}
        description={selectedDemo?.description}
      />

      <CTASection
        title="Échangeons sur vos défis quotidiens"
        description="45 minutes pour échanger sur votre projet. Sans pression commerciale, sans jargon technique."
        primaryAction={{
          text: 'Échanger sur votre projet',
          url: '/contact',
          variant: 'gradient',
        }}
        secondaryAction={{
          text: 'Découvrir mon approche',
          url: '/a-propos',
          variant: 'secondary',
        }}
        variant="default"
        backgroundColor="gradient"
        textColor="light"
      />
    </main>
  );
}
