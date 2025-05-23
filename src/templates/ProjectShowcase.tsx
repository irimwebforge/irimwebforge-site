'use client';

import { useState, useEffect, useMemo } from 'react';
import { Typography } from '../components/atoms/Typography';
import { Button } from '../components/atoms/Button';
import { ProjectPreview } from '../components/molecules/ProjectPreview';
import { Container } from '../components/atoms/Container';
import { cn } from '../lib/utils';

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
    color?:
      | 'primary'
      | 'secondary'
      | 'tertiary'
      | 'info'
      | 'success'
      | 'warning'
      | 'default'
      | 'error';
  }>;
  description?: string;
  clientName?: string;
  year: string;
  featured?: boolean;
  onlineUrl?: string;
};

// Types pour les propriétés du composant
export interface ProjectShowcaseProps {
  title: string;
  subtitle?: string;
  description?: string;
  projects: Project[];
  _categories?: string[];
  showFilters?: boolean;
  _maxProjects?: number;
  _showMoreButton?: boolean;
  _moreButtonText?: string;
  _moreButtonLink?: string;
  className?: string;
  variant?: 'default' | 'compact';
  filterStyle?: 'full' | 'simple';
  onProjectClick?: (project: Project) => void;
}

/**
 * Template de présentation des projets avec options de filtrage et différentes dispositions
 */
export const ProjectShowcase = ({
  title,
  subtitle,
  description,
  projects,
  _categories = [],
  showFilters = true,
  _maxProjects = 6,
  _showMoreButton = true,
  _moreButtonText = 'Voir plus de projets',
  _moreButtonLink = '/projets',
  className = '',
  variant = 'default',
  filterStyle = 'full',
  onProjectClick,
}: ProjectShowcaseProps) => {
  // Extraire les catégories de tags uniques et les organiser par type
  const tagCategories = useMemo(() => {
    const allTags = [
      ...new Set(
        projects.flatMap((project) => (project.tags ?? []).filter(Boolean).map((tag) => tag.label))
      ),
    ];

    // Regrouper les tags par catégories logiques (solution, clientèle, statut)
    const solutionTags = allTags.filter((tag) =>
      [
        'Site + Interface Admin',
        'Application Mobile',
        'Site Vitrine',
        'Prototype/Concept',
      ].includes(tag)
    );

    // Récupère tous les labels de la source projectTags.clientele
    const clienteleLabels = [
      'Thérapeutes',
      'Artisans & Commerçants',
      'Créatifs & Artistes',
      'Projet Personnel',
      'Associations',
    ];
    const clienteleTags = allTags.filter((tag) => clienteleLabels.includes(tag));

    const statutTags = allTags.filter((tag) =>
      ['Réalisé', 'En Développement', 'Concept', 'Formation'].includes(tag)
    );

    return {
      solution: solutionTags,
      clientele: clienteleTags,
      statut: statutTags,
      autres: allTags.filter(
        (tag) => ![...solutionTags, ...clienteleTags, ...statutTags].includes(tag)
      ),
    };
  }, [projects]);

  // Remplacer l'état selectedCategory par un tableau pour la multi-sélection
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Nouvelle fonction de gestion de sélection/désélection
  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  // Filtrer les projets selon les catégories sélectionnées (ET logique)
  const filteredProjects =
    selectedCategories.length > 0
      ? projects.filter((project) =>
          selectedCategories.every((cat) => project.tags.some((tag) => tag.label === cat))
        )
      : projects;

  // Pagination par flèches
  const projectsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Projets à afficher selon la page
  const paginatedProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    currentPage * projectsPerPage + projectsPerPage
  );

  // Remise à zéro de la page si le filtre change
  useEffect(() => {
    setCurrentPage(0);
  }, [selectedCategories]);

  return (
    <section className={`py-${variant === 'compact' ? '8' : '16'} ${className}`}>
      <Container>
        {/* En-tête de la section */}
        <div className={`text-center ${variant === 'compact' ? 'mb-6' : 'mb-12'}`}>
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

        {/* Filtres adaptés au style demandé */}
        {showFilters && (
          <div className="mb-6">
            <div className="flex flex-col gap-2 max-w-5xl mx-auto">
              {/* Bouton Tous */}
              <div className="flex justify-center mb-2">
                <button
                  onClick={() => setSelectedCategories([])}
                  className={`px-4 py-2 text-sm rounded-full border transition-all font-medium ${
                    selectedCategories.length === 0
                      ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow'
                      : 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)] hover:bg-[var(--color-primary)]/20'
                  }`}
                >
                  Tous les projets
                </button>
              </div>

              {/* Solutions - ligne avec catégorie + filtres */}
              {tagCategories.solution.length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2">
                    Type de solution:
                  </span>
                  {tagCategories.solution.map((tag) => (
                    <button
                      key={`solution-${tag}`}
                      onClick={() => handleCategoryToggle(tag)}
                      className={`px-3 py-1 text-sm rounded-full border transition-all font-medium ${
                        selectedCategories.includes(tag)
                          ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow'
                          : 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)] hover:bg-[var(--color-primary)]/20'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              )}

              {/* Clientèle - ligne avec catégorie + filtres */}
              {tagCategories.clientele.length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2">
                    Clientèle:
                  </span>
                  {tagCategories.clientele.map((tag) => (
                    <button
                      key={`clientele-${tag}`}
                      onClick={() => handleCategoryToggle(tag)}
                      className={`px-3 py-1 text-sm rounded-full border transition-all font-medium ${
                        selectedCategories.includes(tag)
                          ? 'bg-[var(--color-secondary)] text-white border-[var(--color-secondary)] shadow'
                          : 'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] border-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/20'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              )}

              {/* Statut - ligne avec catégorie + filtres */}
              {tagCategories.statut.length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2">
                    Statut:
                  </span>
                  {tagCategories.statut.map((tag) => (
                    <button
                      key={`statut-${tag}`}
                      onClick={() => handleCategoryToggle(tag)}
                      className={`px-3 py-1 text-sm rounded-full border transition-all font-medium ${
                        selectedCategories.includes(tag)
                          ? 'bg-[var(--color-tertiary)] text-white border-[var(--color-tertiary)] shadow'
                          : 'bg-[var(--color-tertiary)]/10 text-[var(--color-tertiary)] border-[var(--color-tertiary)] hover:bg-[var(--color-tertiary)]/20'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Message si aucun projet ne correspond au filtre */}
        {filteredProjects.length === 0 && (
          <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg mb-8">
            <Typography variant="h3" className="mb-2">
              Aucun projet ne correspond à ce filtre
            </Typography>
            <Typography variant="p" className="mb-4">
              Essayez un autre filtre ou réinitialisez pour voir tous les projets.
            </Typography>
            <Button onClick={() => setSelectedCategories([])} variant="secondary">
              Afficher tous les projets
            </Button>
          </div>
        )}

        {/* Grille de projets paginée */}
        {filteredProjects.length > 0 && (
          <div className={cn('grid gap-8 mb-8', 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3')}>
            {paginatedProjects.map((project) => (
              <ProjectPreview
                key={project.id}
                project={project}
                variant={variant}
                onClick={() => onProjectClick?.(project)}
              />
            ))}
          </div>
        )}

        {/* Pagination par flèches */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="px-3 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition disabled:opacity-50"
              aria-label="Page précédente"
            >
              &#8592;
            </button>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Page {currentPage + 1} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              className="px-3 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition disabled:opacity-50"
              aria-label="Page suivante"
            >
              &#8594;
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProjectShowcase;
