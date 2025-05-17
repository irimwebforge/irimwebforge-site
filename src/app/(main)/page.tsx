import React from 'react';
import { HeroSection } from '@/components/organisms/HeroSection';
import { CTASection } from '@/templates/CTASection';
import { Container } from '@/components/atoms/Container';
import { Typography } from '@/components/atoms/Typography';
import Image from 'next/image';
import { Icon } from '@/components/atoms/Icon';

export default function HomePage() {
  // Bannière explicative de vision
  const VisionNotice = () => (
    <div className="bg-blue-50 dark:bg-blue-900 border-b border-blue-200 dark:border-blue-800 py-2">
      <Container>
        <p className="text-sm text-blue-800 dark:text-blue-200 text-center">
          Cette page présente mon parcours: de l'expérience fondatrice avec mon épouse thérapeute à ma vision pour aider d'autres indépendants à libérer leur temps administratif.
        </p>
      </Container>
    </div>
  );

  // Données pour la section "Transformations possibles"
  const clientBenefits = [
    {
      id: 'time',
      title: 'Récupérez vos dimanches et vos soirées',
      description:
        "L'expérience réussie avec mon épouse thérapeute montre qu'une interface bien conçue peut libérer significativement votre temps. Imaginez modifier votre planning en quelques clics.",
      icon: '🧘‍♀ ',
      color: 'primary',
    },
    {
      id: 'simplicity',
      title: 'Un site que vous pourriez enfin contrôler',
      description:
        'Fini les appels au "neveu qui s\'y connaît" ou l\'attente d\'un prestataire. Avec des interfaces pensées pour vous, mettez à jour votre site sans risquer de "tout casser" - même si la technologie vous intimide.',
      icon: '🪄',
      color: 'secondary',
    },
    {
      id: 'identity',
      title: 'Une image à la hauteur de votre expertise',
      description:
        "Votre site devrait refléter fidèlement votre niveau d'excellence, rassurant vos prospects et fidélisant vos clients. Il peut devenir un accélérateur plutôt qu'un frein pour votre activité.",
      icon: '🌟',
      color: 'tertiary',
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
      before: '7 heures de frustration hebdomadaire',
      after: "45 minutes d'interactions fluides",
    },
  };

  return (
    <main className="overflow-x-hidden">
      {/* Bandeau de vision */}
      <VisionNotice />

      {/* 1. HeroSection simplifiée et transparente */}
      <section className="min-h-[90vh] flex items-center relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/images/temp/hero-background.svg"
            alt=""
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <HeroSection
          title="Des interfaces qui comprennent votre métier"
          subtitle="Je conçois des espaces administratifs intuitifs où vous retrouvez vos processus métier, pas du jargon technique. Un premier projet a déjà transformé 7h de gestion hebdomadaire en 45min pour un cabinet thérapeutique."
          ctaText="Parlez-moi de vos défis quotidiens"
          ctaHref="/contact"
          secondaryCtaText="Découvrir ma vision"
          secondaryCtaHref="#vision"
          className="w-full space-y-12"
        />
        {/* Transition vers la section suivante */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900" />
      </section>

      {/* 2. Histoire authentique et vision professionnelle */}
      <section className="py-28 bg-gray-50 dark:bg-gray-900 relative" id="vision">
        <Container className="max-w-4xl text-center space-y-10 mb-16 relative z-10">
          <Typography variant="h2" className="font-bold italic mb-6 tracking-wide">
            Ma vision et mon parcours
          </Typography>
          <Typography variant="lead" className="text-gray-700 dark:text-gray-200 leading-relaxed">
            "En observant mon épouse thérapeute lutter avec son interface administrative, j'ai compris que le problème n'était pas son niveau technique, mais des outils qui ignoraient sa réalité métier. Cette prise de conscience a défini ma mission: créer des interfaces qui respectent votre façon de travailler."
          </Typography>
          <div className="flex items-center justify-center space-x-3 mt-6">
            <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
              <span className="text-primary-600 dark:text-primary-400 font-bold">EZ</span>
            </div>
            <Typography variant="subtle" className="text-gray-700 dark:text-gray-300">
              Eric Zuber, développeur spécialisé en interfaces sur mesure
            </Typography>
          </div>
        </Container>
        {/* Transition vers la section suivante */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-50 dark:from-gray-900 to-transparent" />
      </section>

      {/* 3. Transformations possibles avec transparence */}
      <section className="py-32 relative overflow-hidden" id="transformation">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-20 dark:from-primary-900 dark:opacity-10"></div>
        <Container className="relative z-10 mb-16">
          <div className="text-center mb-24">
            <Typography variant="h2" className="font-bold italic mb-6 tracking-wide">
              Ce que mes solutions apportent concrètement
            </Typography>
            <Typography
              variant="lead"
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Voici l'impact que je souhaite créer pour mes clients :
            </Typography>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-10 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mb-4">
                <span className="text-3xl text-primary-600 dark:text-primary-400" aria-hidden="true">🧘‍♀️</span>
              </div>
              <Typography variant="h3" className="font-bold mb-3 text-xl tracking-wide">
                Récupérez le temps pour votre cœur de métier
              </Typography>
              <Typography variant="p" className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                Plus de temps pour vos clients, votre expertise, votre créativité.
              </Typography>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-10 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 rounded-full bg-secondary-100 dark:bg-secondary-900 flex items-center justify-center mb-4">
                <span className="text-3xl text-secondary-600 dark:text-secondary-400" aria-hidden="true">🪄</span>
              </div>
              <Typography variant="h3" className="font-bold mb-3 text-xl tracking-wide">
                Une présence en ligne que vous contrôlez vraiment
              </Typography>
              <Typography variant="p" className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                Mettez à jour sans dépendre d'un expert externe.
              </Typography>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-10 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 rounded-full bg-tertiary-100 dark:bg-tertiary-900 flex items-center justify-center mb-4">
                <span className="text-3xl text-tertiary-600 dark:text-tertiary-400" aria-hidden="true">🌟</span>
              </div>
              <Typography variant="h3" className="font-bold mb-3 text-xl tracking-wide">
                Une cohérence qui renforce votre crédibilité
              </Typography>
              <Typography variant="p" className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                Une image professionnelle alignée avec votre niveau d'excellence.
              </Typography>
            </div>
          </div>
        </Container>
        {/* Transition vers la section suivante */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white dark:to-gray-900" />
      </section>

      {/* 4. Cas réel Corps & Sens avec transparence */}
      <section className="py-32 bg-white dark:bg-gray-900 relative" id="cas-concret">
        <Container className="mb-16">
          <div className="text-center mb-24">
            <Typography variant="h2" className="font-bold italic mb-6 tracking-wide">
              Un cas réel qui a inspiré ma démarche
            </Typography>
            <Typography
              variant="p"
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Le projet personnel réalisé pour mon épouse thérapeute a transformé sa gestion
              administrative. Cette expérience concrète guide ma vision pour mes futurs clients.
            </Typography>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={featuredProject.imageUrl}
                alt="Corps & Sens - Interface simplifiée"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <span className="inline-block px-3 py-1 bg-primary-500 text-white rounded-full text-sm font-medium mb-2">
                  Projet personnel: De 7h à 45min par semaine
                </span>
                <Typography variant="h3" className="text-white font-bold mb-2 tracking-wide">
                  {featuredProject.title}
                </Typography>
              </div>
            </div>

            <div className="space-y-10">
              <div className="bg-red-50 dark:bg-red-950 p-8 rounded-lg border-l-4 border-red-500">
                <Typography
                  variant="h4"
                  className="text-red-700 dark:text-red-400 font-bold mb-2 tracking-wide"
                >
                  SITUATION INITIALE
                </Typography>
                <Typography
                  variant="p"
                  className="text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  Un site créé sur Wix avec une interface administrative complexe. Mettre à jour le
                  planning prenait des heures et créait de la frustration. La maintenance
                  hebdomadaire nécessitait environ 7 heures.
                </Typography>
              </div>

              <div className="bg-green-50 dark:bg-green-950 p-8 rounded-lg border-l-4 border-green-500">
                <Typography
                  variant="h4"
                  className="text-green-700 dark:text-green-400 font-bold mb-2 tracking-wide"
                >
                  SOLUTION CRÉÉE
                </Typography>
                <Typography
                  variant="p"
                  className="text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  Une interface administrative sur mesure, intuitive et adaptée aux besoins
                  spécifiques d'un cabinet thérapeutique. Mise à jour simplifiée du planning et
                  gestion facilitée des contenus.
                </Typography>
              </div>

              <div className="bg-primary-50 dark:bg-primary-950 p-8 rounded-lg mt-12">
                <Typography
                  variant="p"
                  className="text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  <strong>Résultat:</strong> Réduction du temps administratif de 7h à environ 45min
                  par semaine. Cette transformation a permis de libérer du temps pour la formation
                  continue et l'accompagnement des clients.
                </Typography>
              </div>
            </div>
          </div>
        </Container>
        {/* Transition vers la section suivante */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-white dark:from-gray-900 to-gray-50 dark:to-gray-900" />
      </section>

      {/* 5. Mon parcours d'évolution professionnelle */}
      <section className="py-32 bg-gray-50 dark:bg-gray-900 relative">
        <Container className="mb-16">
          <div className="text-center mb-24">
            <Typography variant="h2" className="font-bold italic mb-6 tracking-wide">
              Mon parcours à vos côtés
            </Typography>
            <Typography
              variant="p"
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Je débute mon aventure freelance avec une expérience fondatrice et une vision claire. Découvrez où j'en suis aujourd'hui et comment nous pourrions évoluer ensemble.
            </Typography>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-md">
              <Typography
                variant="h3"
                className="font-bold mb-4 text-primary-600 dark:text-primary-400 tracking-wide"
              >
                Ce que je réalise aujourd'hui
              </Typography>
              <Typography
                variant="p"
                className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
              >
                Sites web avec interfaces administratives intuitives qui respectent vos processus métier. L'expérience Corps & Sens montre qu'une interface bien conçue peut transformer 7h d'administration en 45min hebdomadaires.
              </Typography>
              <Typography
                variant="p"
                className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed"
              >
                Idéal pour les indépendants qui veulent reprendre le contrôle de leur présence en ligne sans y consacrer trop de temps.
              </Typography>
            </div>

            <div className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-md">
              <Typography
                variant="h3"
                className="font-bold mb-4 text-secondary-600 dark:text-secondary-400 tracking-wide"
              >
                Ce que je développe activement
              </Typography>
              <Typography
                variant="p"
                className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
              >
                Applications web/mobiles personnalisées pour étendre votre impact au-delà de votre
                site web. Actuellement en développement avec le projet MoodCycle, une application de
                suivi de cycle.
              </Typography>
              <div className="p-6 bg-secondary-50 dark:bg-secondary-900 rounded-md mb-8">
                <Typography
                  variant="subtle"
                  className="font-medium text-gray-800 dark:text-gray-200"
                >
                  Écosystèmes digitaux complets pour une intégration fluide entre site, gestion,
                  application et plus encore.
                </Typography>
              </div>
              <Typography
                variant="p"
                className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed"
              >
                Ma vision pour les clients avec qui j'aurai établi une relation de confiance
                durable. Je vous invite à rejoindre mon parcours d'évolution pour grandir ensemble.
              </Typography>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. CTA honnête et direct */}
      <section className="py-32 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]">
        <CTASection
          title="Échangeons sur vos défis quotidiens"
          description="Une conversation de 45 minutes qui vous apportera des perspectives nouvelles, sans jargon technique, juste une écoute attentive."
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
