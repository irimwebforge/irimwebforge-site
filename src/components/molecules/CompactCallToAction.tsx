import React from 'react';
import { Typography } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import Link from 'next/link';
import { cn } from '../../lib/utils';

export interface CompactCallToActionProps {
  /** Texte principal */
  text: string;
  /** Texte du bouton d'action */
  ctaText: string;
  /** URL de destination */
  ctaUrl: string;
  /** Icône optionnelle à afficher avant le texte */
  icon?: React.ReactNode;
  /** Classes CSS additionnelles */
  className?: string;
  /** Couleur d'accentuation */
  color?: 'primary' | 'secondary' | 'tertiary';
}

export const CompactCallToAction: React.FC<CompactCallToActionProps> = ({
  text,
  ctaText,
  ctaUrl,
  icon,
  className = '',
  color = 'tertiary',
}) => {
  // Utiliser bg-amber-50 au lieu de bg-[var(--color-tertiary)] bg-opacity-5 pour la couleur tertiaire
  const bgColorClass =
    color === 'tertiary' ? 'bg-amber-50' : `bg-[var(--color-${color})] bg-opacity-5`;

  return (
    <div
      className={cn('flex items-center justify-between p-4 rounded-lg', bgColorClass, className)}
    >
      <div className="flex items-center">
        {icon && <div className={`mr-3 text-[var(--color-${color})]`}>{icon}</div>}
        <Typography variant="p" className="font-medium">
          {text}
        </Typography>
      </div>

      <Link href={ctaUrl}>
        <Button
          variant="secondary"
          size="small"
          className={`text-[var(--color-${color})] border-[var(--color-${color})]`}
        >
          {ctaText}
        </Button>
      </Link>
    </div>
  );
};
