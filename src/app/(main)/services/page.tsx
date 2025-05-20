'use client';

import { PageHeader } from '@/components/organisms/PageHeader';
import { ServiceOverview } from '@/templates/ServiceOverview';
import { CTASection } from '@/templates/CTASection';
import { Icon } from '@/components/atoms/Icon';
import { Container } from '@/components/atoms/Container';
import { Typography } from '@/components/atoms/Typography';
import { Divider } from '@/components/atoms/Divider';
import { IconName } from '@/components/atoms/Icon';
import { Alert } from '@/components/molecules/Alert';
import { Card } from '@/components/molecules/Card';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { ComparativeTable } from '@/components/molecules/ComparativeTable';
import { NavLink } from '@/components/atoms/NavLink';

export default function Page() {
  // Bannière explicative de vision
  const VisionBanner = () => (
    <Alert variant="info" title="" className="mb-8 mx-auto max-w-5xl">
      <p className="text-sm text-blue-800 dark:text-blue-200">
        Cette page présente ma vision de services inspirée par une expérience réelle avec mon épouse
        thérapeute. Je développe ces offres progressivement en privilégiant la transparence dans mon
        parcours entrepreneurial.
      </p>
    </Alert>
  );

  const services = [
    {
      id: 'presence',
      title: 'Solution Présence',
      icon: 'Laptop' as IconName,
      color: 'primary' as const,
      price: '1 500–2 200€',
      support: '70€/mois',
      description:
        'Pour les indépendants qui veulent gérer facilement leur site sans dépendance technique.',
      features: [
        'Site web professionnel responsive',
        "Interface d'administration simplifiée",
        'Formation individuelle (2h) + supports visuels',
        'Transfert de contenus inclus',
        "4 sessions d'assistance prioritaire",
        'Garantie de réduction de 60% du temps administratif',
      ],
      cta: 'Découvrir la formule',
      href: '/services/presence',
    },
    {
      id: 'integree',
      title: 'Solution Intégrée',
      icon: 'Zap' as IconName,
      color: 'secondary' as const,
      price: '2 800–3 800€',
      support: '140€/mois',
      description:
        'Pour les professionnels qui jonglent entre plusieurs outils et cherchent un système unifié.',
      features: [
        'Écosystème numérique unifié',
        'Intégration agenda, facturation, CRM',
        'Automatisations intelligentes',
        'Formation progressive (4h)',
        "8 sessions d'assistance prioritaire",
        'Garantie de réduction de 70% du temps administratif',
      ],
      cta: 'Découvrir la formule',
      href: '/services/integree',
    },
    {
      id: 'evolutive',
      title: 'Solution Évolutive',
      icon: 'TrendingUp' as IconName,
      color: 'tertiary' as const,
      price: '5 200–7 500€',
      support: '280€/mois',
      description:
        'Pour les entrepreneurs établis prêts à faire évoluer leur infrastructure numérique.',
      features: [
        'Architecture évolutive & scalable',
        'Espace client/membre personnalisé',
        'Automatisations avancées',
        'Formation complète (6h)',
        'Support prioritaire illimité 90j',
        "Garantie d'augmentation de capacité de 25%",
      ],
      cta: 'Découvrir la formule',
      href: '/services/evolutive',
    },
  ];

  const features = [
    {
      id: 'comprehension',
      title: 'Compréhension métier approfondie',
      description:
        "Je cherche à comprendre les défis spécifiques de votre quotidien avant toute considération technique. Mon expérience personnelle avec mon épouse thérapeute m'a montré l'importance de cette approche.",
      icon: 'Brain' as IconName,
      color: 'primary' as const,
    },
    {
      id: 'interfaces',
      title: 'Interfaces pensées pour des humains',
      description:
        "Mon objectif est de créer des espaces d'administration aussi soignés que la partie visible par vos clients. L'interface doit s'adapter à vous, pas l'inverse.",
      icon: 'UserCheck' as IconName,
      color: 'secondary' as const,
    },
    {
      id: 'autonomie',
      title: 'Autonomie progressive',
      description:
        "Je souhaite vous accompagner vers une véritable indépendance technique, avec un plan d'apprentissage adapté à votre niveau et vos besoins spécifiques.",
      icon: 'Key' as IconName,
      color: 'tertiary' as const,
    },
    {
      id: 'resultats',
      title: 'Objectif de résultats concrets',
      description:
        "Je vise des améliorations mesurables : temps gagné, diminution de stress administratif, cohérence professionnelle renforcée. Le projet personnel avec mon épouse a montré qu'un gain de temps significatif est possible.",
      icon: 'BarChart' as IconName,
      color: 'primary' as const,
    },
  ];

  // Transformés en projections basées sur l'expérience personnelle
  const projections = [
    {
      quote:
        "Pour un thérapeute holistique, l'objectif serait de passer d'une mise à jour bimensuelle anxiogène à une gestion hebdomadaire rapide (5 minutes) et sereine du planning, améliorant ainsi la fiabilité des informations pour les clients.",
      author: 'Projection pour thérapeutes',
      company: 'Basée sur mon expérience personnelle',
      icon: 'HeartPulse' as IconName,
      color: 'primary' as const,
    },
    {
      quote:
        'Un artisan ou commerçant local pourrait économiser plusieurs heures par semaine en éliminant la synchronisation manuelle entre agenda, site web et facturation, réduisant significativement les erreurs de mise à jour.',
      author: 'Projection pour artisans',
      company: "Basée sur l'analyse des besoins",
      icon: 'Hammer' as IconName,
      color: 'secondary' as const,
    },
    {
      quote:
        "Pour un collectif ou une entreprise en expansion, une solution évolutive permettrait d'intégrer facilement de nouveaux membres sans friction administrative, supportant une croissance sans charge supplémentaire.",
      author: 'Projection pour structures en croissance',
      company: "Vision d'accompagnement futur",
      icon: 'Users' as IconName,
      color: 'tertiary' as const,
    },
  ];

  return (
    <main className="overflow-x-hidden transition-all duration-300">
      <PageHeader
        title="Des solutions numériques pour libérer votre temps"
        description="Des offres concrètes, pensées pour les indépendants, artisans et entrepreneurs qui veulent se concentrer sur leur métier, pas sur la technique."
        align="center"
        size="large"
        pattern
        badge={{ text: 'Offres 2025', variant: 'primary' }}
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
                  {service.description}
                </Typography>
                <div className="flex justify-center gap-2 mb-4">
                  <Badge variant={service.color as any} className="text-base">
                    {service.price}
                  </Badge>
                  <Badge variant="default" className="text-base">
                    {service.support} support
                  </Badge>
                </div>
                <ul className="mb-6 space-y-2 text-sm flex-1">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon
                        name="Check"
                        className={`w-4 h-4 text-[var(--color-${service.color})] mt-1`}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button href={service.href} variant="gradient" className="w-full mt-auto">
                  {service.cta}
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <ServiceOverview
        title=""
        description=""
        services={services.map((service) => ({
          ...service,
          description:
            service.id === 'presence'
              ? 'Pour les indépendants qui veulent gérer facilement leur site sans dépendance technique.'
              : service.id === 'integree'
                ? 'Pour les professionnels qui jonglent entre plusieurs outils et cherchent un système unifié.'
                : service.id === 'evolutive'
                  ? 'Pour les entrepreneurs établis prêts à faire évoluer leur infrastructure numérique.'
                  : service.description,
        }))}
        features={features}
        showFeatures={true}
      />

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="text-center mb-12">
            <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
              Résultats concrets que je vise
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
                  Pour les {projection.author.replace('Projection pour ', '')}:
                </Typography>
                <Typography variant="p" className="italic mb-4 text-center">
                  {projection.quote
                    .replace(/Pour un |Pour une /, '')
                    .replace("l'objectif serait", "l'objectif est")}
                </Typography>
                <Divider className="my-4" />
                <div className="text-center">
                  <Typography
                    variant="p"
                    className={`font-semibold text-[var(--color-${projection.color})]`}
                  >
                    {projection.author}
                  </Typography>
                  <Typography variant="small" className="text-gray-500 dark:text-gray-400">
                    {projection.company}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section comparaison de prix et modèles */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
              Investissement et retour envisagés
            </Typography>
            <Typography variant="lead" className="mb-6 max-w-3xl mx-auto">
              Une transparence complète sur les modèles économiques, basés sur la valorisation du
              temps récupéré.
            </Typography>
          </div>

          <div className="overflow-x-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700 mb-8">
              <div className="grid grid-cols-4 gap-6">
                <div className="col-span-1"></div>

                {/* En-têtes des colonnes */}
                <div className="col-span-1">
                  <div className="text-center p-4 rounded-t-lg bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]">
                    <Typography variant="h4" className="text-[var(--color-primary)]">
                      Solution Présence
                    </Typography>
                    <Typography variant="small" className="text-gray-500 dark:text-gray-400">
                      Autonomie numérique
                    </Typography>
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="text-center p-4 rounded-t-lg bg-[var(--color-secondary-100)] dark:bg-[var(--color-secondary-900)]">
                    <Typography variant="h4" className="text-[var(--color-secondary)]">
                      Solution Intégrée
                    </Typography>
                    <Typography variant="small" className="text-gray-500 dark:text-gray-400">
                      Unification des outils
                    </Typography>
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="text-center p-4 rounded-t-lg bg-[var(--color-tertiary-100)] dark:bg-[var(--color-tertiary-900)]">
                    <Typography variant="h4" className="text-[var(--color-tertiary)]">
                      Solution Évolutive
                    </Typography>
                    <Typography variant="small" className="text-gray-500 dark:text-gray-400">
                      Croissance optimisée
                    </Typography>
                  </div>
                </div>

                {/* Lignes de données */}
                <div className="col-span-1 p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                  <Typography variant="p" className="font-semibold">
                    Fourchette d'investissement
                  </Typography>
                </div>
                <div className="col-span-1 p-4 text-center border-t border-gray-200 dark:border-gray-700">
                  <span className="text-[var(--color-primary)]">1500-2200€</span>
                </div>
                <div className="col-span-1 p-4 text-center border-t border-gray-200 dark:border-gray-700">
                  <span className="text-[var(--color-secondary)]">2800-3800€</span>
                </div>
                <div className="col-span-1 p-4 text-center border-t border-gray-200 dark:border-gray-700">
                  <span className="text-[var(--color-tertiary)]">5200-7500€</span>
                </div>

                <div className="col-span-1 p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                  <Typography variant="p" className="font-semibold">
                    Support
                  </Typography>
                </div>
                <div className="col-span-1 p-4 text-center border-t border-gray-200 dark:border-gray-700">
                  70€/mois
                </div>
                <div className="col-span-1 p-4 text-center border-t border-gray-200 dark:border-gray-700">
                  140€/mois
                </div>
                <div className="col-span-1 p-4 text-center border-t border-gray-200 dark:border-gray-700">
                  280€/mois
                </div>

                <div className="col-span-1 p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                  <Typography variant="p" className="font-semibold">
                    Temps gagné (objectif)
                  </Typography>
                </div>
                <div className="col-span-1 p-4 text-center border-t border-gray-200 dark:border-gray-700">
                  <span className="text-green-600 dark:text-green-400 font-medium">60%</span>
                </div>
                <div className="col-span-1 p-4 text-center border-t border-gray-200 dark:border-gray-700">
                  <span className="text-green-600 dark:text-green-400 font-medium">70%</span>
                </div>
                <div className="col-span-1 p-4 text-center border-t border-gray-200 dark:border-gray-700">
                  <span className="text-green-600 dark:text-green-400 font-medium">75%+</span>
                </div>

                <div className="col-span-1 p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                  <Typography variant="p" className="font-semibold">
                    Adapté pour
                  </Typography>
                </div>
                <div className="col-span-1 p-4 text-center border-t border-gray-200 dark:border-gray-700">
                  Indépendants, thérapeutes, artisans en solo
                </div>
                <div className="col-span-1 p-4 text-center border-t border-gray-200 dark:border-gray-700">
                  Professionnels avec gestion multi-outils
                </div>
                <div className="col-span-1 p-4 text-center border-t border-gray-200 dark:border-gray-700">
                  Structures en croissance, collectifs
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mt-8 max-w-3xl mx-auto group transition-all duration-300 hover:shadow-md">
            <Typography variant="p" className="italic text-center">
              "Toute transformation numérique nécessite un investissement adapté à ses ambitions.
              Mon objectif est de créer des solutions où le temps récupéré représente rapidement un
              retour sur investissement concret - comme j'ai pu le constater avec le projet pour mon
              épouse."
            </Typography>
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
          url: '/processus',
          variant: 'secondary',
        }}
        variant="card"
        backgroundColor="gradient"
        textColor="light"
      />

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 300ms ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 500ms ease-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in,
          .animate-scale-in,
          .transition-all,
          .transition-transform,
          .transition-colors {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}
