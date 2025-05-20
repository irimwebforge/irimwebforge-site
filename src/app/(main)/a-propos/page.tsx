'use client';

import { PageHeader } from '@/components/organisms/PageHeader';
import { Typography } from '@/components/atoms/Typography';
import { Container } from '@/components/atoms/Container';
import { Icon, IconName } from '@/components/atoms/Icon';
import { Timeline } from '@/components/molecules/Timeline';
import { CTASection } from '@/templates/CTASection';
import { Alert } from '@/components/molecules/Alert';
import { Divider } from '@/components/atoms/Divider';
import Image from 'next/image';
import Link from 'next/link';
import { NavLink } from '@/components/atoms/NavLink';

export default function Page() {
  // Bannière de vision
  const VisionBanner = () => (
    <Alert variant="info" title="" className="mb-8 mx-auto max-w-5xl">
      <p className="text-sm text-blue-800 dark:text-blue-200">
        Cette page présente mon parcours authentique, de ma reconversion au lancement
        d'IrimWebForge. Je vous partage mon histoire, mes compétences et ma vision avec
        transparence.
      </p>
    </Alert>
  );

  const journeySteps = [
    {
      id: 'step-1',
      title: 'Formation et vie professionnelle antérieure',
      description:
        "Après une expérience significative en formation et gestion de conflit, j'ai développé une sensibilité particulière à l'écoute des besoins et à la recherche de solutions adaptées.",
      date: 'Avant 2023',
      icon: 'Users' as IconName,
    },
    {
      id: 'step-2',
      title: 'Reconversion professionnelle',
      description:
        "J'ai suivi une formation intensive de 13 mois en développement web, par passion pour la création d'interfaces qui résolvent des problèmes concrets du quotidien.",
      date: '2023-2024',
      icon: 'Code' as IconName,
    },
    {
      id: 'step-3',
      title: 'Projet personnel transformateur',
      description:
        "La création d'une solution sur mesure pour mon épouse thérapeute a été une révélation : transformer 7h d'administration hebdomadaire en 45 minutes grâce à une interface adaptée.",
      date: '2024',
      icon: 'Lightbulb' as IconName,
    },
    {
      id: 'step-4',
      title: "Lancement d'IrimWebForge",
      description:
        "Motivé par cette expérience personnelle, j'ai créé IrimWebForge pour aider d'autres indépendants à se libérer des contraintes administratives qui les éloignent de leur cœur de métier.",
      date: '2025',
      icon: 'Rocket' as IconName,
    },
  ];

  const transferredSkills = [
    {
      title: 'Écoute active et compréhension des besoins',
      description:
        "De mon expérience en formation, j'ai développé une capacité à vraiment entendre ce qui est dit et ce qui ne l'est pas. Je cherche à comprendre vos défis réels avant de proposer des solutions.",
      icon: 'Ear' as IconName,
      color: 'primary' as const,
    },
    {
      title: 'Pédagogie et transmission',
      description:
        "J'explique les concepts techniques de façon accessible et adaptée à votre niveau. Mon objectif est de vous rendre autonome, pas de créer une dépendance technique.",
      icon: 'GraduationCap' as IconName,
      color: 'secondary' as const,
    },
    {
      title: 'Gestion de conflit et médiation',
      description:
        "Ces compétences me permettent de naviguer entre vos besoins professionnels (souvent contradictoires) pour trouver l'équilibre optimal entre fonctionnalités, simplicité et budget.",
      icon: 'Scale' as IconName,
      color: 'tertiary' as const,
    },
  ];

  const values = [
    {
      title: 'Transparence bienveillante',
      description:
        "Je préfère être honnête sur mes capacités actuelles et mes ambitions futures, tout en veillant à rester à l'écoute de vos besoins réels.",
      icon: 'Heart' as IconName,
      color: 'primary' as const,
    },
    {
      title: 'Autonomie et liberté',
      description:
        'Je crois fermement que la technologie doit vous libérer, pas vous contraindre. Chaque solution que je conçois vise à vous rendre plus autonome.',
      icon: 'Unlock' as IconName,
      color: 'secondary' as const,
    },
    {
      title: 'Artisanat digital',
      description:
        'Je privilégie la qualité à la quantité, en concevant des interfaces soignées et sur mesure, comme un artisan qui façonne une pièce unique.',
      icon: 'Tool' as IconName,
      color: 'tertiary' as const,
    },
    {
      title: 'Évolution constante',
      description:
        "Je m'engage dans un processus d'apprentissage continu et d'amélioration, pour vous offrir des solutions toujours plus adaptées à vos besoins.",
      icon: 'TrendingUp' as IconName,
      color: 'primary' as const,
    },
  ];

  return (
    <main className="overflow-x-hidden">
      <PageHeader
        title="Mon parcours au service de votre autonomie"
        description="Développeur en reconversion guidé par une expérience personnelle transformatrice et des valeurs d'écoute et d'autonomie."
        align="center"
        size="medium"
        pattern={true}
      />

      {/* <Container>
        <VisionBanner />
      </Container> */}

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square w-full max-w-xs md:max-w-sm lg:max-w-md rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <Image
                src="/images/about/eric-profile.png"
                alt="Eric Zuber"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>

            <div className="order-1 md:order-2">
              <Typography as="h2" variant="h2" className="mb-6 font-bold italic">
                Un parcours atypique au service de votre autonomie digitale
              </Typography>

              <Typography variant="p" className="mb-4">
                Je m'appelle Eric Zuber et je suis un développeur freelance en reconversion. Mon
                parcours non conventionnel est justement ce qui me permet d'apporter une perspective
                différente à vos défis digitaux.
              </Typography>

              <Typography variant="p" className="mb-4">
                Après une carrière dans la formation et la gestion de conflit, ma reconversion a été
                motivée par une conviction:{' '}
                <span className="font-medium text-[var(--color-primary)] italic block mt-2 mb-2">
                  "Les outils numériques devraient libérer du temps pour l'humain, pas en
                  consommer."
                </span>
              </Typography>

              <Typography variant="p" className="mb-6">
                Cette conviction s'est renforcée lorsque j'ai créé une interface pour mon épouse
                thérapeute, transformant 7h d'administration hebdomadaire en 45 minutes. Cette
                expérience a été le déclencheur de ma démarche actuelle.
              </Typography>

              <div className="p-4 bg-[var(--color-primary-50)] dark:bg-[var(--color-primary-900/20)] rounded-lg border-l-4 border-[var(--color-primary)] mt-8 transition-all duration-300 hover:bg-[var(--color-primary-100)] dark:hover:bg-[var(--color-primary-900/30)]">
                <Typography variant="p" className="italic">
                  "Je crée des ponts entre votre expertise métier et les possibilités du numérique,
                  pour que vous puissiez vous concentrer sur l'essentiel: votre cœur de métier et
                  vos clients."
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="text-center mb-12">
            <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
              Les étapes clés de mon parcours
            </Typography>
            <Typography variant="lead" className="mb-8 max-w-3xl mx-auto">
              Une reconversion guidée par une expérience personnelle transformatrice
            </Typography>
          </div>

          <div className="max-w-4xl mx-auto">
            <Timeline
              steps={journeySteps}
              orientation="vertical"
              withDates={true}
              className="transition-all duration-300 hover:opacity-95"
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
              Mes compétences transférées
            </Typography>
            <Typography variant="lead" className="mb-8 max-w-3xl mx-auto">
              Mon parcours atypique m'a permis de développer des compétences qui vont au-delà du
              technique
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transferredSkills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-full bg-[var(--color-${skill.color}-100)] dark:bg-[var(--color-${skill.color}-900)] flex items-center justify-center transition-transform duration-150 group-hover:scale-110 group-hover:shadow-lg`}
                  >
                    <Icon
                      name={skill.icon}
                      className={`w-8 h-8 text-[var(--color-${skill.color}-600)] dark:text-[var(--color-${skill.color}-400)]`}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <Typography as="h3" variant="h3" className="mb-3 text-center">
                  {skill.title}
                </Typography>

                <Typography
                  variant="p"
                  className="text-gray-600 dark:text-gray-300 mb-4 text-center"
                >
                  {skill.description}
                </Typography>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="text-center mb-12">
            <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
              Mes principes fondamentaux
            </Typography>
            <Typography variant="lead" className="mb-8 max-w-3xl mx-auto">
              Les valeurs qui guident ma démarche et mon approche
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-md"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-full bg-[var(--color-${value.color}-100)] dark:bg-[var(--color-${value.color}-900)] flex items-center justify-center transition-transform duration-150 group-hover:scale-110 group-hover:shadow-lg`}
                  >
                    <Icon
                      name={value.icon}
                      className={`w-8 h-8 text-[var(--color-${value.color}-600)] dark:text-[var(--color-${value.color}-400)]`}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <Typography as="h3" variant="h4" className="mb-3 text-center">
                  {value.title}
                </Typography>

                <Typography variant="p" className="text-gray-600 dark:text-gray-300 text-center">
                  {value.description}
                </Typography>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Typography as="h2" variant="h2" className="mb-6 font-bold italic">
                Ma vision et mes ambitions
              </Typography>

              <Typography variant="p" className="mb-4">
                Je débute mon parcours freelance avec transparence. Cette jeunesse professionnelle
                est ma force: j'apporte un regard neuf, sans être enfermé dans des solutions
                préconçues.
              </Typography>

              <Typography variant="p" className="mb-4">
                Mon objectif: me spécialiser progressivement dans la création d'interfaces
                administratives qui libèrent du temps pour les indépendants et petites entreprises.
              </Typography>

              <Typography variant="p" className="mb-6">
                Je souhaite grandir avec mes clients, en établissant des relations de confiance
                basées sur l'honnêteté, l'écoute et l'adaptation constante.
              </Typography>

              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                  <Typography variant="p">
                    <span className="font-medium">Phase actuelle :</span> Création de sites web
                    personnalisés avec interfaces administratives sur mesure
                  </Typography>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                  <Typography variant="p">
                    <span className="font-medium">En développement :</span> Applications web/mobiles
                    personnalisées pour des besoins spécifiques
                  </Typography>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                  <Typography variant="p">
                    <span className="font-medium">Vision future :</span> Écosystèmes digitaux
                    complets intégrant tous les aspects de votre activité
                  </Typography>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg group transition-all duration-300 hover:shadow-xl">
              <Typography as="h3" variant="h3" className="mb-4 text-[var(--color-primary)]">
                Formation et compétences techniques
              </Typography>

              <div className="space-y-6">
                <div>
                  <Typography as="h4" variant="h4" className="mb-2">
                    Formation Développeur Web
                  </Typography>
                  <Typography variant="p" className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    OpenClassrooms | 2023-2024
                  </Typography>
                  <Typography variant="p" className="text-sm">
                    Formation intensive de 13 mois avec 10 projets professionnels validés
                  </Typography>
                </div>

                <Divider />

                <div>
                  <Typography as="h4" variant="h4" className="mb-2">
                    Technologies maîtrisées
                  </Typography>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 group">
                      <Icon
                        name="Check"
                        className="text-[var(--color-primary)] flex-shrink-0 transition-transform duration-150 group-hover:scale-110"
                        size={16}
                      />
                      <Typography variant="p" className="text-sm">
                        HTML/CSS/SCSS
                      </Typography>
                    </div>
                    <div className="flex items-center gap-2 group">
                      <Icon
                        name="Check"
                        className="text-[var(--color-primary)] flex-shrink-0 transition-transform duration-150 group-hover:scale-110"
                        size={16}
                      />
                      <Typography variant="p" className="text-sm">
                        JavaScript/TypeScript
                      </Typography>
                    </div>
                    <div className="flex items-center gap-2 group">
                      <Icon
                        name="Check"
                        className="text-[var(--color-primary)] flex-shrink-0 transition-transform duration-150 group-hover:scale-110"
                        size={16}
                      />
                      <Typography variant="p" className="text-sm">
                        React/Next.js
                      </Typography>
                    </div>
                    <div className="flex items-center gap-2 group">
                      <Icon
                        name="Check"
                        className="text-[var(--color-primary)] flex-shrink-0 transition-transform duration-150 group-hover:scale-110"
                        size={16}
                      />
                      <Typography variant="p" className="text-sm">
                        React Native
                      </Typography>
                    </div>
                    <div className="flex items-center gap-2 group">
                      <Icon
                        name="Check"
                        className="text-[var(--color-primary)] flex-shrink-0 transition-transform duration-150 group-hover:scale-110"
                        size={16}
                      />
                      <Typography variant="p" className="text-sm">
                        Node.js/Express
                      </Typography>
                    </div>
                    <div className="flex items-center gap-2 group">
                      <Icon
                        name="Check"
                        className="text-[var(--color-primary)] flex-shrink-0 transition-transform duration-150 group-hover:scale-110"
                        size={16}
                      />
                      <Typography variant="p" className="text-sm">
                        Design UI/UX
                      </Typography>
                    </div>
                  </div>
                </div>

                <Divider />

                <div>
                  <Typography as="h4" variant="h4" className="mb-2">
                    Parcours de vie pertinent
                  </Typography>
                  <Typography variant="p" className="text-sm mb-2">
                    Formation et gestion de conflit
                  </Typography>
                  <Typography variant="p" className="text-sm">
                    Environnement familial technique (parents dans l'informatique et l'ingénierie)
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Échangeons sur vos défis quotidiens"
        description="45 minutes pour échanger sur votre projet. Sans pression commerciale, sans jargon technique."
        primaryAction={{
          text: 'Prendre contact',
          url: '/contact',
          variant: 'gradient',
        }}
        secondaryAction={{
          text: 'Découvrir mes projets',
          url: '/projets',
          variant: 'secondary',
        }}
        variant="default"
        backgroundColor="primary"
        textColor="light"
      />
    </main>
  );
}
