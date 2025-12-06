import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { Container } from '@/components/atoms/Container';
import { Badge } from '@/components/atoms/Badge';

export function HubHero() {
  return (
    <section className="min-h-screen flex items-center bg-section-primary">
      <Container className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge proof - plus subtil */}
          <Badge variant="secondary" className="mb-6">
            Strasbourg, Alsace
          </Badge>

          {/* Titre principal */}
          <Typography as="h1" variant="h1" className="mb-6">
            Je crée des ponts entre votre expertise métier et les possibilités du numérique
          </Typography>

          {/* Sous-titre cible */}
          <Typography variant="lead" className="mb-8 text-secondary">
            Sites web et applications pour thérapeutes, commerçants et artisans en Alsace
          </Typography>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="large" href="tel:+33678764559">
              06 78 76 45 59
            </Button>
            <Button variant="outline" size="large" href="#preuves">
              Voir mes réalisations
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
