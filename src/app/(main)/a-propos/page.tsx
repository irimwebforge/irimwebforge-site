// Métadonnées SEO pour la page à propos
export const metadata = {
  title: "À Propos | IRIM Webforge - Eric Zuber, créateur d'espaces numériques sur mesure",
  description:
    "Découvrez mon parcours, de l'expérience avec mon épouse thérapeute à ma vision pour libérer les indépendants de leur charge administrative.",
};

import { PageHeader } from '@/components/organisms/PageHeader';
import { Typography } from '@/components/atoms/Typography';
import { Icon, IconName } from '@/components/atoms/Icon';
import { Timeline } from '@/components/molecules/Timeline';
import { CTASection } from '@/templates/CTASection';
import { Divider } from '@/components/atoms/Divider';
import Image from 'next/image';
import { Card } from '@/components/molecules/Card';
import { Badge } from '@/components/atoms/Badge';

export default function Page() {
  const journeySteps = [
    {
      id: 'step-1',
      title: 'Formation et accompagnement',
      description:
        "Formation d'animateurs et directeurs de centres de loisirs. Accompagnement dans la prise de fonction, l'identification des valeurs et la maîtrise d'outils concrets. Formation en gestion de conflit et médiation.",
      date: 'Avant 2023',
      icon: 'Users' as IconName,
    },
    {
      id: 'step-2',
      title: 'Révélation personnelle',
      description:
        "En créant une solution pour mon épouse thérapeute, je redécouvre ma passion pour la programmation, endormie depuis 20 ans. L'évidence : j'adore concevoir des interfaces qui simplifient le quotidien.",
      date: 'Janvier 2024',
      icon: 'Lightbulb' as IconName,
    },
    {
      id: 'step-3',
      title: 'Formation aux outils modernes',
      description:
        "OpenClassrooms me forme aux technologies actuelles et au design. Projets concrets et mentorat pour maîtriser React, Next.js et l'art de créer des interfaces intuitives.",
      date: '2024-2025',
      icon: 'Code' as IconName,
    },
    {
      id: 'step-4',
      title: 'Lancement IRIM Webforge',
      description:
        "Création officielle de mon activité pour accompagner les indépendants, en combinant mes compétences d'accompagnement et ma passion retrouvée pour le code.",
      date: 'Mars 2025',
      icon: 'Rocket' as IconName,
    },
  ];

  const approach = [
    {
      title: 'Je comprends votre quotidien',
      description:
        "Mon expérience en formation m'a appris à vraiment écouter. Je cherche à comprendre vos défis réels avant de proposer des solutions.",
      icon: 'Headphones' as IconName,
      color: 'primary' as const,
    },
    {
      title: 'Autonomie progressive',
      description:
        'Je vous rends autonome sans créer de dépendance. Vous maîtrisez votre outil à votre rythme.',
      icon: 'Key' as IconName,
      color: 'secondary' as const,
    },
    {
      title: 'Artisanat digital',
      description:
        'Chaque interface est conçue sur mesure, comme un artisan façonne une pièce unique.',
      icon: 'Tool' as IconName,
      color: 'tertiary' as const,
    },
    {
      title: 'Transparence',
      description: 'Je suis honnête sur mes capacités actuelles et mes ambitions futures.',
      icon: 'Heart' as IconName,
      color: 'primary' as const,
    },
  ];

  return (
    <main className="overflow-x-hidden">
      <PageHeader
        title="Mon parcours au service de votre autonomie"
        description="Développeur en reconversion guidé par une expérience personnelle transformatrice."
        align="center"
        size="medium"
        pattern={true}
      />

      {/* Présentation personnelle */}
      <section className="bg-section-primary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square w-full max-w-xs md:max-w-sm rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
                <Image
                  src="/images/about/eric-profile.png"
                  alt="Eric Zuber"
                  fill
                  priority
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              <div className="order-1 md:order-2">
                <Typography as="h2" variant="h2" className="mb-6 font-bold italic">
                  Eric Zuber, créateur d'IRIM Webforge
                </Typography>

                <Typography variant="p" className="mb-4">
                  Développeur freelance en reconversion, mon parcours atypique me permet d'apporter
                  une perspective différente à vos défis digitaux.
                </Typography>

                <Typography variant="p" className="mb-4">
                  Ma conviction :
                  <span className="font-medium text-[var(--color-primary)] italic block mt-2 mb-2">
                    "Les outils numériques devraient libérer du temps pour l'humain, pas en
                    consommer."
                  </span>
                </Typography>

                <Typography variant="p" className="mb-6">
                  Cette conviction s'est renforcée en créant une interface pour mon épouse
                  thérapeute, transformant 7h d'administration en 45 minutes. Cette expérience a
                  déclenché ma démarche actuelle.
                </Typography>

                <div className="p-4 bg-[var(--color-primary)]/10 rounded-lg border-l-4 border-[var(--color-primary)]">
                  <Typography variant="p" className="italic">
                    "Je crée des ponts entre votre expertise métier et les possibilités du
                    numérique, pour que vous puissiez vous concentrer sur l'essentiel."
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline du parcours */}
      <section className="bg-section-accent py-16">
        <div className="container mx-auto px-4 content-overlay-soft">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
                Les étapes clés de mon parcours
              </Typography>
              <Typography variant="lead" className="mb-8 max-w-3xl mx-auto">
                Une reconversion guidée par une expérience personnelle transformatrice
              </Typography>
            </div>

            <Timeline steps={journeySteps} orientation="vertical" withDates={true} />
          </div>
        </div>
      </section>

      {/* Mon approche */}
      <section className="bg-section-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
              Comment je vous fais gagner du temps
            </Typography>
            <Typography variant="lead" className="mb-8 max-w-3xl mx-auto">
              Des compétences transférées et des valeurs qui guident chaque projet
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((item, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-full bg-[var(--color-${item.color}-100)] dark:bg-[var(--color-${item.color}-900)] flex items-center justify-center transition-transform duration-150 group-hover:scale-110`}
                  >
                    <Icon
                      name={item.icon}
                      className={`w-8 h-8 text-[var(--color-${item.color}-600)] dark:text-[var(--color-${item.color}-400)]`}
                    />
                  </div>
                </div>

                <Typography as="h3" variant="h4" className="mb-3 text-center">
                  {item.title}
                </Typography>

                <Typography
                  variant="p"
                  className="text-gray-600 dark:text-gray-300 text-center text-sm"
                >
                  {item.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision et compétences */}
      <section className="bg-section-primary py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Typography as="h2" variant="h2" className="mb-6 font-bold italic">
                Mon évolution au service de votre autonomie
              </Typography>

              <Typography variant="p" className="mb-4">
                Je débute avec transparence. Cette jeunesse professionnelle est ma force : un regard
                neuf, sans solutions préconçues.
              </Typography>

              <Typography variant="p" className="mb-6">
                Mon objectif : me spécialiser dans les interfaces administratives qui libèrent du
                temps, en grandissant avec mes clients.
              </Typography>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                  <Typography variant="p" className="text-sm">
                    <span className="font-medium">Actuellement :</span> Sites web + interfaces admin
                    sur mesure
                  </Typography>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                  <Typography variant="p" className="text-sm">
                    <span className="font-medium">En développement :</span> Applications web/mobiles
                    personnalisées
                  </Typography>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                  <Typography variant="p" className="text-sm">
                    <span className="font-medium">Vision :</span> Écosystèmes digitaux complets
                  </Typography>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <Typography as="h3" variant="h3" className="mb-4 text-[var(--color-primary)]">
                Formation et compétences
              </Typography>

              <div className="space-y-4">
                <div>
                  <Typography as="h4" variant="h4" className="mb-2">
                    Développeur Web Full-Stack
                  </Typography>
                  <Typography variant="p" className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    OpenClassrooms | 2023-2024
                  </Typography>
                </div>

                <Divider />

                <div>
                  <Typography as="h4" variant="h4" className="mb-3">
                    Technologies maîtrisées
                  </Typography>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'JavaScript/TypeScript',
                      'React/Next.js',
                      'Node.js/Express',
                      'React Native',
                      'HTML/CSS/SCSS',
                      'Design UI/UX',
                    ].map((tech) => (
                      <div key={tech} className="flex items-center gap-2">
                        <Icon
                          name="Check"
                          className="text-[var(--color-primary)] flex-shrink-0"
                          size={16}
                        />
                        <Typography variant="p" className="text-sm">
                          {tech}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cta-soft py-16">
        <div className="container mx-auto px-4 content-overlay-soft">
          <CTASection
            title="Échangeons sur vos défis quotidiens"
            description="45 minutes pour discuter de votre projet. Sans pression commerciale."
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
            backgroundColor="transparent"
          />
        </div>
      </section>
    </main>
  );
}
