import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90",
        secondary: "bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary)]/90",
        tertiary: "bg-[var(--color-tertiary)] text-white hover:bg-[var(--color-tertiary)]/90",
        outline: "border border-[var(--color-primary)] bg-white text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10",
        ghost: "text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10",
        gradient: "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white"
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
    return (
      <button
        className={buttonVariants({ variant, size, fullWidth, className })}
        ref={ref}
        {...props}
      >
        {loading ? (
          <span className="inline-block animate-spin mr-2">⟳</span>
        ) : icon && iconPosition === 'left' && !iconOnly ? (
          <span className="mr-2">{icon}</span>
        ) : null}
        {!iconOnly && children}
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