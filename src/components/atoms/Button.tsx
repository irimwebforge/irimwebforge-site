import React from 'react';
import Link from 'next/link';
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

// Props de base pour le bouton
type ButtonBaseProps = {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  iconOnly?: boolean;
  loading?: boolean;
  href?: string;
} & VariantProps<typeof buttonVariants>;

// Union type pour permettre soit les props de button soit les props de lien
export type ButtonProps = ButtonBaseProps & 
  (
    | React.ButtonHTMLAttributes<HTMLButtonElement>
    | (Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>)
  );

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, fullWidth, icon, iconPosition = 'left', iconOnly, loading, href, children, ...props }, ref) => {
    // Utiliser la variante 'icon' automatiquement si iconOnly est true
    const computedVariant = iconOnly ? 'icon' : variant;
    // Classe conditionnelle pour le bouton d'icône seulement
    const iconButtonClass = cn(
      className,
      iconOnly && size === 'sm' ? 'p-1' : '',
      iconOnly && size === 'lg' ? 'p-3' : ''
    );

    const buttonClasses = buttonVariants({ 
      variant: computedVariant, 
      size: iconOnly ? undefined : size, 
      fullWidth: iconOnly ? false : fullWidth, 
      className: iconButtonClass 
    });

    // Contenu du bouton (pour éviter la duplication)
    const content = (
      <>
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
      </>
    );

    // Si href est fourni, rendre un lien Next.js
    if (href) {
      return (
        <Link 
          href={href} 
          className={buttonClasses}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}
        >
          {content}
        </Link>
      );
    }

    // Sinon, rendre un bouton normal
    return (
      <button
        className={buttonClasses}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props as React.ButtonHTMLAttributes<HTMLButtonElement>}
      >
        {content}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };