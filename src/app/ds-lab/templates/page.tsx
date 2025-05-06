"use client";

import React, { useState } from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import Link from 'next/link';
import { Icon } from '@/components/atoms/Icon';

// Import des templates
import { ProjectShowcase } from '@/components/templates/ProjectShowcase';
import { ServiceOverview } from '@/components/templates/ServiceOverview';
import { CTASection } from '@/components/templates/CTASection';
import { ValueProposition } from '@/components/templates/ValueProposition';

// Import des données mock
import { 
  mockStats, 
  mockTestimonials,
  mockCTAVariants
} from '../mocks/data';

// Import des adaptateurs
import { adaptedProjects } from './projectAdapter';
import { adaptAction, newsletterProps } from './ctaAdapter';
import { adaptedServices } from './serviceAdapter';
import { adaptedValues } from './valueAdapter';

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
            projects={adaptedProjects}
            showFilters={true}
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
            services={adaptedServices}
            variant="grid"
            showCtaButton={true}
            ctaButtonText="Découvrir tous nos services"
            ctaButtonLink="#"
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
              primaryAction={adaptAction(mockCTAVariants.simple.primaryAction, true)}
              secondaryAction={adaptAction(mockCTAVariants.simple.secondaryAction)}
              variant="default"
              borderLeft="var(--color-tertiary)"
            />
          </div>
          
          <div>
            <Typography variant="h3" className="mb-4">Variante avec image</Typography>
            <CTASection
              title={mockCTAVariants.withImage.title}
              description={mockCTAVariants.withImage.description}
              primaryAction={adaptAction(mockCTAVariants.withImage.primaryAction, true)}
              secondaryAction={adaptAction(mockCTAVariants.withImage.secondaryAction)}
              imageSrc={mockCTAVariants.withImage.imageUrl}
              variant="split"
            />
          </div>
          
          <div>
            <Typography variant="h3" className="mb-4">Variante card</Typography>
            <CTASection 
              title="Lancez votre projet avec nous"
              description="Un accompagnement personnalisé du brief à la mise en ligne."
              primaryAction={{
                text: "Demander un devis",
                url: "#contact",
                variant: "gradient"
              }}
              secondaryAction={{
                text: "Nos réalisations",
                url: "#projets",
                variant: "secondary"
              }}
              variant="card"
              backgroundColor="light"
              borderColor="var(--color-tertiary)"
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
            values={adaptedValues}
            stats={mockStats.map(stat => ({
              title: stat.label,
              value: stat.value,
              subtitle: stat.description
            }))}
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
        <Typography as="h1" variant="h1" className="mb-3 font-bold italic">
          Bibliothèque de Templates
        </Typography>
        <Typography variant="lead" className="max-w-3xl mx-auto" withAccentedWords>
          Découvrez les différents templates disponibles pour construire rapidement des pages complètes avec un design sur-mesure et professionnel.
        </Typography>
      </div>

      <div className="mb-6 p-4 border-l-4 border-l-[var(--color-tertiary)] bg-amber-50/30 rounded-md max-w-3xl mx-auto">
        <Typography variant="p" className="font-medium mb-2">Principes du design system appliqués aux templates</Typography>
        <ul className="ml-5 list-disc text-sm space-y-1">
          <li>Titres h1/h2 en italique gras pour une hiérarchie visuelle claire</li>
          <li>Effet brillance (shine-effect) exclusivement pour les CTA principaux</li>
          <li>Utilisation de la variante gradient pour les boutons d&apos;action principaux</li>
          <li>Couleur tertiaire (orange) utilisée avec parcimonie pour les accents visuels</li>
        </ul>
      </div>

      {/* Navigation par onglets */}
      <div className="mb-10">
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map(tab => (
            <Button 
              key={tab.id}
              variant={activeTemplate === tab.id ? "gradient" : "secondary"}
              size="md"
              onClick={() => setActiveTemplate(tab.id)}
              className={activeTemplate === tab.id ? "shine-effect" : ""}
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
        <Link href="/ds-lab" className="text-primary hover:underline inline-flex items-center gap-2">
          <Icon name="ArrowLeft" size={16} />
          Retour au DS Lab
        </Link>
        <Link href="/ds-lab/color-tertiary" className="text-primary hover:underline border-b-2 border-[var(--color-tertiary)] inline-flex items-center gap-2 ml-6">
          <Icon name="Palette" size={16} />
          Voir l&apos;utilisation de la couleur tertiaire
        </Link>
      </div>
    </div>
  );
} 