'use client';

import React, { useState } from 'react';
import { Typography } from '../atoms/Typography';
import { Icon } from '../atoms/Icon';
import { cn } from '../../lib/utils';

export interface FAQItem {
  /** Identifiant unique de l'élément FAQ */
  id: string;
  /** Question ou titre de l'élément FAQ */
  question: string;
  /** Contenu de la réponse (texte ou composant React) */
  answer: React.ReactNode | string;
  /** État initial (ouvert/fermé) */
  isOpen?: boolean;
}

export interface FAQProps {
  /** Liste des éléments FAQ à afficher */
  items: FAQItem[];
  /** Classes CSS additionnelles */
  className?: string;
  /** Titre de la section FAQ */
  title?: string;
  /** Sous-titre ou description de la section FAQ */
  subtitle?: string;
  /** Couleur d'accentuation utilisée pour les éléments visuels */
  color?: 'primary' | 'secondary' | 'tertiary';
  /** Style visuel du composant */
  variant?: 'default' | 'separated' | 'bordered';
  /** Type d'icône utilisé pour indiquer l'expansion */
  icon?: 'plus' | 'arrow' | 'chevron';
  /** Autorise l'ouverture simultanée de plusieurs éléments */
  allowMultiple?: boolean;
}

export const FAQ: React.FC<FAQProps> = ({
  items,
  className = '',
  title,
  subtitle,
  color = 'primary',
  variant = 'default',
  icon = 'plus',
  allowMultiple = false,
}) => {
  // État pour suivre les éléments ouverts
  const [openItems, setOpenItems] = useState<Record<string, boolean>>(
    items.reduce(
      (acc, item) => {
        acc[item.id] = item.isOpen || false;
        return acc;
      },
      {} as Record<string, boolean>
    )
  );

  // Gérer le clic sur un élément
  const handleItemClick = (itemId: string) => {
    if (allowMultiple) {
      setOpenItems((prev) => ({
        ...prev,
        [itemId]: !prev[itemId],
      }));
    } else {
      const newOpenItems: Record<string, boolean> = {};
      items.forEach((item) => {
        newOpenItems[item.id] = item.id === itemId && !openItems[itemId];
      });
      setOpenItems(newOpenItems);
    }
  };

  // Classes pour les variantes
  const variantClasses = {
    default: '',
    separated: 'space-y-4',
    bordered: 'divide-y divide-gray-200',
  };

  // Icônes de toggle
  const renderIcon = (isOpen: boolean, _itemId: string) => {
    const iconColor = `text-[var(--color-${color})]`;

    switch (icon) {
      case 'plus':
        return (
          <div className={cn('transition-transform duration-200', iconColor)}>
            {isOpen ? <Icon name="Minus" size={20} /> : <Icon name="Plus" size={20} />}
          </div>
        );
      case 'arrow':
        return (
          <div
            className={cn(
              'transition-transform duration-200',
              isOpen ? 'rotate-180' : 'rotate-0',
              iconColor
            )}
          >
            <Icon name="ChevronDown" size={20} />
          </div>
        );
      case 'chevron':
      default:
        return (
          <div
            className={cn(
              'transition-transform duration-200',
              isOpen ? 'rotate-90' : 'rotate-0',
              iconColor
            )}
          >
            <Icon name="ChevronRight" size={20} />
          </div>
        );
    }
  };

  // Rendu d'un élément FAQ
  const renderFAQItem = (item: FAQItem) => {
    const isOpen = openItems[item.id];

    // Classes spécifiques par variante
    const itemClasses = {
      default: 'border-b border-color last:border-b-0',
      separated: 'border border-color rounded-lg',
      bordered: '',
    };

    return (
      <div
        key={item.id}
        className={cn(variant === 'default' || variant === 'bordered' ? itemClasses[variant] : '')}
      >
        <div
          className={cn(
            'flex justify-between items-center gap-4 w-full cursor-pointer py-4 px-2',
            variant === 'separated' ? itemClasses[variant] : '',
            isOpen ? `text-[var(--color-${color})]` : ''
          )}
          onClick={() => handleItemClick(item.id)}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${item.id}`}
        >
          <Typography
            variant="h4"
            className={cn('flex-1', isOpen ? `text-[var(--color-${color})]` : '')}
          >
            {item.question}
          </Typography>

          {renderIcon(isOpen, item.id)}
        </div>

        <div
          id={`faq-answer-${item.id}`}
          className={cn(
            'overflow-hidden transition-all duration-300',
            isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0',
            'px-2'
          )}
          aria-hidden={!isOpen}
        >
          {typeof item.answer === 'string' ? (
            <Typography variant="p" className="text-secondary">
              {item.answer}
            </Typography>
          ) : (
            item.answer
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={cn('faq-container', className)}>
      {(title || subtitle) && (
        <div className="mb-8">
          {title && (
            <Typography variant="h2" className="mb-3">
              {title}
            </Typography>
          )}

          {subtitle && (
            <Typography variant="lead" className="text-secondary">
              {subtitle}
            </Typography>
          )}
        </div>
      )}

      <div className={cn('space-y-0', variantClasses[variant])}>{items.map(renderFAQItem)}</div>
    </div>
  );
};

// Composant simple pour un élément individuel de FAQ (utilisable hors du composant principal)
export interface FAQItemComponentProps {
  /** Question ou titre de l'élément FAQ */
  question: string;
  /** Contenu de la réponse (texte ou composant React) */
  answer: React.ReactNode | string;
  /** Classes CSS additionnelles */
  className?: string;
  /** État initial (ouvert/fermé) */
  isOpen?: boolean;
  /** Couleur d'accentuation utilisée pour les éléments visuels */
  color?: 'primary' | 'secondary' | 'tertiary';
}

export const FAQItemComponent: React.FC<FAQItemComponentProps> = ({
  question,
  answer,
  className = '',
  isOpen = false,
  color = 'primary',
}) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  return (
    <div className={cn('border-b border-color last:border-b-0', className)}>
      <div
        className={cn(
          'flex justify-between items-center gap-4 cursor-pointer py-4 px-2',
          isExpanded ? `text-[var(--color-${color})]` : ''
        )}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Typography variant="h4" className={isExpanded ? `text-[var(--color-${color})]` : ''}>
          {question}
        </Typography>

        <div
          className={cn(
            'transition-transform duration-200',
            isExpanded ? 'rotate-180' : 'rotate-0',
            `text-[var(--color-${color})]`
          )}
        >
          <Icon name="ChevronDown" size={20} />
        </div>
      </div>

      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isExpanded ? 'max-h-96 py-4' : 'max-h-0 py-0',
          'px-2'
        )}
      >
        {typeof answer === 'string' ? (
          <Typography variant="p" className="text-secondary">
            {answer}
          </Typography>
        ) : (
          answer
        )}
      </div>
    </div>
  );
};
