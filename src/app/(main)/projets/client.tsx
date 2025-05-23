'use client';

import React, { useState } from 'react';
import { PageHeader } from '@/components/organisms/PageHeader';
import { Typography } from '@/components/atoms/Typography';
import { Container } from '@/components/atoms/Container';
import { Icon, IconName } from '@/components/atoms/Icon';
import { ProjectShowcase } from '@/templates/ProjectShowcase';
import { CTASection } from '@/templates/CTASection';
import { QuickVisionBanner } from '@/components/molecules/VisionBanner';
import { Alert } from '@/components/molecules/Alert';
import { Divider } from '@/components/atoms/Divider';
import Image from 'next/image';
import { NavLink } from '@/components/atoms/NavLink';
import { Card } from '@/components/molecules/Card';
import { DemoModal } from '@/components/molecules/Modal';

export default function ProjetsClient() {
  const [selectedDemo, setSelectedDemo] = useState<{
    title: string;
    url: string;
    description?: string;
  } | null>(null);

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
      id: 'cbd-shop',
      title: 'CBD-Shop',
      slug: 'cbd-shop',
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
      imageUrl: '/images/projects/corps-et-sens.jpg',
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
        "Création d'une application de location immobilière avec React Router, logique métier et interface moderne.",
      year: '2024',
      onlineUrl: 'https://portfolio.irimwebforge.com/projects/OC_IW_P7_Kasa',
    },
  ];

  // Tri des projets avec le projet en vedette en premier
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured) return -1;
    if (b.featured) return 1;
    return parseInt(b.year) - parseInt(a.year);
  });

  const openDemo = (demo: { title: string; url: string; description?: string }) => {
    setSelectedDemo(demo);
  };

  const closeDemo = () => {
    setSelectedDemo(null);
  };

  return (
    <main className="overflow-x-hidden transition-all duration-300">
      <PageHeader
        title="Mes réalisations concrètes"
        description="Des projets réels qui illustrent mon approche et les transformations obtenues. Transparence sur mon parcours et ma méthode."
        align="center"
        size="large"
        pattern
        badge={{ text: 'Portfolio 2024-2025', variant: 'primary' }}
      />

      <section className="py-16 bg-section-primary">
        <Container className="px-4">
          {/* <QuickVisionBanner 
            page="projets" 
            dismissible={true}
          /> */}

          <div className="grid gap-8 mb-12 max-w-7xl mx-auto">
            {sortedProjects.map((project, index) => {
              const isCorpsEtSens = project.id === 'corps-et-sens';
              
              return (
                <div key={project.id} className={`${isCorpsEtSens ? 'row-span-2' : ''}`}>
                  <Card
                    variant={isCorpsEtSens ? 'highlight' : 'default'}
                    padding="large"
                    className={`group relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                      isCorpsEtSens 
                        ? 'border-primary border-2 bg-gradient-to-br from-white via-primary-50 to-primary-100 dark:from-gray-800 dark:via-primary-900/20 dark:to-primary-800/30' 
                        : 'hover:scale-[1.02]'
                    }`}
                  >
                    {isCorpsEtSens && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                          ⭐ Projet fondateur
                        </div>
                      </div>
                    )}

                    <div className={`grid gap-6 ${isCorpsEtSens ? 'md:grid-cols-1 lg:grid-cols-5' : 'md:grid-cols-3'} items-center`}>
                      <div className={`${isCorpsEtSens ? 'lg:col-span-2' : 'md:col-span-1'} relative`}>
                        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                          <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>

                      <div className={`${isCorpsEtSens ? 'lg:col-span-3' : 'md:col-span-2'} space-y-4`}>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tags.map((tag) => (
                            <span
                              key={tag.id}
                              className={`px-3 py-1 rounded-full text-xs font-medium bg-${tag.color}-100 text-${tag.color}-800 dark:bg-${tag.color}-900/30 dark:text-${tag.color}-300`}
                            >
                              {tag.label}
                            </span>
                          ))}
                        </div>

                        <div>
                          <Typography 
                            as="h3" 
                            variant={isCorpsEtSens ? "h2" : "h3"} 
                            className={`mb-2 font-bold ${isCorpsEtSens ? 'text-primary' : ''}`}
                          >
                            {project.title}
                          </Typography>
                          <Typography variant="small" className="text-gray-500 dark:text-gray-400 mb-3">
                            {project.year}
                          </Typography>
                          <Typography 
                            variant={isCorpsEtSens ? "lead" : "p"} 
                            className="text-gray-700 dark:text-gray-300 mb-4"
                          >
                            {project.description}
                          </Typography>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          {project.onlineUrl && (
                            <NavLink
                              href={project.onlineUrl}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 text-sm font-medium"
                              target="_blank"
                            >
                              <Icon name="ExternalLink" className="w-4 h-4" />
                              Voir le projet
                            </NavLink>
                          )}
                          
                          {project.onlineUrl && (
                            <button
                              onClick={() => openDemo({
                                title: project.title,
                                url: project.onlineUrl!,
                                description: project.description
                              })}
                              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
                            >
                              <Icon name="Eye" className="w-4 h-4" />
                              Aperçu
                            </button>
                          )}
                        </div>

                        {isCorpsEtSens && (
                          <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
                            <Typography variant="small" className="text-primary-800 dark:text-primary-200 italic">
                              💡 Ce projet a été le déclencheur de ma reconversion. Transformer 7h d'administration hebdomadaire en 45min grâce à une interface adaptée m'a fait comprendre l'impact concret du numérique sur mesure.
                            </Typography>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-cta-soft py-16">
        <Container className="px-4 content-overlay-soft">
          <CTASection
            title="Vous avez un projet ? Discutons-en"
            description="45 minutes pour comprendre vos besoins et voir si mon approche correspond à vos attentes. Sans engagement, sans jargon technique."
            primaryAction={{
              text: 'Prendre contact',
              url: '/contact',
              variant: 'gradient',
            }}
            secondaryAction={{
              text: 'Voir mes services',
              url: '/services',
              variant: 'secondary',
            }}
            variant="card"
            backgroundColor="transparent"
          />
        </Container>
      </section>

      {selectedDemo && (
        <DemoModal
          isOpen={!!selectedDemo}
          onClose={closeDemo}
          title={selectedDemo.title}
          siteUrl={selectedDemo.url}
          description={selectedDemo.description}
        />
      )}
    </main>
  );
} 