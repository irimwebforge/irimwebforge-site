'use client';

import React, { useState } from 'react';
import { ContactForm, ContactFormData } from '../molecules/ContactForm';
import { Typography } from '../atoms/Typography';
import { Card } from '../molecules/Card';
import { Divider } from '../atoms/Divider';
import { Badge } from '../atoms/Badge';
import { ServiceHighlight } from '../molecules/ServiceHighlight';
import Image from 'next/image';

export interface EnhancedContactFormProps {
  className?: string;
  title?: string;
  subtitle?: string;
  services?: {
    icon: string;
    title: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    company?: string;
    avatar?: string;
  };
  showTestimonial?: boolean;
  imagePosition?: 'left' | 'right';
  showImage?: boolean;
  imageUrl?: string;
  accentColor?: 'primary' | 'secondary' | 'tertiary';
  style?: 'card' | 'simple' | 'full-width';
  onSubmit?: (data: ContactFormData) => Promise<void>;
}

export const EnhancedContactForm: React.FC<EnhancedContactFormProps> = ({
  className = '',
  title = 'Discutons de votre projet',
  subtitle = 'Complétez le formulaire ci-dessous pour me parler de votre projet. Je vous répondrai dans les 24 heures.',
  services = [],
  testimonial,
  showTestimonial = true,
  imagePosition = 'right',
  showImage = true,
  imageUrl = '/images/contact-illustration.svg',
  accentColor = 'primary',
  style = 'card',
  onSubmit,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const defaultServices = [
    {
      icon: '/icons/website.svg',
      title: 'Site web sur mesure',
      description: 'Des sites web personnalisés et performants.',
    },
    {
      icon: '/icons/admin.svg',
      title: "Interfaces d'administration",
      description: 'Des tableaux de bord efficaces pour gérer vos données.',
    },
    {
      icon: '/icons/support.svg',
      title: 'Support réactif',
      description: 'Une assistance continue pour tous vos besoins.',
    },
  ];

  const servicesToDisplay = services.length > 0 ? services : defaultServices;

  const defaultTestimonial = {
    quote:
      "IrimWebForge a transformé notre vision en une interface utilisateur exceptionnelle. Leur équipe a été à l'écoute et proactive tout au long du projet.",
    author: 'Marie Dumas',
    company: 'DirecteurTech',
    avatar: '/images/testimonials/avatar-1.jpg',
  };

  const testimonialToShow = testimonial || defaultTestimonial;

  const handleSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        // Simuler un délai de traitement
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log('Form submitted:', data);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Rendu du contenu selon le style choisi
  const renderContent = () => {
    const formSection = (
      <div className="flex-1">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Typography variant="h2" className="text-2xl font-bold italic">
              {title}
            </Typography>
            <Badge variant={accentColor} size="small">
              Nouveau projet
            </Badge>
          </div>
          <Typography variant="p" className="text-secondary">
            {subtitle}
          </Typography>
        </div>

        <ContactForm onSubmit={handleSubmit} loading={isLoading} className="mt-4" />
      </div>
    );

    const imageSection = showImage ? (
      <div className="relative hidden lg:block flex-1 h-auto">
        <Image
          src={imageUrl}
          alt="Contactez-moi"
          width={500}
          height={500}
          className="object-contain w-full"
          style={{
            height: 'auto',
            width: 'auto',
          }}
        />
      </div>
    ) : null;

    const testimonialsSection = showTestimonial ? (
      <div className="mt-6 p-4 border rounded-lg bg-[var(--color-primary)] bg-opacity-5 border-[var(--color-primary)] border-opacity-20">
        <div className="flex items-start">
          {testimonialToShow.avatar && (
            <div className="flex-shrink-0 mr-4">
              <Image
                src={testimonialToShow.avatar}
                alt={testimonialToShow.author}
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
          )}
          <div>
            <Typography variant="p" className="italic text-secondary mb-2">
              "{testimonialToShow.quote}"
            </Typography>
            <Typography variant="small" className="font-semibold">
              {testimonialToShow.author}
              {testimonialToShow.company && (
                <span className="text-secondary font-normal"> — {testimonialToShow.company}</span>
              )}
            </Typography>
          </div>
        </div>
      </div>
    ) : null;

    const servicesSection =
      servicesToDisplay.length > 0 ? (
        <div className="mt-8">
          <Divider label="Nos services" color={accentColor} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {servicesToDisplay.map((service, index) => (
              <ServiceHighlight
                key={index}
                icon={<Image src={service.icon} alt={service.title} width={24} height={24} />}
                title={service.title}
                description={service.description}
                color={accentColor}
                variant="default"
              />
            ))}
          </div>
        </div>
      ) : null;

    return (
      <>
        <div
          className={`flex flex-col ${imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8`}
        >
          {formSection}
          {imageSection}
        </div>

        {testimonialsSection}
        {servicesSection}
      </>
    );
  };

  // Wrapper selon le style choisi
  if (style === 'card') {
    return (
      <Card
        variant="accent"
        accentPosition="top"
        color={accentColor}
        className={`p-6 ${className}`}
        hover={false}
      >
        {renderContent()}
      </Card>
    );
  } else if (style === 'full-width') {
    return (
      <div className={`py-12 px-6 bg-[var(--color-${accentColor})] bg-opacity-5 ${className}`}>
        <div className="container mx-auto">{renderContent()}</div>
      </div>
    );
  } else {
    // Style simple
    return <div className={className}>{renderContent()}</div>;
  }
};
