# Composants Organismes

> Ce document liste et décrit les composants organismes de notre design system. Pour une vue d'ensemble de notre architecture de composants, consultez le [guide Atomic Design](./atomic-design.md).

## Qu'est-ce qu'un composant organisme ?

Les organismes sont des composants complexes qui combinent plusieurs molécules et atomes pour former des sections complètes de l'interface.

**Caractéristiques des organismes :**

- Assemblent plusieurs [molécules](./molecules.md) et [atomes](./atoms.md)
- Forment des sections complètes de page
- Peuvent contenir une logique métier

## Catalogue des composants organismes

### Header

- **Description** : En-tête principal du site avec navigation responsive
- **Variants** : standard, compact, transparent
- **Props clés** : variant, sticky, withDivider, withSearch, actions
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section Header)

### Footer

- **Description** : Pied de page du site contenant les liens de navigation secondaires et informations de contact
- **Variants** : standard, minimal, rich
- **Props clés** : variant, withSocialLinks, withNewsletter, withSitemap
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section Footer)

### PageHeader

- **Description** : En-tête de page interne avec titre, sous-titre et fil d'Ariane
- **Variants** : small, medium, large, hero
- **Props clés** : title, subtitle, description, breadcrumbs, actions, backgroundImage, size, align
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section PageHeader)

### HeroSection

- **Description** : Section héro pour la page d'accueil ou les landing pages
- **Props clés** : title, subtitle, description, actions, image, backgroundColor, align
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section HeroSection)

### FeatureSection

- **Description** : Section présentant les fonctionnalités ou avantages d'un service/produit
- **Layouts** : grid, cards, list, alternating, compact
- **Props clés** : title, subtitle, features, columns, layout, mainImage, backgroundColor, textAlign
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section FeatureSection)

### EnhancedContactForm

- **Description** : Formulaire de contact amélioré avec options de présentation et contenu additionnel
- **Styles** : card, simple, full-width
- **Props clés** : title, subtitle, services, testimonial, imagePosition, style, accentColor
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section EnhancedContactForm)

## Principes d'utilisation

### 1. Composition

- Assembler les molécules de manière cohérente
- Maintenir la hiérarchie visuelle
- Assurer la cohérence globale

### 2. Responsive

- Adapter l'affichage à toutes les tailles d'écran
- Réorganiser les éléments selon l'espace disponible
- Maintenir la lisibilité et l'utilisabilité

### 3. Interactions

- Coordonner les interactions entre les différentes molécules
- Gérer les états complexes
- Assurer le feedback utilisateur

### 4. Performance

- Optimiser le chargement des sections volumineuses
- Utiliser le lazy loading pour les médias et contenus lourds
- Considérer l'impact sur les performances globales

## Patterns d'agencement

### 1. Header + Hero

```tsx
<Header transparent fixed />
<HeroSection
  title="Titre Principal"
  subtitle="Sous-titre"
  cta={<Button variant="gradient">Action principale</Button>}
/>
```

### 2. Feature Section

```tsx
<FeatureSection
  title="Nos Services"
  subtitle="Solutions sur mesure pour vos besoins"
  features={[
    {
      id: 'feature1',
      title: "Design d'interface",
      description: 'Interfaces utilisateur intuitives et attrayantes',
      icon: <Icon name="Palette" />,
    },
    // ...autres fonctionnalités
  ]}
  layout="grid"
  columns={3}
  textAlign="center"
/>
```

### 3. Contact Form

```tsx
<EnhancedContactForm
  title="Discutons de votre projet"
  subtitle="Nous vous répondrons sous 24h"
  accentColor="primary"
  style="card"
  showImage={true}
  testimonial={{
    quote: 'Témoignage client positif',
    author: 'Nom du client',
    company: 'Entreprise',
  }}
  services={[
    {
      icon: '/icons/website.svg',
      title: 'Site web sur mesure',
      description: 'Des sites web personnalisés et performants.',
    },
    // ...autres services
  ]}
/>
```

## Bonnes pratiques

1. **Cohérence**
   - Utiliser les mêmes patterns de design à travers le site
   - Maintenir la cohérence des interactions
   - Réutiliser les mêmes organismes pour des fonctions similaires

2. **Modularité**
   - Concevoir les organismes pour être réutilisables dans différents contextes
   - Paramétrer via les props plutôt que créer des variantes spécifiques
   - Permettre la personnalisation sans compromettre la cohérence

3. **Accessibilité**
   - Structurer le contenu de manière sémantique
   - Assurer que toutes les fonctionnalités sont accessibles au clavier
   - Tester avec des lecteurs d'écran

---

> 🏗️ **Documentation connexe** : Pour voir comment ces organismes sont assemblés en pages complètes, consultez les [Templates](/src/app/ds-lab/templates/page.tsx) dans le Design System Lab.
