import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Icon } from '@/components/atoms/Icon';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-primary)]",
  {
    variants: {
      variant: {
        primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 active:bg-[var(--color-primary)]/80",
        secondary: "bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary)]/90 active:bg-[var(--color-secondary)]/80",
        tertiary: "bg-[var(--color-tertiary)] text-white hover:bg-[var(--color-tertiary)]/90 active:bg-[var(--color-tertiary)]/80",
        outline: "border border-[var(--color-primary)] bg-white text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 active:bg-[var(--color-primary)]/20",
        ghost: "text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 active:bg-[var(--color-primary)]/20",
        gradient: "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white hover:brightness-110 active:brightness-90 transition-all duration-200 shine-effect",
        icon: "p-2 h-auto w-auto aspect-square text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10",
      },
      size: {
        sm: "h-8 px-3 py-2 text-xs",
        md: "h-10 px-4 py-2",
        lg: "h-12 px-6 py-3 text-base"
      },
      fullWidth: {
        true: "w-full",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  iconOnly?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, icon, iconPosition = 'left', iconOnly, loading, children, ...props }, ref) => {
    // Utiliser la variante 'icon' automatiquement si iconOnly est true
    const computedVariant = iconOnly ? 'icon' : variant;
    // Classe conditionnelle pour le bouton d'icône seulement
    const iconButtonClass = cn(
      className,
      iconOnly && size === 'sm' ? 'p-1' : '',
      iconOnly && size === 'lg' ? 'p-3' : ''
    );

    return (
      <button
        className={buttonVariants({ 
          variant: computedVariant, 
          size: iconOnly ? undefined : size, 
          fullWidth: iconOnly ? false : fullWidth, 
          className: iconButtonClass 
        })}
        ref={ref}
        {...props}
      >
        {loading ? (
          <Icon name="Loader2" className="animate-spin mr-2" />
        ) : icon && iconPosition === 'left' && !iconOnly ? (
          <span className="mr-2">{icon}</span>
        ) : null}
        
        {!iconOnly && (
          <span className="relative z-10">{children}</span>
        )}
        
        {icon && iconPosition === 'right' && !iconOnly ? (
          <span className="ml-2">{icon}</span>
        ) : iconOnly ? (
          icon
        ) : null}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };