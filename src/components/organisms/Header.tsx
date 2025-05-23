'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '../atoms/Button';
import { Logo } from '../atoms/Logo';
import { NavLink } from '../atoms/NavLink';
import { usePathname } from 'next/navigation';
import { cn } from '../../lib/utils';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const _pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="sr-only focus-within:not-sr-only">
        <a
          href="#main-content"
          className="fixed top-4 left-4 z-[100] bg-[var(--color-primary)] text-white px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transform -translate-y-full focus:translate-y-0 transition-transform"
        >
          Aller au contenu principal
        </a>
        <a
          href="#main-navigation"
          className="fixed top-4 left-40 z-[100] bg-[var(--color-primary)] text-white px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transform -translate-y-full focus:translate-y-0 transition-transform"
        >
          Aller à la navigation
        </a>
      </div>

      <div className="h-[72px]" />

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 py-4 border-b border-color',
          'transition-all duration-300 backdrop-blur-sm',
          isScrolled ? 'bg-white/80 dark:bg-gray-900/80 shadow-sm' : 'bg-white dark:bg-gray-900'
        )}
        role="banner"
      >
        <div className="mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              aria-label="IrimWebForge - Retour à l'accueil"
              className="focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 rounded"
            >
              <Logo width={120} height={40} />
            </Link>

            <nav
              className="hidden md:flex items-center space-x-6"
              role="navigation"
              aria-label="Navigation principale"
              id="main-navigation"
            >
              <NavLink href="/" exact color="primary" useGradient>
                Accueil
              </NavLink>
              <NavLink href="/services" exact color="primary" useGradient>
                Services
              </NavLink>
              <NavLink href="/projets" exact color="primary" useGradient>
                Projets
              </NavLink>
              <NavLink href="/a-propos" exact color="primary" useGradient>
                À propos
              </NavLink>
              <Link href="/contact">
                <Button variant="gradient" size="small" className="shine-effect">
                  Parlons de votre projet
                </Button>
              </Link>
            </nav>

            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={
                isMobileMenuOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-haspopup="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div
              className="mt-4 py-4 border-t md:hidden"
              id="mobile-menu"
              role="region"
              aria-label="Menu de navigation mobile"
            >
              <nav
                className="flex flex-col space-y-4"
                role="navigation"
                aria-label="Navigation mobile"
              >
                <NavLink
                  href="/"
                  exact
                  color="primary"
                  useGradient
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Accueil
                </NavLink>
                <NavLink
                  href="/services"
                  exact
                  color="primary"
                  useGradient
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </NavLink>
                <NavLink
                  href="/projets"
                  exact
                  color="primary"
                  useGradient
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projets
                </NavLink>
                <NavLink
                  href="/processus"
                  exact
                  color="primary"
                  useGradient
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Processus
                </NavLink>
                <NavLink
                  href="/a-propos"
                  exact
                  color="primary"
                  useGradient
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  À propos
                </NavLink>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="gradient" fullWidth className="shine-effect">
                    Discutons de votre projet
                  </Button>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
