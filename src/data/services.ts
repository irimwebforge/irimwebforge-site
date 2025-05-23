// Réexports pour compatibilité avec l'ancien système
export * from './services/types';
export {
  getServiceById,
  getAllServices,
  getServicesMetadata,
  getAllServiceIds,
} from './services/index';

// Export de l'ancien système synchrone pour la compatibilité (deprecated)
import presence from './services/presence';
import integree from './services/integree';
import evolutive from './services/evolutive';

export const services = [presence, integree, evolutive];

// Fonction synchrone pour compatibilité (deprecated - utiliser getServiceById à la place)
export const getServiceByIdSync = (id: string) => {
  return services.find((service) => service.id === id);
};
