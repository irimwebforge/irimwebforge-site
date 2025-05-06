"use client";

import React, { useState } from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Tabs } from '@/components/molecules/Tabs';
import { Button } from '@/components/atoms/Button';
import Link from 'next/link';

// Import des templates
import { ProjectShowcase } from '@/components/templates/ProjectShowcase';
import { ServiceOverview } from '@/components/templates/ServiceOverview';
import { CTASection } from '@/components/templates/CTASection';
import { ValueProposition } from '@/components/templates/ValueProposition';

// Import des données mock
import { 
  mockProjects, 
  mockServices, 
  mockValues, 
  mockStats, 
  mockTestimonials,
  mockCTAVariants
} from '../mocks/data';

export default function TemplatesPage() {
  const [activeTemplate, setActiveTemplate] = useState('project-showcase');

  // Configuration des onglets
  const tabs = [
    {
      id: 'project-showcase',
      label: 'ProjectShowcase',
      content: (
        <div className="pt-8">
          <ProjectShowcase
            title="Nos réalisations"
            subtitle="Découvrez notre portfolio de projets"
            description="Des projets sur mesure qui reflètent parfaitement l'identité de nos clients."
            projects={mockProjects}
            showFilters={true}
            variant="grid"
          />
        </div>
      )
    },
    {
      id: 'service-overview',
      label: 'ServiceOverview',
      content: (
        <div className="pt-8">
          <ServiceOverview
            title="Nos services"
            subtitle="Des solutions adaptées à vos besoins"
            description="Nous proposons des services sur mesure pour répondre à vos besoins spécifiques."
            services={mockServices}
            layout="grid"
          />
        </div>
      )
    },
    {
      id: 'cta-section',
      label: 'CTASection',
      content: (
        <div className="pt-8 space-y-12">
          <div>
            <Typography variant="h3" className="mb-4">Variante simple</Typography>
            <CTASection
              title={mockCTAVariants.simple.title}
              description={mockCTAVariants.simple.description}
              primaryAction={mockCTAVariants.simple.primaryAction}
              secondaryAction={mockCTAVariants.simple.secondaryAction}
              variant="simple"
            />
          </div>
          
          <div>
            <Typography variant="h3" className="mb-4">Variante avec image</Typography>
            <CTASection
              title={mockCTAVariants.withImage.title}
              description={mockCTAVariants.withImage.description}
              primaryAction={mockCTAVariants.withImage.primaryAction}
              secondaryAction={mockCTAVariants.withImage.secondaryAction}
              imageUrl={mockCTAVariants.withImage.imageUrl}
              variant="withImage"
            />
          </div>
          
          <div>
            <Typography variant="h3" className="mb-4">Variante newsletter</Typography>
            <CTASection
              title={mockCTAVariants.newsletter.title}
              description={mockCTAVariants.newsletter.description}
              inputPlaceholder={mockCTAVariants.newsletter.inputPlaceholder}
              buttonLabel={mockCTAVariants.newsletter.buttonLabel}
              disclaimerText={mockCTAVariants.newsletter.disclaimerText}
              variant="newsletter"
            />
          </div>
        </div>
      )
    },
    {
      id: 'value-proposition',
      label: 'ValueProposition',
      content: (
        <div className="pt-8">
          <ValueProposition
            title="Nos valeurs"
            subtitle="Ce qui nous définit"
            description="Des principes qui guident notre approche et notre travail au quotidien."
            values={mockValues}
            stats={mockStats}
            testimonials={mockTestimonials}
            showStats={true}
            showTestimonials={true}
            valueLayout="grid"
          />
        </div>
      )
    }
  ];

  // Rendre l'onglet actif
  const renderActiveTemplate = () => {
    const activeTab = tabs.find(tab => tab.id === activeTemplate);
    return activeTab ? activeTab.content : null;
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="mb-8 text-center">
        <Typography as="h1" variant="h1" className="mb-3">
          Bibliothèque de Templates
        </Typography>
        <Typography variant="lead" className="max-w-3xl mx-auto">
          Découvrez les différents templates disponibles pour construire rapidement des pages complètes.
        </Typography>
      </div>

      {/* Navigation par onglets */}
      <div className="mb-10">
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map(tab => (
            <Button 
              key={tab.id}
              variant={activeTemplate === tab.id ? "primary" : "outline"}
              size="md"
              onClick={() => setActiveTemplate(tab.id)}
              className="min-w-[140px]"
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Affichage du template actif */}
      <div className="mb-16">
        {renderActiveTemplate()}
      </div>

      {/* Lien retour */}
      <div className="mt-16 text-center">
        <Link href="/test" className="text-primary hover:underline inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
          </svg>
          Retour à la page de test des composants
        </Link>
      </div>
    </div>
  );
} 