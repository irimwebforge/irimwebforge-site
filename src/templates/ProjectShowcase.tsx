'use client';

import { useState, useEffect } from 'react';
import { Typography } from '../components/atoms/Typography';
import { Button } from '../components/atoms/Button';
import { ProjectPreview } from '../components/molecules/ProjectPreview';
import { Container } from '../components/atoms/Container';
import { Tabs } from '../components/molecules/Tabs';
import Link from 'next/link';

// Types pour les projets
export type Project = {
  id: string;
  title: string;
  slug: string;
  imageUrl: string;
  thumbnailSrc?: string;
  tags: Array<{
    id: string;
    label: string;
    color?: 'primary' | 'secondary' | 'tertiary';
  }>;
  description?: string;
  clientName?: string;
  year: string;
  featured?: boolean;
};

// Types pour les propriétés du composant
export interface ProjectShowcaseProps {
  title: string;
  subtitle?: string;
  description?: string;
  projects: Project[];
  categories?: string[];
  showFilters?: boolean;
  maxProjects?: number;
  showMoreButton?: boolean;
  moreButtonText?: string;
  moreButtonLink?: string;
  className?: string;
}

/**
 * Template de présentation des projets avec options de filtrage et différentes dispositions
 */
export const ProjectShowcase = ({
  title,
  subtitle,
  description,
  projects,
  categories = [],
  showFilters = true,
  maxProjects = 6,
  showMoreButton = true,
  moreButtonText = 'Voir plus de projets',
  moreButtonLink = '/projets',
  className = '',
}: ProjectShowcaseProps) => {
  // Extraire toutes les catégories uniques des tags de projets si aucune n'est fournie
  const projectCategories =
    categories.length > 0
      ? categories
      : [...new Set(projects.flatMap((project) => project.tags.map((tag) => tag.label)))];

  // État pour la catégorie sélectionnée
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  // État pour suivre l'onglet par défaut
  const [defaultTabId, setDefaultTabId] = useState<string>('all');

  // Filtrer les projets en fonction de la catégorie sélectionnée
  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.tags.some((tag) => tag.label === selectedCategory))
    : projects;

  // Limiter le nombre de projets affichés
  const displayedProjects = filteredProjects.slice(0, maxProjects);

  // Fonction pour générer les onglets à partir des catégories
  const generateTabs = () => {
    return [
      {
        id: 'all',
        label: 'Tous',
        content: null,
      },
      ...projectCategories.map((category) => ({
        id: category,
        label: category,
        content: null,
      })),
    ];
  };

  // Gérer le changement d'onglet
  const handleTabChange = (tabId: string) => {
    setSelectedCategory(tabId === 'all' ? null : tabId);
    setDefaultTabId(tabId);
  };

  // Mettre à jour defaultTabId quand selectedCategory change
  useEffect(() => {
    setDefaultTabId(selectedCategory || 'all');
  }, [selectedCategory]);

  return (
    <section className={`py-16 ${className}`}>
      <Container>
        {/* En-tête de la section */}
        <div className="text-center mb-12">
          <Typography as="h2" variant="h2" className="mb-3 font-bold italic">
            {title}
          </Typography>

          {subtitle && (
            <Typography as="h3" variant="h3" className="mb-4">
              {subtitle}
            </Typography>
          )}

          {description && (
            <Typography variant="lead" className="max-w-3xl mx-auto">
              {description}
            </Typography>
          )}
        </div>

        {/* Filtres */}
        {showFilters && projectCategories.length > 0 && (
          <div className="mb-8">
            <Tabs
              tabs={generateTabs()}
              variant="pills"
              alignment="center"
              size="medium"
              onChange={handleTabChange}
              defaultTab={defaultTabId}
            />
          </div>
        )}

        {/* Grille de projets */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 min-h-[600px]`}>
          {displayedProjects.map((project) => (
            <ProjectPreview
              key={project.id}
              id={project.id}
              title={project.title}
              slug={project.slug}
              imageSrc={project.imageUrl}
              tags={project.tags}
              description={project.description}
              clientName={project.clientName}
              year={project.year}
              variant={project.featured ? 'featured' : 'default'}
            />
          ))}
        </div>

        {/* Bouton "Voir plus" */}
        {showMoreButton && filteredProjects.length > maxProjects && (
          <div className="text-center">
            <Link href={moreButtonLink}>
              <Button variant="secondary">{moreButtonText}</Button>
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProjectShowcase;
