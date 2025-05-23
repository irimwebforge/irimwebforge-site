import { IconName } from '@/components/atoms/Icon';
import type { BeforeAfterItem } from '@/components/molecules/BeforeAfterCard';
import { ColorVariant } from '@/types/common';

export type ServiceId = 'presence' | 'integree' | 'evolutive';

export interface ProcessStep {
  title: string;
  description: string;
  icon: IconName;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: IconName;
}

export interface ServiceTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: ServiceId;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: IconName;
  color: ColorVariant;
  price: string;
  support: string;
  
  // Pour qui ?
  targetAudience: {
    description: string;
    points: Array<{
      text: string;
      icon: IconName;
    }>;
  };
  
  // Résultats attendus
  transformations: BeforeAfterItem[];
  
  // Ce que ça inclut
  features: ServiceFeature[];
  
  // Comment ça se passe
  processSteps: ProcessStep[];
  
  // Témoignage
  testimonial: ServiceTestimonial;
  
  cta: string;
  seoDescription: string;
  seoKeywords: string[];
} 