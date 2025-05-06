# Composants Atomiques IrimWebForge

Les composants atomiques sont les blocs de construction les plus élémentaires de notre interface utilisateur. Ils sont conçus pour être simples, réutilisables et ne dépendent pas d'autres composants.

## Liste des composants

### 1. Logo
Un composant adaptable qui affiche le logo IrimWebForge. S'adapte automatiquement au thème clair/sombre.
- Props: `width`, `height`, `mode` (auto, light, dark), `variant` (standard, banner), `format` (svg, png)

### 2. Typography
Système typographique cohérent avec différentes variantes pour les titres et textes.
- Variantes de titres: `h1`, `h2`, `h3`, `h4`
- Variantes de texte: `p` (paragraphe), `lead` (mise en avant), `small` (texte réduit), `subtle` (subtil)
- Props: `variant`, `as` (élément HTML), `className`

### 3. Button
Boutons interactifs avec plusieurs variantes et états.
- Variantes: `primary`, `secondary`, `tertiary`, `outline`, `ghost`, `link`, `icon`
- États: `default`, `hover`, `focus`, `disabled`, `loading`
- Props: `variant`, `size`, `disabled`, `loading`, `icon`, `iconPosition`

### 4. Container
Conteneur responsive pour aligner et centrer le contenu de la page.
- Props: `children`, `size` (xs, sm, md, lg, xl, full), `className`, `as`

### 5. Input
Champs de saisie texte et numériques.
- Variants: `standard`, `outlined`, `filled`
- Props: `id`, `value`, `onChange`, `type`, `placeholder`, `disabled`, `error`

### 6. NavLink
Liens de navigation avec détection automatique de la route active.
- Props: `href`, `children`, `activeClassName`, `exact`, `underline`, `icon`, `iconPosition`

### 7. Divider
Lignes de séparation visuelles personnalisables.
- Props: `orientation` (horizontal, vertical), `variant` (solid, dashed, dotted), `color`, `thickness`, `label`, `labelPosition`

### 8. Badge
Affiche des indicateurs numériques ou des étiquettes en forme de pastilles.
- Props: `variant`, `size`, `shape`, `isSolid`, `isOutlined`, `dot`, `count`, `maxCount`

### 9. Avatar
Représentation visuelle d'un utilisateur ou d'une entité.
- Props: `src`, `alt`, `size`, `shape`, `name` (pour générer des initiales), `icon`, `status`, `badge`

## Conventions d'utilisation

- Les composants atomiques doivent rester indépendants des autres composants (sauf des éléments HTML natifs).
- Ils doivent s'adapter au thème clair/sombre automatiquement.
- Les propriétés doivent avoir des valeurs par défaut sensées.
- Les composants doivent être accessibles (ARIA, contraste, etc.).

## Bonnes pratiques

1. **Cohérence** - Utilisez ces composants au lieu de créer des éléments UI ad hoc
2. **Accessibilité** - Tous les composants sont conçus pour être accessibles (WCAG)
3. **Thème** - Les composants s'adaptent automatiquement au thème clair/sombre
4. **Personnalisation** - Utilisez les props plutôt que de modifier directement les composants

## Utilisation

```jsx
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';

export default function MyComponent() {
  return (
    <div>
      <Typography variant="h2">Titre de section</Typography>
      <Typography variant="p">Contenu de paragraphe</Typography>
      <Button variant="primary">Cliquez ici</Button>
    </div>
  );
}
``` 