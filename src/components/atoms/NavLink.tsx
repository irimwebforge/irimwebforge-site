'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
  color?: 'primary' | 'secondary' | 'tertiary';
  underline?: boolean;
  underlineActiveOnly?: boolean;
  useGradient?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  ariaLabel?: string;
  prefetch?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className = '',
  activeClassName = '',
  exact = false,
  color = 'primary',
  underline = false,
  underlineActiveOnly = true,
  useGradient = false,
  icon,
  iconPosition = 'left',
  onClick,
  target,
  ariaLabel,
  prefetch,
}) => {
  const pathname = usePathname();

  // Normaliser les paths en retirant les trailing slash pour la comparaison
  const normalizedPathname = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  const normalizedHref = href === '/' ? '/' : href.replace(/\/$/, '');

  // Utiliser la prop exact telle qu'elle est fournie
  const isActive = exact
    ? normalizedPathname === normalizedHref
    : normalizedPathname.startsWith(normalizedHref);

  // Classes de base
  const baseClasses = 'transition-colors duration-200 navlink-custom';

  // Couleurs pour les liens normaux - différenciées par couleur
  const colorClasses = {
    primary: 'text-[var(--text-secondary)] hover:!text-[var(--color-primary)] hover:!font-medium',
    secondary: 'text-[var(--text-secondary)] hover:!text-[var(--color-secondary)]',
    tertiary: 'text-[var(--text-secondary)] hover:!text-[var(--color-tertiary)]',
  };

  // Couleurs pour les liens actifs
  const activeColorClasses = {
    primary: 'text-[var(--color-primary)] font-medium',
    secondary: 'text-[var(--color-secondary)]',
    tertiary: 'text-[var(--color-tertiary)]',
  };

  // Classes de soulignement
  const underlineClasses = underline
    ? 'border-b-2 border-transparent hover:border-current pb-1'
    : '';

  // Classes de soulignement spécifiques à chaque couleur pour les liens actifs
  const activeUnderlineClasses =
    underlineActiveOnly && isActive
      ? color === 'primary'
        ? 'border-b-2 border-[var(--color-primary)] pb-1'
        : color === 'secondary'
          ? 'border-b-2 border-[var(--color-secondary)] pb-1'
          : 'border-b-2 border-[var(--color-tertiary)] pb-1'
      : '';

  // Classe pour gradient (si activé) - prioritaire sur activeColorClasses
  const gradientClass = useGradient
    ? isActive
      ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent font-medium'
      : 'hover:!bg-gradient-to-r hover:!from-[var(--color-primary)] hover:!to-[var(--color-secondary)] hover:!bg-clip-text hover:!text-transparent hover:!font-medium'
    : '';

  // Classes finales avec vérification explicite
  let finalClasses;
  if (isActive) {
    if (useGradient) {
      // Si gradient est activé et le lien est actif, on utilise le dégradé
      finalClasses = cn(
        baseClasses,
        gradientClass,
        underlineClasses,
        activeUnderlineClasses,
        activeClassName,
        className
      );
    } else {
      // Sinon on utilise la couleur active appropriée
      finalClasses = cn(
        baseClasses,
        activeColorClasses[color],
        underlineClasses,
        activeUnderlineClasses,
        activeClassName,
        className
      );
    }
  } else {
    // Pour les liens non actifs
    finalClasses = cn(
      baseClasses,
      useGradient ? gradientClass : colorClasses[color],
      underlineClasses,
      className
    );
  }

  // Rendu de l'icône à gauche si présente et positionnée à gauche
  const leftIcon = icon && iconPosition === 'left' ? <span className="mr-2">{icon}</span> : null;

  // Rendu de l'icône à droite si présente et positionnée à droite
  const rightIcon = icon && iconPosition === 'right' ? <span className="ml-2">{icon}</span> : null;

  return (
    <Link
      href={href}
      className={finalClasses}
      onClick={onClick}
      target={target}
      aria-label={ariaLabel}
      aria-current={isActive ? 'page' : undefined}
      prefetch={prefetch}
      data-color={color}
      data-use-gradient={useGradient ? 'true' : undefined}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </Link>
  );
};
