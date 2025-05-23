import React from 'react';
import { HeroSection } from '@/components/organisms/HeroSection';
import { CTASection } from '@/templates/CTASection';
import { Container } from '@/components/atoms/Container';
import { Typography } from '@/components/atoms/Typography';
import Image from 'next/image';
import { Icon } from '@/components/atoms/Icon';
import { Badge } from '@/components/atoms/Badge';
import { Card } from '@/components/molecules/Card';
import { Timeline } from '@/components/molecules/Timeline';

const colorMap = {
  primary: {
    bg: 'bg-primary-100 dark:bg-primary-900',
    text: 'text-primary-600 dark:text-primary-400',
    title: 'text-primary-700 dark:text-primary-300',
    badge: 'primary',
    border: 'border-[var(--color-primary)]',
  },
  secondary: {
    bg: 'bg-secondary-100 dark:bg-secondary-900',
    text: 'text-secondary-600 dark:text-secondary-400',
    title: 'text-secondary-700 dark:text-secondary-300',
    badge: 'secondary',
    border: 'border-[var(--color-secondary)]',
  },
  tertiary: {
    bg: 'bg-tertiary-100 dark:bg-tertiary-900',
    text: 'text-tertiary-600 dark:text-tertiary-400',
    title: 'text-tertiary-700 dark:text-tertiary-300',
    badge: 'tertiary',
    border: 'border-[var(--color-tertiary)]',
  },
};

// Blocs pour la section "Mon parcours à vos côtés"
const parcoursBlocks = [
  {
    id: 'now',
    badge: 'Actuel',
    badgeColor: 'primary',
    title: 'Ce que je fais maintenant',
    titleColor: 'primary-600',
    borderColor: '[var(--color-primary)]',
    bgBadge: 'primary-100',
    bgBadgeDark: 'primary-900',
    textBadge: 'primary-700',
    textBadgeDark: 'primary-300',
    content: [
      "Je conçois des sites web où vous vous sentez vraiment chez vous. Chaque interface est pensée pour s'adapter à votre quotidien, avec une attention particulière à la simplicité et à l'autonomie.",
      'Idéal si vous souhaitez un site professionnel, élégant et facile à gérer vous-même, sans stress technique ni dépendance extérieure.',
    ],
  },
  {
    id: 'develop',
    badge: 'En développement',
    badgeColor: 'secondary',
    title: 'Ce que je développe activement',
    titleColor: 'secondary-600',
    borderColor: '[var(--color-secondary)]',
    bgBadge: 'secondary-100',
    bgBadgeDark: 'secondary-900',
    textBadge: 'secondary-700',
    textBadgeDark: 'secondary-300',
    content: [
      'Je crée des applications qui vont plus loin que le site vitrine. Par exemple, MoodCycle, une application de suivi en cours de création, ou des outils pour connecter naturellement vos données et vos services.',
      "Mon objectif : bâtir, à terme, des systèmes où tout communique naturellement – votre site, vos outils, vos données – pour une expérience fluide, sans complications techniques. Cette vision se construit main dans la main avec des personnes qui, comme vous, valorisent la simplicité et l'indépendance.",
    ],
  },
];

export default function HomePage() {
  // Bannière explicative de vision
  const _VisionNotice = () => (
    <div className="bg-amber-50 dark:bg-[var(--color-tertiary)]/10 border-b border-amber-200 dark:border-[var(--color-tertiary)]/30 py-2">
      <Container>
        <p className="text-sm text-[var(--color-tertiary)] text-center">
          Cette page présente mon parcours: de l'expérience fondatrice avec mon épouse thérapeute à
          ma vision pour aider d'autres indépendants à libérer leur temps administratif.
        </p>
      </Container>
    </div>
  );

  // Données mises à jour pour la section "Transformations concrètes"
  const clientBenefits = [
    {
      id: 'time',
      title: "Récupérez du temps pour l'essentiel",
      description:
        "Concentrez-vous sur vos clients et votre expertise, pas sur votre site web. Comme mon épouse thérapeute : de 7h à 45min d'administration hebdomadaire.",
      iconName: 'Clock',
      color: 'primary',
      badge: 'Temps',
    },
    {
      id: 'autonomy',
      title: 'Une autonomie numérique sereine',
      description:
        "Modifiez vos contenus sans crainte ni dépendance technique. Fini les appels au \"neveu qui s'y connaît\" ou l'attente d'un prestataire externe.",
      iconName: 'CircleUser',
      color: 'secondary',
      badge: 'Autonomie',
    },
    {
      id: 'authenticity',
      title: 'Une présence qui vous ressemble vraiment',
      description:
        "Votre site reflète authentiquement qui vous êtes et comment vous travaillez. Une image professionnelle alignée avec votre niveau d'excellence.",
      iconName: 'Sparkles',
      color: 'tertiary',
      badge: 'Authenticité',
    },
  ];

  // Projet réel avec l'épouse thérapeute
  const featuredProject = {
    id: 'corps-et-sens',
    title: 'Corps & Sens: Un cas réel de transformation',
    slug: 'corps-et-sens',
    description:
      "Pour mon épouse thérapeute, j'ai créé une interface sur mesure qui a transformé sa gestion de site. Cette expérience concrète a formé ma vision des solutions que je souhaite proposer.",
    imageUrl: '/images/projects/corps-et-sens.jpg',
    tags: [
      { id: 'tag1', label: 'De 7h à 45min', color: 'primary' },
      { id: 'tag2', label: 'Projet personnel', color: 'secondary' },
    ],
    clientName: 'Projet personnel',
    transformation: {
      before: 'LE DEFI',
      after: 'LE RESULTAT',
    },
  };

  return (
    <main className="overflow-x-hidden">
      {/* Bandeau de vision */}
      {/* <VisionNotice /> */}

      {/* 1. HeroSection simplifiée et transparente */}
      <section className="min-h-[90vh] flex items-center relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/images/temp/hero-background.svg"
            alt=""
            fill
            style={{ objectFit: 'cover' }}
            priority
            loading="eager"
          />
        </div>
        <HeroSection
          title="Le pont entre votre vision et sa concrétisation digitale"
          subtitle={
            "Je crée des espaces numériques où vous vous sentez chez vous des interfaces pensées pour votre quotidien.   Parce que votre temps mérite d'être consacré à votre passion, pas à votre site web."
          }
          ctaText="Parlons de votre projet"
          ctaHref="/contact"
          secondaryCtaText="Comment je travaille"
          secondaryCtaHref="/processus"
          className="w-full space-y-12"
        />
        {/* Transition vers la section suivante */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900" />
      </section>

      {/* 2. Histoire authentique et vision professionnelle */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 relative" id="vision">
        <Container className="max-w-4xl text-center space-y-10 mb-12 relative z-10">
          <Typography variant="h2" className="font-bold italic mb-6 tracking-wide">
            Un guide, pas un simple technicien
          </Typography>
          <Typography variant="lead" className="text-gray-700 dark:text-gray-200 leading-relaxed">
            {`En regardant mon épouse thérapeute lutter avec son site web chaque dimanche, j'ai compris l'évidence : ce n'est pas à vous de vous adapter aux outils, mais aux outils de s'adapter à vous. Cette conviction guide chacun de mes projets aujourd'hui.`}
          </Typography>
          <div className="flex items-center justify-center space-x-3 mt-6">
            <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
              <span className="text-primary-600 dark:text-primary-400 font-bold">EZ</span>
            </div>
            <Typography variant="subtle" className="text-gray-700 dark:text-gray-300">
              Eric Zuber, créateur d'espaces numériques sur mesure
            </Typography>
          </div>
        </Container>
        {/* Transition vers la section suivante */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-50 dark:from-gray-900 to-transparent" />
      </section>

      {/* 3. Transformations possibles avec transparence */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden" id="transformation">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent opacity-20 dark:from-[var(--color-primary)]/20 dark:opacity-10"></div>
        <Container className="relative z-10 mb-12">
          <div className="text-center mb-12">
            <Typography variant="h2" className="font-bold italic mb-6 tracking-wide">
              Ce que mes solutions apportent concrètement
            </Typography>
            <Typography
              variant="lead"
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Pour vous libérer, concrètement :
            </Typography>
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-stretch">
            {clientBenefits.map((benefit) => {
              const color = benefit.color as 'primary' | 'secondary' | 'tertiary';
              return (
                <Card
                  key={benefit.id}
                  variant="accent"
                  color={color}
                  accentPosition="top"
                  padding="large"
                  hover
                  className={`
              group flex flex-col items-center text-center h-full
              transition-transform duration-150 ease-in-out
              hover:scale-105 hover:shadow-xl
              ${colorMap[color].border}
            `}
                  title={
                    <div>
                      <Badge
                        variant={colorMap[color].badge as 'primary' | 'secondary' | 'tertiary'}
                        className="mb-2 transition-colors duration-150 group-hover:bg-opacity-80"
                      >
                        {benefit.badge}
                      </Badge>
                      <div className="mb-4 flex justify-center">
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-150 group-hover:scale-110 group-hover:shadow-lg ${colorMap[color].bg}`}
                        >
                          <Icon
                            name={benefit.iconName as import('@/components/atoms/Icon').IconName}
                            className={`w-8 h-8 ${colorMap[color].text}`}
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <span className={`text-xl font-bold ${colorMap[color].title}`}>
                        {benefit.title}
                      </span>
                    </div>
                  }
                >
                  <Typography
                    variant="p"
                    className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed"
                  >
                    {benefit.description}
                  </Typography>
                </Card>
              );
            })}
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white dark:to-gray-900" />
      </section>

      {/* 4. Cas réel Corps & Sens avec transparence */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900">
        <Container className="text-center">
          <Typography variant="h3" className="font-bold italic mb-2">
            Exemple concret : Corps & Sens
          </Typography>
          <Typography variant="p" className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            J'ai aidé mon épouse thérapeute à passer de 7h à 45min d'administration hebdomadaire grâce à une interface sur-mesure. Découvrez l'étude de cas complète dans la section <a href="/projets" className="underline text-[var(--color-primary)]">Projets</a>.
          </Typography>
        </Container>
      </section>

      {/* 5. Mon parcours d'évolution professionnelle */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50/90 via-white/80 to-[var(--color-secondary)]/10 dark:from-gray-900 dark:via-gray-900/80 dark:to-[var(--color-secondary)]/20 relative">
        <Container className="mb-12">
          <div className="text-center mb-12">
            <Typography variant="h2" className="font-bold italic mb-6 tracking-wide">
              Mon parcours à vos côtés
            </Typography>
            <Typography
              variant="lead"
              className="text-gray-700 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed"
            >
              Mon chemin, étape par étape, pour mieux vous accompagner.
            </Typography>
          </div>

          {/* Timeline centrée */}
          <div className="max-w-2xl mx-auto mb-16">
            <Timeline
              steps={[
                {
                  id: 'step-1',
                  title: 'Reconversion & formation',
                  description:
                    '13 mois pour maîtriser le développement web et comprendre les besoins réels des indépendants.',
                  date: '2023',
                  icon: 'Code',
                  color: 'primary',
                },
                {
                  id: 'step-2',
                  title: 'Premier projet transformateur',
                  description:
                    "Une interface sur-mesure pour mon épouse thérapeute : 7h d'administration réduites à 45min.",
                  date: '2024',
                  icon: 'Lightbulb',
                  color: 'secondary',
                },
                {
                  id: 'step-3',
                  title: "Lancement d'IrimWebForge",
                  description:
                    "Aider d'autres indépendants à retrouver du temps et de l'autonomie.",
                  date: '2024',
                  icon: 'Rocket',
                  color: 'tertiary',
                },
                {
                  id: 'step-4',
                  title: 'Outils sur-mesure en évolution',
                  description:
                    'Des applications pensées pour évoluer avec vos besoins, étape par étape.',
                  date: '2025+',
                  icon: 'TrendingUp',
                  color: 'primary',
                },
              ]}
              orientation="vertical"
              withDates={true}
              className="transition-all duration-300 hover:opacity-95"
            />
          </div>

          {/* Titre de contexte pour les blocs */}
          <div className="text-center mb-8">
            <Typography
              variant="h3"
              className="font-bold italic tracking-wide text-secondary-700 dark:text-secondary-300"
            >
              Aujourd'hui & Demain
            </Typography>
          </div>

          {/* Blocs allégés */}
          <div className="grid md:grid-cols-2 gap-8">
            {parcoursBlocks.map((block, idx) => (
              <div
                key={block.id}
                className={`bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-l-4 group transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fade-in`}
                style={{ borderColor: `var${block.borderColor}`, animationDelay: `${150 + idx * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  <Badge
                    variant={block.badgeColor as 'primary' | 'secondary'}
                    className="mr-3 text-xs font-semibold"
                  >
                    {block.badge}
                  </Badge>
                  <Typography
                    variant="h3"
                    className={`font-bold text-${block.titleColor} dark:text-${block.titleColor.replace('600', '400')} tracking-wide`}
                  >
                    {block.title}
                  </Typography>
                </div>
                {/* Texte allégé */}
                {block.id === 'now' ? (
                  <>
                    <Typography
                      variant="p"
                      className="text-gray-700 dark:text-gray-300 mb-2 leading-relaxed"
                    >
                      Sites web sur-mesure, pensés pour votre quotidien et votre autonomie.
                    </Typography>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 text-sm">
                      <li>Interface simple, élégante et personnalisée</li>
                      <li>Gestion facile, sans stress technique</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <Typography
                      variant="p"
                      className="text-gray-700 dark:text-gray-300 mb-2 leading-relaxed"
                    >
                      Applications et outils qui vont plus loin que le site vitrine.
                    </Typography>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 text-sm">
                      <li>MoodCycle : application de suivi en cours</li>
                      <li>Connexion naturelle entre vos outils et vos données</li>
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. CTA honnête et direct */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]">
        <CTASection
          title="Échangeons sur vos défis quotidiens"
          description="45 minutes pour échanger sur votre projet. Sans pression commerciale, sans jargon technique."
          primaryAction={{
            text: 'Prendre contact',
            url: '/contact',
            variant: 'gradient',
          }}
          backgroundColor="gradient"
          align="center"
        />
      </section>
    </main>
  );
}
