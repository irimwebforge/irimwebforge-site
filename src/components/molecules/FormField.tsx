import React from 'react';
import { Typography } from '../atoms/Typography';
import { cn } from '../../lib/utils';

export interface FormFieldProps {
  /** ID unique du champ, utilisé aussi comme attribut htmlFor du label */
  id: string;
  /** Texte du label associé au champ */
  label: string;
  /** Type de champ à afficher */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'textarea' | 'select';
  /** Texte d'exemple affiché dans le champ vide */
  placeholder?: string;
  /** Indique si le champ est obligatoire */
  required?: boolean;
  /** Message d'erreur à afficher */
  error?: string;
  /** Classes CSS additionnelles */
  className?: string;
  /** Valeur du champ */
  value?: string;
  /** Fonction appelée lors du changement de valeur */
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  /** Texte d'aide affiché sous le champ */
  helperText?: string;
  /** Options pour le champ select */
  options?: Array<{
    value: string;
    label: string;
    disabled?: boolean;
  }>;
  /** Nombre de lignes pour le textarea */
  rows?: number;
  /** Indique si le champ est désactivé */
  disabled?: boolean;
  /** Indique si le champ doit occuper toute la largeur disponible */
  fullWidth?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type = 'text',
  placeholder,
  required = false,
  error,
  className = '',
  value,
  onChange,
  helperText,
  options = [],
  rows = 3,
  disabled = false,
  fullWidth = true,
}) => {
  const fieldId = id;
  const errorId = `${fieldId}-error`;
  const helperId = `${fieldId}-helper`;
  const baseClasses = cn(fullWidth ? 'w-full' : '', className);

  // ✅ ARIA : Construction des IDs de description
  const describedBy = [];
  if (error) describedBy.push(errorId);
  if (helperText) describedBy.push(helperId);
  const ariaDescribedBy = describedBy.length > 0 ? describedBy.join(' ') : undefined;

  // Champ textarea
  if (type === 'textarea') {
    return (
      <div className={cn('flex flex-col gap-1', baseClasses)}>
        <label htmlFor={fieldId} className="text-sm font-medium text-[var(--text-secondary)]">
          {label}
          {required && (
            <span className="ml-1 text-[var(--color-tertiary)]" aria-label="requis">
              *
            </span>
          )}
        </label>
        <textarea
          id={fieldId}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
          disabled={disabled}
          // ✅ ARIA : Attributs d'accessibilité
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={ariaDescribedBy}
          className={cn(
            'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] surface-primary text-foreground',
            error ? 'border-red-500' : 'border-[var(--border-color)]'
          )}
        />
        {error ? (
          <Typography
            variant="small"
            className="text-red-500 mt-1"
            id={errorId}
            // ✅ ARIA : Message d'erreur en live region
            role="alert"
            aria-live="polite"
          >
            {error}
          </Typography>
        ) : helperText ? (
          <Typography variant="small" className="text-[var(--text-secondary)] mt-1" id={helperId}>
            {helperText}
          </Typography>
        ) : null}
      </div>
    );
  }

  // Champ select
  if (type === 'select') {
    return (
      <div className={cn('flex flex-col gap-1', baseClasses)}>
        <label htmlFor={fieldId} className="text-sm font-medium text-[var(--text-secondary)]">
          {label}
          {required && (
            <span className="ml-1 text-[var(--color-tertiary)]" aria-label="requis">
              *
            </span>
          )}
        </label>
        <select
          id={fieldId}
          value={value}
          onChange={onChange}
          disabled={disabled}
          // ✅ ARIA : Attributs d'accessibilité
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={ariaDescribedBy}
          className={cn(
            'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] surface-primary text-foreground',
            error ? 'border-red-500' : 'border-[var(--border-color)]'
          )}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        {error ? (
          <Typography
            variant="small"
            className="text-red-500 mt-1"
            id={errorId}
            // ✅ ARIA : Message d'erreur en live region
            role="alert"
            aria-live="polite"
          >
            {error}
          </Typography>
        ) : helperText ? (
          <Typography variant="small" className="text-[var(--text-secondary)] mt-1" id={helperId}>
            {helperText}
          </Typography>
        ) : null}
      </div>
    );
  }

  // Champ input standard
  return (
    <div className={cn('flex flex-col gap-1', baseClasses)}>
      <label htmlFor={fieldId} className="text-sm font-medium text-[var(--text-secondary)]">
        {label}
        {required && (
          <span className="ml-1 text-[var(--color-tertiary)]" aria-label="requis">
            *
          </span>
        )}
      </label>
      <input
        id={fieldId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        // ✅ ARIA : Attributs d'accessibilité
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={ariaDescribedBy}
        className={cn(
          'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] surface-primary text-foreground',
          error ? 'border-red-500' : 'border-[var(--border-color)]'
        )}
      />
      {error ? (
        <Typography
          variant="small"
          className="text-red-500 mt-1"
          id={errorId}
          // ✅ ARIA : Message d'erreur en live region
          role="alert"
          aria-live="polite"
        >
          {error}
        </Typography>
      ) : helperText ? (
        <Typography variant="small" className="text-[var(--text-secondary)] mt-1" id={helperId}>
          {helperText}
        </Typography>
      ) : null}
    </div>
  );
};
