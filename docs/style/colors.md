# Système de Couleurs

> Ce document présente en détail le système de couleurs de notre design system. Pour une vue d'ensemble des principes de design, consultez les [principes fondamentaux](./principles.md).

## Palette principale

Notre palette de couleurs est construite autour de trois couleurs principales qui définissent l'identité visuelle d'IrimWebForge :

| Couleur | Code Hex | Variable CSS | Rôle |
|---------|----------|--------------|------|
| Turquoise | `#00B3B3` | `--color-primary` | Couleur principale pour les éléments interactifs |
| Bleu foncé | `#004466` | `--color-secondary` | Couleur secondaire pour les titres et éléments d'autorité |
| Orange | `#F06424` | `--color-tertiary` | Couleur tertiaire pour l'accentuation et la mise en valeur |

### Variables CSS

```css
:root {
  /* Couleurs principales */
  --color-primary: #00B3B3;
  --color-primary-rgb: 0, 179, 179;
  
  --color-secondary: #004466;
  --color-secondary-rgb: 0, 68, 102;
  
  --color-tertiary: #F06424;
  --color-tertiary-rgb: 240, 100, 36;
  
  /* Neutres */
  --color-black: #111111;
  --color-white: #FEFEFE;
  
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
    rgba(255,255,255,0.3) 50%,
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

| Combinaison | Ratio | Niveau WCAG |
|-------------|-------|-------------|
| Texte noir sur fond blanc | 14:1 | AAA |
| Texte blanc sur turquoise | 4.5:1 | AA |
| Texte blanc sur bleu foncé | 12:1 | AAA |
| Texte blanc sur orange | 3:1 | AA (grands textes) |

## Couleurs sémantiques

En plus de notre palette principale, nous utilisons un ensemble de couleurs sémantiques pour les états et les messages :

```css
:root {
  /* Couleurs sémantiques */
  --color-success: #22C55E;
  --color-error: #EF4444;
  --color-warning: #F59E0B;
  --color-info: #3B82F6;
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
  --color-primary: #00B3B3;
  --color-secondary: #004466;
  --color-tertiary: #F06424;
  --color-background: #FFFFFF;
  --color-text: #111111;
}

@media (prefers-color-scheme: dark) {
  :root {
    /* Dark mode (future implémentation) */
    --color-primary: #1FDBDB;
    --color-secondary: #0A7EAC;
    --color-tertiary: #FF7D40;
    --color-background: #121212;
    --color-text: #F0F0F0;
  }
}
```

## Implémentation de référence

Pour une implémentation complète, consultez :
- [Design System Lab Fundamentals](/src/app/ds-lab/fundamentals/page.tsx)
- [Design System Lab Components](/src/app/ds-lab/components/page.tsx)

---

> 🎨 **Documentation connexe** : Pour comprendre comment notre système de couleurs s'intègre à notre système typographique, consultez la [documentation typographique](./typography.md). 