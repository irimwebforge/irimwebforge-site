# Système d'Espacement

> Ce document présente en détail le système d'espacement de notre design system. Pour une vue d'ensemble des principes de design, consultez les [principes fondamentaux](./principles.md).

## Principes fondamentaux

Notre système d'espacement est basé sur une échelle progressive multiple de 4px pour assurer cohérence et harmonie visuelle à travers l'interface.

## Échelle d'espacement

```css
/* Espacements (basés sur des multiples de 4px) */
--space-0: 0;              /* 0px */
--space-1: 0.25rem;        /* 4px */
--space-2: 0.5rem;         /* 8px */
--space-3: 0.75rem;        /* 12px */
--space-4: 1rem;           /* 16px */
--space-5: 1.25rem;        /* 20px */
--space-6: 1.5rem;         /* 24px */
--space-8: 2rem;           /* 32px */
--space-10: 2.5rem;        /* 40px */
--space-12: 3rem;          /* 48px */
--space-16: 4rem;          /* 64px */
--space-20: 5rem;          /* 80px */
--space-24: 6rem;          /* 96px */
```

## Espacements sémantiques

Pour simplifier l'utilisation, nous définissons des tailles sémantiques :

```css
/* Espacements sémantiques */
--spacing-xs: var(--space-1);    /* 4px - Espacement très petit */
--spacing-sm: var(--space-2);    /* 8px - Espacement petit */
--spacing-md: var(--space-4);    /* 16px - Espacement moyen */
--spacing-lg: var(--space-6);    /* 24px - Espacement large */
--spacing-xl: var(--space-8);    /* 32px - Espacement très large */
--spacing-2xl: var(--space-12);  /* 48px - Espacement énorme */
```

## Application aux composants

### Espacement interne (padding)

| Composant | Padding horizontal | Padding vertical | Notes |
|-----------|-------------------|------------------|-------|
| Button | --spacing-md (16px) | --spacing-sm (8px) | Grand: +4px, Petit: -4px |
| Card | --spacing-md (16px) | --spacing-md (16px) | Variante compact: --spacing-sm (8px) |
| Input | --spacing-md (16px) | --spacing-sm (8px) | Entre label et input: --spacing-xs (4px) |
| Select | --spacing-md (16px) | --spacing-sm (8px) | Entre label et select: --spacing-xs (4px) |
| Modal | --spacing-lg (24px) | --spacing-md (16px) | Header/footer: --spacing-md (16px) |

### Espacement externe (margin)

| Composant | Margin par défaut | Notes |
|-----------|-------------------|-------|
| Paragraphe | bottom: --spacing-md (16px) | |
| Heading (h1-h4) | bottom: --spacing-md (16px) | Entre titres consécutifs: --spacing-sm (8px) |
| Form fields | bottom: --spacing-md (16px) | |
| Sections | top/bottom: --spacing-xl (32px) | Sections principales de page |
| Card grid | gap: --spacing-md (16px) | Entre les cartes |

## Utilisation

### Classes utilitaires

```tsx
// Marges
<div className="m-4">Marge de 16px sur tous les côtés</div>
<div className="mt-4">Marge de 16px en haut uniquement</div>
<div className="mb-8">Marge de 32px en bas uniquement</div>

// Paddings
<div className="p-4">Padding de 16px sur tous les côtés</div>
<div className="px-4 py-2">Padding horizontal de 16px, vertical de 8px</div>

// Espacement entre éléments enfants
<div className="space-y-4">
  <div>Premier élément</div>
  <div>Deuxième élément (16px plus bas)</div>
  <div>Troisième élément (16px plus bas)</div>
</div>

// Grille avec espacement
<div className="grid grid-cols-3 gap-6">
  <div>Élément 1</div>
  <div>Élément 2</div>
  <div>Élément 3</div>
</div>
```

### Composant Divider

```tsx
// Séparateur horizontal simple
<Divider />

// Séparateur avec label
<Divider label="Section" />

// Séparateur avec espacement personnalisé
<Divider thickness="medium" className="my-8" />
```

## Patterns d'espacement

### Proximité

Les éléments liés doivent être regroupés avec un espacement réduit, tandis que les groupes distincts doivent avoir un espacement plus important.

```tsx
// Exemple de proximité
<div className="space-y-8">
  {/* Premier groupe - éléments rapprochés */}
  <div className="space-y-2">
    <h3>Groupe 1</h3>
    <p>Élément lié au groupe 1</p>
    <p>Autre élément lié au groupe 1</p>
  </div>
  
  {/* Deuxième groupe - éléments rapprochés mais séparés du premier groupe */}
  <div className="space-y-2">
    <h3>Groupe 2</h3>
    <p>Élément lié au groupe 2</p>
    <p>Autre élément lié au groupe 2</p>
  </div>
</div>
```

### Rythme vertical

Maintenir un rythme vertical cohérent avec des espacements progressifs :

```tsx
// Exemple de rythme vertical
<article className="prose">
  <h1 className="mb-4">Titre principal</h1>
  <p className="mb-4">Premier paragraphe qui introduit le sujet.</p>
  <h2 className="mt-8 mb-4">Premier sous-titre</h2>
  <p className="mb-4">Description détaillée de la première section.</p>
  <h2 className="mt-8 mb-4">Deuxième sous-titre</h2>
  <p className="mb-4">Description détaillée de la deuxième section.</p>
</article>
```

## Responsive

Les espacements s'adaptent à différentes tailles d'écran :

```tsx
// Exemple d'adaptation responsive
<section className="py-8 md:py-12 lg:py-16">
  <div className="container mx-auto px-4 md:px-6 lg:px-8">
    <h2 className="mb-4 md:mb-6 lg:mb-8">Titre de section</h2>
    <div className="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* Contenu de la grille */}
    </div>
  </div>
</section>
```

## Bonnes pratiques

1. **Cohérence**
   - Utiliser exclusivement l'échelle d'espacement définie
   - Maintenir des ratios constants (par exemple, espacements internes/externes)

2. **Hiérarchie visuelle**
   - Utiliser l'espacement pour renforcer les relations entre éléments
   - Créer des zones distinctes avec des espacements plus grands

3. **Adaptation responsive**
   - Augmenter progressivement les espacements avec la taille d'écran
   - Préserver les proportions plutôt que les valeurs absolues

## Implémentation de référence

Pour une implémentation complète, consultez :
- [Design System Lab Fundamentals](/src/app/ds-lab/fundamentals/page.tsx)
- [Design System Lab Components](/src/app/ds-lab/components/page.tsx)

---

> 📱 **Documentation connexe** : Pour comprendre comment le système d'espacement s'applique aux différentes tailles d'écran, consultez la [documentation responsive](./responsive.md). 