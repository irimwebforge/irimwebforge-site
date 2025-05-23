# Système de Couleurs

> Ce document présente en détail le système de couleurs de notre design system. Pour une vue d'ensemble des principes de design, consultez les [principes fondamentaux](./principles.md).

## Palette principale

Notre palette de couleurs est construite autour de trois couleurs principales qui définissent l'identité visuelle d'IRIM Webforge :

| Couleur    | Code Hex  | Variable CSS        | Rôle                                                       |
| ---------- | --------- | ------------------- | ---------------------------------------------------------- |
| Turquoise  | `#00B3B3` | `--color-primary`   | Couleur principale pour les éléments interactifs           |
| Bleu foncé | `#004466` | `--color-secondary` | Couleur secondaire pour les titres et éléments d'autorité  |
| Orange     | `#F06424` | `--color-tertiary`  | Couleur tertiaire pour l'accentuation et la mise en valeur |

### Variables CSS

```css
:root {
  /* Couleurs principales */
  --color-primary: #00b3b3;
  --color-primary-rgb: 0, 179, 179;

  --color-secondary: #004466;
  --color-secondary-rgb: 0, 68, 102;

  --color-tertiary: #f06424;
  --color-tertiary-rgb: 240, 100, 36;

  /* Neutres */
  --color-black: #111111;
  --color-white: #fefefe;

  /* Dégradé signature */
  --gradient-primary: linear-gradient(to right, var(--color-primary), var(--color-secondary));
}
```

## Hiérarchie visuelle

Notre système de couleurs définit une hiérarchie visuelle claire pour guider l'attention de l'utilisateur :

1. **Dégradé signature** - Pour les CTA (Call-to-Action) principaux avec effet brillance
2. **Turquoise (Primary)** - Pour les éléments interactifs importants (boutons primaires, liens)
3. **Bleu foncé (Secondary)** - Pour les titres et l'information structurelle
4. **Orange (Tertiary)** - Uniquement pour accentuation (badges, icônes, bordures latérales)

![Hiérarchie visuelle](../../../public/images/docs/visual-hierarchy.png)

## Application des couleurs

### 1. Boutons

```tsx
// CTA principal (dégradé avec effet brillance)
<Button variant="gradient" className="shine-effect">
  Appel à l'action principal
</Button>

// Action secondaire importante
<Button variant="primary">
  Action secondaire
</Button>

// Action alternative
<Button variant="outline">
  Action alternative
</Button>
```

### 2. Typographie

```tsx
// Titre en bleu (secondaire)
<Typography as="h2" variant="h2" className="text-secondary">
  Titre en couleur secondaire
</Typography>

// Texte accentué en orange
<Typography variant="accent">
  Texte accentué en orange
</Typography>

// Texte standard
<Typography variant="p">
  Texte normal en couleur par défaut
</Typography>
```

### 3. Éléments accentués

```tsx
// Badge
<Badge variant="tertiary">Nouveau</Badge>

// Bordure latérale
<div className="border-l-4 border-l-[var(--color-tertiary)] bg-amber-50/30 p-4">
  Élément mis en évidence avec bordure orange
</div>

// Icône
<Icon name="Star" className="text-tertiary" />
```

## Couleur tertiaire (Orange)

L'orange est notre couleur d'accentuation, à utiliser de manière stratégique et avec parcimonie.

### Utilisation recommandée

- Badges et étiquettes "Nouveau"
- Bordures latérales pour mettre en évidence des sections
- Icônes importantes
- Éléments d'accentuation (avec modération)

### À éviter

- Grands aplats de couleur orange
- Utilisation comme couleur principale de bouton
- Texte orange sur fond orange (même avec transparence)
- Texte orange sur fond blanc (problèmes de contraste)

## Dégradé signature

Notre dégradé signature (turquoise → bleu foncé) est utilisé spécifiquement pour les boutons CTA principaux avec un effet brillance au survol.

```css
.gradient-primary {
  background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
}

.shine-effect {
  position: relative;
  overflow: hidden;
}

.shine-effect::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 100%
  );
  transform: skewX(-25deg);
  transition: all 0.75s;
}

.shine-effect:hover::after {
  left: 100%;
}
```

## Accessibilité des couleurs

Toutes nos couleurs sont testées pour assurer un contraste suffisant conformément aux normes WCAG :

| Combinaison                | Ratio | Niveau WCAG        |
| -------------------------- | ----- | ------------------ |
| Texte noir sur fond blanc  | 14:1  | AAA                |
| Texte blanc sur turquoise  | 4.5:1 | AA                 |
| Texte blanc sur bleu foncé | 12:1  | AAA                |
| Texte blanc sur orange     | 3:1   | AA (grands textes) |

### Couleurs accessibles pour texte

Pour garantir un contraste suffisant, nous utilisons des variantes plus foncées de nos couleurs principales :

```css
:root {
  /* Couleurs principales accessibles (ratio ≥ 4.5:1) */
  --color-primary-accessible: #008080; /* Turquoise plus foncé, ratio ~5.2:1 */
  --color-secondary-accessible: #003955; /* Bleu plus foncé, ratio ~8.1:1 */
  --color-tertiary-accessible: #b8420f; /* Orange plus foncé, ratio ~4.6:1 */

  /* Arrière-plans colorés accessibles */
  --color-primary-bg-accessible: #e6f7f7; /* Background turquoise très clair */
  --color-secondary-bg-accessible: #e6f0f5; /* Background bleu très clair */
  --color-tertiary-bg-accessible: #fdf2ef; /* Background orange très clair */
}
```

### Classes utilitaires pour liens accessibles

```css
.link-primary-accessible {
  color: var(--color-primary-accessible);
  transition: color 150ms ease;
}

.link-primary-accessible:hover {
  color: var(--color-primary);
}
```

### Utilisation recommandée

```tsx
// ✅ Badge avec contraste suffisant
<Badge variant="primary">Nouveau</Badge>

// ✅ Bouton outline accessible
<Button variant="outline">Action secondaire</Button>

// ✅ Lien accessible
<a href="#" className="link-primary-accessible underline">
  En savoir plus
</a>

// ✅ Texte coloré accessible
<span className="text-[var(--color-primary-accessible)]">
  Informations importantes
</span>
```

### Tests de contraste

Toutes les couleurs accessibles respectent :

- **WCAG AA** : ratio minimal de 4.5:1 pour le texte normal
- **WCAG AAA** : ratio minimal de 7:1 pour le texte normal (quand possible)
- **Composants UI** : ratio minimal de 3:1 pour les éléments d'interface

## Couleurs sémantiques

En plus de notre palette principale, nous utilisons un ensemble de couleurs sémantiques pour les états et les messages :

```css
:root {
  /* Couleurs sémantiques */
  --color-success: #22c55e;
  --color-error: #ef4444;
  --color-warning: #f59e0b;
  --color-info: #3b82f6;
}
```

### Applications

```tsx
// Message d'erreur
<div className="text-[var(--color-error)]">
  <Icon name="AlertCircle" className="mr-2" />
  Erreur : Message d'erreur
</div>

// Message de succès
<div className="text-[var(--color-success)]">
  <Icon name="CheckCircle" className="mr-2" />
  Succès : Message de succès
</div>
```

## Dark Mode

Bien que nous n'utilisions pas encore de dark mode, les variables CSS sont préparées pour cette évolution future :

```css
:root {
  /* Light mode (défaut) */
  --color-primary: #00b3b3;
  --color-secondary: #004466;
  --color-tertiary: #f06424;
  --color-background: #ffffff;
  --color-text: #111111;
}

@media (prefers-color-scheme: dark) {
  :root {
    /* Dark mode (future implémentation) */
    --color-primary: #1fdbdb;
    --color-secondary: #0a7eac;
    --color-tertiary: #ff7d40;
    --color-background: #121212;
    --color-text: #f0f0f0;
  }
}
```

## Implémentation de référence

Pour une implémentation complète, consultez :

- [Design System Lab Fundamentals](/src/app/ds-lab/fundamentals/page.tsx)
- [Design System Lab Components](/src/app/ds-lab/components/page.tsx)

---

> 🎨 **Documentation connexe** : Pour comprendre comment notre système de couleurs s'intègre à notre système typographique, consultez la [documentation typographique](./typography.md).
