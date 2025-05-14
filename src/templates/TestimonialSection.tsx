import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Testimonial } from '@/components/molecules/Testimonial';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';

export interface TestimonialItem {
  quote: string;
  author: string;
  company?: string;
  projectName?: string;
  projectUrl?: string;
  avatarSrc?: string;
}

export interface TestimonialSectionProps {
  title: string;
  description?: string;
  testimonials: TestimonialItem[];
  cta?: {
    text: string;
    url: string;
  };
  className?: string;
  variant?: 'carousel' | 'grid' | 'featured';
  backgroundColor?: 'light' | 'dark' | 'primary' | 'secondary';
}

export function TestimonialSection({
  title,
  description,
  testimonials,
  cta,
  className = '',
  variant = 'grid',
  backgroundColor = 'light'
}: TestimonialSectionProps) {
  // Déterminer la classe de fond en fonction de backgroundColor
  const bgClass = 
    backgroundColor === 'dark' ? 'bg-secondary text-white' : 
    backgroundColor === 'primary' ? 'bg-primary-50' :
    backgroundColor === 'secondary' ? 'bg-secondary-50' : 
    'bg-white';
  
  // Variante featured: Un témoignage principal et les autres plus petits
  if (variant === 'featured' && testimonials.length > 0) {
    const featuredTestimonial = testimonials[0];
    const otherTestimonials = testimonials.slice(1);
    
    return (
      <section className={`py-12 ${bgClass} ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Typography as="h2" variant="h2" className="mb-3">
              {title}
            </Typography>
            {description && (
              <Typography variant="lead" className="max-w-2xl mx-auto">
                {description}
              </Typography>
            )}
          </div>
          
          <div className="mb-8">
            <Testimonial
              quote={featuredTestimonial.quote}
              author={featuredTestimonial.author}
              company={featuredTestimonial.company}
              avatarSrc={featuredTestimonial.avatarSrc}
              projectName={featuredTestimonial.projectName}
              variant="featured"
            />
          </div>
          
          {otherTestimonials.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {otherTestimonials.map((testimonial, index) => (
                <Testimonial
                  key={`testimonial-${index}`}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  company={testimonial.company}
                  avatarSrc={testimonial.avatarSrc}
                  projectName={testimonial.projectName}
                />
              ))}
            </div>
          )}
          
          {cta && (
            <div className="mt-10 text-center">
              <Button 
                variant="primary" 
                href={cta.url}
                icon={<Icon name="ArrowRight" />}
                iconPosition="right"
              >
                {cta.text}
              </Button>
            </div>
          )}
        </div>
      </section>
    );
  }
  
  // Variante Grid: Une grille de tous les témoignages
  if (variant === 'grid') {
    return (
      <section className={`py-12 ${bgClass} ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Typography as="h2" variant="h2" className="mb-3">
              {title}
            </Typography>
            {description && (
              <Typography variant="lead" className="max-w-2xl mx-auto">
                {description}
              </Typography>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={`testimonial-${index}`}
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
                avatarSrc={testimonial.avatarSrc}
                projectName={testimonial.projectName}
                variant={index === 0 ? 'featured' : 'default'}
              />
            ))}
          </div>
          
          {cta && (
            <div className="mt-10 text-center">
              <Button 
                variant="primary" 
                href={cta.url}
                icon={<Icon name="ArrowRight" />}
                iconPosition="right"
              >
                {cta.text}
              </Button>
            </div>
          )}
        </div>
      </section>
    );
  }
  
  // Variante Carousel: par défaut, affichage simple
  return (
    <section className={`py-12 ${bgClass} ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Typography as="h2" variant="h2" className="mb-3">
            {title}
          </Typography>
          {description && (
            <Typography variant="lead" className="max-w-2xl mx-auto">
              {description}
            </Typography>
          )}
        </div>
        
        <div className="max-w-4xl mx-auto">
          {testimonials.length > 0 && (
            <Testimonial
              quote={testimonials[0].quote}
              author={testimonials[0].author}
              company={testimonials[0].company}
              avatarSrc={testimonials[0].avatarSrc}
              projectName={testimonials[0].projectName}
              variant="featured"
            />
          )}
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={`dot-${index}`}
                className={`w-3 h-3 rounded-full ${
                  index === 0 ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Voir témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {cta && (
          <div className="mt-10 text-center">
            <Button 
              variant="primary" 
              href={cta.url}
              icon={<Icon name="ArrowRight" />}
              iconPosition="right"
            >
              {cta.text}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
} 