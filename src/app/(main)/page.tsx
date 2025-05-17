import React from 'react';
import { HeroSection } from '@/components/organisms/HeroSection';
import { CTASection } from '@/templates/CTASection';
import { Container } from '@/components/atoms/Container';
import { Typography } from '@/components/atoms/Typography';
import Image from 'next/image';

export default function HomePage() {
  // Bandeau explicatif de vision
  const VisionNotice = () => (
    <div className="bg-blue-50 dark:bg-blue-900 border-b border-blue-200 dark:border-blue-800 py-2">
      <Container>
        <p className="text-sm text-blue-800 dark:text-blue-200 text-center">
          Ce site présente ma vision professionnelle et les résultats que j'aspire à créer pour mes
          clients. Certains éléments représentent des projections basées sur mon expérience.
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
        "L'expérience réussie avec mon épouse thérapeute (7h → 45min) montre qu'une interface bien conçue peut libérer significativement votre temps. Imaginez modifier votre planning en quelques clics.",
      icon: 'Clock',
      color: 'primary',
    },
    {
      id: 'simplicity',
      title: 'Un site que vous pourriez enfin contrôler',
      description:
        'Fini les appels au "neveu qui s\'y connaît" ou l\'attente d\'un prestataire. Avec des interfaces pensées pour vous, mettez à jour votre site sans risquer de "tout casser" - même si la technologie vous intimide.',
      icon: 'Smile',
      color: 'secondary',
    },
    {
      id: 'identity',
      title: 'Une image à la hauteur de votre expertise',
      description:
        "Votre site devrait refléter fidèlement votre niveau d'excellence, rassurant vos prospects et fidélisant vos clients. Il peut devenir un accélérateur plutôt qu'un frein pour votre activité.",
      icon: 'Award',
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
          title="Des sites web qui pourraient libérer votre temps"
          subtitle="Mon objectif: créer des sites que vous pourriez gérer vous-même, sans compétence technique et sans stress. Un projet personnel a déjà transformé 7h de gestion en 45min par semaine."
          ctaText="Discuter de votre projet"
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
            "En créant une solution numérique adaptée pour mon épouse thérapeute, j'ai transformé
            ses 7 heures de lutte administrative hebdomadaire en seulement 45 minutes d'interactions
            fluides. Cette expérience personnelle a inspiré ma vision des solutions que je souhaite
            proposer."
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
              Ce que je souhaite créer pour mes clients
            </Typography>
            <Typography
              variant="lead"
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Basé sur mon expérience personnelle et ma compréhension des défis des indépendants,
              voici les transformations que j'aspire à réaliser:
            </Typography>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {clientBenefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-white dark:bg-gray-800 rounded-lg p-10 shadow-md hover:shadow-lg transition-shadow"
              >
                <div
                  className={`h-16 w-16 rounded-full bg-${benefit.color}-100 dark:bg-${benefit.color}-900 flex items-center justify-center mb-4`}
                >
                  <span
                    className={`text-${benefit.color}-600 dark:text-${benefit.color}-400 text-xl`}
                  >
                    {benefit.icon}
                  </span>
                </div>
                <Typography variant="h3" className="font-bold mb-3 text-xl tracking-wide">
                  {benefit.title}
                </Typography>
                <Typography
                  variant="p"
                  className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed"
                >
                  {benefit.description}
                </Typography>
              </div>
            ))}
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

      {/* 5. Ma vision future */}
      <section className="py-32 bg-gray-50 dark:bg-gray-900 relative">
        <Container className="mb-16">
          <div className="text-center mb-24">
            <Typography variant="h2" className="font-bold italic mb-6 tracking-wide">
              Mon parcours d'évolution professionnelle
            </Typography>
            <Typography
              variant="p"
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Par transparence, je présente à la fois mes compétences actuelles et ma vision
              d'évolution. Les solutions présentées reflètent des services actuels et futurs.
            </Typography>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-md">
              <Typography
                variant="h3"
                className="font-bold mb-4 text-primary-600 dark:text-primary-400 tracking-wide"
              >
                Ce que je réalise actuellement
              </Typography>
              <Typography
                variant="p"
                className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
              >
                Sites web personnalisés avec interfaces de gestion sur mesure. Des sites qui vous
                ressemblent vraiment, associés à des interfaces d'administration que vous pouvez
                utiliser sans compétence technique.
              </Typography>
              <div className="p-6 bg-primary-50 dark:bg-primary-950 rounded-md mb-8">
                <Typography
                  variant="subtle"
                  className="font-medium text-gray-800 dark:text-gray-200"
                >
                  L'exemple de Corps & Sens montre qu'une interface bien conçue peut transformer 7h
                  d'administration en 45min hebdomadaires.
                </Typography>
              </div>
              <Typography
                variant="p"
                className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed"
              >
                Particulièrement adapté aux thérapeutes, artisans et professionnels qui cherchent à
                reprendre le contrôle de leur présence en ligne sans y consacrer trop de temps.
              </Typography>
            </div>

            <div className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-md">
              <Typography
                variant="h3"
                className="font-bold mb-4 text-secondary-600 dark:text-secondary-400 tracking-wide"
              >
                Ce que je développe pour l'avenir
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
          title="Discutons de votre projet et de ma vision"
          description="Explorons ensemble comment je pourrais créer pour vous une solution qui libère votre temps et votre énergie"
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
