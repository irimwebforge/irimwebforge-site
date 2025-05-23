'use client';

import { PageHeader } from '@/components/organisms/PageHeader';
import { Typography } from '@/components/atoms/Typography';
import { Container } from '@/components/atoms/Container';
import { Icon, IconName } from '@/components/atoms/Icon';
import { ProcessTimeline } from '@/components/molecules/ProcessTimeline';
import { FAQ } from '@/components/molecules/FAQ';
import { StatsShowcase } from '@/templates/StatsShowcase';
import { Alert } from '@/components/molecules/Alert';
import { NavLink } from '@/components/atoms/NavLink';

export default function Page() {
  // Bannière de vision
  const _VisionBanner = () => (
    <Alert variant="info" title="" className="mb-8 mx-auto max-w-5xl">
      <p className="text-sm text-blue-800 dark:text-blue-200">
        Cette page présente ma vision d'un processus idéal, inspiré par mon expérience avec le
        projet Corps & Sens. Je privilégie la transparence sur mon approche en développement.
      </p>
    </Alert>
  );

  const processSteps = [
    {
      id: 'step-1',
      title: 'Conversation découverte',
      description: 'Un échange simple pour comprendre votre métier et ce qui vous pose problème.',
      icon: 'UserPlus' as IconName,
      color: 'primary' as const,
    },
    {
      id: 'step-2',
      title: 'Immersion dans votre métier',
      description:
        'Je prends le temps de comprendre comment vous travaillez avant de proposer des solutions.',
      icon: 'Search' as IconName,
      color: 'primary' as const,
    },
    {
      id: 'step-3',
      title: 'Conception sur mesure',
      description:
        'Nous définissons ensemble ce dont vous avez vraiment besoin, sans complications inutiles.',
      icon: 'PenTool' as IconName,
      color: 'secondary' as const,
    },
    {
      id: 'step-4',
      title: 'Développement par étapes',
      description:
        'Vous voyez votre solution prendre forme progressivement et pouvez donner votre avis.',
      icon: 'Code2' as IconName,
      color: 'secondary' as const,
    },
    {
      id: 'step-5',
      title: 'Formation personnalisée',
      description: 'Vous apprenez à utiliser votre site à votre rythme, avec des supports simples.',
      icon: 'GraduationCap' as IconName,
      color: 'tertiary' as const,
    },
    {
      id: 'step-6',
      title: 'Accompagnement progressif',
      description:
        'Vous devenez autonome progressivement, je reste disponible pour les évolutions.',
      icon: 'Rocket' as IconName,
      color: 'tertiary' as const,
    },
  ];

  const faqItems = [
    {
      id: 'faq-1',
      question: 'Comment se déroule une conversation découverte?',
      answer:
        "Un échange de 45 minutes où j'écoute plus que je ne parle. L'objectif: comprendre votre activité, vos besoins actuels et vos aspirations, sans jargon technique.",
    },
    {
      id: 'faq-2',
      question: 'Combien de temps faut-il pour développer un site?',
      answer:
        'Entre 4 et 8 semaines pour un site sur mesure, avec une phase importante de compréhension de votre métier avant la réalisation technique.',
    },
    {
      id: 'faq-3',
      question: 'Pourrai-je vraiment mettre à jour mon site moi-même?',
      answer:
        "Absolument, c'est la raison d'être de mon approche. L'interface administrative est conçue spécifiquement pour votre façon de travailler, avec une formation personnalisée incluse.",
    },
    {
      id: 'faq-4',
      question: "Utilisez-vous WordPress ou d'autres CMS?",
      answer:
        "Je privilégie des solutions sur mesure pour une adaptation totale à vos besoins, sans vous imposer les contraintes d'un CMS standard.",
    },
    {
      id: 'faq-5',
      question: 'Que se passe-t-il si mon activité évolue?',
      answer:
        'Les solutions sont pensées pour évoluer avec vous, grâce à un accompagnement régulier et des ajustements selon vos besoins.',
    },
  ];

  const stats = [
    {
      value: '25%',
      label: "Temps d'immersion",
      description: 'Consacré à comprendre votre métier',
    },
    {
      value: '4-8',
      label: 'Semaines',
      description: 'Pour un projet standard',
    },
    {
      value: '24h',
      label: 'Réactivité',
      description: 'Pour répondre à vos demandes',
    },
    {
      value: '1 an',
      label: "D'accompagnement",
      description: 'Pour une évolution sereine',
    },
  ];

  return (
    <main className="overflow-x-hidden">
      <PageHeader
        title="Une approche qui place votre métier au centre"
        description="Ma vision: vous accompagner de l'idée à l'autonomie en comprenant d'abord votre activité avant toute considération technique."
        align="center"
        size="medium"
        pattern={true}
      />

      {/* <Container>
        <VisionBanner />
      </Container> */}

      <section className="py-12">
        <Container>
          {/* <div className="text-center mb-12">
            <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
              Un processus en 6 étapes, de la compréhension à l'autonomie
            </Typography>
            <Typography variant="lead" className="max-w-3xl mx-auto">
              Une méthode pensée pour créer des solutions véritablement adaptées à vos besoins
              spécifiques.
            </Typography>
          </div> */}

          <ProcessTimeline
            steps={processSteps}
            orientation="vertical"
            accentColor="primary"
            withNumbers={true}
            className="transition-all duration-300 hover:opacity-95"
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

            <FAQ
              items={faqItems}
              variant="default"
              color="primary"
              icon="plus"
              className="space-y-4"
            />
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
                Un échange de 45 minutes gratuit et sans obligation qui vous apporte déjà des
                perspectives nouvelles sur votre présence digitale.
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

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)] flex items-center justify-center mr-4 transition-transform duration-150 group-hover:scale-110">
                  <Icon name="Calendar" size={24} className="text-[var(--color-primary)]" />
                </div>
                <Typography as="h3" variant="h3">
                  Réservez un temps d'échange
                </Typography>
              </div>

              <Typography variant="p" className="mb-6">
                Sélectionnez un créneau qui vous convient et partagez quelques informations sur
                votre activité pour optimiser notre conversation.
              </Typography>

              <div className="flex justify-center">
                <NavLink
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 text-white rounded-md bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] hover:opacity-90 transition-all duration-300 hover:scale-105"
                >
                  <Icon name="CalendarPlus" className="mr-2" />
                  Réserver maintenant
                </NavLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* <CTASection
        title="Échangeons sur vos défis numériques"
        description="45 minutes pour échanger sur votre projet. Sans pression commerciale, sans jargon technique."
        primaryAction={{
          text: "Réserver un temps d'échange",
          url: '/contact',
          variant: 'gradient',
        }}
        variant="banner"
        backgroundColor="primary"
        textColor="light"
      /> */}
    </main>
  );
}
