"use client";

import React, { useState } from 'react';
import { Typography } from '@/components/atoms/Typography';

export interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode | string;
  isOpen?: boolean;
}

export interface FAQProps {
  items: FAQItem[];
  className?: string;
  title?: string;
  subtitle?: string;
  accentColor?: 'primary' | 'secondary' | 'tertiary';
  variant?: 'default' | 'separated' | 'bordered';
  icon?: 'plus' | 'arrow' | 'chevron';
  allowMultiple?: boolean;
}

export const FAQ: React.FC<FAQProps> = ({
  items,
  className = '',
  title,
  subtitle,
  accentColor = 'primary',
  variant = 'default',
  icon = 'plus',
  allowMultiple = false,
}) => {
  // État pour suivre les éléments ouverts
  const [openItems, setOpenItems] = useState<Record<string, boolean>>(
    items.reduce((acc, item) => {
      acc[item.id] = item.isOpen || false;
      return acc;
    }, {} as Record<string, boolean>)
  );
  
  // Gérer le clic sur un élément
  const handleItemClick = (itemId: string) => {
    if (allowMultiple) {
      setOpenItems(prev => ({
        ...prev,
        [itemId]: !prev[itemId]
      }));
    } else {
      const newOpenItems: Record<string, boolean> = {};
      items.forEach(item => {
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
  const renderIcon = (isOpen: boolean, itemId: string) => {
    const iconColor = `text-[var(--color-${accentColor})]`;
    
    switch (icon) {
      case 'plus':
        return (
          <div className={`transition-transform duration-200 ${iconColor}`}>
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            )}
          </div>
        );
      case 'arrow':
        return (
          <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'} ${iconColor}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>
        );
      case 'chevron':
      default:
        return (
          <div className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : 'rotate-0'} ${iconColor}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        );
    }
  };
  
  // Rendu d'un élément FAQ
  const renderFAQItem = (item: FAQItem, index: number) => {
    const isOpen = openItems[item.id];
    
    // Classes spécifiques par variante
    const itemClasses = {
      default: 'border-b border-gray-200 last:border-b-0',
      separated: 'border border-gray-200 rounded-lg',
      bordered: '',
    };
    
    return (
      <div 
        key={item.id} 
        className={`${variant === 'default' || variant === 'bordered' ? itemClasses[variant] : ''}`}
      >
        <div 
          className={`
            flex justify-between items-center gap-4 w-full cursor-pointer py-4 px-2 
            ${variant === 'separated' ? itemClasses[variant] : ''}
            ${isOpen ? `text-[var(--color-${accentColor})]` : ''}
          `}
          onClick={() => handleItemClick(item.id)}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${item.id}`}
        >
          <Typography 
            variant="h4"
            className={`flex-1 ${isOpen ? `text-[var(--color-${accentColor})]` : ''}`}
          >
            {item.question}
          </Typography>
          
          {renderIcon(isOpen, item.id)}
        </div>
        
        <div 
          id={`faq-answer-${item.id}`}
          className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'} px-2`}
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
    <div className={`faq-container ${className}`}>
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
      
      <div className={`space-y-0 ${variantClasses[variant]}`}>
        {items.map(renderFAQItem)}
      </div>
    </div>
  );
};

// Composant simple pour un élément individuel de FAQ (utilisable hors du composant principal)
export interface FAQItemComponentProps {
  question: string;
  answer: React.ReactNode | string;
  className?: string;
  isOpen?: boolean;
  accentColor?: 'primary' | 'secondary' | 'tertiary';
}

export const FAQItemComponent: React.FC<FAQItemComponentProps> = ({
  question,
  answer,
  className = '',
  isOpen = false,
  accentColor = 'primary',
}) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);
  
  return (
    <div className={`border-b border-gray-200 last:border-b-0 ${className}`}>
      <div 
        className={`flex justify-between items-center gap-4 cursor-pointer py-4 px-2 ${isExpanded ? `text-[var(--color-${accentColor})]` : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Typography 
          variant="h4"
          className={`flex-1 ${isExpanded ? `text-[var(--color-${accentColor})]` : ''}`}
        >
          {question}
        </Typography>
        
        <div className={`transition-transform duration-200 text-[var(--color-${accentColor})]`}>
          {isExpanded ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          )}
        </div>
      </div>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 py-4' : 'max-h-0 py-0'} px-2`}
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