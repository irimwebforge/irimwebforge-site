import { Project } from '@/components/templates/ProjectShowcase';
import { mockProjects } from '../mocks/data';

// Transforme les ProjectType des données mock en type Project
export const adaptProjects = (): Project[] => {
  return mockProjects.map(project => ({
    id: project.id,
    title: project.title,
    slug: project.id, // Utilise l'ID comme slug par défaut
    imageUrl: project.imageUrl,
    tags: project.tags,
    description: project.description,
    year: new Date().getFullYear().toString(), // Ajoute l'année actuelle
    featured: project.featured
  }));
};

// Exporte les projets adaptés pour utilisation directe
export const adaptedProjects = adaptProjects(); 