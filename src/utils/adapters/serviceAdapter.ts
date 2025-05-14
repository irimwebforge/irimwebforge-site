import { Service } from '@/templates/ServiceOverview';
import { IconName } from '@/components/atoms/Icon';

type MockService = {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  callToAction: {
    label: string;
    href: string;
  };
};

export const adaptService = (service: MockService, index: number): Service => {
  const colors: Array<'primary' | 'secondary' | 'tertiary'> = ['primary', 'secondary', 'primary'];
  
  return {
    id: service.id,
    title: service.title,
    description: service.description,
    icon: service.icon as IconName,
    bulletPoints: service.features,
    ctaText: service.callToAction.label,
    slug: service.id,
    color: colors[index % colors.length],
    featured: index === 1
  };
};

export const adaptServices = (mockServices: MockService[]): Service[] => {
  return mockServices.map((service, index) => adaptService(service, index));
}; 