'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Typography } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import { createPortal } from 'react-dom';
import { cn } from '../../lib/utils';
import { Icon, IconName } from '../atoms/Icon';
import { Badge } from '../atoms/Badge';

export interface ModalProps {
  /** État d'ouverture de la modal */
  isOpen: boolean;
  /** Fonction appelée à la fermeture de la modal */
  onClose: () => void;
  /** Titre de la modal (chaîne ou nœud React) */
  title?: React.ReactNode | string;
  /** Contenu de la modal */
  children: React.ReactNode;
  /** Contenu du pied de modal (boutons, actions) */
  footer?: React.ReactNode;
  /** Taille de la modal */
  size?: 'small' | 'medium' | 'large' | 'fullscreen';
  /** Fermer la modal avec la touche Échap */
  closeOnEsc?: boolean;
  /** Fermer la modal en cliquant sur l'arrière-plan */
  closeOnBackdropClick?: boolean;
  /** Centrer verticalement la modal */
  centered?: boolean;
  /** Classes CSS additionnelles */
  className?: string;
  /** Afficher le bouton de fermeture */
  showCloseButton?: boolean;
  /** Animation à l'ouverture/fermeture */
  animation?: 'fade' | 'slide' | 'zoom' | 'none';
  /** Classes CSS pour l'arrière-plan */
  backdropClassName?: string;
  /** Empêcher le défilement de la page en arrière-plan */
  preventScroll?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'medium',
  closeOnEsc = true,
  closeOnBackdropClick = true,
  centered = true,
  className = '',
  showCloseButton = true,
  animation = 'fade',
  backdropClassName = '',
  preventScroll = true,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // ✅ ARIA : Générer des IDs stables pour les références ARIA
  const [titleId] = useState(() => `modal-title-${Math.random().toString(36).substr(2, 9)}`);
  const [contentId] = useState(() => `modal-content-${Math.random().toString(36).substr(2, 9)}`);

  // Classes pour les tailles
  const sizeClasses = {
    small: 'max-w-md',
    medium: 'max-w-lg',
    large: 'max-w-2xl',
    fullscreen: 'max-w-full min-h-screen m-0 rounded-none',
  };

  // Classes pour les animations
  const animationClasses = {
    fade: 'animate-fade',
    slide: 'animate-slide-up',
    zoom: 'animate-zoom',
    none: '',
  };

  // Nettoyage des écouteurs d'événements et restauration du scroll
  const cleanup = useCallback(() => {
    if (preventScroll) {
      document.body.style.overflow = '';
    }
  }, [preventScroll]);

  // Montage et démontage du modal
  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
      cleanup();
    };
  }, [cleanup]);

  // Gérer l'ouverture/fermeture du modal
  useEffect(() => {
    if (isOpen) {
      if (preventScroll) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      cleanup();
    }
  }, [isOpen, preventScroll, cleanup]);

  // Gérer la touche Échap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEsc && isOpen) {
        onClose();
      }
    };

    if (isOpen && closeOnEsc) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeOnEsc, onClose]);

  // Gérer les clics à l'extérieur du modal
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  // Focus trap
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    firstElement.focus();
    window.addEventListener('keydown', handleTabKey);

    return () => {
      window.removeEventListener('keydown', handleTabKey);
    };
  }, [isOpen]);

  // Ne pas rendre si le composant n'est pas monté ou si le modal n'est pas visible
  if (!isMounted || !isOpen) return null;

  // Contenu du modal
  const modalContent = (
    <div
      className={cn(
        'fixed inset-0 z-50 flex',
        centered
          ? 'items-center justify-center'
          : 'items-start justify-center overflow-y-auto pt-10 pb-10',
        backdropClassName
      )}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
      aria-labelledby={titleId}
      aria-describedby={contentId}
    >
      <div
        ref={modalRef}
        className={cn(
          'relative surface-primary rounded-lg shadow-xl w-full m-4',
          sizeClasses[size],
          animationClasses[animation],
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* En-tête du modal */}
        {(title || showCloseButton) && (
          <div className="flex justify-between items-center p-4 border-b border-color">
            {title && (
              <div className="font-medium text-lg" id={titleId}>
                {typeof title === 'string' ? <Typography variant="h3">{title}</Typography> : title}
              </div>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="text-tertiary hover:text-secondary transition-colors p-1 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
                aria-label="Fermer la boîte de dialogue"
                type="button"
              >
                <Icon name="X" className="w-5 h-5" aria-hidden="true" />
              </button>
            )}
          </div>
        )}

        {/* Contenu du modal */}
        <div className="p-4" id={contentId}>
          {children}
        </div>

        {/* Pied de modal */}
        {footer && <div className="p-4 border-t border-color">{footer}</div>}
      </div>
    </div>
  );

  // Utiliser createPortal pour monter le modal à la fin du body
  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
};

// Composants auxiliaires pour les cas d'utilisation courants
export interface ConfirmModalProps {
  /** État d'ouverture de la modal */
  isOpen: boolean;
  /** Fonction appelée à la fermeture de la modal */
  onClose: () => void;
  /** Fonction appelée à la confirmation */
  onConfirm: () => void;
  /** Titre de la modal */
  title: string;
  /** Message ou contenu de la modal */
  message: React.ReactNode | string;
  /** Texte du bouton de confirmation */
  confirmLabel?: string;
  /** Texte du bouton d'annulation */
  cancelLabel?: string;
  /** Style visuel du bouton de confirmation */
  confirmVariant?: 'primary' | 'secondary' | 'tertiary';
  /** Taille de la modal */
  size?: 'small' | 'medium' | 'large';
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'Confirmer',
  cancelLabel = 'Annuler',
  confirmVariant = 'primary',
  size = 'small',
}) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  const footer = (
    <div className="flex justify-end space-x-3">
      <Button variant="outline" onClick={onClose}>
        {cancelLabel}
      </Button>
      <Button variant={confirmVariant} onClick={handleConfirm}>
        {confirmLabel}
      </Button>
    </div>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} footer={footer} size={size}>
      <Typography variant="p" className="mb-4 text-secondary">
        {message}
      </Typography>
    </Modal>
  );
};

export interface AlertModalProps {
  /** État d'ouverture de la modal */
  isOpen: boolean;
  /** Fonction appelée à la fermeture de la modal */
  onClose: () => void;
  /** Titre de la modal */
  title: string;
  /** Message ou contenu de la modal */
  message: React.ReactNode | string;
  /** Texte du bouton de fermeture */
  closeLabel?: string;
  /** Style visuel de l'alerte */
  variant?: 'info' | 'success' | 'warning' | 'danger';
  /** Taille de la modal */
  size?: 'small' | 'medium' | 'large';
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  closeLabel = 'Fermer',
  variant = 'info',
  size = 'small',
}) => {
  // Classes pour les variantes
  const variantClasses = {
    info: 'text-blue-600',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    danger: 'text-red-600',
  };

  // Icônes pour les variantes
  const variantIcons = {
    info: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    success: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    warning: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    danger: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };

  const footer = (
    <div className="flex justify-end">
      <Button variant="primary" onClick={onClose}>
        {closeLabel}
      </Button>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <div className="flex items-center">
          <span className={cn('mr-2', variantClasses[variant])}>{variantIcons[variant]}</span>
          <span>{title}</span>
        </div>
      }
      footer={footer}
      size={size}
    >
      <Typography variant="p" className="mb-4 text-secondary">
        {message}
      </Typography>
    </Modal>
  );
};

export interface DemoModalProps {
  /** État d'ouverture de la modal */
  isOpen: boolean;
  /** Fonction appelée à la fermeture de la modal */
  onClose: () => void;
  /** URL du site à afficher */
  siteUrl: string;
  /** Titre du projet */
  title: string;
  /** Description optionnelle */
  description?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  siteUrl,
  title,
  description,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <div className="flex items-center justify-between w-full gap-4">
          <Typography as="h3" variant="h3" className="font-medium flex-1">
            {title}
          </Typography>
          <Button
            variant="secondary"
            size="small"
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 flex-shrink-0"
          >
            <span>Voir en ligne</span>
            <Icon name="ExternalLink" className="w-4 h-4" />
          </Button>
        </div>
      }
      size="large"
      animation="zoom"
      centered={true}
      className="w-[90vw] h-[90vh] max-w-[1400px]"
    >
      <div className="flex flex-col h-full">
        {description && (
          <Typography variant="p" className="mb-4 text-secondary">
            {description}
          </Typography>
        )}
        <div className="relative flex-grow surface-secondary rounded-lg overflow-hidden min-h-[500px]">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center surface-secondary z-10">
              <div className="w-12 h-12 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <iframe
            src={siteUrl}
            className="absolute inset-0 w-full h-full border-0 z-0"
            style={{ minHeight: '500px' }}
            title={`Démo de ${title}`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </Modal>
  );
};

export interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: IconName;
    color: 'primary' | 'secondary' | 'tertiary';
    price: string;
    support: string;
    features: Array<{
      title: string;
      description?: string;
      icon?: IconName;
    }>;
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
  };
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <div className="flex items-center gap-3">
          <Icon name={service.icon} className={`w-8 h-8 text-[var(--color-${service.color})]`} />
          <Typography as="h3" variant="h3" className="font-medium">
            {service.title}
          </Typography>
        </div>
      }
      size="large"
      animation="zoom"
      centered={true}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <Typography variant="lead" className="text-secondary">
            {service.fullDescription}
          </Typography>
          <div className="flex gap-2 flex-shrink-0">
            <Badge variant={service.color} size="large">
              {service.price}
            </Badge>
            <Badge variant="default" size="large">
              {service.support}
            </Badge>
          </div>
        </div>

        <div className="surface-secondary rounded-lg p-6">
          <Typography as="h4" variant="h4" className="mb-4">
            Fonctionnalités incluses :
          </Typography>
          <div className="grid gap-6 md:grid-cols-2">
            {service.features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div
                  className={`p-2 h-fit rounded-lg bg-[var(--color-${service.color}-100)] dark:bg-[var(--color-${service.color}-900)]`}
                >
                  <Icon
                    name={feature.icon || 'Check'}
                    className={`w-5 h-5 text-[var(--color-${service.color})]`}
                  />
                </div>
                <div>
                  <Typography variant="h4" className="mb-1">
                    {feature.title}
                  </Typography>
                  {feature.description && (
                    <Typography variant="p" className="text-secondary">
                      {feature.description}
                    </Typography>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {service.testimonial && (
          <div className="surface-secondary rounded-lg p-6">
            <blockquote className="text-center">
              <Typography variant="lead" className="mb-6 italic">
                "{service.testimonial.quote}"
              </Typography>
              <footer>
                <Typography variant="h4" className="mb-1">
                  {service.testimonial.author}
                </Typography>
                <Typography variant="p" className="text-secondary">
                  {service.testimonial.role}
                </Typography>
              </footer>
            </blockquote>
          </div>
        )}

        <div className="flex justify-end gap-3 mt-4">
          <Button variant="outline" onClick={onClose}>
            Retour
          </Button>
          <Button variant="gradient" href="/contact" className="shine-effect">
            Prendre rendez-vous
          </Button>
        </div>
      </div>
    </Modal>
  );
};
