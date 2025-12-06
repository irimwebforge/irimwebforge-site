import { Metadata } from 'next';
import { PageHeader } from '@/components/organisms/PageHeader';
import { Typography } from '@/components/atoms/Typography';
import { Card } from '@/components/molecules/Card';
import { Icon } from '@/components/atoms/Icon';
import { Button } from '@/components/atoms/Button';
import { Container } from '@/components/atoms/Container';
import { CTASection } from '@/templates/CTASection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Diagnostic Numérique Personnalisé - 30 minutes offertes | IRIM Webforge',
  description:
    "Réservez votre diagnostic numérique personnalisé gratuit de 30 minutes et découvrez comment libérer votre temps professionnel comme notre cas d'usage : 6h récupérées par semaine.",
  keywords:
    'diagnostic numérique, audit digital, consultation gratuite, optimisation digitale, automatisation, gestion du temps',
};

export default function DiagnosticPage() {
  const benefits = [
    {
      icon: 'Search',
      title: 'Audit de votre situation actuelle',
      description: 'Analyse complète de vos outils et processus digitaux existants',
    },
    {
      icon: 'Clock',
      title: 'Identification des gisements de temps',
      description: 'Détection des tâches répétitives qui peuvent être automatisées',
    },
    {
      icon: 'Target',
      title: "Plan d'action personnalisé",
      description: 'Feuille de route adaptée à votre activité et vos objectifs',
    },
    {
      icon: 'ShieldCheck',
      title: 'Aucun engagement',
      description: 'Conseil gratuit et sans obligation de suite',
    },
  ];

  return (
    <main className="overflow-x-hidden">
      <PageHeader
        title="Diagnostic Numérique Personnalisé"
        description="30 minutes offertes pour découvrir comment libérer votre temps et optimiser votre activité"
        align="center"
        size="large"
        pattern
        badge={{ text: 'Gratuit - Sans engagement', variant: 'primary' }}
      />

      <section className="bg-section-primary py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Typography as="h2" variant="h2" className="mb-6 font-bold">
              Comme mon épouse thérapeute : récupérez 6h par semaine
            </Typography>
            <Typography variant="lead" className="text-secondary mb-12">
              Un diagnostic personnalisé pour identifier précisément comment la technologie peut
              vous faire gagner du temps
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <Card key={index} padding="large" className="text-left">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-primary-bg-accessible)] flex items-center justify-center">
                        <Icon
                          name={benefit.icon as any}
                          className="w-6 h-6 text-[var(--color-primary-accessible)]"
                        />
                      </div>
                    </div>
                    <div>
                      <Typography as="h3" variant="h4" className="mb-2 font-semibold">
                        {benefit.title}
                      </Typography>
                      <Typography variant="p" className="text-secondary">
                        {benefit.description}
                      </Typography>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Link href="/contact">
              <Button
                variant="gradient"
                size="large"
                className="shine-effect"
                icon={<Icon name="Calendar" className="w-5 h-5" />}
              >
                Me contacter pour ce diagnostic
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-section-secondary py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Typography as="h2" variant="h2" className="mb-8 font-bold">
              Comment ça se passe ?
            </Typography>
            <Typography variant="lead" className="text-secondary mb-12">
              Un échange structuré de 30 minutes en visio ou téléphone
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                  <Typography variant="h3" className="text-white font-bold">
                    1
                  </Typography>
                </div>
                <Typography as="h3" variant="h4" className="mb-2 font-semibold">
                  Échange découverte
                </Typography>
                <Typography variant="p" className="text-secondary">
                  Discussion sur votre activité et vos défis quotidiens (10 min)
                </Typography>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                  <Typography variant="h3" className="text-white font-bold">
                    2
                  </Typography>
                </div>
                <Typography as="h3" variant="h4" className="mb-2 font-semibold">
                  Analyse en direct
                </Typography>
                <Typography variant="p" className="text-secondary">
                  Évaluation de vos outils et processus actuels (15 min)
                </Typography>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center mx-auto mb-4">
                  <Typography variant="h3" className="text-white font-bold">
                    3
                  </Typography>
                </div>
                <Typography as="h3" variant="h4" className="mb-2 font-semibold">
                  Recommandations
                </Typography>
                <Typography variant="p" className="text-secondary">
                  Conseils pratiques et plan d'action immédiat (5 min)
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-section-primary py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Card
              className="text-center"
              padding="large"
              variant="accent"
              color="tertiary"
              accentPosition="left"
            >
              <div className="mb-6">
                <Icon
                  name="Quote"
                  className="w-12 h-12 text-[var(--color-tertiary-accessible)] mx-auto mb-4"
                />
                <Typography variant="lead" className="italic text-primary mb-4">
                  "Mon épouse thérapeute passait ses dimanches soir à organiser sa semaine.
                  Maintenant, 5 minutes suffisent. Elle a récupéré ses soirées et peut se concentrer
                  sur ses patients."
                </Typography>
              </div>
              <div className="border-t border-color pt-6">
                <Typography variant="p" className="font-semibold text-primary">
                  Éric Zuber
                </Typography>
                <Typography variant="small" className="text-secondary">
                  Fondateur IRIM Webforge • Cas d'usage réel
                </Typography>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <CTASection
        title="Prêt à récupérer votre temps ?"
        description="Contactez-moi pour réserver votre diagnostic personnalisé de 30 minutes"
        primaryAction={{
          text: 'Me contacter',
          url: '/contact',
        }}
        secondaryAction={{
          text: 'Voir nos solutions',
          url: '/services',
        }}
        variant="default"
      />
    </main>
  );
}
