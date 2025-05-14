# Composants Moléculaires

> Ce document liste et décrit les composants moléculaires de notre design system. Pour une vue d'ensemble de notre architecture de composants, consultez le [guide Atomic Design](./atomic-design.md).

## Qu'est-ce qu'un composant moléculaire ?

Les molécules sont des composants intermédiaires qui combinent plusieurs atomes pour former des éléments d'interface plus complexes et fonctionnels.

**Caractéristiques des molécules :**
- Assemblent plusieurs [atomes](./atoms.md)
- Remplissent une fonction utilisateur spécifique
- Possèdent un comportement propre

## Catalogue des composants moléculaires

### Card
- **Description** : Conteneur pour différents types de contenu avec plusieurs variantes
- **Variants** : default, outline, elevated, accent, highlight
- **Props clés** : title, subtitle, variant, color, hover, gradient, footer
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section Card)

### Tabs
- **Description** : Système d'onglets pour organiser le contenu en sections
- **Variants** : default, boxed, pills, underlined
- **Props clés** : tabs, variant, alignment, orientation
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section Tabs)

### Testimonial
- **Description** : Bloc de témoignage client avec photo et citation
- **Variants** : default, featured
- **Props clés** : quote, author, company, avatarSrc, variant, projectName
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section Testimonial)

### ComparativeTable
- **Description** : Tableau comparatif pour présenter différentes options ou forfaits côte à côte
- **Props clés** : columns, rows, className, title, subtitle, stickyHeader, groupByCategory, highlightRecommended
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section ComparativeTable)

### ProjectPreview
- **Description** : Carte de prévisualisation pour les projets dans la galerie de portfolio
- **Variants** : default, featured, compact
- **Props clés** : title, image, description, technologies, link, variant
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section ProjectPreview)

### FormField
- **Description** : Champ de formulaire avec label, validation et messages d'erreur
- **Props clés** : id, label, type, placeholder, error, helperText, required, value, onChange
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section FormField)

### FAQ
- **Description** : Accordéon pour questions/réponses
- **Variants** : default, separated, bordered
- **Props clés** : items, allowMultiple, variant, color, icon
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section FAQ)

### FeatureGrid
- **Description** : Grille de fonctionnalités avec icônes
- **Variants** : default, outline, card
- **Props clés** : features, columns, variant, gap
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section FeatureGrid)

### PricingPlan
- **Description** : Conteneur pour afficher les forfaits et tarifs
- **Variants** : default, featured
- **Props clés** : title, description, price, features, ctaText, ctaLink, variant, badge, color
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section PricingPlan)

### StatCard
- **Description** : Carte pour présenter des métriques
- **Variants** : default, accent, outline
- **Props clés** : title, value, icon, color, trend, valueSuffix, valuePrefix, variant
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section StatCard)

### ServiceHighlight
- **Description** : Mise en valeur de service
- **Variants** : default, featured
- **Props clés** : title, description, icon, color, ctaLink, bulletPoints, variant
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section ServiceHighlight)

### ConversationForm
- **Description** : Formulaire conversationnel par étapes
- **Variants** : default, card, minimal
- **Props clés** : fields, title, subtitle, onSubmit, variant
- **Implémentation de référence** : `/src/app/ds-lab/components/page.tsx` (section ConversationForm)

## Principes d'utilisation

### 1. Composition
- Assembler les atomes de manière cohérente
- Maintenir la réutilisabilité
- Éviter la duplication de code

### 2. Interactions
- Gérer les états complexes
- Implémenter les animations
- Assurer le feedback utilisateur

### 3. Accessibilité
- Maintenir la navigation au clavier
- Gérer le focus
- Fournir des alternatives accessibles

## Exemples d'utilisation

```tsx
// Card avec contenu
<Card 
  title="Titre de la carte"
  subtitle="Sous-titre optionnel"
  variant="accent" 
  color="tertiary"
  hover={true}
>
  Contenu de la carte
</Card>

// Tabs
<Tabs
  tabs={[
    { id: 'tab1', label: 'Premier onglet', content: <div>Contenu du premier onglet</div> },
    { id: 'tab2', label: 'Deuxième onglet', content: <div>Contenu du deuxième onglet</div> }
  ]}
  variant="underlined"
/>

// ConversationForm
<ConversationForm
  title="Parlons de votre projet"
  subtitle="Répondez à ces questions pour nous aider à comprendre vos besoins"
  fields={[
    {
      id: "name",
      type: "text",
      label: "Quel est votre nom ?",
      placeholder: "Votre nom complet",
      required: true
    },
    {
      id: "email",
      type: "email",
      label: "Quelle est votre adresse email ?",
      placeholder: "votre@email.com",
      required: true
    }
  ]}
  variant="card"
  onSubmit={(data) => console.log(data)}
/>
```

---

> 🧩 **Documentation connexe** : Pour comprendre comment les molécules sont assemblées en sections complètes, consultez la documentation des [Organismes](./organisms.md). 