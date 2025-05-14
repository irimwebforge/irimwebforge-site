import { Logo } from '@/components/atoms/Logo';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { Badge } from '@/components/atoms/Badge';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      {/* Hero section */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <Logo width={200} height={80} format="svg" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Interfaces admin sur mesure
          </h1>

          <p className="text-xl text-secondary mb-8">
            Des interfaces administratives personnalisées qui reflètent l'essence de votre marque et
            optimisent votre flux de travail.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="gradient" size="lg" className="w-full sm:w-auto">
              Découvrir nos services
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Voir nos réalisations
            </Button>
          </div>
        </div>
      </section>

      {/* Explication du fonctionnement */}
      <section className="py-12 text-center">
        <div className="inline-block mb-4">
          <Badge variant="tertiary">Design adaptatif</Badge>
        </div>
        <h2 className="text-2xl font-bold mb-2 text-primary">
          Notre logo s'adapte automatiquement à votre mode préféré
        </h2>
        <p className="text-secondary mb-8">
          Essayez de passer du mode clair au mode sombre pour voir le changement
        </p>
      </section>

      {/* Liens de développement */}
      <section className="py-12 border-t border-color">
        <div className="max-w-2xl mx-auto border-l-4 border-l-[var(--color-tertiary)] pl-6 py-4">
          <h3 className="text-xl font-bold mb-4 text-primary">
            <Icon name="Wrench" className="inline mr-2" /> Accès au Design System Lab
          </h3>
          <div className="flex justify-center">
            <Link href="/ds-lab" className="w-full sm:w-auto">
              <Button variant="gradient" size="md" className="w-full">
                <Icon name="Palette" className="mr-2" /> Ouvrir le DS-Lab
              </Button>
            </Link>
          </div>
          <p className="text-xs text-tertiary text-center mt-4">
            Accès réservé à l'environnement de développement.
          </p>
        </div>
      </section>
    </div>
  );
}
