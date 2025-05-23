import React from 'react';
import { Typography } from '../components/atoms/Typography';
import { Testimonial } from '../components/molecules/Testimonial';
import { Button } from '../components/atoms/Button';
import { Icon } from '../components/atoms/Icon';

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
  backgroundColor = 'light',
}: TestimonialSectionProps) {
  // Déterminer la classe de fond en fonction de backgroundColor
  const bgClass =
    backgroundColor === 'dark'
      ? 'surface-secondary text-[var(--foreground)]'
      : backgroundColor === 'primary'
        ? 'bg-[var(--color-primary)]/10'
        : backgroundColor === 'secondary'
          ? 'bg-[var(--color-secondary)]/10'
          : 'bg-section-primary';

  // Variante featured: Un témoignage principal et les autres plus petits
  if (variant === 'featured' && testimonials.length > 0) {
    const featuredTestimonial = testimonials[0];
    const otherTestimonials = testimonials.slice(1);

    return (
      <section className={`py-12 ${bgClass} ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Typography as="h2" variant="h2" className="mb-3">
              {title}
            </Typography>
            {description && (
              <Typography variant="lead" className="max-w-2xl mx-auto">
                {description}
              </Typography>
            )}
          </div>

          <div className="mb-8 animate-fade-in" style={{ animationDelay: '150ms' }}>
            <div className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Testimonial
                quote={featuredTestimonial.quote}
                author={featuredTestimonial.author}
                company={featuredTestimonial.company}
                avatarSrc={featuredTestimonial.avatarSrc}
                projectName={featuredTestimonial.projectName}
                variant="featured"
              />
            </div>
          </div>

          {otherTestimonials.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {otherTestimonials.map((testimonial, index) => (
                <div
                  key={`testimonial-${index}`}
                  className="animate-fade-in transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  style={{ animationDelay: `${300 + index * 150}ms` }}
                >
                  <Testimonial
                    quote={testimonial.quote}
                    author={testimonial.author}
                    company={testimonial.company}
                    avatarSrc={testimonial.avatarSrc}
                    projectName={testimonial.projectName}
                  />
                </div>
              ))}
            </div>
          )}

          {cta && (
            <div className="mt-10 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
              <Button
                variant="primary"
                href={cta.url}
                icon={<Icon name="ArrowRight" />}
                iconPosition="right"
                className="transition-transform duration-150 hover:scale-105"
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
          <div className="text-center mb-12 animate-fade-in">
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
              <div
                key={`testimonial-${index}`}
                className="animate-fade-in transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                style={{ animationDelay: `${150 + index * 150}ms` }}
              >
                <Testimonial
                  quote={testimonial.quote}
                  author={testimonial.author}
                  company={testimonial.company}
                  avatarSrc={testimonial.avatarSrc}
                  projectName={testimonial.projectName}
                  variant={index === 0 ? 'featured' : 'default'}
                />
              </div>
            ))}
          </div>

          {cta && (
            <div className="mt-10 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
              <Button
                variant="primary"
                href={cta.url}
                icon={<Icon name="ArrowRight" />}
                iconPosition="right"
                className="transition-transform duration-150 hover:scale-105"
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
        <div className="text-center mb-12 animate-fade-in">
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
            <div
              className="animate-fade-in transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: '150ms' }}
            >
              <Testimonial
                quote={testimonials[0].quote}
                author={testimonials[0].author}
                company={testimonials[0].company}
                avatarSrc={testimonials[0].avatarSrc}
                projectName={testimonials[0].projectName}
                variant="featured"
              />
            </div>
          )}

          <div
            className="flex justify-center mt-6 gap-2 animate-fade-in"
            style={{ animationDelay: '300ms' }}
          >
            {testimonials.map((_, index) => (
              <button
                key={`dot-${index}`}
                className={`w-3 h-3 rounded-full transition-all duration-150 ${index === 0 ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-border)]'} hover:scale-125`}
                aria-label={`Voir témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {cta && (
          <div className="mt-10 text-center animate-fade-in" style={{ animationDelay: '450ms' }}>
            <Button
              variant="primary"
              href={cta.url}
              icon={<Icon name="ArrowRight" />}
              iconPosition="right"
              className="transition-transform duration-150 hover:scale-105"
            >
              {cta.text}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
