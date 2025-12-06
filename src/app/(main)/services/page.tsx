import { PageHeader } from '@/components/organisms/PageHeader';
import { Icon } from '@/components/atoms/Icon';
import { Container } from '@/components/atoms/Container';
import { Typography } from '@/components/atoms/Typography';
import { Divider } from '@/components/atoms/Divider';
import { IconName } from '@/components/atoms/Icon';
import { Card } from '@/components/molecules/Card';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { CTASection } from '@/templates/CTASection';
import { services } from '@/data/services';
import Link from 'next/link';

// Métadonnées SEO pour la page services
export const metadata = {
  title: 'Nos Services | IRIM Webforge - Solutions Présence, Intégrée et Évolutive',
  description:
    'Découvrez nos 3 solutions : Présence (site vitrine), Intégrée (gestion complète) et Évolutive (évolution continue). Autonomie garantie.',
};

export default function Page() {
  const features = [
    {
      id: 'comprehension',
      title: 'Je connais votre quotidien',
      description:
        "J'ai aidé mon épouse thérapeute. Je sais ce que c'est de jongler entre clients et administratif. Je comprends vos vraies priorités.",
      icon: 'Brain' as IconName,
      color: 'primary' as const,
    },
    {
      id: 'interfaces',
      title: 'Conçu pour vous, pas pour les informaticiens',
      description:
        'Votre interface est aussi simple que votre téléphone. Vous cliquez, ça marche. Pas de manuels de 50 pages.',
      icon: 'UserCheck' as IconName,
      color: 'secondary' as const,
    },
    {
      id: 'autonomie',
      title: 'Vous devenez autonome progressivement',
      description:
        'Je vous montre à votre rythme. Après, vous gérez tout seul. Plus besoin de moi pour les mises à jour.',
      icon: 'Key' as IconName,
      color: 'tertiary' as const,
    },
    {
      id: 'resultats',
      title: 'Résultats mesurables',
      description:
        "Exemple réel : mon épouse thérapeute a retrouvé 6h par semaine grâce à une interface adaptée. Voir l'étude de cas complète dans la section Projets.",
      icon: 'BarChart' as IconName,
      color: 'primary' as const,
    },
    {
      id: 'ia',
      title: "L'IA au service de votre métier",
      description:
        "J'intègre des automatisations intelligentes pour réduire vos tâches répétitives. Pas de gadget, du concret qui vous fait gagner du temps.",
      icon: 'Sparkles' as IconName,
      color: 'secondary' as const,
    },
  ];

  const projections = [
    {
      quote:
        'Vous mettez à jour votre planning en 5 minutes chaque semaine. Vos clients voient toujours vos vraies disponibilités. Fini le stress du dimanche soir.',
      author: 'Pour les thérapeutes',
      company: 'Inspiré de mon expérience personnelle',
      icon: 'HeartPulse' as IconName,
      color: 'primary' as const,
    },
    {
      quote:
        'Réservations, tarifs, disponibilités, facturation : tout connecté. Vous changez un prix, ça se met à jour partout. Vous récupérez vos soirées.',
      author: 'Pour les commerçants et prestataires',
      company: 'Basé sur les besoins observés',
      icon: 'Store' as IconName,
      color: 'secondary' as const,
    },
    {
      quote:
        'Vous intégrez trois nouveaux collaborateurs. Votre système absorbe cette croissance sans vous rajouter de travail.',
      author: 'Pour les structures qui grandissent',
      company: "Vision d'accompagnement future",
      icon: 'Users' as IconName,
      color: 'tertiary' as const,
    },
  ];

  return (
    <main className="overflow-x-hidden transition-all duration-300">
      <PageHeader
        title="Des solutions numériques pour libérer votre temps"
        description="Des solutions concrètes, pensées pour les thérapeutes, commerçants, artisans et tous les indépendants qui veulent se concentrer sur leur métier, pas sur la technique."
        align="center"
        size="large"
        pattern
        badge={{ text: 'Solutions 2025', variant: 'primary' }}
      />

      <section className="bg-section-primary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Teaser offre Starter */}
            <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg p-4 mb-8">
              <Typography variant="p" className="text-primary-700 dark:text-primary-300">
                <Icon name="Zap" className="w-4 h-4 inline mr-2" />
                <strong>Nouveau :</strong> Une offre d'entrée à partir de 500€ pour démarrer simplement.{' '}
                <Link href="/contact" className="underline font-medium">Parlons-en →</Link>
              </Typography>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <Link key={service.id} href={`/services/${service.id}`} className="group block">
                  <Card
                    className="flex flex-col h-full transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer relative overflow-hidden"
                    padding="large"
                    variant="accent"
                    color={service.color}
                    accentPosition="top"
                  >
                    <div className="flex items-center justify-center mb-4">
                      <Icon
                        name={service.icon}
                        className={`w-10 h-10 text-[var(--color-${service.color})] transition-transform duration-150 group-hover:scale-110`}
                      />
                    </div>
                    <Typography as="h3" variant="h4" className="mb-2 text-center font-bold">
                      {service.title}
                    </Typography>
                    <Typography variant="p" className="mb-4 text-center text-secondary">
                      {service.shortDescription}
                    </Typography>
                    <div className="flex justify-center gap-2 mb-4">
                      <Badge variant={service.color} className="text-base">
                        {service.price}
                      </Badge>
                      <Badge variant="default" className="text-base">
                        {service.support}
                      </Badge>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm flex-1">
                      {service.features.slice(0, 6).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon
                            name="Check"
                            className={`w-4 h-4 text-[var(--color-${service.color})] mt-1`}
                          />
                          <span>{feature.description}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Indicateur visuel d'interaction */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <div
                        className={`w-8 h-8 rounded-full bg-[var(--color-${service.color})] flex items-center justify-center shadow-lg`}
                      >
                        <Icon name="ArrowRight" className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Texte d'appel à l'action discret */}
                    <div className="text-center mt-auto">
                      <span
                        className={`text-[var(--color-${service.color})] font-medium text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
                      >
                        {service.cta}
                      </span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-accent py-16">
        <div className="container mx-auto px-4 content-overlay-soft">
          <div className="text-center mb-12">
            <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
              Mes différenciateurs
            </Typography>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="surface-primary p-6 rounded-lg shadow-sm border border-color transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-[var(--color-${feature.color}-100)] dark:bg-[var(--color-${feature.color}-900)] flex items-center justify-center`}
                  >
                    <Icon
                      name={feature.icon}
                      className={`w-6 h-6 text-[var(--color-${feature.color})]`}
                    />
                  </div>
                </div>
                <Typography as="h3" variant="h4" className="mb-2 text-center">
                  {feature.title}
                </Typography>
                <Typography variant="p" className="text-center text-secondary">
                  {feature.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
              Les transformations que je vise pour vous
            </Typography>
            <Typography variant="lead" className="mb-6 max-w-3xl mx-auto">
              Basé sur mon expérience avec mon épouse thérapeute, voici les transformations que
              j'aspire à créer pour différents types de professionnels:
            </Typography>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mt-8">
            {projections.map((projection, index) => (
              <div
                key={index}
                className="group surface-primary rounded-lg shadow-sm p-6 border border-color transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-16 h-16 rounded-full bg-[var(--color-${projection.color}-100)] dark:bg-[var(--color-${projection.color}-900)] flex items-center justify-center transition-transform duration-150 group-hover:scale-110 group-hover:shadow-lg`}
                  >
                    <Icon
                      name={projection.icon}
                      className={`w-8 h-8 text-[var(--color-${projection.color}-600)] dark:text-[var(--color-${projection.color}-400)]`}
                    />
                  </div>
                </div>
                <Typography
                  as="h3"
                  variant="h4"
                  className={`mb-3 text-[var(--color-${projection.color})] text-center`}
                >
                  {projection.author}
                </Typography>
                <Typography variant="p" className="italic mb-4 text-center">
                  {projection.quote}
                </Typography>
                <Divider className="my-4" />
                <div className="text-center">
                  <Typography variant="small" className="text-tertiary">
                    {projection.company}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cta-soft py-16">
        <div className="container mx-auto px-4 content-overlay-soft">
          <CTASection
            title="Échangeons sur vos défis et mon approche"
            description="45 minutes pour échanger sur votre projet. Sans pression commerciale, sans jargon technique."
            primaryAction={{
              text: 'Prendre contact',
              url: '/contact',
              variant: 'gradient',
            }}
            secondaryAction={{
              text: 'Découvrir mon approche',
              url: '/a-propos',
              variant: 'secondary',
            }}
            variant="card"
            backgroundColor="transparent"
          />
        </div>
      </section>
    </main>
  );
}
