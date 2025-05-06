import { Logo } from '@/components/atoms/Logo';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';

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
            Des interfaces administratives personnalisées qui reflètent l'essence de votre marque et optimisent votre flux de travail.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
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
        <h2 className="text-2xl font-bold mb-2 text-primary">
          Notre logo s'adapte automatiquement à votre mode préféré
        </h2>
        <p className="text-secondary mb-8">
          Essayez de passer du mode clair au mode sombre pour voir le changement
        </p>
      </section>
      
      {/* Liens de développement */}
      <section className="py-12 border-t border-color">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center text-primary">
            🛠️ Liens de développement
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fundamentals" className="w-full">
              <Button 
                variant="secondary" 
                size="md" 
                className="w-full"
              >
                🎨 Design System (Fundamentals)
              </Button>
            </Link>
            <Link href="/test" className="w-full">
              <Button 
                variant="outline" 
                size="md" 
                className="w-full"
              >
                🧪 Page de test (Components)
              </Button>
            </Link>
          </div>
          <p className="text-xs text-tertiary text-center mt-4">
            Ces liens sont utiles uniquement pendant la phase de développement.
          </p>
        </div>
      </section>
    </div>
  );
} 