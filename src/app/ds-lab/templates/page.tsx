'use client';

import Link from 'next/link';
import { Typography } from '../../../components/atoms/Typography';
import { Button } from '../../../components/atoms/Button';
import { Icon } from '../../../components/atoms/Icon';
// Import des templates
import { ValueProposition } from '../../../templates/ValueProposition';
import { ProjectShowcase } from '../../../templates/ProjectShowcase';
import { ServiceOverview } from '../../../templates/ServiceOverview';
import { CTASection } from '../../../templates/CTASection';
import { TestimonialSection } from '../../../templates/TestimonialSection';
import { StatsShowcase } from '../../../templates/StatsShowcase';
// Import des données mock
import {
  mockProjects,
  mockServices,
  mockValues,
  mockStats,
  mockTestimonials,
  mockCTAVariants,
} from '../mocks/mockData.templates';
// Import des adaptateurs
import {
  adaptValues,
  adaptServices,
  adaptActions,
  adaptStats,
  adaptTestimonials,
  adaptProjects,
} from '../../../utils/adapters';

type ComponentType = {
  id: string;
  title: string;
  description: string;
  component: React.ReactNode;
};

export default function TemplatesPage() {
  // Données des templates
  const templateComponents: ComponentType[] = [
    {
      id: 'value-proposition',
      title: 'Value Proposition',
      description: "Template pour présenter les valeurs et avantages de l'entreprise",
      component: (
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-l-[var(--color-tertiary)] bg-amber-50/30 rounded-md">
            <Typography variant="p" className="font-medium mb-2">
              Caractéristiques
            </Typography>
            <ul className="ml-5 list-disc text-sm space-y-1">
              <li>Mise en avant des valeurs clés</li>
              <li>Icônes personnalisables</li>
              <li>Support des variantes de couleur</li>
            </ul>
          </div>

          <div className="border border-color rounded-lg overflow-hidden">
            <ValueProposition
              title="Nos valeurs"
              description="Ce qui nous guide au quotidien"
              values={adaptValues(mockValues)}
            />
          </div>
        </div>
      ),
    },
    {
      id: 'project-showcase',
      title: 'Project Showcase',
      description: 'Template pour présenter les projets réalisés avec filtrage',
      component: (
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-l-[var(--color-primary)] bg-blue-50/30 rounded-md">
            <Typography variant="p" className="font-medium mb-2">
              Caractéristiques
            </Typography>
            <ul className="ml-5 list-disc text-sm space-y-1">
              <li>Filtrage par catégories</li>
              <li>Support des projets mis en avant</li>
              <li>Affichage en grille responsive</li>
            </ul>
          </div>

          <div className="border border-color rounded-lg overflow-hidden">
            <ProjectShowcase
              title="Nos réalisations"
              description="Découvrez nos derniers projets"
              projects={adaptProjects(mockProjects)}
            />
          </div>
        </div>
      ),
    },
    {
      id: 'service-overview',
      title: 'Service Overview',
      description: 'Template pour présenter les services avec mise en avant',
      component: (
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-l-[var(--color-secondary)] bg-cyan-50/30 rounded-md">
            <Typography variant="p" className="font-medium mb-2">
              Caractéristiques
            </Typography>
            <ul className="ml-5 list-disc text-sm space-y-1">
              <li>Mise en avant d'un service principal</li>
              <li>Points clés par service</li>
              <li>Appels à l'action personnalisés</li>
            </ul>
          </div>

          <div className="border border-color rounded-lg overflow-hidden">
            <ServiceOverview
              title="Nos services"
              description="Des solutions adaptées à vos besoins"
              services={adaptServices(mockServices)}
            />
          </div>
        </div>
      ),
    },
    {
      id: 'cta-section',
      title: 'CTA Section',
      description: "Template pour les sections d'appel à l'action",
      component: (
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-l-[var(--color-tertiary)] bg-amber-50/30 rounded-md">
            <Typography variant="p" className="font-medium mb-2">
              Caractéristiques
            </Typography>
            <ul className="ml-5 list-disc text-sm space-y-1">
              <li>Actions primaire et secondaire</li>
              <li>Support du style gradient</li>
              <li>Variante avec newsletter</li>
            </ul>
          </div>

          <div className="border border-color rounded-lg overflow-hidden">
            <CTASection
              title="Prêt à démarrer votre projet ?"
              description="Discutons ensemble de vos besoins et objectifs"
              {...adaptActions(
                { label: 'Commencer maintenant', href: '#' },
                { label: 'En savoir plus', href: '#' }
              )}
            />
          </div>
        </div>
      ),
    },
    {
      id: 'testimonial-section',
      title: 'Testimonial Section',
      description: 'Template pour présenter les témoignages clients avec plusieurs mises en page',
      component: (
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-l-[var(--color-primary)] bg-blue-50/30 rounded-md">
            <Typography variant="p" className="font-medium mb-2">
              Caractéristiques
            </Typography>
            <ul className="ml-5 list-disc text-sm space-y-1">
              <li>Différentes variantes d'affichage (grid, featured, carousel)</li>
              <li>Mise en avant d'un témoignage principal</li>
              <li>Support pour différents arrière-plans</li>
            </ul>
          </div>

          <div className="border border-color rounded-lg overflow-hidden">
            <TestimonialSection
              title="Ils nous font confiance"
              description="Ce que nos clients disent de nous"
              {...adaptTestimonials(mockTestimonials, {
                withCta: true,
                ctaText: 'Voir tous les témoignages',
                ctaUrl: '#',
              })}
              variant="featured"
            />
          </div>
        </div>
      ),
    },
    {
      id: 'stats-showcase',
      title: 'Stats Showcase',
      description: 'Template pour présenter des statistiques et chiffres clés',
      component: (
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-l-[var(--color-secondary)] bg-cyan-50/30 rounded-md">
            <Typography variant="p" className="font-medium mb-2">
              Caractéristiques
            </Typography>
            <ul className="ml-5 list-disc text-sm space-y-1">
              <li>Différentes mises en page (cards, grid, horizontal)</li>
              <li>Support pour les icônes et couleurs</li>
              <li>Mise en valeur de statistiques importantes</li>
            </ul>
          </div>

          <div className="border border-color rounded-lg overflow-hidden">
            <StatsShowcase
              title="Nos chiffres clés"
              description="Des résultats qui parlent d'eux-mêmes"
              {...adaptStats(mockStats, {
                withIcons: true,
                colorScheme: 'mixed',
                withCta: true,
                ctaText: 'Découvrir notre approche',
                ctaUrl: '#',
              })}
              layout="cards"
              columns={4}
            />
          </div>
        </div>
      ),
    },
    {
      id: 'cta-newsletter',
      title: 'CTA Newsletter',
      description: "Variante du CTA avec formulaire d'inscription à la newsletter",
      component: (
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-l-[var(--color-tertiary)] bg-amber-50/30 rounded-md">
            <Typography variant="p" className="font-medium mb-2">
              Caractéristiques
            </Typography>
            <ul className="ml-5 list-disc text-sm space-y-1">
              <li>Champ d'inscription à la newsletter</li>
              <li>Design élégant avec gradient</li>
              <li>Mention de confidentialité</li>
            </ul>
          </div>

          <div className="border border-color rounded-lg overflow-hidden">
            <section className="py-12 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
              <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-8">
                  <Typography as="h2" variant="h2" className="mb-3">
                    {mockCTAVariants.newsletter.title}
                  </Typography>
                  <Typography variant="lead">{mockCTAVariants.newsletter.description}</Typography>
                </div>

                <div className="max-w-xl mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder={mockCTAVariants.newsletter.inputPlaceholder}
                      className="flex-1 px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-white"
                      aria-label="Email"
                    />
                    <Button variant="tertiary" size="large">
                      {mockCTAVariants.newsletter.buttonLabel}
                    </Button>
                  </div>
                  <Typography
                    variant="subtle"
                    className="text-white opacity-80 text-center mt-3 text-sm"
                  >
                    {mockCTAVariants.newsletter.disclaimerText}
                  </Typography>
                </div>
              </div>
            </section>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <Typography as="h1" variant="h1" className="mb-4 text-center">
        Templates IRIM Webforge
      </Typography>

      <Typography as="p" variant="lead" className="mb-8 text-center max-w-2xl mx-auto">
        Modèles de pages et sections réutilisables pour construire rapidement des interfaces
        cohérentes
      </Typography>

      {/* Afficher les templates */}
      <div className="grid grid-cols-1 gap-8">
        {templateComponents.map((comp) => (
          <div key={comp.id} className="p-6 surface-secondary rounded-lg">
            <Typography as="h3" variant="h3" className="mb-2">
              {comp.title}
            </Typography>
            <Typography variant="p" className="mb-4 text-secondary">
              {comp.description}
            </Typography>

            <div className="p-4 surface-primary rounded-lg">{comp.component}</div>
          </div>
        ))}
      </div>

      {/* Lien retour */}
      <div className="text-center mt-12">
        <Link
          href="/ds-lab"
          className="inline-flex items-center text-primary hover:text-primary/80 border-b-2 border-[var(--color-tertiary)]"
        >
          <Icon name="ArrowLeft" size={16} className="mr-2" />
          Retour au DS Lab
        </Link>
      </div>
    </div>
  );
}
