import { useEffect, useRef, useState } from 'react';

/**
 * ✅ HOOK D'ACCESSIBILITÉ - Utilitaires pour l'accessibilité
 * 
 * Fournit des fonctions pour :
 * - Annonces aux lecteurs d'écran (live regions)
 * - Gestion du focus
 * - Détection des préférences utilisateur
 */
export const useAccessibility = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const announcerRef = useRef<HTMLDivElement | null>(null);

  // ✅ Détecter la préférence pour les animations réduites
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // ✅ Créer l'annonceur pour les lecteurs d'écran
  useEffect(() => {
    if (!announcerRef.current) {
      const announcer = document.createElement('div');
      announcer.setAttribute('aria-live', 'polite');
      announcer.setAttribute('aria-atomic', 'true');
      announcer.setAttribute('class', 'sr-only');
      announcer.id = 'accessibility-announcer';
      document.body.appendChild(announcer);
      announcerRef.current = announcer;
    }

    return () => {
      if (announcerRef.current && document.body.contains(announcerRef.current)) {
        document.body.removeChild(announcerRef.current);
      }
    };
  }, []);

  /**
   * ✅ Annoncer un message aux lecteurs d'écran
   * @param message - Message à annoncer
   * @param priority - 'polite' (par défaut) ou 'assertive'
   */
  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    if (announcerRef.current) {
      announcerRef.current.setAttribute('aria-live', priority);
      announcerRef.current.textContent = message;
      
      // Nettoyer après 1 seconde
      setTimeout(() => {
        if (announcerRef.current) {
          announcerRef.current.textContent = '';
        }
      }, 1000);
    }
  };

  /**
   * ✅ Déplacer le focus vers un élément
   * @param elementId - ID de l'élément ou ref
   * @param options - Options de focus
   */
  const focusElement = (
    elementId: string | React.RefObject<HTMLElement>, 
    options: { 
      preventScroll?: boolean;
      announce?: string;
    } = {}
  ) => {
    const element = typeof elementId === 'string' 
      ? document.getElementById(elementId)
      : elementId.current;
      
    if (element) {
      element.focus({ preventScroll: options.preventScroll });
      
      if (options.announce) {
        announce(options.announce);
      }
    }
  };

  /**
   * ✅ Créer un ID unique pour les attributs ARIA
   * @param prefix - Préfixe pour l'ID
   */
  const generateId = (prefix: string = 'aria') => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  };

  /**
   * ✅ Hook pour gérer les touches d'échappement
   * @param callback - Fonction à appeler lors de l'appui sur Échap
   * @param enabled - Si le hook est activé
   */
  const useEscapeKey = (callback: () => void, enabled: boolean = true) => {
    useEffect(() => {
      if (!enabled) return;
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          callback();
        }
      };
      
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }, [callback, enabled]);
  };

  return {
    prefersReducedMotion,
    announce,
    focusElement,
    generateId,
    useEscapeKey,
  };
};

/**
 * ✅ Hook pour gérer les live regions spécifiques aux formulaires
 */
export const useFormAnnouncements = () => {
  const { announce } = useAccessibility();

  const announceError = (fieldName: string, error: string) => {
    announce(`Erreur dans le champ ${fieldName}: ${error}`, 'assertive');
  };

  const announceSuccess = (message: string) => {
    announce(message, 'polite');
  };

  const announceValidation = (fieldName: string, isValid: boolean) => {
    if (isValid) {
      announce(`${fieldName} valide`);
    }
  };

  return {
    announceError,
    announceSuccess,
    announceValidation,
  };
}; 