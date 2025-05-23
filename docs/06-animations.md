# Guide des Animations IRIM Webforge

Ce document définit les règles et patterns d'animation pour maintenir une cohérence visuelle dans l'ensemble du site.

## 💫 Source de Vérité et Implémentation

Le Design System Lab est la source de vérité pour l'implémentation des animations. Pour des exemples concrets et validés, référez-vous à :

- **Implémentation de référence** : `src/app/ds-lab/components/page.tsx` et `src/app/ds-lab/fundamentals/page.tsx`
- **Documentation technique détaillée** : `docs/principles/animations.md`

Toute évolution des animations doit d'abord être testée et validée dans le DS-Lab avant d'être intégrée au site principal.

## Table des matières

1. [Durées Standard](#durées-standard)
2. [Timing Functions](#timing-functions)
3. [Patterns d'Animation](#patterns-danimation)
4. [Cas d'Usage](#cas-dusage)
5. [Accessibilité](#accessibilité)

## Durées Standard

```css
/* Dans @layer base */
:root {
  --duration-instant: 0ms; /* Changements instantanés */
  --duration-fast: 150ms; /* Micro-interactions */
  --duration-normal: 300ms; /* Transitions standard */
  --duration-slow: 500ms; /* Animations complexes */
  --duration-slower: 1000ms; /* Animations de page */
}
```

### Règles d'Usage

1. **Micro-interactions (150ms)**

   - Hover sur les boutons
   - Focus sur les inputs
   - Changements d'état subtils

2. **Transitions Standard (300ms)**

   - Apparition/disparition d'éléments
   - Changements de couleur
   - Transformations simples

3. **Animations Complexes (500ms)**
   - Modals et popups
   - Menus déroulants
   - Transitions de page

## Timing Functions

```css
/* Dans @layer base */
:root {
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-linear: linear;
}
```

### Règles d'Usage

1. **ease-in-out**

   - Transitions d'interface
   - Changements d'état
   - Animations de navigation

2. **ease-out**

   - Apparitions d'éléments
   - Entrées de modals
   - Notifications

3. **ease-in**

   - Disparitions d'éléments
   - Sorties de modals
   - Fermetures de menus

4. **linear**
   - Animations continues
   - Loaders
   - Progress bars

## Patterns d'Animation

### Fade

```css
/* Dans @layer components */
.fade-enter {
  opacity: 0;
  transition: opacity var(--duration-normal) var(--ease-in-out);
}

.fade-enter-active {
  opacity: 1;
}

.fade-exit {
  opacity: 1;
  transition: opacity var(--duration-normal) var(--ease-in-out);
}

.fade-exit-active {
  opacity: 0;
}
```

### Slide

```css
/* Dans @layer components */
.slide-enter {
  transform: translateY(20px);
  opacity: 0;
  transition: all var(--duration-normal) var(--ease-out);
}

.slide-enter-active {
  transform: translateY(0);
  opacity: 1;
}

.slide-exit {
  transform: translateY(0);
  opacity: 1;
  transition: all var(--duration-normal) var(--ease-in);
}

.slide-exit-active {
  transform: translateY(-20px);
  opacity: 0;
}
```

### Scale

```css
/* Dans @layer components */
.scale-enter {
  transform: scale(0.95);
  opacity: 0;
  transition: all var(--duration-normal) var(--ease-out);
}

.scale-enter-active {
  transform: scale(1);
  opacity: 1;
}

.scale-exit {
  transform: scale(1);
  opacity: 1;
  transition: all var(--duration-normal) var(--ease-in);
}

.scale-exit-active {
  transform: scale(0.95);
  opacity: 0;
}
```

## Cas d'Usage

### Navigation

```css
/* Dans @layer components */
.nav-link {
  transition: color var(--duration-fast) var(--ease-in-out);
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link.active {
  background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
  transition: background var(--duration-normal) var(--ease-in-out);
}
```

### Modals

```css
/* Dans @layer components */
.modal-enter {
  opacity: 0;
  transform: scale(0.95);
  transition: all var(--duration-normal) var(--ease-out);
}

.modal-enter-active {
  opacity: 1;
  transform: scale(1);
}

.modal-exit {
  opacity: 1;
  transform: scale(1);
  transition: all var(--duration-normal) var(--ease-in);
}

.modal-exit-active {
  opacity: 0;
  transform: scale(0.95);
}
```

### Formulaires

```css
/* Dans @layer components */
.input-focus {
  transition: all var(--duration-fast) var(--ease-in-out);
}

.input-focus:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-primary-light);
}
```

### Loading States

```css
/* Dans @layer utilities */
.loading-spinner {
  animation: spin var(--duration-slower) var(--ease-linear) infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

## Accessibilité

### Règles Générales

1. **Respect des Préférences**

   ```css
   /* En fin de fichier CSS */
   @media (prefers-reduced-motion: reduce) {
     * {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
       scroll-behavior: auto !important;
     }
   }
   ```

2. **Contrôle de l'Utilisateur**

   - Éviter les animations automatiques
   - Permettre l'arrêt des animations
   - Fournir des alternatives statiques

3. **Performance**
   - Utiliser `transform` et `opacity`
   - Éviter les animations sur `width` et `height`
   - Limiter les animations simultanées

### Bonnes Pratiques

1. **Durée Maximale**

   - Ne pas dépasser 500ms pour les animations d'interface
   - Limiter les animations continues à 5 secondes

2. **Feedback Visuel**

   - Assurer un contraste suffisant
   - Fournir des indicateurs non-animés
   - Maintenir la lisibilité pendant les animations

3. **États de Chargement**
   - Utiliser des animations subtiles
   - Éviter les animations distrayantes
   - Fournir un feedback clair

## Liens vers l'implémentation

Pour visualiser ces animations en action :

1. Consultez le DS-Lab : `src/app/ds-lab/components/page.tsx`
2. Examinez les transitions des boutons dans `src/app/ds-lab/templates/page.tsx`
3. Vérifiez l'effet de "shine" (brillance) sur les CTA dans les templates validés

Ces implémentations servent de référence et doivent être suivies pour maintenir la cohérence dans tout le projet.
