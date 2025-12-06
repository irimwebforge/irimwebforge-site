'use client';

import { Container } from '@/components/atoms/Container';
import { Logo } from '@/components/atoms/Logo';
import { Button } from '@/components/atoms/Button';
import { ThemeToggle } from '@/components/atoms/ThemeToggle';
import { NavLink } from '@/components/atoms/NavLink';

export function HubHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-color">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink href="/" className="flex items-center">
            <Logo variant="logo" className="h-8 w-auto" />
          </NavLink>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-4">
            <NavLink
              href="/ds-lab"
              className="text-sm text-secondary hover:text-primary transition-colors hidden md:block"
            >
              DS-Lab
            </NavLink>
            <ThemeToggle />
            <Button
              variant="gradient"
              size="small"
              href="tel:+33678764559"
              className="hidden sm:flex"
            >
              06 78 76 45 59
            </Button>
            <Button
              variant="outline"
              size="small"
              href="https://cal.com/eric-zuber-nxxypt/30min"
              target="_blank"
              className="hidden sm:flex"
            >
              Visio
            </Button>
            {/* Mobile: just phone icon */}
            <Button
              variant="gradient"
              size="small"
              href="tel:+33678764559"
              className="sm:hidden"
              aria-label="Appeler"
            >
              Appeler
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
