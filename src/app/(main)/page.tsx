// Métadonnées SEO pour la page d'accueil
export const metadata = {
  title: 'IrimWebForge - Interfaces admin sur mesure pour votre autonomie numérique',
  description:
    "Libérez-vous de 7h d'administration par semaine. Solutions web personnalisées pour thérapeutes et indépendants. Simplicité, autonomie et excellence.",
};

import React from 'react';
import { HeroSection } from '@/components/organisms/HeroSection';
import { Container } from '@/components/atoms/Container';
import { Typography } from '@/components/atoms/Typography';
import { Icon } from '@/components/atoms/Icon';
import { Badge } from '@/components/atoms/Badge';
import { Card } from '@/components/molecules/Card';
import { HeroPattern } from '@/components/atoms/HeroPattern';
import dynamic from 'next/dynamic';

// Import dynamique des composants non critiques pour optimiser le LCP
const CTASection = dynamic(
  () => import('@/templates/CTASection').then((mod) => ({ default: mod.CTASection })),
  {
    loading: () => <div className="animate-pulse h-48 bg-gray-200 dark:bg-gray-700 rounded"></div>,
  }
);

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
  // ✅ Message d'authenticité intégré dans le HeroSection plutôt qu'en bannière séparée

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

  return (
    <main className="overflow-x-hidden">
      {/* Suppression du bandeau séparé - message intégré dans le hero */}

      {/* Hero Section */}
      <section className="bg-hero-soft py-16 lg:py-24 relative">
        <HeroPattern className="absolute inset-0 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <HeroSection
            title="Le pont entre votre vision et sa concrétisation digitale"
            subtitle={
              'Je crée des espaces numériques où vous vous sentez chez vous - des interfaces pensées pour votre quotidien.\n\n' +
              "Parce que votre temps mérite d'être consacré à votre passion, pas à votre site web."
            }
            ctaText="Parlons de votre projet"
            ctaHref="/contact"
            secondaryCtaText="Comment je travaille"
            secondaryCtaHref="/processus"
            className="w-full space-y-12"
          />
        </div>
      </section>

      {/* 2. Histoire authentique et vision professionnelle */}
      <section className="bg-section-secondary py-16">
        <Container className="max-w-4xl text-center space-y-10 mb-12 relative z-10">
          <Typography variant="h2" className="font-bold italic mb-6 tracking-wide">
            Ce que j'ai appris en chemin
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
      </section>

      {/* 3. Transformations possibles avec transparence */}
      <section className="bg-section-accent py-16">
        <div className="container mx-auto px-4 content-overlay-soft">
          <div className="text-center mb-12">
            <Typography variant="h2" className="font-bold italic mb-6 tracking-wide">
              Ce que mes solutions apportent concrètement
            </Typography>
            <Typography
              variant="lead"
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Ce que vous gagnez vraiment :
            </Typography>
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-stretch">
            {clientBenefits.map((benefit) => {
              return (
                <Card
                  key={benefit.id}
                  variant="accent"
                  color={benefit.color as 'primary' | 'secondary' | 'tertiary'}
                  accentPosition="top"
                  padding="large"
                  hover
                  className={`
              group flex flex-col items-center text-center h-full
              transition-transform duration-150 ease-in-out
              hover:scale-105 hover:shadow-xl
            `}
                  title={
                    <div>
                      <Badge
                        variant={benefit.color as 'primary' | 'secondary' | 'tertiary'}
                        className="mb-2 transition-colors duration-150 group-hover:bg-opacity-80"
                      >
                        {benefit.badge}
                      </Badge>
                      <div className="mb-4 flex justify-center">
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-150 group-hover:scale-110 group-hover:shadow-lg bg-[var(--color-${benefit.color})]/10 dark:bg-[var(--color-${benefit.color})]/20`}
                        >
                          <Icon
                            name={benefit.iconName as import('@/components/atoms/Icon').IconName}
                            className={`w-8 h-8 text-[var(--color-${benefit.color})]`}
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <span className={`text-xl font-bold text-[var(--color-${benefit.color})]`}>
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
        </div>
      </section>

      {/* 4. Cas réel Corps & Sens avec transparence */}
      <section className="bg-section-primary py-16">
        <Container className="text-center">
          <Typography variant="h3" className="font-bold italic mb-2">
            Exemple concret : Corps & Sens
          </Typography>
          <Typography variant="p" className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            J'ai aidé mon épouse thérapeute à passer de 7h à 45min d'administration hebdomadaire
            grâce à une interface sur-mesure. Découvrez l'étude de cas complète dans la section{' '}
            <a href="/projets" className="underline text-[var(--color-primary)]">
              Projets
            </a>
            .
          </Typography>
        </Container>
      </section>

      {/* 5. Mon parcours d'évolution professionnelle */}
      <section className="bg-section-secondary py-16">
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
                style={{
                  borderColor: `var${block.borderColor}`,
                  animationDelay: `${150 + idx * 150}ms`,
                }}
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
                      <li>MoodCycle : application de suivi en cours</li>
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
      <section className="bg-cta-soft py-16">
        <div className="container mx-auto px-4 content-overlay-soft">
          <CTASection
            title="Échangeons sur vos défis quotidiens"
            description="45 minutes pour échanger sur votre projet. Sans pression commerciale, sans jargon technique."
            primaryAction={{
              text: 'Prendre contact',
              url: '/contact',
              variant: 'gradient',
            }}
            backgroundColor="transparent"
            align="center"
          />
        </div>
      </section>
    </main>
  );
}
