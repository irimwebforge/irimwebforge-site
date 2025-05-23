'use client';

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

export default function Page() {
  const features = [
    {
      id: 'comprehension',
      title: 'Je connais votre quotidien',
      description: 'J\'ai aidé mon épouse thérapeute. Je sais ce que c\'est de jongler entre clients et administratif. Je comprends vos vraies priorités.',
      icon: 'Brain' as IconName,
      color: 'primary' as const,
    },
    {
      id: 'interfaces',
      title: 'Conçu pour vous, pas pour les informaticiens',
      description: 'Votre interface est aussi simple que votre téléphone. Vous cliquez, ça marche. Pas de manuels de 50 pages.',
      icon: 'UserCheck' as IconName,
      color: 'secondary' as const,
    },
    {
      id: 'autonomie',
      title: 'Vous devenez autonome progressivement',
      description: 'Je vous montre à votre rythme. Après, vous gérez tout seul. Plus besoin de moi pour les mises à jour.',
      icon: 'Key' as IconName,
      color: 'tertiary' as const,
    },
    {
      id: 'resultats',
      title: 'Résultats mesurables',
      description: 'Mon épouse a gagné 6h par semaine. Je mesure vos gains avant et après. Pas de promesses en l\'air.',
      icon: 'BarChart' as IconName,
      color: 'primary' as const,
    },
  ];
  
  const projections = [
    {
      quote: 'Vous mettez à jour votre planning en 5 minutes chaque semaine. Vos clients voient toujours vos vraies disponibilités. Fini le stress du dimanche soir.',
      author: 'Pour les thérapeutes',
      company: 'Inspiré de mon expérience personnelle',
      icon: 'HeartPulse' as IconName,
      color: 'primary' as const,
    },
    {
      quote: 'Vous changez un prix, ça se met à jour partout. Votre planning et vos factures se parlent. Vous récupérez vos soirées.',
      author: 'Pour les artisans et commerçants',
      company: 'Basé sur les besoins observés',
      icon: 'Hammer' as IconName,
      color: 'secondary' as const,
    },
    {
      quote: 'Vous intégrez trois nouveaux collaborateurs. Votre système absorbe cette croissance sans vous rajouter de travail.',
      author: 'Pour les structures qui grandissent',
      company: 'Vision d\'accompagnement future',
      icon: 'Users' as IconName,
      color: 'tertiary' as const,
    },
  ];

  return (
    <main className="overflow-x-hidden transition-all duration-300">
      <PageHeader
        title="Des formules numériques pour libérer votre temps"
        description="Des formules concrètes, pensées pour les indépendants, artisans et entrepreneurs qui veulent se concentrer sur leur métier, pas sur la technique."
        align="center"
        size="large"
        pattern
        badge={{ text: 'Formules 2025', variant: 'primary' }}
      />

      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.id}
                className="flex flex-col h-full transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                padding="large"
                variant="accent"
                color={service.color}
                accentPosition="top"
              >
                <div className="flex items-center justify-center mb-4">
                  <Icon
                    name={service.icon}
                    className={`w-10 h-10 text-[var(--color-${service.color})]`}
                  />
                </div>
                <Typography as="h3" variant="h4" className="mb-2 text-center font-bold">
                  {service.title}
                </Typography>
                <Typography
                  variant="p"
                  className="mb-4 text-center text-gray-700 dark:text-gray-300"
                >
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
                <Button 
                  variant="gradient" 
                  className="w-full mt-auto"
                  href={`/services/${service.id}`}
                >
                  {service.cta}
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="text-center mb-12">
            <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
              Mes différenciateurs
            </Typography>
            <Typography variant="lead" className="mb-6 max-w-3xl mx-auto">
              Une approche unique basée sur l'expérience et l'écoute
            </Typography>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-[var(--color-${feature.color}-100)] dark:bg-[var(--color-${feature.color}-900)] flex items-center justify-center`}>
                    <Icon
                      name={feature.icon}
                      className={`w-6 h-6 text-[var(--color-${feature.color})]`}
                    />
                  </div>
                </div>
                <Typography as="h3" variant="h4" className="mb-2 text-center">
                  {feature.title}
                </Typography>
                <Typography variant="p" className="text-center text-gray-600 dark:text-gray-300">
                  {feature.description}
                </Typography>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
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
                className="group bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
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
                  <Typography variant="small" className="text-gray-500 dark:text-gray-400">
                    {projection.company}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Échangeons sur vos défis et mon approche"
        description="45 minutes pour échanger sur votre projet. Sans pression commerciale, sans jargon technique."
        primaryAction={{
          text: "Réserver un temps d'échange",
          url: '/contact',
          variant: 'gradient',
        }}
        secondaryAction={{
          text: 'Découvrir mon approche',
          url: '/a-propos',
          variant: 'secondary',
        }}
        variant="card"
        backgroundColor="gradient"
        textColor="light"
      />
    </main>
  );
}
