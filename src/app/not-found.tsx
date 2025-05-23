import { Container } from '@/components/atoms/Container';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="p-4 rounded-full bg-primary-100 dark:bg-primary-900">
              <Icon 
                name="Search" 
                className="w-12 h-12 text-primary animate-pulse" 
              />
            </div>
          </div>

          <Typography 
            as="h1" 
            variant="h1" 
            className="mb-4 font-bold animate-fade-in"
          >
            Page non trouvée
          </Typography>

          <Typography 
            variant="lead" 
            className="mb-8 text-gray-600 dark:text-gray-300 animate-fade-in-up"
          >
            Désolé, la page que vous recherchez semble avoir été déplacée ou n'existe plus.
            <br />
            Pas d'inquiétude, vous pouvez :
          </Typography>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <Button 
              href="/" 
              variant="gradient"
              className="shine-effect w-full sm:w-auto"
            >
              Retour à l'accueil
            </Button>
            <Button 
              href="/contact" 
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Me contacter
            </Button>
          </div>

          <div 
            className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            <Typography variant="h4" className="mb-4">
              Liens utiles
            </Typography>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link 
                href="/services" 
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <Icon name="Zap" className="w-5 h-5 text-primary" />
                <span>Découvrir mes services</span>
              </Link>
              <Link 
                href="/processus" 
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <Icon name="GitBranch" className="w-5 h-5 text-primary" />
                <span>Explorer ma méthode</span>
              </Link>
              <Link 
                href="/a-propos" 
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <Icon name="User" className="w-5 h-5 text-primary" />
                <span>En savoir plus sur moi</span>
              </Link>
              <Link 
                href="/projets" 
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <Icon name="Folder" className="w-5 h-5 text-primary" />
                <span>Voir mes réalisations</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
} 