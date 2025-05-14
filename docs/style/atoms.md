# Composants Atomiques

> Ce document liste et décrit les composants atomiques de notre design system. Pour une vue d'ensemble de notre architecture de composants, consultez le [guide Atomic Design](./atomic-design.md).

## Qu'est-ce qu'un composant atomique ?

Les atomes sont les composants de base de notre design system - les plus petits éléments indivisibles qui servent de blocs fondamentaux pour construire des interfaces plus complexes.

**Caractéristiques des atomes :**

- Indépendants (ne dépendent pas d'autres composants)
- Une seule responsabilité
- Hautement réutilisables

## Catalogue des composants atomiques

### Button

- **Description** : Bouton d'action principal
- **Variants** : primary, secondary, tertiary, outline, ghost, link, gradient, icon
- **Props clés** : variant, size, loading, disabled, icon, iconPosition, iconOnly
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section Buttons)

### Typography

- **Description** : Système de typographie
- **Variants** : h1-h4, p, lead, small, subtle, accent, highlight
- **Props clés** : variant, as, className, withAccentedWords
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section Typography)

### Input

- **Description** : Champ de saisie
- **Variants** : default, primary, accent
- **Props clés** : label, error, helpText, variant
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section Input)

### Select

- **Description** : Menu déroulant
- **Variants** : default, primary, accent
- **Props clés** : options, label, error, helpText, variant
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section Select)

### Textarea

- **Description** : Zone de texte
- **Variants** : default, primary, accent
- **Props clés** : rows, label, error, helpText, variant
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section Textarea)

### Badge

- **Description** : Étiquette
- **Variants** : primary, secondary, tertiary, success, warning, error, info, default
- **Props clés** : variant, size, shape, isSolid, isOutlined, dot, count, maxCount
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section Badge)

### Icon

- **Description** : Icône (utilisant Lucide Icons)
- **Props clés** : name, size, color, className
- **Implémentation de référence** : `/src/components/atoms/Icon.tsx`
- **Statut** : La visualisation des icônes disponibles dans le DS Lab est **en cours de développement**

### Logo

- **Description** : Logo du site
- **Props clés** : width, height, mode (auto, light, dark), variant (standard, banner), format (svg, png)
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section Logo)

### Divider

- **Description** : Séparateur
- **Props clés** : orientation (horizontal, vertical), variant (solid, dashed, dotted), color, thickness, label, labelPosition
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section Divider)

### NavLink

- **Description** : Lien de navigation
- **Props clés** : href, active, useGradient, color, exact, underline, icon, iconPosition, className
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section NavLink)

## Principes d'utilisation

### 1. Réutilisabilité

- Utilisez les atomes comme base pour tous les composants
- Évitez la duplication de code
- Maintenez la cohérence visuelle

### 2. Accessibilité

- Incluez les attributs ARIA appropriés
- Assurez la navigation au clavier
- Maintenez les contrastes WCAG

### 3. Responsive

- Tous les composants doivent être adaptés aux différentes tailles d'écran
- Utilisez les classes responsives de manière cohérente

## Exemples d'utilisation

```tsx
// Button
<Button variant="primary" size="lg">
  Cliquez-moi
</Button>

// Typography
<Typography as="h1" variant="h1">
  Titre Principal
</Typography>

// Input
<Input
  label="Votre email"
  type="email"
  placeholder="exemple@domain.com"
  variant="primary"
/>

// Icon
<Icon name="ArrowRight" size={24} className="text-primary" />
```

---

> 🧩 **Documentation connexe** : Consultez la documentation des [Molécules](./molecules.md) pour voir comment ces atomes sont combinés en composants plus complexes.
