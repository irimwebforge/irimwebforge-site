# Adaptateurs du Design System

Ce dossier contient tous les adaptateurs utilisés pour transformer les données mock en props pour les composants du design system.

## Structure

```
src/utils/adapters/
├── index.ts          # Export centralisé des adaptateurs
├── ctaAdapter.ts     # Adaptation des données CTA
├── serviceAdapter.ts # Adaptation des services
├── valueAdapter.ts   # Adaptation des propositions de valeur
└── projectAdapter.ts # Adaptation des projets
```

## Principes

1. **Responsabilité unique** : Chaque adaptateur transforme un type spécifique de données
2. **Réutilisabilité** : Les adaptateurs sont utilisables dans toute l'application
3. **Type-safety** : Tous les adaptateurs sont fortement typés
4. **Configuration flexible** : Support des variantes via les configs

## Utilisation

```typescript
import { serviceAdapter, type BaseAdapterConfig } from '@/utils/adapters';

// Configuration basique
const serviceProps = serviceAdapter(mockData);

// Avec configuration
const config: BaseAdapterConfig = {
  locale: 'fr',
  variant: 'featured'
};
const customServiceProps = serviceAdapter(mockData, config);
```

## Bonnes pratiques

1. Toujours utiliser les adaptateurs via l'import depuis `index.ts`
2. Ne pas dupliquer la logique d'adaptation
3. Étendre les adaptateurs existants plutôt que d'en créer de nouveaux
4. Documenter les nouvelles variantes dans les fichiers d'adaptateurs 