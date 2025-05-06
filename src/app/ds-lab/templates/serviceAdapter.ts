import { Service } from '@/components/templates/ServiceOverview';
import { mockServices } from '../mocks/data';
import { IconName } from '@/components/atoms/Icon';

// Adaptateur pour transformer les ServiceType des données mock en type Service
export const adaptServices = (): Service[] => {
  const colors: Array<'primary' | 'secondary' | 'tertiary'> = ['primary', 'secondary', 'primary'];
  
  return mockServices.map((service, index) => ({
    id: service.id,
    title: service.title,
    description: service.description,
    icon: service.icon as IconName, // Utilise le nom de l'icône comme IconName
    bulletPoints: service.features, // Transforme les features en bulletPoints
    ctaText: service.callToAction.label,
    slug: service.id, // Utilise l'ID comme slug par défaut
    color: colors[index % colors.length], // Alterne les couleurs entre primary, secondary et primary
    featured: index === 1 // Met en avant le service du milieu
  }));
};

// Exporte les services adaptés pour utilisation directe
export const adaptedServices = adaptServices(); 