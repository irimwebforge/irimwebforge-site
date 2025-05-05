import React from 'react';

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode | string;
  subtitle?: React.ReactNode | string;
  media?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: 'default' | 'outlined' | 'elevated' | 'accent';
  accentColor?: 'primary' | 'secondary' | 'tertiary';
  accentPosition?: 'top' | 'left' | 'bottom' | 'right';
  padding?: 'none' | 'small' | 'normal' | 'large';
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({
    className,
    title,
    subtitle,
    media,
    footer,
    children,
    variant = 'default',
    accentColor = 'primary',
    accentPosition = 'top',
    padding = 'normal',
    hover = true,
    ...props
  }, ref) => {
    // Base classes
    const baseClasses = "rounded-md overflow-hidden surface-primary";

    // Variant classes
    const variantClasses = {
      default: "border border-color",
      outlined: "border border-color",
      elevated: "shadow-md",
      accent: "border border-color"
    };

    // Padding classes
    const paddingClasses = {
      none: "",
      small: "p-2",
      normal: "p-4",
      large: "p-6"
    };

    // Accent classes
    const accentClasses = variant === 'accent' ? {
      top: `border-t-2 border-t-[var(--color-${accentColor})]`,
      bottom: `border-b-2 border-b-[var(--color-${accentColor})]`,
      left: `border-l-2 border-l-[var(--color-${accentColor})]`,
      right: `border-r-2 border-r-[var(--color-${accentColor})]`
    } : {};

    // Hover effect
    const hoverClasses = hover ? "transition-all duration-200 hover:shadow-md hover:border-color-hover" : "";

    return (
      <div
        ref={ref}
        className={`
          ${baseClasses}
          ${variantClasses[variant]}
          ${accentClasses[accentPosition] || ''}
          ${hoverClasses}
          ${className || ''}
        `}
        {...props}
      >
        {media && (
          <div className="w-full">
            {media}
          </div>
        )}

        {(title || subtitle) && (
          <div className={`${padding !== 'none' ? paddingClasses[padding] : 'p-4'} border-b border-color`}>
            {typeof title === 'string' ? (
              <h3 className="text-lg font-bold text-[var(--color-primary)]">{title}</h3>
            ) : title}
            {subtitle && (
              <div className="mt-1">
                {typeof subtitle === 'string' ? (
                  <p className="text-sm text-secondary">{subtitle}</p>
                ) : subtitle}
              </div>
            )}
          </div>
        )}

        <div className={`${paddingClasses[padding]} ${(title || subtitle) ? 'pt-0' : ''}`}>
          {children}
        </div>

        {footer && (
          <div className="px-4 py-3 border-t border-color">
            {footer}
          </div>
        )}
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card };