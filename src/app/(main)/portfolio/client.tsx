'use client';

import { useState } from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Container } from '@/components/atoms/Container';
import { Icon } from '@/components/atoms/Icon';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { NavLink } from '@/components/atoms/NavLink';
import { ThemeToggle } from '@/components/atoms/ThemeToggle';
import { ProjectPreview } from '@/components/molecules/ProjectPreview';
import { Card } from '@/components/molecules/Card';
import type { Project } from '@/templates/ProjectShowcase';

const allProjects: Project[] = [
  {
    id: 'resetpulse',
    title: 'ResetPulse',
    slug: 'resetpulse',
    imageUrl: '/images/projects/resetpulse.webp',
    description:
      'Application mobile Time Timer visuel pour cerveaux neuroatypiques. 15 palettes, 16 activités. React Native.',
    tags: [{ id: 'reach', label: '177 pays', color: 'primary' }],
    year: '2025',
    onlineUrl: 'http://resetpulse.irimwebforge.com/',
  },
  {
    id: 'corps-et-sens',
    title: 'Corps & Sens',
    slug: 'corps-et-sens',
    imageUrl: '/images/projects/corps-et-sens.webp',
    description:
      "7h d'admin hebdomadaire transformées en 45min. Interface simplifiée pour thérapeute.",
    tags: [{ id: 'status', label: 'Projet fondateur', color: 'secondary' }],
    year: '2024',
    onlineUrl: 'https://corpsetsenstherapie.com/',
  },
  {
    id: 'demoforge',
    title: 'DemoForge',
    slug: 'demoforge',
    imageUrl: '/images/projects/demoforge.webp',
    description:
      'Plateforme démo interactive multi-univers. Testez la modification des produits en temps réel.',
    tags: [{ id: 'status', label: 'Live', color: 'success' }],
    year: '2025',
    onlineUrl: 'https://demoforge.irimwebforge.com/',
  },
  {
    id: 'libera-luminosa',
    title: 'Libera Luminosa',
    slug: 'libera-luminosa',
    imageUrl: '/images/projects/libera-luminosa.webp',
    description: 'Site yoga avec gestion des cours et ateliers. Séverine gère tout en autonomie.',
    tags: [{ id: 'status', label: 'Client actif', color: 'secondary' }],
    year: '2025',
    onlineUrl: 'https://liberaluminosa.fr/',
  },
  {
    id: 'univers-des-reves',
    title: 'Univers des Rêves',
    slug: 'univers-des-reves',
    imageUrl: '/images/projects/univers-des-reves.webp',
    description: 'Interface intuitive pour onirologue. Gestion autonome des contenus.',
    tags: [{ id: 'type', label: 'Thérapeute', color: 'tertiary' }],
    year: '2025',
    onlineUrl: 'https://www.universdesreves.com/',
  },
  {
    id: 'moodcycle',
    title: 'MoodCycle',
    slug: 'moodcycle',
    imageUrl: '/images/projects/moodcycle.webp',
    description: 'Application holistique de suivi de cycle menstruel. React Native.',
    tags: [{ id: 'status', label: 'En cours', color: 'warning' }],
    year: '2025',
  },
];

const formationProjects = [
  {
    id: 'nina-carducci',
    title: 'Nina Carducci',
    description: "Optimisation SEO et accessibilité d'un site de photographe.",
    url: 'https://portfolio.irimwebforge.com/projects/OC_IW_P8_Nina-Carducci',
  },
  {
    id: '724events',
    title: '724Events',
    description: 'Débogage et plan de tests pour une agence événementielle.',
    url: 'https://portfolio.irimwebforge.com/projects/OC_IW_P9_724Events',
  },
  {
    id: 'kasa',
    title: 'Kasa',
    description: 'Application de location immobilière avec React Router.',
    url: 'https://portfolio.irimwebforge.com/projects/OC_IW_P7_Kasa',
  },
  {
    id: 'sophie-bluel',
    title: 'Sophie Bluel',
    description: 'Site dynamique pour architecte avec API.',
    url: 'https://portfolio.irimwebforge.com/projects/OC_IW_P6_Sophie-Bluel/FrontEnd',
  },
  {
    id: 'ohmyfood',
    title: 'OhMyFood',
    description: 'Site foodtech mobile-first avec animations CSS.',
    url: 'https://portfolio.irimwebforge.com/projects/OC_IW_P4_Ohmyfood',
  },
  {
    id: 'booki',
    title: 'Booki',
    description: "Page d'accueil d'agence de voyage HTML/CSS.",
    url: 'https://portfolio.irimwebforge.com/projects/OC_IW_P3_Booki',
  },
];

export default function PortfolioClient() {
  const [showFormation, setShowFormation] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-color">
        <Container>
          <div className="flex items-center justify-between h-16">
            <NavLink href="/" color="secondary">
              <Icon name="ArrowLeft" className="w-5 h-5 inline mr-2" />
              <span className="text-sm hidden sm:inline">Accueil</span>
            </NavLink>

            <div className="flex items-center gap-2 sm:gap-4">
              <NavLink href="/blog" color="tertiary" className="text-sm hidden md:block">
                Blog
              </NavLink>
              <NavLink href="/ds-lab" color="tertiary" className="text-sm hidden md:block">
                DS-Lab
              </NavLink>
              <ThemeToggle />
              <Button
                variant="gradient"
                size="small"
                href="https://cal.com/eric-zuber-nxxypt/30min"
                target="_blank"
              >
                Réserver 30min
              </Button>
            </div>
          </div>
        </Container>
      </header>

      <main className="pt-16">
        {/* HERO */}
        <section className="py-16 bg-section-secondary">
          <Container>
            <div className="text-center mb-12">
              <Badge variant="primary" className="mb-4">
                2025
              </Badge>
              <Typography as="h1" variant="h1" className="mb-4">
                Portfolio
              </Typography>
            </div>
          </Container>
        </section>

        {/* PROJETS */}
        <section className="py-16 bg-section-primary">
          <Container>
            <Typography as="h2" variant="h2" className="mb-8 text-center">
              Mes projets récents
            </Typography>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects.map((project) => (
                <a
                  key={project.id}
                  href={project.onlineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ProjectPreview project={project} />
                </a>
              ))}
            </div>
          </Container>
        </section>

        {/* FORMATION */}
        <section className="py-16 bg-section-accent">
          <Container>
            <div className="text-center">
              <Button variant="ghost" onClick={() => setShowFormation(!showFormation)}>
                <Icon name={showFormation ? 'ChevronUp' : 'ChevronDown'} className="w-5 h-5 mr-2" />
                {showFormation ? 'Masquer' : 'Voir'} les projets de formation (
                {formationProjects.length})
              </Button>

              {showFormation && (
                <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {formationProjects.map((project) => (
                    <Card key={project.id} variant="default" padding="normal" className="text-left">
                      <Typography as="h4" variant="h4" className="mb-2">
                        {project.title}
                      </Typography>
                      <Typography variant="small" className="mb-3">
                        {project.description}
                      </Typography>
                      <NavLink href={project.url} target="_blank" color="primary">
                        Voir le projet <Icon name="ExternalLink" className="w-3 h-3 inline ml-1" />
                      </NavLink>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16 bg-section-secondary">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <Typography as="h2" variant="h2" className="mb-4">
                Un projet en tete ?
              </Typography>
              <Typography variant="lead" className="mb-8">
                Discutons de votre projet. 30 minutes pour comprendre vos besoins.
              </Typography>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="gradient"
                  size="large"
                  href="https://cal.com/eric-zuber-nxxypt/30min"
                  target="_blank"
                >
                  Réserver 30min
                </Button>
                <Button variant="outline" size="large" href="tel:+33678764559">
                  Appeler directement
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
