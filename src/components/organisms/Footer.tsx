import { NavLink } from '../atoms/NavLink';
import { Typography } from '../atoms/Typography';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const linkClass = 'text-secondary hover:text-primary footer-arrow';

  return (
    <footer className="py-10 border-t border-color surface-primary" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne 1 : Mes sites + Sites clients */}
          <div>
            <Typography variant="p" className="font-semibold text-sm mb-2 text-primary">
              Mes sites
            </Typography>
            <ul className="space-y-0.5 text-sm mb-4">
              <li>
                <NavLink href="/" color="secondary" exact={true} className="hover:text-primary footer-arrow">
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink href="/blog" color="secondary" className="hover:text-primary footer-arrow">
                  Blog
                </NavLink>
              </li>
              <li>
                <a
                  href="https://portfolio.irimwebforge.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Portfolio technique
                </a>
              </li>
              <li>
                <a
                  href="https://demoforge.irimwebforge.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  DemoForge
                </a>
              </li>
              <li>
                <a
                  href="https://resetpulse.irimwebforge.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  ResetPulse
                </a>
              </li>
            </ul>

            <Typography variant="p" className="font-semibold text-sm mb-2 text-primary">
              Sites clients
            </Typography>
            <ul className="space-y-0.5 text-sm">
              <li>
                <a
                  href="https://corpsetsenstherapie.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Corps & Sens
                </a>
              </li>
              <li>
                <a
                  href="https://liberaluminosa.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Libera Luminosa
                </a>
              </li>
              <li>
                <a
                  href="https://www.universdesreves.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Univers des Reves
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 2 : En savoir plus + Pour les devs */}
          <div>
            <Typography variant="p" className="font-semibold text-sm mb-2 text-primary">
              En savoir plus
            </Typography>
            <ul className="space-y-0.5 text-sm mb-4">
              <li>
                <NavLink href="/blog/mon-parcours" color="secondary" className="hover:text-primary footer-arrow">
                  Mon parcours
                </NavLink>
              </li>
              <li>
                <NavLink href="/blog/ma-methode" color="secondary" className="hover:text-primary footer-arrow">
                  Ma methode
                </NavLink>
              </li>
              <li>
                <NavLink href="/blog/mes-services" color="secondary" className="hover:text-primary footer-arrow">
                  Mes services
                </NavLink>
              </li>
              <li>
                <NavLink href="/blog/mes-realisations" color="secondary" className="hover:text-primary footer-arrow">
                  Mes realisations
                </NavLink>
              </li>
            </ul>

            <Typography variant="p" className="font-semibold text-sm mb-2 text-primary">
              Pour les devs
            </Typography>
            <ul className="space-y-0.5 text-sm">
              <li>
                <NavLink href="/ds-lab" color="secondary" className="hover:text-primary footer-arrow">
                  DS-Lab
                </NavLink>
              </li>
              <li>
                <a
                  href="https://github.com/Ricomaldo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/eric-zuber-b9060650/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Coordonnees */}
          <div>
            <Typography variant="p" className="font-semibold text-sm mb-2 text-primary">
              Contact
            </Typography>
            <ul className="space-y-0.5 text-sm">
              <li>
                <a href="tel:+33678764559" className={linkClass}>
                  06 78 76 45 59
                </a>
              </li>
              <li>
                <a href="mailto:contact@irimwebforge.com" className={linkClass}>
                  contact@irimwebforge.com
                </a>
              </li>
              <li>
                <a
                  href="https://cal.com/eric-zuber-nxxypt/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Reserver une visio
                </a>
              </li>
            </ul>
            <Typography variant="small" className="mt-4 text-tertiary text-xs">
              11 route de Paris<br />
              67117 Ittenheim
            </Typography>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-color flex flex-col md:flex-row justify-between items-center">
          <Typography variant="small" className="text-xs text-tertiary mb-4 md:mb-0">
            &copy; {currentYear} IRIM Webforge
          </Typography>
          <div className="flex space-x-4">
            <NavLink href="/mentions-legales" className="text-xs text-tertiary hover:text-primary footer-arrow">
              Mentions legales
            </NavLink>
            <NavLink href="/politique-confidentialite" className="text-xs text-tertiary hover:text-primary footer-arrow">
              Confidentialite
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
