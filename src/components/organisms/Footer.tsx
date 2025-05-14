import _Link from 'next/link';
import { Logo } from '../atoms/Logo';
import { NavLink } from '../atoms/NavLink';
import { Typography } from '../atoms/Typography';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-color surface-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-1">
            <Logo width={100} height={33} />
            <Typography variant="small" className="mt-4 text-secondary">
              Studio de création digitale spécialisé dans la conception d'interfaces sur mesure.
            </Typography>
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
              Services
            </Typography>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink
                  href="/services/site-web"
                  color="secondary"
                  className="hover:text-[var(--color-primary)]"
                >
                  Sites web
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/services/applications"
                  color="secondary"
                  className="hover:text-[var(--color-primary)]"
                >
                  Applications
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/services/interfaces"
                  color="secondary"
                  className="hover:text-[var(--color-primary)]"
                >
                  Interfaces
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/services/maintenance"
                  color="secondary"
                  className="hover:text-[var(--color-primary)]"
                >
                  Maintenance
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
              <li className="text-secondary">06 00 00 00 00</li>
              <li className="text-secondary">Lyon, France</li>
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
