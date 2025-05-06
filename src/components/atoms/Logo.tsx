'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  format?: 'svg' | 'png';
  variant?: 'logo' | 'banner';
  mode?: 'auto' | 'light' | 'dark' | 'default';
  onClick?: () => void;
}

export const Logo = ({
  className = '',
  width = 150,
  height = 50,
  format = 'svg',
  variant = 'logo',
  mode = 'auto',
  onClick,
}: LogoProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Vérification initiale uniquement si le mode est auto
    if (typeof window !== 'undefined' && mode === 'auto') {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      // Mise en place d'un écouteur pour les changements de préférence
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        setIsDarkMode(e.matches);
      };
      
      mediaQuery.addEventListener('change', handleChange);
      
      // Nettoyage lors du démontage du composant
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
  }, [mode]);

  // Détermine le mode d'affichage final (light, dark ou default)
  const displayMode = mode === 'auto' 
    ? (isDarkMode ? 'light' : 'dark') 
    : mode;

  // Construit le chemin du fichier logo en fonction du variant et du mode
  let logoPath = '';
  
  if (variant === 'banner') {
    // Les bannières sont uniquement en PNG
    logoPath = `/images/logo/banner_${displayMode}.png`;
  } else {
    // Pour les logos standard
    if (displayMode === 'default') {
      logoPath = `/images/logo/logo_default.${format}`;
    } else {
      logoPath = `/images/logo/Logo_${displayMode}.${format}`;
    }
  }

  // Assurez-vous que les dimensions sont appropriées pour le variant
  const finalWidth = width;
  const finalHeight = variant === 'banner' ? (height * 1.5) : height;

  return (
    <div className={`logo-container ${className}`} onClick={onClick}>
      <Image
        src={logoPath}
        alt="IRIM Webforge"
        width={finalWidth}
        height={finalHeight}
        priority
        className="logo-image"
      />
    </div>
  );
}; 