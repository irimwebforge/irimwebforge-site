import { PageHeader } from '@/components/organisms/PageHeader';
import { Container } from '@/components/atoms/Container';
import { Typography } from '@/components/atoms/Typography';
import { Badge } from '@/components/atoms/Badge';
import { Card } from '@/components/molecules/Card';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';

export default function IntegreePage() {
  return (
    <main className="overflow-x-hidden transition-all duration-300">
      <PageHeader
        title="Solution Intégrée : Unification & Fluidité"
        description="Pour les professionnels qui jonglent entre plusieurs outils et cherchent un système unifié."
        align="center"
        size="large"
        pattern
        badge={{ text: 'Offre connectée', variant: 'secondary' }}
      />
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 mb-8" variant="accent" color="secondary" accentPosition="top">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                <div className="flex items-center gap-3">
                  <Icon name="Zap" className="w-10 h-10 text-secondary-600" />
                  <Typography as="h2" variant="h3" className="font-bold">
                    Solution Intégrée
                  </Typography>
                </div>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="text-base">
                    2 800–3 800€
                  </Badge>
                  <Badge variant="default" className="text-base">
                    140€/mois support
                  </Badge>
                </div>
              </div>
              <Typography variant="lead" className="mb-6">
                Centralisez tous vos outils et automatisez les tâches répétitives. Cette solution
                vous permet de gagner du temps, d'éviter les erreurs et d'offrir une expérience
                fluide à vos clients.
              </Typography>
              <ul className="mb-6 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-secondary-600 mt-1" />
                  Écosystème numérique unifié (site, agenda, facturation, CRM)
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-secondary-600 mt-1" />
                  Intégration avec vos outils existants essentiels
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-secondary-600 mt-1" />
                  Automatisations intelligentes (rappels, suivis, confirmations)
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-secondary-600 mt-1" />
                  Formation progressive (4h en 2 sessions)
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-secondary-600 mt-1" />8 sessions
                  d'assistance prioritaire
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-secondary-600 mt-1" />
                  Garantie de réduction de 70% du temps administratif
                </li>
              </ul>
              <Typography variant="p" className="italic mb-6">
                "Avant, je passais mes soirées à synchroniser manuellement mon agenda, mon site et
                mes factures. J'oubliais régulièrement des mises à jour importantes. Maintenant tout
                est connecté, je mets à jour une seule fois et tout se synchronise automatiquement.
                J'ai récupéré mes soirées."
                <br />
                <span className="font-semibold">Alexandre, artisan CBD</span>
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
