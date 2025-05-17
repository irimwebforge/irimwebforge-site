'use client';

import React from 'react';
import { Typography } from '../atoms/Typography';
import { Icon, IconName } from '../atoms/Icon';

export interface AlertProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  className?: string;
  icon?: IconName;
}

export const Alert = ({ title, children, variant = 'info', className = '', icon }: AlertProps) => {
  // Configuration des couleurs et icônes par variante
  const variantConfig = {
    info: {
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      textColor: 'text-blue-800 dark:text-blue-200',
      icon: icon || ('Info' as IconName),
    },
    success: {
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      textColor: 'text-green-800 dark:text-green-200',
      icon: icon || ('CheckCircle' as IconName),
    },
    warning: {
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
      textColor: 'text-yellow-800 dark:text-yellow-200',
      icon: icon || ('AlertTriangle' as IconName),
    },
    error: {
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      borderColor: 'border-red-200 dark:border-red-800',
      textColor: 'text-red-800 dark:text-red-200',
      icon: icon || ('AlertOctagon' as IconName),
    },
  };

  const config = variantConfig[variant];

  return (
    <div
      className={`
        ${config.bgColor} 
        ${config.borderColor} 
        ${config.textColor}
        border rounded-lg p-4
        transition-all duration-normal
        ${className}
      `}
      role="alert"
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          <Icon name={config.icon} size={20} />
        </div>
        <div>
          {title && (
            <Typography variant="h4" className="font-semibold mb-1">
              {title}
            </Typography>
          )}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
