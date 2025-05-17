'use client';

import { PageHeader } from '@/components/organisms/PageHeader';
import { Typography } from '@/components/atoms/Typography';
import { Container } from '@/components/atoms/Container';
import { Icon, IconName } from '@/components/atoms/Icon';
import { ProjectShowcase } from '@/templates/ProjectShowcase';
import { CTASection } from '@/templates/CTASection';
import { Alert } from '@/components/molecules/Alert';
import { Divider } from '@/components/atoms/Divider';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  // Bannière de vision
  const VisionBanner = () => (
    <Alert variant="info" title="" className="mb-8 mx-auto max-w-5xl">
      <p className="text-sm text-blue-800 dark:text-blue-200">
        Cette page présente ma vision des projets que j'aimerais réaliser. Elle mélange projets
        personnels réels et projections de réalisations futures pour illustrer mon approche.
      </p>
    </Alert>
  );

  const projects = [
    {
      id: 'corps-et-sens',
      title: 'Corps & Sens',
      slug: 'corps-et-sens',
      imageUrl: '/images/projects/corps-et-sens.jpg',
      thumbnailSrc: '/images/projects/corps-et-sens-thumb.jpg',
      tags: [
        { id: 'personnel', label: 'Projet Personnel', color: 'primary' as const },
        { id: 'interface', label: 'Interface Admin', color: 'secondary' as const },
      ],
      description:
        "Projet réalisé pour mon épouse thérapeute qui a transformé 7h d'administration hebdomadaire en 45min. Une interface simplifiée pour la gestion du planning et des contenus.",
      status: 'Réalisé',
      featured: true,
    },
    {
      id: 'univers-des-reves',
      title: 'Univers des Rêves',
      slug: 'univers-des-reves',
      imageUrl: '/images/projects/univers-des-reves.jpg',
      thumbnailSrc: '/images/projects/univers-des-reves-thumb.jpg',
      tags: [
        { id: 'conceptuel', label: 'Projet Conceptuel', color: 'tertiary' as const },
        { id: 'autonomie', label: 'Autonomie Éditoriale', color: 'primary' as const },
      ],
      description:
        "Concept d'interface intuitive permettant à un onirologue de gérer ses contenus sans intervention technique externe. Une vision de l'autonomie numérique que je souhaite permettre.",
      status: 'Concept',
    },
    {
      id: 'mr-mrs-cbd',
      title: 'Mr&Mrs CBD',
      slug: 'mr-mrs-cbd',
      imageUrl: '/images/projects/cbd-site.jpg',
      thumbnailSrc: '/images/projects/mr-mrs-cbd-thumb.jpg',
      tags: [
        { id: 'en-cours', label: 'En Développement', color: 'secondary' as const },
        { id: 'artisan', label: 'Commerce Local', color: 'tertiary' as const },
      ],
      description:
        "Projet en développement visant à libérer un commerce local de ses abonnements coûteux. L'objectif est une économie annuelle de 2640€ et une reprise de contrôle totale sur l'évolution du site.",
      status: 'En développement',
    },
    {
      id: 'moodcycle',
      title: 'MoodCycle',
      slug: 'moodcycle',
      imageUrl: '/images/projects/moodcycle.jpg',
      thumbnailSrc: '/images/projects/moodcycle-thumb.jpg',
      tags: [
        { id: 'app', label: 'Application Mobile', color: 'primary' as const },
        { id: 'personnel', label: 'Projet Personnel', color: 'secondary' as const },
      ],
      description:
        "Application holistique de suivi de cycle menstruel en développement. Un projet personnel qui explore les possibilités d'interfaces intuitives sur mobile avec React Native.",
      status: 'En développement',
    },
  ];

  const transformationCategories = [
    {
      title: 'De la frustration à la sérénité',
      description:
        "Comment une interface bien pensée peut transformer l'anxiété administrative en confiance",
      examples: [
        'Réduction du temps administratif hebdomadaire',
        'Simplification des mises à jour de contenu',
        'Interface adaptée au niveau de confort technique',
      ],
      icon: 'Smile' as IconName,
      color: 'primary' as const,
    },
    {
      title: "De la fragmentation à l'unité",
      description:
        'Créer des écosystèmes numériques cohérents qui remplacent les outils disparates',
      examples: [
        'Centralisation des informations clients',
        'Synchronisation automatique entre site et planning',
        'Communication fluide entre modules',
      ],
      icon: 'Layers' as IconName,
      color: 'secondary' as const,
    },
    {
      title: "De la dépendance à l'autonomie",
      description:
        "Reprendre le contrôle de sa présence en ligne sans dépendre d'un expert technique",
      examples: [
        'Formation adaptée au niveau technique de chacun',
        'Documentation visuelle facile à consulter',
        'Interfaces intuitives qui guident naturellement',
      ],
      icon: 'Key' as IconName,
      color: 'tertiary' as const,
    },
  ];

  return (
    <main>
      <PageHeader
        title="Des projets qui racontent une vision"
        description="Basés sur mon expérience personnelle avec mon épouse thérapeute, voici les types de transformations numériques que j'aimerais rendre possibles."
        theme="primary"
        align="center"
        size="medium"
      />

      <Container>
        <VisionBanner />
      </Container>

      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
              Réalisations et aspirations
            </Typography>
            <Typography variant="lead" className="mb-8 max-w-3xl mx-auto">
              Un mélange de projets réalisés, en cours et conceptuels qui illustrent ma vision pour
              mes futurs clients.
            </Typography>

            <div className="bg-white dark:bg-gray-800 p-6 border border-gray-100 dark:border-gray-700 rounded-lg mb-8 max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <div className="text-[var(--color-primary)] mt-1">
                  <Icon name="Info" size={24} />
                </div>
                <div>
                  <Typography variant="p" className="font-medium mb-2">
                    Comment lire cette galerie de projets
                  </Typography>
                  <Typography variant="p" className="text-gray-600 dark:text-gray-300 text-sm">
                    Les projets sont clairement identifiés comme "Réalisés", "En développement" ou
                    "Concepts" pour distinguer les expériences réelles des aspirations. Ils sont
                    tous inspirés par ma vision d'interfaces qui libèrent du temps et de l'énergie.
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.imageUrl || '/images/placeholder.jpg'}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                    {project.status}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag.id}
                        className={`inline-block px-2 py-1 text-xs font-medium rounded-full bg-[var(--color-${tag.color}-100)] dark:bg-[var(--color-${tag.color}-900)] text-[var(--color-${tag.color}-700)] dark:text-[var(--color-${tag.color}-300)]`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>

                  <Typography as="h3" variant="h3" className="mb-2">
                    {project.title}
                  </Typography>

                  <Typography variant="p" className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </Typography>

                  <Link
                    href={`/projets/${project.slug}`}
                    className="inline-flex items-center text-[var(--color-primary)] hover:text-[var(--color-primary-600)] transition-colors duration-normal"
                  >
                    En savoir plus
                    <Icon name="ArrowRight" className="ml-1" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="text-center mb-12">
            <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
              Les transformations que j'aimerais rendre possibles
            </Typography>
            <Typography variant="lead" className="mb-8 max-w-3xl mx-auto">
              Au-delà des aspects techniques, ce sont ces changements concrets dans votre quotidien
              professionnel qui m'inspirent.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transformationCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg"
              >
                <div
                  className={`w-12 h-12 rounded-full bg-[var(--color-${category.color}-100)] dark:bg-[var(--color-${category.color}-900)] flex items-center justify-center mb-4`}
                >
                  <Icon
                    name={category.icon}
                    className={`text-[var(--color-${category.color}-700)] dark:text-[var(--color-${category.color}-300)]`}
                  />
                </div>

                <Typography as="h3" variant="h3" className="mb-3">
                  {category.title}
                </Typography>

                <Typography variant="p" className="text-gray-600 dark:text-gray-300 mb-4">
                  {category.description}
                </Typography>

                <Divider className="my-4" />

                <Typography
                  as="h4"
                  variant="h4"
                  className="text-sm uppercase text-gray-500 dark:text-gray-400 mb-3"
                >
                  Exemples concrets
                </Typography>

                <ul className="space-y-2">
                  {category.examples.map((example, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon
                        name="Check"
                        className={`text-[var(--color-${category.color}-600)] dark:text-[var(--color-${category.color}-400)] mt-1 flex-shrink-0`}
                        size={16}
                      />
                      <Typography variant="p" className="text-sm">
                        {example}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
                  Corps & Sens
                </Typography>
                <Typography as="h3" variant="h3" className="text-[var(--color-primary)] mb-6">
                  L'expérience qui a tout inspiré
                </Typography>

                <Typography variant="p" className="mb-4">
                  Ce projet personnel pour mon épouse thérapeute a été le déclencheur de ma vision.
                  En créant une interface adaptée à ses besoins spécifiques, j'ai pu transformer:
                </Typography>

                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 dark:border-red-700">
                  <Typography variant="p" className="font-medium text-red-700 dark:text-red-400">
                    AVANT
                  </Typography>
                  <Typography variant="p" className="text-gray-800 dark:text-gray-200">
                    7 heures par semaine de lutte avec une interface générique, stress, erreurs
                    fréquentes, et temps perdu loin de ses patients.
                  </Typography>
                </div>

                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500 dark:border-green-700">
                  <Typography
                    variant="p"
                    className="font-medium text-green-700 dark:text-green-400"
                  >
                    APRÈS
                  </Typography>
                  <Typography variant="p" className="text-gray-800 dark:text-gray-200">
                    45 minutes d'administration sereine, mise à jour simple du planning, plus de
                    temps pour ses patients et sa formation continue.
                  </Typography>
                </div>

                <Typography variant="p" className="mb-6">
                  Cette transformation concrète m'a montré l'impact qu'une interface bien conçue
                  peut avoir sur le quotidien d'un indépendant. C'est ce type de changement que
                  j'aimerais rendre possible pour d'autres professionnels.
                </Typography>

                <Link
                  href="/projets/corps-et-sens"
                  className="inline-flex items-center px-6 py-3 rounded-md bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-600)] transition-colors duration-normal"
                >
                  Découvrir ce projet
                  <Icon name="ArrowRight" className="ml-2" />
                </Link>
              </div>

              <div className="relative h-full min-h-[400px]">
                <Image
                  src="/images/projects/corps-et-sens-detail.jpg"
                  alt="Interface Corps & Sens"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Vous aussi, transformez votre expérience administrative"
        description="Discutons de votre activité et de ce qui vous prend du temps inutilement. Ensemble, imaginons comment vous pourriez récupérer des heures précieuses."
        primaryAction={{
          text: 'Échanger sur votre projet',
          url: '/contact',
          variant: 'gradient',
        }}
        secondaryAction={{
          text: 'Découvrir mon approche',
          url: '/processus',
          variant: 'secondary',
        }}
        variant="default"
        backgroundColor="gradient"
        textColor="light"
      />
    </main>
  );
}
