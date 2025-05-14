import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
  variant?: 'default' | 'primary' | 'tertiary';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, helpText, variant = 'default', ...props }, ref) => {
    // Classes de style pour les différentes variantes
    const variantClasses = {
      default: 'focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]',
      primary:
        'border-[var(--color-primary)]/30 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]',
      tertiary:
        'border-[var(--color-tertiary)]/30 focus:ring-[var(--color-tertiary)] focus:border-[var(--color-tertiary)]',
    };

    return (
      <div className="flex flex-col gap-1">
        {label && <label className="text-sm font-medium text-secondary mb-1">{label}</label>}
        <input
          type={type}
          className={cn(
            `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2`,
            error ? 'border-red-500 focus:ring-red-500' : `border-color ${variantClasses[variant]}`,
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
        {helpText && !error && <span className="text-xs text-tertiary mt-1">{helpText}</span>}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
