# Système Typographique

> Ce document présente en détail le système typographique de notre design system. Pour une vue d'ensemble des principes de design, consultez les [principes fondamentaux](./principles.md).

## Polices principales

Notre système typographique utilise deux polices principales :

1. **Noto Sans** - Pour les titres (avec italique gras pour h1/h2)
2. **Questrial** - Pour le texte courant

## Hiérarchie typographique

### Titres

```css
h1 {
  font-family: 'Noto Sans', system-ui, sans-serif;
  font-size: 2.25rem;  /* 36px */
  line-height: 1.25;
  font-weight: 700;
  font-style: italic;  /* Spécificité du DS : titres principaux en italique gras */
}

h2 {
  font-family: 'Noto Sans', system-ui, sans-serif;
  font-size: 1.875rem;  /* 30px */
  line-height: 1.25;
  font-weight: 700;
  font-style: italic;  /* Spécificité du DS : titres h2 en italique gras */
}

h3 {
  font-family: 'Noto Sans', system-ui, sans-serif;
  font-size: 1.5rem;  /* 24px */
  line-height: 1.375;
  font-weight: 700;
}

h4 {
  font-family: 'Noto Sans', system-ui, sans-serif;
  font-size: 1.25rem;  /* 20px */
  line-height: 1.375;
  font-weight: 600;
}
```

### Corps de texte

```css
/* Texte principal */
p {
  font-family: 'Questrial', sans-serif;
  font-size: 1rem;  /* 16px */
  line-height: 1.5;
  font-weight: 400;
}

/* Texte d'introduction (lead) */
.lead {
  font-family: 'Questrial', sans-serif;
  font-size: 1.125rem;  /* 18px */
  line-height: 1.625;
  font-weight: 400;
}

/* Petit texte */
.small {
  font-family: 'Questrial', sans-serif;
  font-size: 0.875rem;  /* 14px */
  line-height: 1.5;
  font-weight: 400;
}

/* Texte subtil (secondaire) */
.subtle {
  font-family: 'Questrial', sans-serif;
  font-size: 0.875rem;  /* 14px */
  line-height: 1.5;
  font-weight: 400;
  color: var(--color-secondary);
  opacity: 0.8;
}
```

### Variantes spéciales

```css
/* Texte accentué (orange) */
.accent {
  color: var(--color-tertiary);
}

/* Texte mis en évidence */
.highlight {
  background: linear-gradient(transparent 70%, rgba(var(--color-tertiary-rgb), 0.2) 30%);
}

/* Mots accentués automatiquement */
.with-accented-words {
  /* Voir implémentation dans Typography.tsx */
}
```

## Implémentation

Notre système typographique est implémenté via le composant Typography qui accepte les propriétés suivantes :

```tsx
export interface TypographyProps {
  /** Élément HTML à rendre */
  as?: ElementType;
  /** Style de typographie à appliquer */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'lead' | 'small' | 'subtle' | 'accent' | 'highlight';
  /** Classes CSS additionnelles */
  className?: string;
  /** Accentuer automatiquement certains mots-clés */
  withAccentedWords?: boolean;
  /** Contenu textuel */
  children: React.ReactNode;
}
```

### Exemples d'utilisation

```tsx
// Titre principal (h1) en italique gras
<Typography as="h1" variant="h1">Titre principal en italique gras</Typography>

// Titre secondaire (h2) en italique gras
<Typography as="h2" variant="h2">Titre secondaire en italique gras</Typography>

// Titre tertiaire (h3)
<Typography as="h3" variant="h3">Titre tertiaire</Typography>

// Paragraphe d'introduction
<Typography variant="lead">
  Texte d'introduction qui présente la section avec une taille légèrement plus grande.
</Typography>

// Paragraphe standard
<Typography variant="p">
  Texte standard pour le contenu principal. Ce texte utilise la police Questrial
  pour une meilleure lisibilité.
</Typography>

// Paragraphe avec mots accentués automatiquement
<Typography variant="p" withAccentedWords>
  Notre approche valorise l'authenticité, l'innovation et la créativité pour offrir
  une expérience digitale sur-mesure et unique.
</Typography>

// Texte accentué (orange)
<Typography variant="accent">Texte accentué en orange</Typography>

// Texte mis en évidence
<Typography variant="highlight">Texte mis en évidence</Typography>
```

## Responsive

Le système typographique s'adapte aux différentes tailles d'écran :

| Variante | Mobile | Tablette | Desktop |
|----------|--------|----------|---------|
| h1 | 1.875rem (30px) | 2rem (32px) | 2.25rem (36px) |
| h2 | 1.5rem (24px) | 1.75rem (28px) | 1.875rem (30px) |
| h3 | 1.25rem (20px) | 1.375rem (22px) | 1.5rem (24px) |
| h4 | 1.125rem (18px) | 1.125rem (18px) | 1.25rem (20px) |
| lead | 1.0625rem (17px) | 1.0625rem (17px) | 1.125rem (18px) |
| p | 1rem (16px) | 1rem (16px) | 1rem (16px) |

## Accessibilité

- Contraste : Tous les textes maintiennent un ratio de contraste WCAG AA avec leur arrière-plan
- Taille minimale : La taille de texte ne descend jamais en-dessous de 14px (0.875rem)
- Échelle : L'échelle typographique maintient une progression harmonieuse et prévisible

## Implémentation de référence

Pour une implémentation complète, consultez :
- Le composant [Typography](/src/components/atoms/Typography.tsx)
- L'utilisation dans [DS-Lab Fundamentals](/src/app/ds-lab/fundamentals/page.tsx)

---

> 📏 **Documentation connexe** : Pour comprendre comment le système typographique interagit avec le système d'espacement, consultez la [documentation d'espacement](./spacing.md). 