import { Project } from '@/templates/ProjectShowcase';

type MockProject = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: Array<{
    id: string;
    label: string;
  }>;
  url: string;
  featured: boolean;
};

export const adaptProject = (mockProject: MockProject): Project => {
  return {
    id: mockProject.id,
    title: mockProject.title,
    slug: mockProject.url.replace(/^#/, ''),
    imageUrl: mockProject.imageUrl,
    description: mockProject.description,
    tags: mockProject.tags.map(tag => ({
      ...tag,
      color: 'primary' as const
    })),
    year: new Date().getFullYear().toString(),
    featured: mockProject.featured
  };
};

export const adaptProjects = (mockProjects: MockProject[]): Project[] => {
  return mockProjects.map(adaptProject);
}; 