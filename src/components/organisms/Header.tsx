'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '../atoms/Button';
import { Logo } from '../atoms/Logo';
import { NavLink } from '../atoms/NavLink';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const _pathname = usePathname();

  return (
    <header className="py-4 border-b border-color surface-primary">
      <div className="mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Logo width={120} height={40} />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
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
            <Button variant="gradient" size="sm" className="shine-effect">
              Contact
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-4 py-4 border-t md:hidden">
            <nav className="flex flex-col space-y-4">
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
              <Button variant="gradient" fullWidth className="shine-effect">
                Contact
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
