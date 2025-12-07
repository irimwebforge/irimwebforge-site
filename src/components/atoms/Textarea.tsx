import React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helpText?: string;
  variant?: 'default' | 'primary';
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helpText, variant = 'default', rows = 4, ...props }, ref) => {
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
        <textarea
          rows={rows}
          className={cn(
            `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 resize-y`,
            error ? 'border-red-500 focus:ring-red-500' : `border-color ${variantClasses[variant]}`,
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
        {helpText && !error && (
          <span className="text-xs text-[var(--text-secondary)] mt-1">{helpText}</span>
        )}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
