import React, { useState } from 'react';
import { Alert } from './Alert';
import { Icon } from '../atoms/Icon';
import { cn } from '../../lib/utils';

export interface VisionBannerProps {
  /** Message principal à afficher */
  message: string;
  /** Variante visuelle de la bannière */
  variant?: 'info' | 'success' | 'warning';
  /** Permet de masquer définitivement la bannière */
  dismissible?: boolean;
  /** Version condensée de la bannière */
  compact?: boolean;
  /** Classes CSS additionnelles */
  className?: string;
  /** ID unique pour la sauvegarde de l'état (si dismissible) */
  storageKey?: string;
}

/**
 * ✅ VISION BANNER AMÉLIORÉE - IrimWebForge
 * 
 * Bannière authentique qui explique l'approche transparente et personnelle.
 * Respecte le ton de confiance et de proximité caractéristique d'IrimWebForge.
 * 
 * Utilisée stratégiquement sur les pages où la contextualisation apporte 
 * une vraie valeur (Contact, Projets).
 */
export const VisionBanner: React.FC<VisionBannerProps> = ({
  message,
  variant = 'info',
  dismissible = false,
  compact = false,
  className = '',
  storageKey,
}) => {
  // ✅ Gestion de l'état de visibilité avec persistance
  const [isVisible, setIsVisible] = useState(() => {
    if (!dismissible || !storageKey || typeof window === 'undefined') {
      return true;
    }
    // Vérifier si l'utilisateur a déjà masqué cette bannière
    const dismissed = localStorage.getItem(`vision-banner-${storageKey}`);
    return dismissed !== 'true';
  });

  // ✅ Fonction pour masquer définitivement la bannière
  const handleDismiss = () => {
    setIsVisible(false);
    if (storageKey && typeof window !== 'undefined') {
      localStorage.setItem(`vision-banner-${storageKey}`, 'true');
    }
  };

  // Ne pas rendre si masquée
  if (!isVisible) return null;

  // ✅ Classes conditionnelles avec le style IrimWebForge
  const bannerClasses = cn(
    'mb-8 mx-auto max-w-5xl transition-all duration-300 ease-in-out',
    'border-l-4 border-[var(--color-primary)]', // Accent IrimWebForge
    compact ? 'py-3' : 'py-4',
    className
  );

  return (
    <div
      className={bannerClasses}
      // ✅ ACCESSIBILITÉ : Landmark et description appropriés
      role="complementary"
      aria-label="Message de transparence sur notre approche"
    >
      <Alert 
        variant={variant} 
        className="mb-0" // Reset margin car géré par le container
      >
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <p className={cn(
              'text-blue-800 dark:text-blue-200 leading-relaxed',
              compact ? 'text-sm' : 'text-sm',
              'font-medium' // Légèrement plus de poids pour le sérieux
            )}>
              {message}
            </p>
          </div>
          
          {dismissible && (
            <button 
              onClick={handleDismiss}
              className={cn(
                'flex-shrink-0 p-1 rounded hover:bg-blue-100 dark:hover:bg-blue-800',
                'transition-colors duration-200 focus:outline-none focus:ring-2',
                'focus:ring-[var(--color-primary)] focus:ring-offset-2'
              )}
              aria-label="Masquer ce message de transparence"
              title="J'ai compris votre approche"
            >
              <Icon name="X" className="w-4 h-4 text-blue-600 dark:text-blue-300" />
            </button>
          )}
        </div>
      </Alert>
    </div>
  );
};

/**
 * ✅ MESSAGES PRÉDÉFINIS - Ton IrimWebForge
 * 
 * Messages authentiques qui reflètent l'approche transparente et personnelle
 */
export const VisionMessages = {
  contact: 
    "Cette page vous propose un échange sans engagement pour explorer vos défis quotidiens. " +
    "Ma démarche est transparente : je débute mon aventure freelance avec une expérience fondatrice " +
    "et une vision claire de ce que je peux vous apporter.",
    
  projets: 
    "Cette page présente mon projet fondateur (Corps & Sens) ainsi que des projets en développement " +
    "qui illustrent ma vision. Je privilégie la transparence sur mon parcours : montrer d'où je viens " +
    "et où je vais pour que vous compreniez qui vous choisissez.",
    
  processus: 
    "Cette approche reflète mon expérience concrète avec le projet Corps & Sens. " +
    "Je vous présente une méthode testée et affinée, pas de la théorie : " +
    "ce qui a fonctionné pour transformer 7h d'administration en 45 minutes par semaine.",
    
  services: 
    "Ces services sont nés de besoins réels identifiés avec mon épouse thérapeute. " +
    "Chaque solution proposée a été pensée pour répondre aux défis concrets " +
    "que vivent les indépendants au quotidien."
} as const;

/**
 * ✅ COMPOSANT DE CONVENANCE - Usage rapide
 * 
 * Pour utiliser facilement les messages prédéfinis avec le bon ton
 */
interface QuickVisionBannerProps {
  page: keyof typeof VisionMessages;
  dismissible?: boolean;
  compact?: boolean;
  className?: string;
}

export const QuickVisionBanner: React.FC<QuickVisionBannerProps> = ({
  page,
  dismissible = false,
  compact = false,
  className = '',
}) => {
  return (
    <VisionBanner
      message={VisionMessages[page]}
      dismissible={dismissible}
      compact={compact}
      className={className}
      storageKey={page}
    />
  );
}; 