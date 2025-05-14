# Composants Atomiques

Ce dossier contient les composants atomiques qui constituent les éléments fondamentaux du design system IrimWebForge.

## Principes généraux

Les composants atomiques suivent les principes suivants :

- **Simplicité** : Chaque composant fait une seule chose et la fait bien
- **Réutilisabilité** : Conçus pour être utilisés dans de nombreux contextes
- **Personnalisation** : Flexibles via les props mais avec des valeurs par défaut sensées
- **Accessibilité** : Conformes aux normes WCAG 2.1 AA
- **Cohérence** : Suivent les règles du design system validé

## Hiérarchie visuelle

Notre design system utilise une hiérarchie visuelle claire avec les principes suivants :

### Couleurs

- **Primaire (Turquoise)** : `#00B3B3` - Éléments interactifs, liens et accents
- **Secondaire (Bleu foncé)** : `#004466` - Titres, textes importants, éléments d'autorité
- **Tertiaire (Orange)** : `#F06424` - Uniquement pour accentuation (bordures, badges, icônes)

### Boutons

- **CTA principal** : Gradient avec effet brillance - Actions principales
- **Bouton primaire** : Turquoise - Actions secondaires importantes
- **Bouton outline** : Bordure turquoise - Actions alternatives

## Composants disponibles

### Button

Composant pour les actions interactives.

```jsx
<Button variant="gradient" className="shine-effect">Action principale</Button>
<Button variant="primary">Action secondaire</Button>
<Button variant="outline">Action alternative</Button>
```

**Variantes** : `gradient` (CTA), `primary`, `secondary`, `tertiary`, `outline`, `ghost`, `icon`  
**Effets** : La variante `gradient` utilise l'effet de brillance au survol

### Typography

Composant pour le texte, avec support pour différents niveaux hiérarchiques.

```jsx
<Typography variant="h1">Titre principal (italique gras)</Typography>
<Typography variant="lead">Texte mis en avant</Typography>
<Typography variant="accent">Texte accentué (orange)</Typography>
```

**Variantes** : `h1`, `h2`, `h3`, `h4`, `p`, `lead`, `small`, `subtle`, `accent`, `highlight`  
**Fonctionnalités** : Support pour mettre en évidence automatiquement certains mots avec `withAccentedWords`

### Badge

Étiquettes et indicateurs visuels.

```jsx
<Badge variant="tertiary">Nouveau</Badge>
<Badge variant="primary">Principal</Badge>
```

**Variantes** : `primary`, `secondary`, `tertiary`, `success`, `warning`, `error`, `info`, `default`

### NavLink

Liens de navigation stylisés avec gestion des états actifs.

```jsx
<NavLink href="/page" useGradient>Lien avec dégradé quand actif</NavLink>
<NavLink href="/autre" color="tertiary" underline>Lien avec accentuation orange</NavLink>
```

**Options** : Support pour icônes, soulignement, dégradé pour les liens actifs

### Input

Champs de saisie stylisés.

```jsx
<Input label="Votre nom" variant="accent" helpText="Ce champ est requis" />
```

**Variantes** : `default`, `primary`, `accent`

### Divider

Séparateurs visuels avec options étendues.

```jsx
<Divider color="tertiary" highlight label="Section importante" />
```

**Options** : Couleur, épaisseur, style de ligne, orientation, label

### Icon

Composant pour afficher des icônes de la bibliothèque Lucide.

```jsx
<Icon name="Star" color="var(--color-tertiary)" size={24} />
```

### 6. Input

Champs de saisie texte et numériques.

- Variants: `standard`, `outlined`, `filled`
- Props: `id`, `value`, `onChange`, `type`, `placeholder`, `disabled`, `error`

### 7. Select

Menu déroulant pour sélectionner parmi une liste d'options.

- Variants: `default`, `primary`, `accent`
- Props: `options`, `value`, `onChange`, `label`, `error`, `helpText`
- Utilisation: Formulaires, filtres, paramètres

### 8. Textarea

Zone de texte multi-ligne pour saisir des contenus plus longs.

- Variants: `default`, `primary`, `accent`
- Props: `rows`, `value`, `onChange`, `label`, `error`, `helpText`
- Utilisation: Formulaires, commentaires, descriptions

### 9. NavLink

Liens de navigation avec détection automatique de la route active et effet visuel au survol.

- Props:
  - `href` - URL cible du lien
  - `children` - Contenu du lien
  - `color` - "primary", "secondary" ou "tertiary" - Définit la couleur du lien en état actif et au survol
  - `exact` - Détermine si la route doit correspondre exactement pour être considérée active
  - `useGradient` - Applique un effet dégradé au texte quand le lien est actif
  - `underline` - Ajoute un soulignement au lien (peut être limité à l'état actif avec `underlineActiveOnly`)
  - `icon` - Icône à afficher avec le lien
  - `iconPosition` - Position de l'icône ("left" ou "right")
  - `className` - Classes CSS additionnelles

```jsx
// Lien standard
<NavLink href="/page">Lien standard</NavLink>

// Lien actif avec dégradé
<NavLink href="/current-page" exact useGradient>Page actuelle</NavLink>

// Lien avec couleur tertiaire (orange) au survol
<NavLink href="/page" color="tertiary">Lien accentué</NavLink>

// Lien avec soulignement
<NavLink href="/page" underline>Lien souligné</NavLink>

// Lien avec icône
<NavLink href="/page" icon={<Icon name="ArrowRight" />}>Continuer</NavLink>
```

### 10. Divider

Lignes de séparation visuelles personnalisables.

- Props: `orientation` (horizontal, vertical), `variant` (solid, dashed, dotted), `color`, `thickness`, `label`, `labelPosition`

### 11. Badge

Affiche des indicateurs numériques ou des étiquettes en forme de pastilles.

- Props: `variant`, `size`, `shape`, `isSolid`, `isOutlined`, `dot`, `count`, `maxCount`

### 12. Avatar

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
import { Icon } from '@/components/atoms/Icon';
import { NavLink } from '@/components/atoms/NavLink';

export default function MyComponent() {
  return (
    <div>
      <Typography variant="h2" className="font-bold italic">
        Titre de section
      </Typography>
      <Typography variant="p">Contenu de paragraphe</Typography>

      {/* Navigation */}
      <nav className="flex gap-4 my-4">
        <NavLink href="/" exact color="primary">
          Accueil
        </NavLink>
        <NavLink href="/services" color="secondary">
          Services
        </NavLink>
        <NavLink href="/contact" color="tertiary">
          Contact
        </NavLink>
        <NavLink href="/featured" useGradient>
          Notre mission
        </NavLink>
      </nav>

      {/* Bouton standard */}
      <Button variant="primary">Cliquez ici</Button>

      {/* Bouton CTA avec effet brillance */}
      <Button variant="gradient" className="shine-effect">
        Action principale
      </Button>

      {/* Bouton avec icône */}
      <Button variant="primary" icon={<Icon name="ArrowRight" />}>
        Continuer
      </Button>

      {/* Bouton icône uniquement */}
      <Button variant="icon" iconOnly icon={<Icon name="Search" />} aria-label="Rechercher" />
    </div>
  );
}
```
