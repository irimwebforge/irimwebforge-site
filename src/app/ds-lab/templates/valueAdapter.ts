import { Value } from '@/components/templates/ValueProposition';
import { mockValues } from '../mocks/data';
import { Icon, IconName } from '@/components/atoms/Icon';
import React from 'react';

// Adaptateur pour transformer les Value des données mock en type Value attendu par le composant
export const adaptValues = (): Value[] => {
  return mockValues.map(value => ({
    id: value.id,
    title: value.title,
    description: value.description,
    icon: typeof value.icon === 'string' ? React.createElement(Icon, { name: value.icon as IconName }) : value.icon,
    color: value.color || 'primary' // Utilise la couleur si elle existe, sinon primary par défaut
  }));
};

// Exporte les valeurs adaptées pour utilisation directe
export const adaptedValues = adaptValues(); 