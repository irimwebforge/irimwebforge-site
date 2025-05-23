import { Service, ServiceId } from './types';

// Fonction pour charger un service dynamiquement
export const getServiceById = async (id: ServiceId): Promise<Service | undefined> => {
  try {
    const serviceModule = await import(`./${id}`);
    return serviceModule.default;
  } catch (error) {
    console.error(`Erreur lors du chargement du service ${id}:`, error);
    return undefined;
  }
};

// Fonction pour charger tous les services (utilisée pour les listes)
export const getAllServices = async (): Promise<Service[]> => {
  const serviceIds: ServiceId[] = ['presence', 'integree', 'evolutive'];
  const services = await Promise.all(
    serviceIds.map(async (id) => {
      const service = await getServiceById(id);
      return service;
    })
  );
  
  return services.filter((service): service is Service => service !== undefined);
};

// Fonction pour obtenir uniquement les métadonnées des services (pour les listes rapides)
export const getServicesMetadata = async () => {
  const services = await getAllServices();
  return services.map(service => ({
    id: service.id,
    title: service.title,
    shortDescription: service.shortDescription,
    icon: service.icon,
    color: service.color,
    price: service.price
  }));
};

// Fonctions utilitaires maintenues pour la compatibilité
export const getAllServiceIds = (): ServiceId[] => {
  return ['presence', 'integree', 'evolutive'];
}; 