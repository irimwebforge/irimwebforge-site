import { TestimonialItem } from '@/templates/TestimonialSection';
import { BaseAdapterConfig } from './index';

type MockTestimonial = {
  quote: string;
  author: string;
  company?: string;
  projectName?: string;
  projectUrl?: string;
  avatarSrc?: string;
};

export interface TestimonialAdapterConfig extends BaseAdapterConfig {
  withCta?: boolean;
  ctaText?: string; 
  ctaUrl?: string;
}

export const adaptTestimonial = (testimonial: MockTestimonial): TestimonialItem => {
  return {
    quote: testimonial.quote,
    author: testimonial.author,
    company: testimonial.company,
    projectName: testimonial.projectName,
    projectUrl: testimonial.projectUrl,
    avatarSrc: testimonial.avatarSrc
  };
};

export const adaptTestimonials = (
  mockTestimonials: MockTestimonial[], 
  config?: TestimonialAdapterConfig
) => {
  const testimonials = mockTestimonials.map(adaptTestimonial);
  const result: {
    testimonials: TestimonialItem[];
    cta?: { text: string; url: string };
  } = { testimonials };
  
  // Ajouter un CTA si demandé
  if (config?.withCta && config.ctaText && config.ctaUrl) {
    result.cta = {
      text: config.ctaText,
      url: config.ctaUrl
    };
  }
  
  return result;
}; 