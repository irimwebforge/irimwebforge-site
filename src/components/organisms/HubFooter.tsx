'use client';

import { Typography } from '@/components/atoms/Typography';
import { Container } from '@/components/atoms/Container';
import { NavLink } from '@/components/atoms/NavLink';
import { Icon } from '@/components/atoms/Icon';
import { Logo } from '@/components/atoms/Logo';

const linkColumns = [
  {
    title: 'Articles',
    links: [
      { label: 'Mon parcours', href: '/blog/mon-parcours' },
      { label: 'Mes services', href: '/blog/services' },
      { label: 'Comment je travaille', href: '/blog/processus' },
      { label: 'Corps & Sens — étude de cas', href: '/blog/corps-et-sens' },
      { label: 'ResetPulse — behind the scenes', href: '/blog/resetpulse' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'DS-Lab — mon design system', href: '/ds-lab' },
      { label: 'ResetPulse', href: 'https://resetpulse.irimwebforge.com', external: true },
      { label: 'DemoForge', href: 'https://demoforge.irimwebforge.com', external: true },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ericzuber/', external: true },
      { label: 'GitHub', href: 'https://github.com/Ricomaldo', external: true },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
      { label: 'Réserver un échange', href: 'https://cal.com/eric-zuber-nxxypt/30min', external: true },
    ],
  },
];

export function HubFooter() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <Container>
        {/* Links grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {linkColumns.map((column) => (
            <div key={column.title}>
              <Typography as="h3" variant="h4" className="mb-6 text-white/80">
                {column.title}
              </Typography>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <NavLink
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        →
                      </span>
                      {link.label}
                      {link.external && (
                        <Icon name="ExternalLink" className="w-3 h-3 opacity-50" />
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo + tagline */}
            <div className="flex items-center gap-4">
              <Logo variant="logo" mode="dark" className="h-8 w-auto" />
              <Typography variant="small" className="text-gray-500">
                Innovation · Réseaux · Interfaces · Maintenance
              </Typography>
            </div>

            {/* Copyright */}
            <Typography variant="small" className="text-gray-500">
              © {new Date().getFullYear()} IRIM Webforge — Strasbourg, Alsace
            </Typography>
          </div>
        </div>

      </Container>
    </footer>
  );
}
