'use client';

import React from 'react';
import { Typography } from '../atoms/Typography';
import { cn } from '../../lib/utils';

// Types pour les cellules du tableau
export type ComparisonCellValue =
  | string
  | React.ReactNode
  | boolean
  | {
      value: string | React.ReactNode | boolean;
      highlight?: boolean;
      tooltip?: string;
    };

// Structure d'une ligne de comparaison
export interface ComparisonRow {
  /** Identifiant unique de la ligne */
  id: string;
  /** Nom de la fonctionnalité comparée */
  feature: string;
  /** Description détaillée de la fonctionnalité */
  description?: string;
  /** Valeurs pour chaque colonne */
  values: ComparisonCellValue[];
  /** Catégorie de la fonctionnalité (pour regroupement) */
  category?: string;
  /** Mise en évidence visuelle de la ligne */
  highlight?: boolean;
}

// Structure d'une colonne
export interface ComparisonColumn {
  /** Identifiant unique de la colonne */
  id: string;
  /** Titre de la colonne */
  title: string;
  /** Description détaillée de la colonne */
  description?: string;
  /** Mise en évidence visuelle de la colonne */
  highlight?: boolean;
  /** Couleur d'accentuation de la colonne */
  color?: 'primary' | 'secondary' | 'tertiary';
}

export interface ComparativeTableProps {
  /** Colonnes du tableau (solutions comparées) */
  columns: ComparisonColumn[];
  /** Lignes du tableau (caractéristiques comparées) */
  rows: ComparisonRow[];
  /** Classes CSS additionnelles */
  className?: string;
  /** Titre du tableau */
  title?: string;
  /** Sous-titre ou description du tableau */
  subtitle?: string;
  /** Fixer l'en-tête lors du défilement */
  stickyHeader?: boolean;
  /** Regrouper les lignes par catégorie */
  groupByCategory?: boolean;
  /** Mettre en évidence la colonne recommandée */
  highlightRecommended?: boolean;
  /** Point de rupture pour la vue responsive */
  responsiveBreakpoint?: 'sm' | 'md' | 'lg';
}

export const ComparativeTable: React.FC<ComparativeTableProps> = ({
  columns,
  rows,
  className = '',
  title,
  subtitle,
  stickyHeader = true,
  groupByCategory = false,
  highlightRecommended = true,
  responsiveBreakpoint = 'md',
}) => {
  // Regrouper les lignes par catégorie si nécessaire
  const rowsByCategory: Record<string, ComparisonRow[]> = {};

  if (groupByCategory) {
    rows.forEach((row) => {
      const category = row.category || 'Général';
      if (!rowsByCategory[category]) {
        rowsByCategory[category] = [];
      }
      rowsByCategory[category].push(row);
    });
  } else {
    rowsByCategory['all'] = rows;
  }

  // Classes de réactivité
  const responsiveClasses = {
    sm: 'sm:table-fixed',
    md: 'md:table-fixed',
    lg: 'lg:table-fixed',
  };

  // Rendu d'une cellule
  const renderCell = (value: ComparisonCellValue, columnIndex: number): React.ReactNode => {
    // Si la valeur est un booléen
    if (typeof value === 'boolean') {
      return value ? (
        <span className="text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      ) : (
        <span className="text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      );
    }

    // Si la valeur est un objet avec des propriétés spécifiques
    if (typeof value === 'object' && value !== null && 'value' in value) {
      const { value: cellValue, highlight, tooltip } = value;

      const cellContent: React.ReactNode =
        typeof cellValue === 'boolean' ? renderCell(cellValue, columnIndex) : cellValue;

      // Si la cellule a un tooltip
      if (tooltip) {
        return (
          <div className="relative group">
            <div
              className={
                highlight
                  ? `font-bold text-[var(--color-${columns[columnIndex]?.color || 'primary'})]`
                  : ''
              }
            >
              {cellContent}
              <span className="ml-1 text-gray-400 cursor-help">?</span>
            </div>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 hidden group-hover:block z-10 p-2 bg-gray-800 text-white text-xs rounded shadow-lg max-w-xs">
              {tooltip}
            </div>
          </div>
        );
      }

      // Si la cellule est mise en évidence
      if (highlight) {
        return (
          <div
            className={`font-bold text-[var(--color-${columns[columnIndex]?.color || 'primary'})]`}
          >
            {cellContent}
          </div>
        );
      }

      return cellContent;
    }

    // Valeur simple
    return value;
  };

  // Rendu d'une ligne responsive (pour les écrans mobiles)
  const renderResponsiveRow = (row: ComparisonRow) => {
    return (
      <div
        key={row.id}
        className={cn('mb-6 pb-6 border-b border-gray-200', row.highlight ? 'bg-gray-50' : '')}
      >
        <Typography variant="h4" className="mb-2">
          {row.feature}
        </Typography>

        {row.description && (
          <Typography variant="small" className="text-[var(--text-secondary)] mb-4">
            {row.description}
          </Typography>
        )}

        <div className="space-y-4">
          {columns.map((column, index) => (
            <div key={column.id} className="flex justify-between items-center">
              <div
                className={cn(
                  'font-medium',
                  column.highlight ? `text-[var(--color-${column.color || 'primary'})]` : ''
                )}
              >
                {column.title}
              </div>
              <div>{renderCell(row.values[index], index)}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Rendu du tableau pour une catégorie donnée
  const renderTableCategory = (categoryName: string, categoryRows: ComparisonRow[]) => {
    return (
      <div key={categoryName} className="mb-8">
        {groupByCategory && categoryName !== 'all' && (
          <Typography variant="h3" className="mb-4">
            {categoryName}
          </Typography>
        )}

        {/* Version responsive (mobile) */}
        <div className={cn(`block ${responsiveBreakpoint}:hidden`)}>
          {categoryRows.map(renderResponsiveRow)}
        </div>

        {/* Version tableau (desktop) */}
        <div className={cn(`hidden ${responsiveBreakpoint}:block overflow-hidden`)}>
          <table className={cn('w-full border-collapse', responsiveClasses[responsiveBreakpoint])}>
            <thead className={stickyHeader ? 'sticky top-0 bg-white z-10' : ''}>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left p-3 w-1/4">
                  <Typography variant="h4">Fonctionnalité</Typography>
                </th>

                {columns.map((column) => (
                  <th
                    key={column.id}
                    className={cn(
                      'text-center p-3',
                      column.highlight && highlightRecommended
                        ? `bg-[var(--color-${column.color || 'primary'})] bg-opacity-5`
                        : ''
                    )}
                  >
                    <Typography
                      variant="h4"
                      className={
                        column.highlight && highlightRecommended
                          ? `text-[var(--color-${column.color || 'primary'})]`
                          : ''
                      }
                    >
                      {column.title}
                    </Typography>

                    {column.description && (
                      <Typography variant="small" className="mt-1 text-[var(--text-secondary)]">
                        {column.description}
                      </Typography>
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {categoryRows.map((row) => (
                <tr
                  key={row.id}
                  className={cn('border-b border-gray-200', row.highlight ? 'bg-gray-50' : '')}
                >
                  <td className="p-3">
                    <Typography variant="p" className="font-medium">
                      {row.feature}
                    </Typography>

                    {row.description && (
                      <Typography variant="small" className="text-[var(--text-secondary)] mt-1">
                        {row.description}
                      </Typography>
                    )}
                  </td>

                  {columns.map((column, index) => (
                    <td
                      key={`${row.id}-${column.id}`}
                      className={cn(
                        'text-center p-3',
                        column.highlight && highlightRecommended
                          ? `bg-[var(--color-${column.color || 'primary'})] bg-opacity-5`
                          : ''
                      )}
                    >
                      {renderCell(row.values[index], index)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className={cn('comparative-table', className)}>
      {(title || subtitle) && (
        <div className="mb-8">
          {title && (
            <Typography variant="h2" className="mb-2">
              {title}
            </Typography>
          )}

          {subtitle && (
            <Typography variant="lead" className="text-[var(--text-secondary)]">
              {subtitle}
            </Typography>
          )}
        </div>
      )}

      {Object.entries(rowsByCategory).map(([category, categoryRows]) =>
        renderTableCategory(category, categoryRows)
      )}
    </div>
  );
};
