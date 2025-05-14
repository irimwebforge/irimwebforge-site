'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  className?: string;
  baseUrl?: string;
  showNumbers?: boolean;
  showEdges?: boolean;
  edgeCount?: number;
  siblingCount?: number;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'simple' | 'compact';
  previousLabel?: string;
  nextLabel?: string;
  firstLabel?: string;
  lastLabel?: string;
  ariaLabel?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
  baseUrl = '',
  showNumbers = true,
  showEdges = true,
  edgeCount = 1,
  siblingCount = 1,
  size = 'medium',
  variant = 'default',
  previousLabel = 'Précédent',
  nextLabel = 'Suivant',
  firstLabel = 'Première',
  lastLabel = 'Dernière',
  ariaLabel = 'Pagination',
}) => {
  // Validation des props
  const validatedCurrentPage = Math.max(1, Math.min(currentPage, totalPages));
  const validatedTotalPages = Math.max(1, totalPages);

  // Génération des numéros de page à afficher
  const pageNumbers = useMemo(() => {
    const pages: Array<number | string> = [];

    // Afficher le nombre de pages souhaité au début
    for (let i = 1; i <= Math.min(edgeCount, validatedTotalPages); i++) {
      pages.push(i);
    }

    // Afficher les pages autour de la page actuelle
    let startPage = Math.max(edgeCount + 1, validatedCurrentPage - siblingCount);
    const endPage = Math.min(validatedTotalPages - edgeCount, validatedCurrentPage + siblingCount);

    // Ajouter un ellipsis si nécessaire
    if (startPage > edgeCount + 1) {
      pages.push('...');
    } else {
      startPage = edgeCount + 1;
    }

    // Ajouter les pages du milieu
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Ajouter un ellipsis à la fin si nécessaire
    if (endPage < validatedTotalPages - edgeCount) {
      pages.push('...');
    }

    // Ajouter les dernières pages
    for (
      let i = Math.max(endPage + 1, validatedTotalPages - edgeCount + 1);
      i <= validatedTotalPages;
      i++
    ) {
      if (i > 0 && !pages.includes(i)) {
        pages.push(i);
      }
    }

    return pages;
  }, [validatedCurrentPage, validatedTotalPages, edgeCount, siblingCount]);

  // Gestion du changement de page
  const handlePageChange = (page: number) => {
    if (page !== validatedCurrentPage && page >= 1 && page <= validatedTotalPages) {
      if (onPageChange) {
        onPageChange(page);
      }
    }
  };

  // Classes pour la taille
  const sizeClasses = {
    small: 'text-xs h-7 w-7 min-w-7',
    medium: 'text-sm h-9 w-9 min-w-9',
    large: 'text-base h-11 w-11 min-w-11',
  };

  // Classes communes pour les éléments
  const baseItemClasses = `inline-flex items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 ${sizeClasses[size]}`;
  const activeItemClasses = 'bg-[var(--color-primary)] text-white';
  const inactiveItemClasses =
    'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700';
  const disabledItemClasses = 'text-gray-400 pointer-events-none';

  // Rendu d'un élément de pagination
  const renderPaginationItem = (pageNum: number | string, label?: React.ReactNode) => {
    const isActive = pageNum === validatedCurrentPage;
    const isDisabled = typeof pageNum !== 'number';
    const displayLabel = label || pageNum;

    if (isDisabled) {
      // Ellipsis
      return (
        <span className={`${baseItemClasses} ${disabledItemClasses} cursor-default`}>
          {displayLabel}
        </span>
      );
    }

    const pageClasses = `${baseItemClasses} ${isActive ? activeItemClasses : inactiveItemClasses}`;

    if (baseUrl) {
      return (
        <Link
          href={`${baseUrl}${pageNum}`}
          className={pageClasses}
          aria-current={isActive ? 'page' : undefined}
          aria-label={`Page ${pageNum}`}
        >
          {displayLabel}
        </Link>
      );
    }

    return (
      <button
        type="button"
        onClick={() => handlePageChange(pageNum as number)}
        className={pageClasses}
        disabled={isActive}
        aria-current={isActive ? 'page' : undefined}
        aria-label={`Page ${pageNum}`}
      >
        {displayLabel}
      </button>
    );
  };

  // Rendu de la pagination compacte
  if (variant === 'compact') {
    return (
      <nav className={`flex items-center space-x-2 ${className}`} aria-label={ariaLabel}>
        <div className="flex items-center">
          {/* Bouton précédent */}
          {renderPaginationItem(
            validatedCurrentPage > 1 ? validatedCurrentPage - 1 : 1,
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          )}

          {/* Indicateur de page actuelle */}
          <span className="px-3">
            Page {validatedCurrentPage} sur {validatedTotalPages}
          </span>

          {/* Bouton suivant */}
          {renderPaginationItem(
            validatedCurrentPage < validatedTotalPages
              ? validatedCurrentPage + 1
              : validatedTotalPages,
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </div>
      </nav>
    );
  }

  // Rendu de la pagination simple
  if (variant === 'simple') {
    return (
      <nav className={`flex items-center justify-between ${className}`} aria-label={ariaLabel}>
        {/* Bouton précédent */}
        <div>
          {renderPaginationItem(
            validatedCurrentPage > 1 ? validatedCurrentPage - 1 : 1,
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              {previousLabel}
            </span>
          )}
        </div>

        {/* Indicateur de page actuelle */}
        <span className="text-sm text-gray-700 dark:text-gray-300">
          Page {validatedCurrentPage} sur {validatedTotalPages}
        </span>

        {/* Bouton suivant */}
        <div>
          {renderPaginationItem(
            validatedCurrentPage < validatedTotalPages
              ? validatedCurrentPage + 1
              : validatedTotalPages,
            <span className="flex items-center">
              {nextLabel}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          )}
        </div>
      </nav>
    );
  }

  // Pagination par défaut avec numéros de page
  return (
    <nav className={`flex items-center space-x-2 ${className}`} aria-label={ariaLabel}>
      {/* Première page */}
      {showEdges && validatedCurrentPage > 1 + edgeCount && (
        <div className="flex items-center mr-1">{renderPaginationItem(1, firstLabel)}</div>
      )}

      {/* Bouton précédent */}
      <div className="flex items-center mr-1">
        {renderPaginationItem(
          validatedCurrentPage > 1 ? validatedCurrentPage - 1 : 1,
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        )}
      </div>

      {/* Pages numérotées */}
      {showNumbers && (
        <div className="flex items-center space-x-2">
          {pageNumbers.map((pageNum, index) => (
            <div key={`${pageNum}-${index}`}>{renderPaginationItem(pageNum)}</div>
          ))}
        </div>
      )}

      {/* Bouton suivant */}
      <div className="flex items-center ml-1">
        {renderPaginationItem(
          validatedCurrentPage < validatedTotalPages
            ? validatedCurrentPage + 1
            : validatedTotalPages,
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </div>

      {/* Dernière page */}
      {showEdges && validatedCurrentPage < validatedTotalPages - edgeCount && (
        <div className="flex items-center ml-1">
          {renderPaginationItem(validatedTotalPages, lastLabel)}
        </div>
      )}
    </nav>
  );
};
