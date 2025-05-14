import { Action } from '@/templates/CTASection';

type MockAction = {
  label: string;
  href: string;
};

export const adaptAction = (mockAction: MockAction, isPrimary: boolean = false): Action => {
  return {
    text: mockAction.label,
    url: mockAction.href,
    variant: isPrimary ? 'gradient' : 'secondary'
  };
};

export const adaptActions = (primary: MockAction, secondary?: MockAction) => {
  return {
    primaryAction: adaptAction(primary, true),
    secondaryAction: secondary ? adaptAction(secondary) : undefined
  };
}; 