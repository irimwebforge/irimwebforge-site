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
  priority?: boolean;
}

export const Logo = ({
  className = '',
  width = 150,
  format = 'svg',
  variant = 'logo',
  mode = 'auto',
  onClick,
  priority = false,
}: LogoProps) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // dark par défaut

  useEffect(() => {
    if (typeof window !== 'undefined' && mode === 'auto') {
      // Détecte la classe .dark sur le HTML (pas prefers-color-scheme)
      const checkDarkMode = () => {
        setIsDarkMode(document.documentElement.classList.contains('dark'));
      };

      checkDarkMode();

      // Observer les changements de classe sur html
      const observer = new MutationObserver(checkDarkMode);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
      });

      return () => observer.disconnect();
    }
  }, [mode]);

  // Détermine le mode d'affichage final (light, dark ou default)
  const displayMode = mode === 'auto' ? (isDarkMode ? 'light' : 'dark') : mode;

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
  const finalHeight = Math.round(width * 0.3);

  return (
    <div
      className={`relative logo-container ${className}`}
      onClick={onClick}
      style={{
        // tu peux aussi utiliser Tailwind : className="relative w-[150px] h-[45px]"
        width: `${finalWidth}px`,
        height: `${finalHeight}px`,
        maxWidth: '100%',
      }}
    >
      <Image
        src={logoPath}
        alt="IRIM Webforge"
        fill
        sizes={`${finalWidth}px`}
        style={{ objectFit: 'contain' }}
        quality={90}
        priority={priority}
      />
    </div>
  );
};
