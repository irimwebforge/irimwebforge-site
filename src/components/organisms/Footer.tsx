import Link from 'next/link';
import { Logo } from '../atoms/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-color surface-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-1">
            <Logo width={100} height={33} />
            <p className="mt-4 text-sm text-secondary">
              Studio de création digitale spécialisé dans la conception d'interfaces sur mesure.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-primary">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-secondary hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link href="/services" className="text-secondary hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/projets" className="text-secondary hover:text-primary transition-colors">Projets</Link></li>
              <li><Link href="/a-propos" className="text-secondary hover:text-primary transition-colors">À propos</Link></li>
              <li><Link href="/contact" className="text-secondary hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-primary">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/site-web" className="text-secondary hover:text-primary transition-colors">Sites web</Link></li>
              <li><Link href="/services/applications" className="text-secondary hover:text-primary transition-colors">Applications</Link></li>
              <li><Link href="/services/interfaces" className="text-secondary hover:text-primary transition-colors">Interfaces</Link></li>
              <li><Link href="/services/maintenance" className="text-secondary hover:text-primary transition-colors">Maintenance</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-primary">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-secondary">contact@irimwebforge.com</li>
              <li className="text-secondary">06 00 00 00 00</li>
              <li className="text-secondary">Lyon, France</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-color flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-tertiary mb-4 md:mb-0">
            &copy; {currentYear} IRIM Webforge. Tous droits réservés.
          </p>
          <div className="flex space-x-4">
            <Link href="/mentions-legales" className="text-xs text-tertiary hover:text-secondary transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-xs text-tertiary hover:text-secondary transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 