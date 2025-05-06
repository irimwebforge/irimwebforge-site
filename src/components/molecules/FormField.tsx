import React from 'react';
import { Input } from '@/components/atoms/Input';
import { Typography } from '@/components/atoms/Typography';

export interface FormFieldProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'textarea' | 'select';
  placeholder?: string;
  required?: boolean;
  error?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  helperText?: string;
  options?: Array<{
    value: string;
    label: string;
  }>;
  rows?: number;
  disabled?: boolean;
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
  const baseClasses = `${fullWidth ? 'w-full' : ''} ${className}`;
  
  // Champ textarea
  if (type === 'textarea') {
    return (
      <div className={`flex flex-col gap-1 ${baseClasses}`}>
        <label htmlFor={fieldId} className="text-sm font-medium text-[var(--text-secondary)]">
          {label}
          {required && <span className="ml-1 text-[var(--color-tertiary)]">*</span>}
        </label>
        <textarea
          id={fieldId}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
          disabled={disabled}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
            error ? 'border-red-500' : 'border-[var(--border-color)]'
          } surface-primary text-foreground`}
        />
        {error ? (
          <Typography variant="small" className="text-red-500 mt-1">
            {error}
          </Typography>
        ) : helperText ? (
          <Typography variant="small" className="text-tertiary mt-1">
            {helperText}
          </Typography>
        ) : null}
      </div>
    );
  }
  
  // Champ select
  if (type === 'select') {
    return (
      <div className={`flex flex-col gap-1 ${baseClasses}`}>
        <label htmlFor={fieldId} className="text-sm font-medium text-[var(--text-secondary)]">
          {label}
          {required && <span className="ml-1 text-[var(--color-tertiary)]">*</span>}
        </label>
        <select
          id={fieldId}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
            error ? 'border-red-500' : 'border-[var(--border-color)]'
          } surface-primary text-foreground`}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error ? (
          <Typography variant="small" className="text-red-500 mt-1">
            {error}
          </Typography>
        ) : helperText ? (
          <Typography variant="small" className="text-tertiary mt-1">
            {helperText}
          </Typography>
        ) : null}
      </div>
    );
  }
  
  // Champ input standard
  return (
    <div className={`flex flex-col gap-1 ${baseClasses}`}>
      <label htmlFor={fieldId} className="text-sm font-medium text-[var(--text-secondary)]">
        {label}
        {required && <span className="ml-1 text-[var(--color-tertiary)]">*</span>}
      </label>
      <input
        id={fieldId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
          error ? 'border-red-500' : 'border-[var(--border-color)]'
        } surface-primary text-foreground`}
      />
      {error ? (
        <Typography variant="small" className="text-red-500 mt-1">
          {error}
        </Typography>
      ) : helperText ? (
        <Typography variant="small" className="text-tertiary mt-1">
          {helperText}
        </Typography>
      ) : null}
    </div>
  );
}; 