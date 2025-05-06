# Composants Organismes IrimWebForge

Les composants organismes sont des assemblages complexes de composants moléculaires et atomiques. Ils forment des sections entières d'une interface et représentent des parties distinctes des pages.

## Liste des composants

### 1. Header
En-tête du site avec logo, navigation, et éléments optionnels comme recherche et menu mobile.
- Intègre les composants : `Logo`, `NavLink`, `Button`, `Container`
- Props : `variant` (standard, compact, transparent), `sticky`, `withDivider`, `withSearch`, `actions`

### 2. Footer
Pied de page du site avec navigation secondaire, liens sociaux et crédits.
- Intègre les composants : `Logo`, `NavLink`, `Container`, `Divider`
- Props : `variant` (standard, minimal, rich), `withSocialLinks`, `withNewsletter`, `withSitemap`

### 3. HeroSection
Section d'en-tête de page d'accueil avec contenu de mise en avant et appels à l'action.
- Intègre les composants : `Typography`, `Button`, `Container`
- Props : `title`, `subtitle`, `description`, `actions`, `image`, `backgroundColor`, `align`

### 4. EnhancedContactForm
Formulaire de contact enrichi avec options de présentation et d'affichage de contenu additionnel.
- Intègre les composants : `ContactForm`, `Card`, `Typography`, `Badge`, `Divider`, `ServiceHighlight`
- Props : `title`, `subtitle`, `services`, `testimonial`, `imagePosition`, `style`, `accentColor`
- Variantes : `card`, `simple`, `full-width`

### 5. PageHeader
En-tête de page configurable avec titre, fil d'Ariane, actions et styles flexibles.
- Intègre les composants : `Typography`, `Container`, `Button`, `Badge`, `Divider`
- Props : `title`, `subtitle`, `description`, `breadcrumbs`, `actions`, `backgroundImage`, `size`
- Variantes de taille : `small`, `medium`, `large`, `hero`
- Thèmes : `light`, `dark`, `primary`, `secondary`

### 6. FeatureSection
Section présentant les fonctionnalités ou avantages d'un service/produit avec différents layouts.
- Intègre les composants : `Typography`, `Container`, `Card`, `Button`, `FeatureGrid`, `Badge`, `Divider`
- Props : `title`, `subtitle`, `features`, `columns`, `layout`, `mainImage`, `backgroundColor`
- Layouts : `grid`, `cards`, `list`, `alternating`, `compact`

## Conventions d'utilisation

- Les composants organismes se focalisent sur l'*organisation* des éléments et leur *coordination* plutôt que sur des détails visuels spécifiques.
- Ils doivent être responsifs et s'adapter à différentes tailles d'écran.
- Les données sont généralement passées en props, sans logique interne de récupération de données.
- Ils doivent offrir plusieurs variantes pour s'adapter aux différents contextes d'utilisation.
- Les composants organismes peuvent contenir des états internes pour gérer les interactions utilisateur.

## Bonnes pratiques

- Diviser les grands composants organismes en sous-composants plus petits si nécessaire.
- Utiliser les props par défaut pour assurer un rendu cohérent même avec une configuration minimale.
- Toujours s'assurer que les composants organismes sont accessibles (ARIA, navigation au clavier, etc.).
- Respecter les conventions de nommage : noms descriptifs reflétant la fonction du composant.
- Prévoir différentes variantes d'affichage à travers des props claires et bien documentées. 