# Design System - Référence Technique

> **Source de vérité visuelle** : `/src/app/ds-lab/fundamentals/page.tsx`

---

## 1. Couleurs

### Palette principale

| Couleur    | Hex       | Variable CSS        | Rôle                                               |
| ---------- | --------- | ------------------- | -------------------------------------------------- |
| Turquoise  | `#00B3B3` | `--color-primary`   | Éléments interactifs (boutons, liens)              |
| Bleu foncé | `#004466` | `--color-secondary` | Titres, éléments d'autorité                        |
| Orange     | `#d85014` | `--color-tertiary`  | Accentuation uniquement (badges, bordures, icônes) |

### Variables CSS complètes

```css
:root {
  /* Couleurs principales */
  --color-primary: #00b3b3;
  --color-primary-rgb: 0, 179, 179;
  --color-secondary: #004466;
  --color-secondary-rgb: 0, 68, 102;
  --color-tertiary: #d85014;
  --color-tertiary-rgb: 216, 80, 20;

  /* Neutres */
  --color-black: #111111;
  --color-white: #fefefe;

  /* Couleurs accessibles (ratio >= 4.5:1) */
  --color-primary-accessible: #008080;
  --color-secondary-accessible: #003955;
  --color-tertiary-accessible: #b8420f;

  /* Arrière-plans accessibles */
  --color-primary-bg-accessible: #e6f7f7;
  --color-secondary-bg-accessible: #e6f0f5;
  --color-tertiary-bg-accessible: #fdf2ef;

  /* Couleurs sémantiques */
  --color-success: #22c55e;
  --color-error: #ef4444;
  --color-warning: #f59e0b;
  --color-info: #3b82f6;

  /* Dégradé signature */
  --gradient-primary: linear-gradient(to right, var(--color-primary), var(--color-secondary));
}

.dark {
  --color-primary: #00b3b3;
  --color-secondary: #005577;
  --color-tertiary: #ff7a3d;
  --background: #0a0a0a;
  --foreground: #f5f5f5;
}
```

### Hiérarchie visuelle

1. **Dégradé signature** - CTA principaux avec effet brillance
2. **Turquoise (Primary)** - Boutons primaires, liens
3. **Bleu foncé (Secondary)** - Titres, boutons secondaires
4. **Orange (Tertiary)** - Badges, bordures latérales, icônes (jamais en bouton)

### Lien signature

```tsx
<Link className="text-[var(--color-primary)] hover:!text-[#d85014] border-b-2 border-[var(--color-tertiary)] transition-colors">
  Texte du lien
</Link>
```

---

## 2. Typographie

### Polices

| Usage        | Police    | Style               |
| ------------ | --------- | ------------------- |
| Titres h1/h2 | Noto Sans | Italique gras (700) |
| Titres h3/h4 | Noto Sans | Gras (700/600)      |
| Corps        | Questrial | Normal (400)        |

### Échelle typographique

```css
h1 { font-size: 2.25rem; line-height: 1.25; font-weight: 700; font-style: italic; }
h2 { font-size: 1.875rem; line-height: 1.25; font-weight: 700; font-style: italic; }
h3 { font-size: 1.5rem; line-height: 1.375; font-weight: 700; }
h4 { font-size: 1.25rem; line-height: 1.375; font-weight: 600; }
p  { font-size: 1rem; line-height: 1.5; }
.lead { font-size: 1.125rem; line-height: 1.625; }
.small { font-size: 0.875rem; line-height: 1.5; }
```

### Responsive

| Variante | Mobile   | Tablette | Desktop  |
| -------- | -------- | -------- | -------- |
| h1       | 1.875rem | 2rem     | 2.25rem  |
| h2       | 1.5rem   | 1.75rem  | 1.875rem |
| h3       | 1.25rem  | 1.375rem | 1.5rem   |
| h4       | 1.125rem | 1.125rem | 1.25rem  |

---

## 3. Espacement

### Échelle (multiples de 4px)

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
```

### Application

| Composant | Padding H | Padding V | Notes                    |
| --------- | --------- | --------- | ------------------------ |
| Button    | 16px      | 8px       | Large: +4px, Small: -4px |
| Card      | 16px      | 16px      | Compact: 8px             |
| Input     | 16px      | 8px       | Label gap: 4px           |
| Section   | -         | 32px      | py-8 md:py-12 lg:py-16   |

---

## 4. Breakpoints

```typescript
const breakpoints = {
  sm: '640px',     // Mobile large
  md: '768px',     // Tablette
  lg: '1024px',    // Desktop
  xl: '1280px',    // Large Desktop
  '2xl': '1536px', // Extra Large
};
```

### Approche Mobile-First

```tsx
// Grille responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

// Espacement adaptatif
<section className="py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">

// Visibilité conditionnelle
<div className="hidden md:block">Desktop only</div>
<div className="block md:hidden">Mobile only</div>
```

---

## 5. Hiérarchie Boutons

```tsx
// 1. CTA principal (gradient + shine)
<Button variant="gradient">Action principale</Button>

// 2. Action importante (turquoise)
<Button variant="primary">Action secondaire</Button>

// 3. Action structurelle (bleu)
<Button variant="secondary">Action tertiaire</Button>

// 4. Action alternative (outline)
<Button variant="outline">Alternative</Button>

// 5. Action discrète (ghost)
<Button variant="ghost">Discret</Button>
```

**Note** : Pas de `variant="tertiary"` - l'orange n'est jamais utilisé pour les boutons.

---

## 6. Architecture Atomic Design

```
src/components/
├── atoms/        # Button, Typography, Icon, Badge, Input, Logo
├── molecules/    # Card, Tabs, FormField, FAQ, StatCard
├── organisms/    # Header, Footer, PageHeader, FeatureSection
└── templates/    # ProjectShowcase, CTASection, ValueProposition
```

---

## 7. Accessibilité

| Combinaison              | Ratio | WCAG               |
| ------------------------ | ----- | ------------------ |
| Texte noir / fond blanc  | 14:1  | AAA                |
| Texte blanc / turquoise  | 4.5:1 | AA                 |
| Texte blanc / bleu foncé | 12:1  | AAA                |
| Texte blanc / orange     | 3:1   | AA (grands textes) |

### Règles

- Taille minimale : 14px (0.875rem)
- Utiliser `--color-*-accessible` pour texte sur fond blanc
- Utiliser `--color-*-bg-accessible` pour fonds colorés légers

---

## Référence

- **Source visuelle** : `/src/app/ds-lab/fundamentals/page.tsx`
- **Composants** : `/src/app/ds-lab/components/page.tsx`
- **Templates** : `/src/app/ds-lab/templates/page.tsx`
