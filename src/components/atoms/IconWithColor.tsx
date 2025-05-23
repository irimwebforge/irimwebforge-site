'use client';

import React from 'react';
import { Icon, IconName } from './Icon';
import { cva, type VariantProps } from 'class-variance-authority';

const iconWithColorVariants = cva('inline-block', {
  variants: {
    color: {
      primary: 'text-[var(--color-primary)]',
      secondary: 'text-[var(--color-secondary)]',
      tertiary: 'text-[var(--color-tertiary)]',
    },
    variant: {
      default: '',
      muted: 'opacity-70',
      light: 'opacity-60',
      bold: 'font-semibold',
    },
    size: {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
      xl: 'w-8 h-8',
      '2xl': 'w-10 h-10',
    },
  },
  defaultVariants: {
    color: 'primary',
    variant: 'default',
    size: 'md',
  },
});

export interface IconWithColorProps extends VariantProps<typeof iconWithColorVariants> {
  name: IconName;
  className?: string;
}

export const IconWithColor: React.FC<IconWithColorProps> = ({
  name,
  color,
  variant,
  size,
  className,
  ...props
}) => {
  const iconClasses = iconWithColorVariants({ color, variant, size });

  return <Icon name={name} className={`${iconClasses} ${className || ''}`} {...props} />;
};

// Helper functions pour des usages courants
export const CheckIcon = ({
  color = 'primary',
  size = 'md',
  ...props
}: Omit<IconWithColorProps, 'name'>) => (
  <IconWithColor name="Check" color={color} size={size} {...props} />
);

export const ArrowRightIcon = ({
  color = 'primary',
  size = 'sm',
  ...props
}: Omit<IconWithColorProps, 'name'>) => (
  <IconWithColor name="ArrowRight" color={color} size={size} {...props} />
);

// Utilitaires pour générer les classes de couleur
export const getColorClasses = (color: 'primary' | 'secondary' | 'tertiary') => ({
  bg: `bg-[var(--color-${color})]`,
  bgLight: `bg-[var(--color-${color})]/10`,
  bgLightDark: `bg-[var(--color-${color})]/20`,
  text: `text-[var(--color-${color})]`,
  border: `border-[var(--color-${color})]`,
  borderLight: `border-[var(--color-${color})]/30`,
});

export const getServiceColorClasses = (color: 'primary' | 'secondary' | 'tertiary') => {
  const classes = getColorClasses(color);
  return {
    ...classes,
    iconContainer: `${classes.bgLight} dark:${classes.bgLightDark}`,
    iconText: classes.text,
    link: `${classes.text} hover:${classes.text} dark:hover:${classes.text}`,
  };
};
