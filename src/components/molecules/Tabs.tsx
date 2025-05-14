'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Typography } from '../atoms/Typography';
import { cn } from '../../lib/utils';

export interface TabItem {
  /** Identifiant unique de l'onglet */
  id: string;
  /** Texte ou contenu de l'étiquette de l'onglet */
  label: React.ReactNode;
  /** Contenu du panel associé à l'onglet */
  content: React.ReactNode;
  /** Indique si l'onglet est désactivé */
  disabled?: boolean;
  /** Icône affichée avant le label */
  icon?: React.ReactNode;
  /** Badge numérique ou texte court affiché après le label */
  badge?: string | number;
}

export interface TabsProps {
  /** Liste des onglets à afficher */
  tabs: TabItem[];
  /** ID de l'onglet actif par défaut */
  defaultTab?: string;
  /** Fonction appelée lors du changement d'onglet */
  onChange?: (id: string) => void;
  /** Classes CSS additionnelles */
  className?: string;
  /** Style visuel des onglets */
  variant?: 'default' | 'boxed' | 'pills' | 'underlined';
  /** Alignement des onglets */
  alignment?: 'start' | 'center' | 'end' | 'stretch';
  /** Orientation des onglets */
  orientation?: 'horizontal' | 'vertical';
  /** Taille des onglets */
  size?: 'small' | 'medium' | 'large';
  /** Animer les transitions entre onglets */
  _animated?: boolean;
  /** Afficher des ombres de défilement si les onglets dépassent */
  withScrollShadows?: boolean;
  /** Classes CSS pour le contenu des onglets */
  contentClassName?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTab,
  onChange,
  className = '',
  variant = 'default',
  alignment = 'start',
  orientation = 'horizontal',
  size = 'medium',
  _animated = true,
  withScrollShadows = true,
  contentClassName = '',
}) => {
  // État pour l'onglet actif
  const [activeTab, setActiveTab] = useState<string>(() => {
    // Utilise defaultTab si fourni et s'il existe dans la liste des onglets
    if (defaultTab && tabs.some((tab) => tab.id === defaultTab)) {
      return defaultTab;
    }
    // Sinon utilise le premier onglet non désactivé
    const firstEnabledTab = tabs.find((tab) => !tab.disabled);
    return firstEnabledTab ? firstEnabledTab.id : tabs[0]?.id || '';
  });

  // Référence pour le conteneur d'onglets (pour la navigation par clavier)
  const tabsRef = useRef<HTMLDivElement>(null);

  // État pour les ombres de défilement
  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(false);

  // Référence pour le conteneur de navigation des onglets (pour le défilement horizontal)
  const tabsNavRef = useRef<HTMLDivElement>(null);

  // Gestion du changement d'onglet
  const handleTabChange = (tabId: string) => {
    if (tabId !== activeTab) {
      setActiveTab(tabId);
      if (onChange) {
        onChange(tabId);
      }
    }
  };

  // Mise à jour des ombres de défilement
  const updateScrollShadows = useCallback(() => {
    if (!tabsNavRef.current || !withScrollShadows || orientation === 'vertical') return;

    const { scrollLeft, scrollWidth, clientWidth } = tabsNavRef.current;
    setShowLeftShadow(scrollLeft > 0);
    setShowRightShadow(scrollLeft < scrollWidth - clientWidth - 1);
  }, [withScrollShadows, orientation]);

  // Mise à jour des ombres de défilement lors du scroll
  useEffect(() => {
    const navElement = tabsNavRef.current;
    if (navElement) {
      navElement.addEventListener('scroll', updateScrollShadows);
      updateScrollShadows(); // Initialisation des ombres
    }

    return () => {
      if (navElement) {
        navElement.removeEventListener('scroll', updateScrollShadows);
      }
    };
  }, [updateScrollShadows]);

  // Faire défiler pour rendre l'onglet actif visible
  useEffect(() => {
    if (orientation === 'horizontal' && tabsNavRef.current) {
      const activeTabElement = tabsNavRef.current.querySelector(
        `[data-tab-id="${activeTab}"]`
      ) as HTMLElement;

      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;
        const { scrollLeft, clientWidth } = tabsNavRef.current;

        // Vérifier si l'onglet actif est visible
        if (offsetLeft < scrollLeft || offsetLeft + offsetWidth > scrollLeft + clientWidth) {
          tabsNavRef.current.scrollTo({
            left: offsetLeft - clientWidth / 2 + offsetWidth / 2,
            behavior: 'smooth',
          });
        }
      }
    }
  }, [activeTab, orientation]);

  // Gestion de la navigation par clavier
  const _handleKeyDown = (e: React.KeyboardEvent, tabId: string, _index: number) => {
    const enabledTabs = tabs.filter((tab) => !tab.disabled);
    const currentIndex = enabledTabs.findIndex((tab) => tab.id === tabId);

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        if (currentIndex < enabledTabs.length - 1) {
          e.preventDefault();
          handleTabChange(enabledTabs[currentIndex + 1].id);
        }
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        if (currentIndex > 0) {
          e.preventDefault();
          handleTabChange(enabledTabs[currentIndex - 1].id);
        }
        break;
      case 'Home':
        e.preventDefault();
        handleTabChange(enabledTabs[0].id);
        break;
      case 'End':
        e.preventDefault();
        handleTabChange(enabledTabs[enabledTabs.length - 1].id);
        break;
      default:
        break;
    }
  };

  // Classes pour les variantes
  const variantClasses = {
    default: 'border-b border-gray-200 dark:border-gray-700',
    boxed: 'flex-shrink-0 rounded-t-lg border border-b-0 border-gray-200 dark:border-gray-700',
    pills: 'rounded-full bg-gray-100 dark:bg-gray-800 p-1',
    underlined: 'border-b border-gray-200 dark:border-gray-700',
  };

  // Classes pour les alignements
  const alignmentClasses = {
    start: orientation === 'horizontal' ? 'justify-start' : 'items-start',
    center: orientation === 'horizontal' ? 'justify-center' : 'items-center',
    end: orientation === 'horizontal' ? 'justify-end' : 'items-end',
    stretch: orientation === 'horizontal' ? 'w-full' : 'h-full',
  };

  // Classes pour la taille
  const sizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  // Classes pour l'onglet actif selon la variante
  const activeTabClasses = {
    default: 'border-b-2 border-[var(--color-primary)] text-[var(--color-primary)]',
    boxed: 'bg-white dark:bg-gray-800 border-b-0 text-[var(--color-primary)]',
    pills: 'bg-white dark:bg-gray-700 shadow-sm',
    underlined: 'border-b-2 border-[var(--color-primary)] text-[var(--color-primary)]',
  };

  // Classes pour le badge
  const badgeClasses = 'ml-2 px-2 py-0.5 text-xs rounded-full bg-gray-200 dark:bg-gray-700';

  // Trouver l'onglet actif
  const _activeTabData = tabs.find((tab) => tab.id === activeTab);

  // Fonctions de gestion des onglets
  const renderTab = (tab: TabItem) => {
    const isActive = tab.id === activeTab;

    return (
      <button
        key={tab.id}
        className={cn(
          'flex items-center justify-center',
          'px-4 py-2 whitespace-nowrap transition-all',
          orientation === 'horizontal' ? 'h-full' : 'w-full',
          isActive ? activeTabClasses[variant] : 'opacity-50 cursor-not-allowed'
        )}
        onClick={() => handleTabChange(tab.id)}
        aria-selected={isActive}
        id={`tab-${tab.id}`}
        aria-controls={`tabpanel-${tab.id}`}
        role="tab"
      >
        {tab.icon && <span className="mr-2">{tab.icon}</span>}
        <span>{tab.label}</span>
        {tab.badge && <span className={badgeClasses}>{tab.badge}</span>}
      </button>
    );
  };

  // Pour le TabPanel
  const TabPanel = ({ tabId }: { tabId: string }) => {
    const tab = tabs.find((t) => t.id === tabId);

    // Ne pas rendre le contenu des onglets inactifs
    if (tabId !== activeTab) return null;

    return (
      <div
        id={`tabpanel-${tabId}`}
        role="tabpanel"
        aria-labelledby={`tab-${tabId}`}
        className={cn('pt-4', contentClassName)}
      >
        {tab?.content}
      </div>
    );
  };

  return (
    <div
      className={cn(
        'tabs',
        orientation === 'vertical' ? 'flex flex-row' : 'flex flex-col',
        className
      )}
      ref={tabsRef}
    >
      {/* Navigation des onglets */}
      <div className={cn('relative', orientation === 'vertical' ? 'flex-shrink-0' : '')}>
        {/* Ombres de défilement */}
        {withScrollShadows && orientation === 'horizontal' && (
          <>
            {showLeftShadow && (
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
            )}
            {showRightShadow && (
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
            )}
          </>
        )}

        {/* Conteneur des onglets */}
        <div
          ref={tabsNavRef}
          className={cn(
            orientation === 'horizontal' ? 'flex overflow-x-auto scrollbar-hide' : 'flex flex-col',
            variant === 'pills' ? 'p-1' : '',
            variantClasses[variant],
            alignmentClasses[alignment],
            sizeClasses[size]
          )}
          role="tablist"
          aria-orientation={orientation}
        >
          {tabs.map((tab, _index) => renderTab(tab))}
        </div>
      </div>

      {/* Contenu des onglets */}
      <div className={cn('tab-content flex-1 p-4', contentClassName)}>
        {tabs.map((tab) => (
          <TabPanel key={tab.id} tabId={tab.id} />
        ))}
      </div>
    </div>
  );
};

// Composant pour un usage plus simple avec des enfants
export interface TabProps {
  /** Identifiant unique de l'onglet */
  id: string;
  /** Texte ou contenu de l'étiquette de l'onglet */
  label: React.ReactNode;
  /** Contenu du panel */
  _children: React.ReactNode;
  /** Indique si l'onglet est désactivé */
  disabled?: boolean;
  /** Icône affichée avant le label */
  icon?: React.ReactNode;
  /** Badge numérique ou texte court affiché après le label */
  badge?: string | number;
}

export const Tab: React.FC<TabProps> = ({ _children }) => {
  // Ce composant est juste un wrapper pour faciliter l'utilisation
  // Il ne rend rien lui-même car son contenu est injecté via les props
  return null;
};

// Composant TabGroup qui accepte des Tab comme enfants
export interface TabGroupProps extends Omit<TabsProps, 'tabs'> {
  /** Onglets enfants (composants Tab) */
  children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[];
}

export const TabGroup: React.FC<TabGroupProps> = ({ children, ...rest }) => {
  // Convertir les enfants Tab en éléments TabItem
  const tabs: TabItem[] = React.Children.toArray(children)
    .filter(
      (child) => React.isValidElement<TabProps>(child) && (child.type === Tab || child.props.id)
    )
    .map((child) => {
      if (!React.isValidElement<TabProps>(child)) return null;

      const props = child.props as TabProps;
      const { id, label, disabled, icon, badge, _children: content } = props;

      return {
        id,
        label,
        content,
        disabled,
        icon,
        badge,
      } as TabItem;
    })
    .filter(Boolean) as TabItem[];

  if (tabs.length === 0) {
    return (
      <Typography variant="p" className="text-red-500">
        Aucun onglet trouvé. Veuillez fournir des composants Tab comme enfants.
      </Typography>
    );
  }

  return <Tabs tabs={tabs} {...rest} />;
};
