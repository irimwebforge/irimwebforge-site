export * from './valueAdapter';
export * from './projectAdapter';
export * from './serviceAdapter';
export * from './ctaAdapter';
export * from './testimonialAdapter';
export * from './statsAdapter';

// Types communs pour les adaptateurs
export interface BaseAdapterConfig {
  locale?: string;
  variant?: string;
}

// Type utilitaire pour les fonctions d'adaptation
export type AdapterFunction<T, U> = (data: T, config?: BaseAdapterConfig) => U; 