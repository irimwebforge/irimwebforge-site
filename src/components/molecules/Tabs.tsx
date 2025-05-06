"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Typography } from '@/components/atoms/Typography';
import { cn } from '@/lib/utils';

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
  animated?: boolean;
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
  animated = true,
  withScrollShadows = true,
  contentClassName = '',
}) => {
  // État pour l'onglet actif
  const [activeTab, setActiveTab] = useState<string>(() => {
    // Utilise defaultTab si fourni et s'il existe dans la liste des onglets
    if (defaultTab && tabs.some(tab => tab.id === defaultTab)) {
      return defaultTab;
    }
    // Sinon utilise le premier onglet non désactivé
    const firstEnabledTab = tabs.find(tab => !tab.disabled);
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
  const updateScrollShadows = () => {
    if (!tabsNavRef.current || !withScrollShadows || orientation === 'vertical') return;
    
    const { scrollLeft, scrollWidth, clientWidth } = tabsNavRef.current;
    setShowLeftShadow(scrollLeft > 0);
    setShowRightShadow(scrollLeft < scrollWidth - clientWidth - 1);
  };
  
  // Initialisation et mise à jour des ombres de défilement
  useEffect(() => {
    updateScrollShadows();
    
    const tabsNavElement = tabsNavRef.current;
    if (tabsNavElement && withScrollShadows && orientation === 'horizontal') {
      tabsNavElement.addEventListener('scroll', updateScrollShadows);
      window.addEventListener('resize', updateScrollShadows);
    }
    
    return () => {
      if (tabsNavElement && withScrollShadows && orientation === 'horizontal') {
        tabsNavElement.removeEventListener('scroll', updateScrollShadows);
        window.removeEventListener('resize', updateScrollShadows);
      }
    };
  }, [withScrollShadows, orientation]);
  
  // Faire défiler pour rendre l'onglet actif visible
  useEffect(() => {
    if (orientation === 'horizontal' && tabsNavRef.current) {
      const activeTabElement = tabsNavRef.current.querySelector(`[data-tab-id="${activeTab}"]`) as HTMLElement;
      
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
  const handleKeyDown = (e: React.KeyboardEvent, tabId: string, index: number) => {
    const enabledTabs = tabs.filter(tab => !tab.disabled);
    const currentIndex = enabledTabs.findIndex(tab => tab.id === tabId);
    
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
  const activeTabData = tabs.find(tab => tab.id === activeTab);
  
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
      <div className={cn(
        'relative',
        orientation === 'vertical' ? 'flex-shrink-0' : ''
      )}>
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
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              role="tab"
              data-tab-id={tab.id}
              className={cn(
                'flex items-center px-4 py-2 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2',
                orientation === 'vertical' ? 'text-left' : '',
                tab.id === activeTab ? activeTabClasses[variant] : '',
                tab.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800',
                variant === 'pills' ? 'rounded-full' : variant === 'boxed' ? 'rounded-t-lg' : '',
                orientation === 'horizontal' && (variant === 'default' || variant === 'underlined') ? 'border-b-2 border-transparent' : '',
                alignment === 'stretch' ? 'flex-1' : ''
              )}
              onClick={() => !tab.disabled && handleTabChange(tab.id)}
              onKeyDown={(e) => !tab.disabled && handleKeyDown(e, tab.id, index)}
              tabIndex={tab.id === activeTab ? 0 : -1}
              aria-selected={tab.id === activeTab}
              aria-disabled={tab.disabled}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
            >
              {tab.icon && <span className="mr-2">{tab.icon}</span>}
              <span>{tab.label}</span>
              {tab.badge && (
                <span className={badgeClasses}>
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Contenu des onglets */}
      <div className={cn('tab-content flex-1 p-4', contentClassName)}>
        {tabs.map(tab => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`tabpanel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            className={cn(
              animated ? 'transition-opacity duration-300' : '',
              tab.id === activeTab ? 'block opacity-100' : 'hidden opacity-0'
            )}
          >
            {tab.content}
          </div>
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
  children: React.ReactNode;
  /** Indique si l'onglet est désactivé */
  disabled?: boolean;
  /** Icône affichée avant le label */
  icon?: React.ReactNode;
  /** Badge numérique ou texte court affiché après le label */
  badge?: string | number;
}

export const Tab: React.FC<TabProps> = ({ children }) => {
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
    .filter(child => React.isValidElement<TabProps>(child) && (child.type === Tab || child.props.id))
    .map(child => {
      if (!React.isValidElement<TabProps>(child)) return null;
      
      const props = child.props as TabProps;
      const { id, label, disabled, icon, badge, children: content } = props;
      
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