// Métadonnées SEO pour la solution Présence
export const metadata = {
  title: 'Solution Présence | IRIM Webforge - Site vitrine professionnel et autonome',
  description:
    'Site web élégant et facile à gérer. Interface pensée pour votre quotidien, sans dépendance technique. Parfait pour débuter votre présence en ligne.',
};

import { PageHeader } from '@/components/organisms/PageHeader';
import { Container } from '@/components/atoms/Container';
import { Typography } from '@/components/atoms/Typography';
import { Badge } from '@/components/atoms/Badge';
import { Card } from '@/components/molecules/Card';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { IconWithColor, CheckIcon } from '@/components/atoms/IconWithColor';
import { NavLink } from '@/components/atoms/NavLink';
import { BeforeAfterCard } from '@/components/molecules/BeforeAfterCard';
import { services } from '@/data/services';

// Fonction utilitaire côté serveur pour les classes de couleur
const getServiceColorClasses = (color: 'primary' | 'secondary' | 'tertiary') => {
  const colorVar = `var(--color-${color})`;
  return {
    bg: `bg-[${colorVar}]`,
    bgLight: `bg-[${colorVar}]/10`,
    bgLightDark: `bg-[${colorVar}]/20`,
    text: `text-[${colorVar}]`,
    border: `border-[${colorVar}]`,
    borderLight: `border-[${colorVar}]/30`,
    iconContainer: `bg-[${colorVar}]/10 dark:bg-[${colorVar}]/20`,
    iconText: `text-[${colorVar}]`,
    link: `text-[${colorVar}] hover:text-[${colorVar}] dark:hover:text-[${colorVar}]`,
  };
};

export default function PresencePage() {
  const service = services.find((s) => s.id === 'presence')!;
  const colorClasses = getServiceColorClasses('primary');

  return (
    <main className="overflow-x-hidden transition-all duration-300">
      <PageHeader
        title={service.title}
        description={service.shortDescription}
        align="center"
        size="large"
        pattern
        badge={{ text: 'Offre phare', variant: service.color }}
      />

      {/* Pour qui ? */}
      <section className="bg-section-primary py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
                Pour qui ?
              </Typography>
              <Typography variant="lead" className="mb-6">
                {service.targetAudience.description}
              </Typography>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {service.targetAudience.points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 surface-primary/80 rounded-lg backdrop-blur-sm"
                >
                  <IconWithColor name={point.icon} color="primary" size="lg" className="mt-1" />
                  <Typography variant="p">{point.text}</Typography>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Résultats attendus */}
      <section className="bg-section-accent py-16">
        <div className="container mx-auto px-4 content-overlay-soft">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
                Résultats attendus
              </Typography>
              <Typography variant="lead" className="mb-6">
                Des transformations concrètes dans votre quotidien
              </Typography>
            </div>

            <div className="space-y-6">
              {service.transformations.map((item, index) => (
                <BeforeAfterCard key={index} item={item} index={index} color={service.color} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ce que ça inclut */}
      <section className="bg-section-secondary py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Card className="p-8" variant="accent" color={service.color} accentPosition="top">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                <div className="flex items-center gap-3">
                  <IconWithColor name={service.icon} color="primary" size="2xl" />
                  <Typography as="h2" variant="h3" className="font-bold">
                    Ce que ça inclut
                  </Typography>
                </div>
                <div className="flex gap-2">
                  <Badge variant={service.color} className="text-base">
                    {service.price}
                  </Badge>
                  <Badge variant="default" className="text-base">
                    {service.support}
                  </Badge>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckIcon color="primary" className="mt-1" />
                    <div>
                      <Typography variant="h4" className="mb-1">
                        {feature.title}
                      </Typography>
                      <Typography variant="p" className="text-secondary">
                        {feature.description}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Comment ça se passe */}
      <section className="bg-section-primary py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Typography as="h2" variant="h2" className="mb-4 font-bold italic">
                Comment ça se passe ?
              </Typography>
              <Typography variant="lead" className="mb-6">
                Un processus simple et transparent, adapté à votre rythme
              </Typography>
            </div>

            <div className="space-y-6">
              {service.processSteps.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full ${colorClasses.iconContainer} flex items-center justify-center`}
                  >
                    <IconWithColor name={step.icon} color="primary" size="lg" />
                  </div>
                  <div>
                    <Typography variant="h4" className="mb-1">
                      {step.title}
                    </Typography>
                    <Typography variant="p" className="text-secondary">
                      {step.description}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <NavLink
                href="/processus"
                className="text-[var(--color-primary)] hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)] inline-flex items-center gap-2"
              >
                <span>Découvrir ma méthode complète</span>
                <Icon name="ArrowRight" className="w-4 h-4" />
              </NavLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Témoignage */}
      {/* <section className="bg-section-accent py-16">
        <div className="container mx-auto px-4 content-overlay-soft">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm" padding="large">
              <blockquote className="text-center">
                <Typography variant="lead" className="mb-6 italic">
                  "{service.testimonial.quote}"
                </Typography>
                <footer>
                  <Typography variant="h4" className="mb-1">
                    {service.testimonial.author}
                  </Typography>
                  <Typography variant="p" className="text-gray-600 dark:text-gray-300">
                    {service.testimonial.role}
                  </Typography>
                </footer>
              </blockquote>
            </Card>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="bg-cta-soft py-16">
        <div className="container mx-auto px-4 content-overlay-soft">
          <div className="max-w-3xl mx-auto text-center">
            <Typography as="h2" variant="h2" className="mb-6 font-bold italic">
              Prêt à reprendre le contrôle de votre présence en ligne ?
            </Typography>
            <Typography variant="lead" className="mb-8">
              45 minutes pour échanger sur votre projet. Sans engagement, sans jargon technique.
            </Typography>
            <Button href="/contact" variant="gradient" size="large" className="shine-effect">
              Réserver un temps d'échange
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
