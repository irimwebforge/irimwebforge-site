// Types de variants réutilisables à travers toute l'application

export type ColorVariant = 'primary' | 'secondary' | 'tertiary';
export type StatusVariant = 'success' | 'warning' | 'error' | 'info';
export type SizeVariant = 'small' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost' | 'gradient';

// Types de layout communs
export type LayoutVariant = 'grid' | 'list' | 'cards';
export type AlignmentVariant = 'left' | 'center' | 'right';
export type PositionVariant = 'left' | 'right' | 'top' | 'bottom';

// Types de background
export type BackgroundVariant = 'light' | 'dark' | 'primary' | 'secondary' | 'tertiary' | 'transparent' | 'none';

// Types d'animation
export type AnimationVariant = 'fade' | 'slide' | 'scale' | 'zoom' | 'none';

// Types de forme
export type ShapeVariant = 'rounded' | 'pill' | 'square';

// Types d'icône avec couleur (pour réutilisabilité)
export interface IconWithColorProps {
  color?: ColorVariant;
  size?: SizeVariant | number;
  variant?: 'filled' | 'outline' | 'ghost';
}

// Interface de base pour les actions/CTA
export interface BaseAction {
  text: string;
  href?: string;
  variant?: ButtonVariant;
  isMainCta?: boolean;
  onClick?: () => void;
}

// Interface de base pour les éléments avec badge
export interface BadgeElement {
  text: string;
  variant?: ColorVariant | StatusVariant;
} 