# Design Responsive

> Ce document présente en détail les principes et pratiques de design responsive de notre design system. Pour une vue d'ensemble des principes de design, consultez les [principes fondamentaux](./principles.md).

## Breakpoints

Notre système utilise une approche mobile-first avec les breakpoints suivants :

```typescript
const breakpoints = {
  sm: '640px',    // Mobile large
  md: '768px',    // Tablette
  lg: '1024px',   // Desktop
  xl: '1280px',   // Large Desktop
  '2xl': '1536px' // Extra Large Desktop
};
```

## Principes fondamentaux

### 1. Mobile First

Notre approche privilégie le développement mobile en premier, puis l'enrichissement progressif pour les écrans plus grands.

**Avantages** :
- Focus sur l'essentiel d'abord
- Chargement optimisé pour mobile
- Simplicité de base, complexité à la demande

**Dans le code** :
```css
/* Style de base (mobile) */
.element {
  padding: 1rem;
}

/* Adaptation tablette */
@media (min-width: 768px) {
  .element {
    padding: 1.5rem;
  }
}

/* Adaptation desktop */
@media (min-width: 1024px) {
  .element {
    padding: 2rem;
  }
}
```

### 2. Layouts flexibles

Nous utilisons CSS Grid et Flexbox pour créer des layouts qui s'adaptent naturellement à différentes tailles d'écran.

**Grid responsive** :
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  <Card>Contenu 1</Card>
  <Card>Contenu 2</Card>
  <Card>Contenu 3</Card>
</div>
```

**Flex responsive** :
```tsx
<div className="flex flex-col md:flex-row md:items-center justify-between">
  <div className="mb-4 md:mb-0">Colonne gauche</div>
  <div>Colonne droite</div>
</div>
```

### 3. Conteneurs adaptifs

Le composant Container s'adapte à différentes tailles d'écran :

```tsx
<Container>
  {/* Le contenu sera contenu dans une largeur max adaptée à l'écran */}
  <div>Contenu avec marges horizontales automatiques</div>
</Container>
```

### 4. Typographie responsive

La typographie s'adapte aux différentes tailles d'écran pour maintenir lisibilité et hiérarchie :

| Variante | Mobile | Tablette | Desktop |
|----------|--------|----------|---------|
| h1 | 1.875rem | 2rem | 2.25rem |
| h2 | 1.5rem | 1.75rem | 1.875rem |
| h3 | 1.25rem | 1.375rem | 1.5rem |
| p | 1rem | 1rem | 1rem |

*Pour plus de détails, consultez la [documentation typographique](./typography.md)*

### 5. Images et médias

**Images responsives** :
```html
<img 
  src="image-default.jpg"
  srcset="image-small.jpg 640w, image-medium.jpg 1024w, image-large.jpg 1920w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt="Description"
/>
```

**Vidéos responsives** :
```tsx
<div className="relative w-full pb-[56.25%]">
  <iframe 
    className="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/video-id" 
    allowFullScreen
  ></iframe>
</div>
```

## Composants adaptifs

### Navigation

```tsx
<Header>
  {/* Menu mobile */}
  <div className="md:hidden">
    <MobileMenu />
  </div>
  
  {/* Menu desktop */}
  <nav className="hidden md:block">
    <DesktopMenu />
  </nav>
</Header>
```

### Grille de cartes

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
  {items.map(item => (
    <Card key={item.id}>
      {/* Contenu de la carte */}
    </Card>
  ))}
</div>
```

### Formulaires

```tsx
<form className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {/* Champs qui prennent toute la largeur sur mobile */}
  <div className="md:col-span-2">
    <Input label="Nom complet" />
  </div>
  
  {/* Champs sur 2 colonnes sur desktop */}
  <div>
    <Input label="Email" type="email" />
  </div>
  <div>
    <Input label="Téléphone" type="tel" />
  </div>
  
  {/* Bouton qui prend toute la largeur */}
  <div className="md:col-span-2">
    <Button variant="primary" className="w-full md:w-auto">
      Envoyer
    </Button>
  </div>
</form>
```

## Patterns responsive

### 1. Changement de direction

```tsx
{/* Vertical sur mobile, horizontal sur desktop */}
<div className="flex flex-col md:flex-row gap-4">
  <div>Premier élément</div>
  <div>Deuxième élément</div>
</div>

{/* Inversé sur mobile uniquement */}
<div className="flex flex-col-reverse md:flex-row gap-4">
  <div>Premier élément (apparaît en second sur mobile)</div>
  <div>Deuxième élément (apparaît en premier sur mobile)</div>
</div>
```

### 2. Ajustement de visibilité

```tsx
{/* Cache sur mobile */}
<div className="hidden md:block">
  Visible uniquement sur tablette et desktop
</div>

{/* Cache sur desktop */}
<div className="block md:hidden">
  Visible uniquement sur mobile
</div>
```

### 3. Adaptation d'espacement

```tsx
{/* Espacement qui s'adapte à la taille d'écran */}
<section className="py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
  Contenu avec espacement adaptatif
</section>
```

## Bonnes pratiques

1. **Toujours tester sur différents appareils**
   - Utiliser les outils de développement des navigateurs
   - Tester sur de vrais appareils quand c'est possible
   - Vérifier les orientations portrait et paysage sur mobile

2. **Considérer la performance**
   - Optimiser les images avec srcset/sizes ou image moderne (next/image)
   - Charger les ressources lourdes conditionnellement
   - Utiliser le lazy loading pour les médias

3. **Simplifier pour mobile**
   - Réduire les animations complexes sur mobile
   - Simplifier les interactions pour écrans tactiles
   - Privilégier la lisibilité et les tailles de touch targets adéquates

4. **Accessibilité responsive**
   - Maintenir un bon contraste à toutes les tailles
   - Assurer que les éléments interactifs restent facilement cliquables
   - Éviter de cacher du contenu essentiel sur certaines tailles d'écran

## Implémentation de référence

Pour une implémentation complète, consultez :
- [Design System Lab Components](/src/app/ds-lab/components/page.tsx)
- [Layout et structure principale](/src/components/organisms/Header.tsx)

---

> 🔍 **Documentation connexe** : La documentation des [composants atomiques](./atoms.md), [moléculaires](./molecules.md) et [organismes](./organisms.md) contient des exemples spécifiques d'implémentation responsive pour chaque type de composant. 