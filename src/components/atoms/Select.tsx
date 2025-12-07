import React from 'react';
import { cn } from '@/lib/utils';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helpText?: string;
  variant?: 'default' | 'primary';
  options: SelectOption[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helpText, variant = 'default', options, ...props }, ref) => {
    // Classes de style pour les différentes variantes
    const variantClasses = {
      default: 'focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]',
      primary:
        'border-[var(--color-primary)]/30 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]',
    };

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-sm font-medium text-[var(--text-secondary)] mb-1">{label}</label>
        )}
        <select
          className={cn(
            `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 bg-white appearance-none`,
            error ? 'border-red-500 focus:ring-red-500' : `border-color ${variantClasses[variant]}`,
            className
          )}
          ref={ref}
          {...props}
        >
          <option value="" disabled>
            Sélectionnez une option
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
        {helpText && !error && (
          <span className="text-xs text-[var(--text-secondary)] mt-1">{helpText}</span>
        )}
      </div>
    );
  }
);
Select.displayName = 'Select';

export { Select };
