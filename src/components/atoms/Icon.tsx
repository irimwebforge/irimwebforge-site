import React from 'react';
import { cn } from '../../lib/utils';
import * as Icons from 'lucide-react';
import type { LucideIcon, LucideProps } from 'lucide-react';

export type IconName = keyof typeof Icons;

export interface IconProps extends Omit<LucideProps, 'ref'> {
  name: IconName;
}

export const Icon = ({ name, className, ...props }: IconProps) => {
  const IconComponent = Icons[name] as LucideIcon;

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={cn(className)} {...props} />;
};
