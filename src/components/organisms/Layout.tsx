import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  /** Titre principal de la page pour les lecteurs d'écran */
  pageTitle?: string;
  /** Classe CSS additionnelle pour le contenu principal */
  mainClassName?: string;
}

/**
 * ✅ LAYOUT ACCESSIBLE - Structure principale avec landmarks ARIA
 * 
 * Implémente tous les landmarks requis :
 * - banner (header)
 * - main (contenu principal)
 * - contentinfo (footer)
 * - navigation (dans header)
 * 
 * + Skip links pour navigation clavier
 */
export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  pageTitle = 'IrimWebForge',
  mainClassName = ''
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ ARIA : Header avec role="banner" */}
      <Header />
      
      {/* ✅ ARIA : Contenu principal avec landmark */}
      <main 
        id="main-content" 
        role="main"
        className={`flex-1 ${mainClassName}`}
        aria-label={`Contenu principal : ${pageTitle}`}
      >
        {/* ✅ ACCESSIBILITÉ : Titre de page pour lecteurs d'écran */}
        <h1 className="sr-only">{pageTitle}</h1>
        {children}
      </main>
      
      {/* ✅ ARIA : Footer avec role="contentinfo" */}
      <Footer />
    </div>
  );
}; 