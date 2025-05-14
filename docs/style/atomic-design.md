# Architecture Atomic Design

> Ce document présente notre architecture de composants basée sur la méthodologie Atomic Design. Pour les détails sur chaque niveau de composants, consultez les sections correspondantes de la documentation.

## Principes de l'Atomic Design

Notre design system suit l'architecture Atomic Design, qui organise les composants en niveaux de complexité croissante :

```typescript
const componentStructure = {
  // Atomes : composants fondamentaux indivisibles
  atoms: [
    'Button', 'Input', 'Select', 'Textarea', 'Typography', 
    'Icon', 'Badge', 'Divider', 'NavLink', 'Logo'
  ],
  
  // Molécules : combinaisons d'atomes formant des composants fonctionnels
  molecules: [
    'Card', 'FormField', 'Tabs', 'BlogPostCard', 'StatCard',
    'PricingPlan', 'ConversationForm', 'FAQ', 'FeatureGrid'
  ],
  
  // Organismes : sections complètes de l'interface
  organisms: [
    'Header', 'Footer', 'HeroSection', 'PageHeader',
    'FeatureSection', 'EnhancedContactForm'
  ],
  
  // Templates : squelettes de pages
  templates: [
    'ProjectShowcase', 'ServiceOverview', 'CTASection', 'ValueProposition'
  ]
};
```

## Niveaux de composants

### 1. Atomes

Les atomes sont les composants de base, les plus petits éléments indivisibles de notre design system.

**Caractéristiques** :
- Ne dépendent pas d'autres composants
- Hautement réutilisables
- Axés sur une fonction spécifique

**Exemples** : Button, Typography, Icon, Input

[En savoir plus sur les composants atomiques](./atoms.md)

### 2. Molécules

Les molécules combinent plusieurs atomes pour former des composants fonctionnels plus complexes.

**Caractéristiques** :
- Assemblent plusieurs atomes
- Remplissent une fonction utilisateur spécifique
- Moyennement complexes

**Exemples** : Card, Tabs, FormField, ConversationForm

[En savoir plus sur les composants moléculaires](./molecules.md)

### 3. Organismes

Les organismes sont des assemblages complexes de molécules et atomes formant des sections complètes de l'interface.

**Caractéristiques** :
- Combinent plusieurs molécules et atomes
- Forment des sections complètes de page
- Peuvent contenir une logique métier

**Exemples** : Header, Footer, HeroSection, FeatureSection

[En savoir plus sur les composants organismes](./organisms.md)

### 4. Templates

Les templates sont des squelettes de pages qui définissent la structure et le placement des organismes.

**Caractéristiques** :
- Définissent la structure globale
- Placent les organismes dans un contexte
- Coordonnent le flux d'information

**Exemples** : ProjectShowcase, ServiceOverview, ValueProposition

## Implémentation

### Principes de conception

1. **Composition**
   - Privilégier la composition plutôt que l'héritage
   - Utiliser les props pour la personnalisation
   - Un composant = une responsabilité unique

2. **Props et API**
   - Types stricts avec TypeScript
   - Valeurs par défaut pertinentes
   - Documentation JSDoc complète

### Structure des composants

```tsx
// Modèle de structure pour tous les composants
import React from 'react';
import { cn } from '@/lib/utils';

export interface ExampleProps {
  // Props avec types et valeurs par défaut
  className?: string;
  variant?: 'default' | 'primary' | 'secondary';
}

export const Example = React.forwardRef<HTMLDivElement, ExampleProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    // Logique du composant
    
    return (
      <div
        ref={ref}
        className={cn(
          // Classes de base
          // Classes conditionnelles selon les props
          className
        )}
        {...props}
      />
    );
  }
);

Example.displayName = 'Example';
```

## Avantages de l'Atomic Design

1. **Cohérence** : Garantit une interface utilisateur cohérente en réutilisant les mêmes composants
2. **Maintenabilité** : Facilite la maintenance en isolant les changements
3. **Collaboration** : Fournit un langage commun entre designers et développeurs
4. **Évolutivité** : Permet d'étendre le système sans en compromettre l'intégrité

## Source de vérité

Le Design System Lab (`src/app/ds-lab`) est la source de vérité pour tous les composants :

- **Atomes** : `/src/app/ds-lab/components/page.tsx` (section atomiques)
- **Molécules** : `/src/app/ds-lab/components/page.tsx` (section moléculaires)
- **Organismes** : `/src/app/ds-lab/components/page.tsx` (section organismes)
- **Templates** : `/src/app/ds-lab/templates/page.tsx`

## Adaptateurs de données

Pour transformer les données brutes en format compatible avec les composants, nous utilisons des adaptateurs :

```tsx
// Exemple d'adaptateur
import { ProjectData } from '@/types';

export function adaptProjects(projects: ProjectData[]) {
  return projects.map(project => ({
    id: project.id,
    title: project.name,
    description: project.shortDescription,
    image: project.coverImage,
    tags: project.technologies,
    link: `/projects/${project.slug}`
  }));
}
```

Consultez les adaptateurs dans `/src/app/ds-lab/templates/` (projectAdapter.ts, serviceAdapter.ts, etc.) pour plus d'exemples.

---

> 📚 **Documentation détaillée** : Pour des informations plus spécifiques sur chaque niveau de composants, consultez les documents [Atomes](./atoms.md), [Molécules](./molecules.md), et [Organismes](./organisms.md). 