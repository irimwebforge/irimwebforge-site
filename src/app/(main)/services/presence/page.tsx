import { PageHeader } from '@/components/organisms/PageHeader';
import { Container } from '@/components/atoms/Container';
import { Typography } from '@/components/atoms/Typography';
import { Badge } from '@/components/atoms/Badge';
import { Card } from '@/components/molecules/Card';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';

export default function PresencePage() {
  return (
    <main className="overflow-x-hidden transition-all duration-300">
      <PageHeader
        title="Solution Présence : Autonomie Numérique Simplifiée"
        description="Pour les indépendants qui veulent gérer facilement leur site sans dépendre d'un technicien."
        align="center"
        size="large"
        pattern
        badge={{ text: 'Offre phare', variant: 'primary' }}
      />
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 mb-8" variant="accent" color="primary" accentPosition="top">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                <div className="flex items-center gap-3">
                  <Icon name="Laptop" className="w-10 h-10 text-primary-600" />
                  <Typography as="h2" variant="h3" className="font-bold">
                    Solution Présence
                  </Typography>
                </div>
                <div className="flex gap-2">
                  <Badge variant="primary" className="text-base">
                    1 500–2 200€
                  </Badge>
                  <Badge variant="default" className="text-base">
                    70€/mois support
                  </Badge>
                </div>
              </div>
              <Typography variant="lead" className="mb-6">
                Libérez-vous des contraintes techniques et concentrez-vous sur votre métier. Cette
                solution vous permet de gérer votre site en toute autonomie, sans dépendre d'un
                prestataire.
              </Typography>
              <ul className="mb-6 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-primary-600 mt-1" />
                  Site web professionnel responsive adapté à votre métier
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-primary-600 mt-1" />
                  Interface d'administration simplifiée
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-primary-600 mt-1" />
                  Formation individuelle (2h) + supports visuels
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-primary-600 mt-1" />
                  Transfert de contenus inclus
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-primary-600 mt-1" />4 sessions
                  d'assistance prioritaire
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-primary-600 mt-1" />
                  Garantie de réduction de 60% du temps administratif
                </li>
              </ul>
              <Typography variant="p" className="italic mb-6">
                "Je mettais à jour mon site tous les 2-3 mois par peur de faire des erreurs.
                Maintenant, je modifie mon planning en 5 minutes chaque semaine. Mes clients
                apprécient d'avoir toujours mes disponibilités à jour, et j'ai l'esprit tranquille."
                <br />
                <span className="font-semibold">Marie, thérapeute énergétique</span>
              </Typography>
              <Button href="/contact" variant="gradient" className="w-full mt-4">
                Réserver un diagnostic gratuit
              </Button>
            </Card>
          </div>
        </Container>
      </section>
    </main>
  );
}
