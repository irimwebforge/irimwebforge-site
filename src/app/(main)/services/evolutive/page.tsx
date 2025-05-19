import { PageHeader } from '@/components/organisms/PageHeader';
import { Container } from '@/components/atoms/Container';
import { Typography } from '@/components/atoms/Typography';
import { Badge } from '@/components/atoms/Badge';
import { Card } from '@/components/molecules/Card';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';

export default function EvolutivePage() {
  return (
    <main className="overflow-x-hidden transition-all duration-300">
      <PageHeader
        title="Solution Évolutive : Croissance Sans Contrainte"
        description="Pour les entrepreneurs établis prêts à faire évoluer leur infrastructure numérique pour soutenir leur croissance."
        align="center"
        size="large"
        pattern
        badge={{ text: 'Offre évolutive', variant: 'tertiary' }}
      />
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 mb-8" variant="accent" color="tertiary" accentPosition="top">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                <div className="flex items-center gap-3">
                  <Icon name="TrendingUp" className="w-10 h-10 text-tertiary-600" />
                  <Typography as="h2" variant="h3" className="font-bold">
                    Solution Évolutive
                  </Typography>
                </div>
                <div className="flex gap-2">
                  <Badge variant="tertiary" className="text-base">
                    5 200–7 500€
                  </Badge>
                  <Badge variant="default" className="text-base">
                    280€/mois support
                  </Badge>
                </div>
              </div>
              <Typography variant="lead" className="mb-6">
                Passez à la vitesse supérieure avec une infrastructure numérique évolutive, pensée
                pour accompagner votre croissance et vous différencier durablement.
              </Typography>
              <ul className="mb-6 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-tertiary-600 mt-1" />
                  Architecture numérique évolutive & scalable
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-tertiary-600 mt-1" />
                  Espace client/membre personnalisé
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-tertiary-600 mt-1" />
                  Automatisations avancées selon vos processus métier
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-tertiary-600 mt-1" />
                  Formation complète (6h) pour vous et votre équipe
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-tertiary-600 mt-1" />
                  Support prioritaire illimité 90j, puis 12 sessions/an
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="w-4 h-4 text-tertiary-600 mt-1" />
                  Garantie d'augmentation de capacité de 25%
                </li>
              </ul>
              <Typography variant="p" className="italic mb-6">
                "Notre croissance était freinée par notre infrastructure numérique. Quand nous avons
                intégré trois nouveaux praticiens, tout aurait dû être chaotique. Au lieu de cela,
                notre système a parfaitement absorbé cette croissance. Nos clients continuent de
                bénéficier d'une expérience fluide, et nous pouvons nous concentrer sur nos soins."
                <br />
                <span className="font-semibold">
                  Laura, fondatrice d'un collectif thérapeutique
                </span>
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
