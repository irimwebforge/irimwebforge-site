import _Link from 'next/link';
import { Logo } from '../atoms/Logo';
import { NavLink } from '../atoms/NavLink';
import { Typography } from '../atoms/Typography';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-color surface-primary" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-1">
            <Logo width={100} height={33} />
            <Typography variant="small" className="mt-4 text-secondary">
              Studio de création digitale spécialisé dans la conception d'interfaces sur mesure
              libérant votre temps et votre énergie.
            </Typography>
            {/* Réseaux sociaux */}
            <div className="mt-6">
              <Typography variant="p" className="font-semibold text-base mb-4 text-primary">
                Suivez-moi
              </Typography>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/eric-zuber-b9060650/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-[var(--color-primary)]"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Ricomaldo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-[var(--color-primary)]"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <Typography variant="p" className="font-semibold text-base mb-4 text-primary">
              Navigation
            </Typography>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink href="/" color="secondary" className="hover:text-[var(--color-primary)]">
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/services"
                  color="secondary"
                  className="hover:text-[var(--color-primary)]"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/projets"
                  color="secondary"
                  className="hover:text-[var(--color-primary)]"
                >
                  Projets
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/processus"
                  color="secondary"
                  className="hover:text-[var(--color-primary)]"
                >
                  Processus
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/a-propos"
                  color="secondary"
                  className="hover:text-[var(--color-primary)]"
                >
                  À propos
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/contact"
                  color="secondary"
                  className="hover:text-[var(--color-primary)]"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <Typography variant="p" className="font-semibold text-base mb-4 text-primary">
              Solutions
            </Typography>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink
                  href="/services/presence"
                  color="secondary"
                  className="hover:text-[var(--color-primary)]"
                >
                  Solution Présence
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/services/integree"
                  color="secondary"
                  className="hover:text-[var(--color-primary)]"
                >
                  Solution Intégrée
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/services/evolutive"
                  color="secondary"
                  className="hover:text-[var(--color-primary)]"
                >
                  Solution Évolutive
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/services#diagnostic"
                  color="secondary"
                  className="hover:text-[var(--color-primary)]"
                >
                  Diagnostic Numérique
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <Typography variant="p" className="font-semibold text-base mb-4 text-primary">
              Contact
            </Typography>
            <ul className="space-y-2 text-sm">
              <li className="text-secondary">contact@irimwebforge.com</li>
              <li className="text-secondary">06 78 76 45 59</li>
              <li className="text-secondary">11 route de Paris, 67117 Ittenheim</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-color flex flex-col md:flex-row justify-between items-center">
          <Typography variant="small" className="text-xs text-tertiary mb-4 md:mb-0">
            &copy; {currentYear} IRIM Webforge. Tous droits réservés.
          </Typography>
          <div className="flex space-x-4">
            <NavLink
              href="/mentions-legales"
              className="text-xs text-tertiary hover:text-secondary"
            >
              Mentions légales
            </NavLink>
            <NavLink
              href="/politique-confidentialite"
              className="text-xs text-tertiary hover:text-secondary"
            >
              Politique de confidentialité
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
