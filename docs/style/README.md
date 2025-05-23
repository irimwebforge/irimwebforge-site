# Documentation du Design System

Ce dossier contient la documentation complète du design system d'IRIM Webforge.

## Organisation

Notre documentation du design system est organisée de manière thématique :

- [**index.md**](./index.md) - Point d'entrée principal et vue d'ensemble
- [**principles.md**](./principles.md) - Principes fondamentaux du design system
- [**colors.md**](./colors.md) - Système de couleurs et applications
- [**typography.md**](./typography.md) - Système typographique et hiérarchie
- [**spacing.md**](./spacing.md) - Système d'espacement et mise en page
- [**responsive.md**](./responsive.md) - Principes et implémentation du responsive design

### Architecture Atomic Design

Notre architecture de composants suit la méthodologie Atomic Design :

- [**atomic-design.md**](./atomic-design.md) - Vue d'ensemble de l'architecture
- [**atoms.md**](./atoms.md) - Composants atomiques (boutons, icônes, etc.)
- [**molecules.md**](./molecules.md) - Composants moléculaires (cartes, formulaires, etc.)
- [**organisms.md**](./organisms.md) - Composants organismes (header, sections, etc.)

## Source de vérité

**Important :** Le Design System Lab (`src/app/ds-lab`) demeure la source de vérité ultime. Cette documentation est complémentaire à l'implémentation réelle que vous trouverez dans :

- `/src/app/ds-lab/fundamentals/page.tsx` - Fondamentaux (couleurs, typographie)
- `/src/app/ds-lab/components/page.tsx` - Composants Atomic Design
- `/src/app/ds-lab/templates/page.tsx` - Templates (sections complètes)
- `/src/app/ds-lab/icons/page.tsx` - Bibliothèque d'icônes (en développement)

## Composantes du projet

Le projet IRIM Webforge est composé de trois parties distinctes :

1. **App principale** - L'application centrale du site (`/src/app`)
2. **Blog** - Une section blog (non encore développée)
3. **Design System Lab (DS-Lab)** - Source de vérité pour tous les éléments de design (`/src/app/ds-lab`)

## Principes de maintenance

Pour maintenir cette documentation :

1. **Éviter les redites** - Chaque information doit exister à un seul endroit
2. **Référencer plutôt que dupliquer** - Utiliser des liens entre documents
3. **Mettre à jour en parallèle** - Toute mise à jour du code doit s'accompagner d'une mise à jour de la documentation

Pour ajouter une nouvelle section :

1. Créer un nouveau fichier Markdown dans ce dossier
2. L'ajouter à la liste dans [index.md](./index.md)
3. L'ajouter à ce README.md
4. Vérifier tous les renvois depuis les autres fichiers
