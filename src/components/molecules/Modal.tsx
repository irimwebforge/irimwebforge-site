'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Typography } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import { createPortal } from 'react-dom';
import { cn } from '../../lib/utils';

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
    >
      <div
        ref={modalRef}
        className={cn(
          'relative bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full m-4',
          sizeClasses[size],
          animationClasses[animation],
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* En-tête du modal */}
        {(title || showCloseButton) && (
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            {title && (
              <div className="font-medium text-lg">
                {typeof title === 'string' ? <Typography variant="h3">{title}</Typography> : title}
              </div>
            )}

            {showCloseButton && (
              <button
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
                onClick={onClose}
                aria-label="Fermer"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Corps du modal */}
        <div className="p-4">{children}</div>

        {/* Pied du modal */}
        {footer && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">{footer}</div>
        )}
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
      {typeof message === 'string' ? <Typography variant="p">{message}</Typography> : message}
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
      {typeof message === 'string' ? <Typography variant="p">{message}</Typography> : message}
    </Modal>
  );
};
