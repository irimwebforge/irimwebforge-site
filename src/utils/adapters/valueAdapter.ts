import { Value } from '@/templates/ValueProposition';
import { Icon, IconName } from '@/components/atoms/Icon';
import React from 'react';

type MockValue = {
  id: string;
  title: string;
  description: string;
  icon: string | React.ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary';
};

export const adaptValue = (value: MockValue): Value => ({
  id: value.id,
  title: value.title,
  description: value.description,
  icon: typeof value.icon === 'string' ? React.createElement(Icon, { name: value.icon as IconName }) : value.icon,
  color: value.color || 'primary'
});

export const adaptValues = (mockValues: MockValue[]): Value[] => {
  return mockValues.map(adaptValue);
}; 