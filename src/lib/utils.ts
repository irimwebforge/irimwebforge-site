import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utilitaire pour fusionner des classes CSS, avec support pour les classes conditionnelles
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
