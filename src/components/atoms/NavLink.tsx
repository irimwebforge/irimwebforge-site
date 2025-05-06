'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
  underline?: boolean;
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
  activeClassName = 'text-[var(--color-primary)]',
  exact = false,
  underline = false,
  icon,
  iconPosition = 'left',
  onClick,
  target,
  ariaLabel,
  prefetch,
}) => {
  // Récupérer le chemin actuel pour détecter si le lien est actif
  const pathname = usePathname();
  
  // Vérifier si le lien est actif
  const isActive = exact 
    ? pathname === href
    : pathname.startsWith(href) && (href !== '/' || pathname === '/');
  
  // Classes de base pour tous les liens
  const baseClasses = 'transition-colors duration-200';
  
  // Classes pour le soulignement (optionnel)
  const underlineClasses = underline 
    ? 'hover:underline'
    : '';
  
  // Classes pour les liens actifs ou inactifs
  const activeStateClasses = isActive
    ? activeClassName
    : 'hover:text-[var(--color-primary)]';
  
  // Combiner toutes les classes
  const linkClasses = `${baseClasses} ${underlineClasses} ${activeStateClasses} ${className}`;
  
  // Rendu de l'icône à gauche si présente et positionnée à gauche
  const leftIcon = icon && iconPosition === 'left' ? (
    <span className="mr-2">{icon}</span>
  ) : null;
  
  // Rendu de l'icône à droite si présente et positionnée à droite
  const rightIcon = icon && iconPosition === 'right' ? (
    <span className="ml-2">{icon}</span>
  ) : null;
  
  return (
    <Link
      href={href}
      className={linkClasses}
      onClick={onClick}
      target={target}
      aria-label={ariaLabel}
      aria-current={isActive ? 'page' : undefined}
      prefetch={prefetch}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </Link>
  );
}; 