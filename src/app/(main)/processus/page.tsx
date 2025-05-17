'use client';

import { PageHeader } from '@/components/organisms/PageHeader';
import { Typography } from '@/components/atoms/Typography';
import { Container } from '@/components/atoms/Container';
import { Icon, IconName } from '@/components/atoms/Icon';
import { ProcessTimeline } from '@/components/molecules/ProcessTimeline';
import { FAQ } from '@/components/molecules/FAQ';
import { CTASection } from '@/templates/CTASection';
import { StatsShowcase } from '@/templates/StatsShowcase';
import { Alert } from '@/components/molecules/Alert';

export default function Page() {
  // Bannière de vision
  const VisionBanner = () => (
    <Alert variant="info" title="" className="mb-8 mx-auto max-w-5xl">
      <p className="text-sm text-blue-800 dark:text-blue-200">
        Cette page présente ma vision d'un processus idéal, inspiré par mon expérience avec le projet Corps & Sens. Je privilégie la transparence sur mon approche en développement.
      </p>
    </Alert>
  );

  const processSteps = [
    {
      id: 'step-1',
      title: 'Conversation découverte',
      description:
        'Un échange sans engagement de 45 minutes pour explorer vos frustrations quotidiennes et vos aspirations. Je ne parle pas technique, mais je cherche à comprendre votre métier et vos contraintes réelles.',
      icon: 'Users' as IconName,
      color: 'primary' as const,
    },
    {
      id: 'step-2',
      title: 'Immersion dans votre métier',
      description:
        'Je souhaite consacrer environ 25% du temps total du projet à comprendre votre activité, vos spécificités et vos processus avant même de commencer à parler de solutions techniques.',
      icon: 'Glasses' as IconName,
      color: 'primary' as const,
    },
    {
      id: 'step-3',
      title: 'Conception adaptée à vos besoins',
      description:
        'À partir de cette immersion, nous définirions ensemble les fonctionnalités essentielles dont vous avez besoin dans votre quotidien, sans surcharge technique inutile.',
      icon: 'Pen' as IconName,
      color: 'secondary' as const,
    },
    {
      id: 'step-4',
      title: 'Développement par étapes',
      description:
        "La création se ferait par cycles courts avec des retours fréquents. Vous verriez votre solution prendre forme progressivement et pourriez l'ajuster en fonction de vos sensations.",
      icon: 'Code' as IconName,
      color: 'secondary' as const,
    },
    {
      id: 'step-5',
      title: 'Formation personnalisée',
      description:
        "Une fois la solution créée, vous bénéficieriez d'une formation sur mesure adaptée à votre aisance technique, avec des supports visuels que vous pourriez consulter à votre rythme.",
      icon: 'GraduationCap' as IconName,
      color: 'tertiary' as const,
    },
    {
      id: 'step-6',
      title: 'Accompagnement progressif',
      description:
        "L'objectif serait d'établir une relation qui vous rendrait progressivement autonome, tout en restant disponible pour les évolutions futures et l'adaptation à votre croissance.",
      icon: 'Rocket' as IconName,
      color: 'tertiary' as const,
    },
  ];

  const faqItems = [
    {
      id: 'faq-1',
      question: 'Comment se déroulerait une conversation découverte?',
      answer:
        "Un échange de 45 minutes où j'écouterais plus que je ne parlerais. L'objectif: comprendre votre activité, vos frustrations actuelles et vos aspirations, sans jargon technique.",
    },
    {
      id: 'faq-2',
      question: 'Combien de temps faudrait-il pour développer un site?',
      answer:
        "Cela dépend de la complexité du projet, mais l'accent est mis sur la compréhension de votre métier avant tout. En général, il faut compter entre 4 et 8 semaines pour un site sur mesure.",
    },
    {
      id: 'faq-3',
      question: 'Pourrais-je vraiment mettre à jour mon site moi-même?',
      answer:
        "Absolument, c'est la raison d'être de mon approche. L'interface administrative serait conçue spécifiquement pour votre façon de travailler, avec une formation personnalisée incluse.",
    },
    {
      id: 'faq-4',
      question: "Utiliseriez-vous WordPress ou d'autres CMS?",
      answer:
        "Je privilégie des solutions sur mesure pour une adaptation totale à vos besoins, sans vous imposer les contraintes d'un CMS standard.",
    },
    {
      id: 'faq-5',
      question: 'Que se passerait-il si mon activité évolue?',
      answer:
        "Les solutions sont pensées pour évoluer avec vous, grâce à un accompagnement régulier et des ajustements continus.",
    },
  ];

  const stats = [
    {
      value: '25%',
      label: "Temps d'immersion",
      description: 'Que je consacrerais à comprendre votre métier',
    },
    {
      value: '4-8',
      label: 'Semaines',
      description: 'Estimation pour un projet standard',
    },
    {
      value: '24h',
      label: 'De réactivité',
      description: 'Objectif pour répondre à vos demandes',
    },
    {
      value: '1 an',
      label: "D'accompagnement",
      description: 'Pour une évolution sereine',
    },
  ];

  return (
    <main>
      <PageHeader
        title="Une approche qui place votre métier au centre"
        description="Ma vision: vous accompagner de l'idée à l'autonomie en comprenant d'abord votre activité avant toute considération technique."
        theme="primary"
        align="center"
        size="medium"
      />

      <Container>
        <VisionBanner />
      </Container>

      <section className="py-12">
        <Container>
          <div className="text-center mb-12">
            <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
              Un processus en 6 étapes, de la compréhension à l'autonomie
            </Typography>
            <Typography variant="lead" className="max-w-3xl mx-auto">
              Une méthode pensée pour créer des solutions véritablement adaptées à vos besoins spécifiques.
            </Typography>
          </div>

          <ProcessTimeline
            steps={processSteps}
            orientation="vertical"
            accentColor="primary"
            withNumbers={true}
          />
        </Container>
      </section>

      <StatsShowcase
        title="Mes engagements pour une collaboration de qualité"
        description="Des principes fondamentaux qui guideraient notre travail ensemble"
        stats={stats}
        layout="horizontal"
        backgroundColor="light"
      />

      <section className="py-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Typography as="h2" variant="h2" className="mb-8 text-center font-bold italic">
              Questions fréquentes
            </Typography>

            <FAQ items={faqItems} variant="default" color="primary" icon="plus" />
          </div>
        </Container>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Typography as="h2" variant="h2" className="mb-6 font-bold italic">
                Première étape: une conversation sans engagement
              </Typography>

              <Typography variant="p" className="mb-4">
                Un échange de 45 minutes gratuit et sans obligation qui vous apportera déjà des perspectives nouvelles sur votre présence digitale, que nous travaillions ensemble ou non.
              </Typography>

              <Typography variant="p" className="mb-6">
                Que nous décidions de travailler ensemble ou non, cette conversation vous
                apporterait déjà des pistes de réflexion concrètes pour votre projet.
              </Typography>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                  <Typography variant="p">Sans engagement et totalement gratuit</Typography>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                  <Typography variant="p">45 minutes d'échange constructif</Typography>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                  <Typography variant="p">
                    Des premières pistes concrètes pour votre projet
                  </Typography>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Icon name="Calendar" size={32} className="text-[var(--color-primary)] mr-4" />
                <Typography as="h3" variant="h3">
                  Réservez un temps d'échange
                </Typography>
              </div>

              <Typography variant="p" className="mb-6">
                Sélectionnez un créneau qui vous convient et partagez quelques informations sur
                votre activité pour optimiser notre conversation.
              </Typography>

              <div className="flex justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 text-white rounded-md bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] hover:opacity-90 transition"
                >
                  <Icon name="CalendarPlus" className="mr-2" />
                  Réserver maintenant
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Échangeons sur vos défis numériques"
        description="Au début de mon parcours freelance, je serais ravi de comprendre vos besoins et de partager ma perspective - sans aucune obligation."
        primaryAction={{
          text: "Réserver un temps d'échange",
          url: '/contact',
          variant: 'gradient',
        }}
        variant="banner"
        backgroundColor="primary"
        textColor="light"
      />
    </main>
  );
}
