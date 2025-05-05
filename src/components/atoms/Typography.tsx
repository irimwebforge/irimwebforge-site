import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-4xl font-bold font-display italic text-primary",
      h2: "text-3xl font-bold font-display italic text-secondary",
      h3: "text-2xl font-bold font-display text-secondary",
      h4: "text-xl font-semibold font-display text-secondary",
      p: "text-base font-body text-foreground",
      lead: "text-lg font-medium font-body text-foreground",
      small: "text-sm font-body text-foreground/80",
      subtle: "text-sm italic font-body text-foreground/70",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, ...props }, ref) => {
    const Component = as ||
      (variant === 'h1' ? 'h1' :
       variant === 'h2' ? 'h2' :
       variant === 'h3' ? 'h3' :
       variant === 'h4' ? 'h4' :
       variant === 'small' || variant === 'subtle' ? 'span' : 'p');

    return (
      <Component
        ref={ref}
        className={typographyVariants({ variant, className })}
        {...props}
      />
    );
  }
);
Typography.displayName = "Typography";

export { Typography };