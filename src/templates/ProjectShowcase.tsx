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
    color?: 'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'default' | 'error';
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
        projects.flatMap(project =>
          (project.tags ?? []).filter(Boolean).map(tag => tag.label)
        )
      ),
    ];
    
    // Regrouper les tags par catégories logiques (solution, clientèle, statut)
    const solutionTags = allTags.filter(tag => 
      ['Site + Interface Admin', 'Application Mobile', 'Site Vitrine', 'Prototype/Concept'].includes(tag)
    );
    
    // Récupère tous les labels de la source projectTags.clientele
    const clienteleLabels = [
      'Thérapeutes',
      'Artisans & Commerçants',
      'Créatifs & Artistes',
      'Projet Personnel',
      'Associations',
    ];
    const clienteleTags = allTags.filter(tag => clienteleLabels.includes(tag));
    
    const statutTags = allTags.filter(tag => 
      ['Réalisé', 'En Développement', 'Concept', 'Formation'].includes(tag)
    );
    
    return {
      solution: solutionTags,
      clientele: clienteleTags, 
      statut: statutTags,
      autres: allTags.filter(tag => 
        ![...solutionTags, ...clienteleTags, ...statutTags].includes(tag)
      )
    };
  }, [projects]);
  
  // État pour la catégorie sélectionnée
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  // État pour suivre l'onglet par défaut
  const [_defaultTabId, setDefaultTabId] = useState<string>('all');

  // Filtrer les projets en fonction de la catégorie sélectionnée
  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.tags.some((tag) => tag.label === selectedCategory))
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
  }, [selectedCategory]);

  // Gérer le changement d'onglet
  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    setDefaultTabId(category || 'all');
  };

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
          <>
            {filterStyle === 'simple' ? (
              // Version simplifiée des filtres pour un impact visuel réduit
              <div className="mb-6">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <button
                    onClick={() => handleCategorySelect(null)}
                    className={`px-3 py-1 text-sm rounded-full transition-all ${
                      selectedCategory === null
                        ? 'bg-[var(--color-primary)] text-white'
                        : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    Tous
                  </button>
                  
                  {/* Filtre Type Solution - version compacte */}
                  {tagCategories.solution.map((tag) => (
                    <button
                      key={`solution-${tag}`}
                      onClick={() => handleCategorySelect(tag)}
                      className={`px-3 py-1 text-sm rounded-full transition-all ${
                        selectedCategory === tag
                          ? 'bg-[var(--color-primary)] text-white'
                          : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                  
                  {/* Filtre Clientèle - version compacte */}
                  {tagCategories.clientele.map((tag) => (
                    <button
                      key={`client-${tag}`}
                      onClick={() => handleCategorySelect(tag)}
                      className={`px-3 py-1 text-sm rounded-full transition-all ${
                        selectedCategory === tag
                          ? 'bg-[var(--color-secondary)] text-white'
                          : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                  
                  {/* Filtre Statut - version compacte */}
                  {tagCategories.statut.map((tag) => (
                    <button
                      key={`statut-${tag}`}
                      onClick={() => handleCategorySelect(tag)}
                      className={`px-3 py-1 text-sm rounded-full transition-all ${
                        selectedCategory === tag
                          ? 'bg-[var(--color-tertiary)] text-white'
                          : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              // Version complète des filtres (code existant)
              <div className="mb-10">
                {/* Tous les projets + réinitialiser filtre */}
                <div className="flex justify-center mb-4">
                  <button
                    onClick={() => handleCategorySelect(null)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      selectedCategory === null
                        ? 'bg-[var(--color-primary)] text-white font-medium'
                        : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    Tous les projets
                  </button>
                </div>
                
                {/* Filtres par catégories */}
                <div className="space-y-5">
                  {/* Filtres par type de solution */}
                  {tagCategories.solution.length > 0 && (
                    <div className="filter-group">
                      <Typography variant="h4" className="mb-2 text-center text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Type de solution
                      </Typography>
                      <div className="flex flex-wrap justify-center gap-2">
                        {tagCategories.solution.map((tag) => (
                          <button
                            key={tag}
                            onClick={() => handleCategorySelect(tag)}
                            className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                              selectedCategory === tag
                                ? 'bg-[var(--color-primary)] text-white font-medium shadow-md'
                                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Filtres par clientèle */}
                  {tagCategories.clientele.length > 0 && (
                    <div className="filter-group">
                      <Typography variant="h4" className="mb-2 text-center text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Clientèle
                      </Typography>
                      <div className="flex flex-wrap justify-center gap-2">
                        {tagCategories.clientele.map((tag) => (
                          <button
                            key={tag}
                            onClick={() => handleCategorySelect(tag)}
                            className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                              selectedCategory === tag
                                ? 'bg-[var(--color-secondary)] text-white font-medium shadow-md'
                                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Filtres par statut */}
                  {tagCategories.statut.length > 0 && (
                    <div className="filter-group">
                      <Typography variant="h4" className="mb-2 text-center text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Statut
                      </Typography>
                      <div className="flex flex-wrap justify-center gap-2">
                        {tagCategories.statut.map((tag) => (
                          <button
                            key={tag}
                            onClick={() => handleCategorySelect(tag)}
                            className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                              selectedCategory === tag
                                ? 'bg-[var(--color-tertiary)] text-white font-medium shadow-md'
                                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Autres filtres si existants */}
                  {tagCategories.autres.length > 0 && (
                    <div className="filter-group">
                      <Typography variant="h4" className="mb-2 text-center text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Autres catégories
                      </Typography>
                      <div className="flex flex-wrap justify-center gap-2">
                        {tagCategories.autres.map((tag) => (
                          <button
                            key={tag}
                            onClick={() => handleCategorySelect(tag)}
                            className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                              selectedCategory === tag
                                ? 'bg-gray-700 dark:bg-gray-600 text-white font-medium shadow-md'
                                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
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
            <Button onClick={() => handleCategorySelect(null)} variant="secondary">
              Afficher tous les projets
            </Button>
          </div>
        )}

        {/* Grille de projets paginée */}
        {filteredProjects.length > 0 && (
          <div className={cn(
            'grid gap-8 mb-8',
            variant === 'compact' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 md:grid-cols-2'
          )}>
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
