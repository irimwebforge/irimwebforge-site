import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '../atoms/Button';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

const NavLink = ({ href, children, active }: NavLinkProps) => (
  <Link
    href={href}
    className={`hover:text-[var(--color-primary)] transition-colors ${active ? 'text-[var(--color-primary)]' : ''}`}
  >
    {children}
  </Link>
);

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="py-4 border-b border-gray-200 bg-white">
      <div className="mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl">
            <span className="text-[var(--color-primary)]">IRIM</span>
            <span className="text-[var(--color-secondary)]">Webforge</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="/">Accueil</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/projets">Projets</NavLink>
            <NavLink href="/a-propos">À propos</NavLink>
            <Button variant="primary" size="sm">Contact</Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-4 py-4 border-t md:hidden">
            <nav className="flex flex-col space-y-4">
              <NavLink href="/">Accueil</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/projets">Projets</NavLink>
              <NavLink href="/a-propos">À propos</NavLink>
              <Button variant="primary" fullWidth>Contact</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}