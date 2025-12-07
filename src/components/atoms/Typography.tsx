import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-4xl font-bold font-display italic text-[var(--color-secondary-accessible)]',
      h2: 'text-3xl font-bold font-display italic text-[var(--color-secondary-accessible)]',
      h3: 'text-2xl font-bold font-display text-[var(--color-secondary-accessible)]',
      h4: 'text-xl font-semibold font-display text-foreground',
      p: 'text-base font-body text-foreground',
      lead: 'text-lg font-medium font-body text-foreground',
      small: 'text-sm font-body text-foreground/80',
      subtle: 'text-sm italic font-body text-foreground/70',
      accent: 'text-base font-medium font-body text-[var(--color-tertiary)]',
      highlight: 'px-1 py-0.5 rounded bg-amber-50 text-[var(--color-tertiary)] font-medium',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
  withAccentedWords?: boolean;
}

const accentWords = [
  'innovation',
  'excellence',
  'qualité',
  'créativité',
  'expertise',
  'efficacité',
  'personnalisé',
  'sur-mesure',
  'unique',
  'exclusif',
  'authenticité',
  'digitale',
  'artisanal',
  'immersion',
];

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, withAccentedWords, children, ...props }, ref) => {
    const Component =
      as ||
      (variant === 'h1'
        ? 'h1'
        : variant === 'h2'
          ? 'h2'
          : variant === 'h3'
            ? 'h3'
            : variant === 'h4'
              ? 'h4'
              : variant === 'small' ||
                  variant === 'subtle' ||
                  variant === 'accent' ||
                  variant === 'highlight'
                ? 'span'
                : 'p');

    let content = children;
    if (withAccentedWords && typeof children === 'string') {
      const parts = [];
      let lastIndex = 0;

      const processedText = children.toLowerCase();
      accentWords.forEach((word) => {
        const wordLower = word.toLowerCase();
        let startIndex = processedText.indexOf(wordLower, lastIndex);

        while (startIndex !== -1) {
          if (startIndex > lastIndex) {
            parts.push(children.substring(lastIndex, startIndex));
          }

          const originalWord = children.substring(startIndex, startIndex + word.length);
          parts.push(
            <span key={startIndex} className="text-[var(--color-tertiary)] font-medium">
              {originalWord}
            </span>
          );

          lastIndex = startIndex + word.length;
          startIndex = processedText.indexOf(wordLower, lastIndex);
        }
      });

      if (lastIndex < children.length) {
        parts.push(children.substring(lastIndex));
      }

      content = parts.length > 1 ? <>{parts}</> : children;
    }

    return (
      <Component
        ref={ref}
        className={typographyVariants({ variant, className })}
        style={{ whiteSpace: props.style?.whiteSpace || 'pre-line', ...props.style }}
        {...props}
      >
        {content}
      </Component>
    );
  }
);
Typography.displayName = 'Typography';

export { Typography };
