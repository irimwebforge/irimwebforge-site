# Templates

Les templates sont des composants de niveau supérieur qui assemblent des organismes et définissent la structure générale des pages.

## Objectif

Dans notre architecture Atomic Design, les templates :
- Organisent la disposition des organismes sur une page complète
- Définissent la structure et la mise en page globale
- Servent de squelette pour les pages spécifiques
- Ne contiennent pas de données spécifiques (contrairement aux pages)

## Principes du Design System

Pour maintenir la cohérence visuelle dans tous les templates, voici les principes à respecter :

1. **Typographie** : 
   - Utiliser l'italique gras pour les titres h1 et h2 avec la classe `font-bold italic`
   - Respecter la hiérarchie des tailles de texte définies dans le composant Typography

2. **Appels à l'action (CTA)** :
   - Réserver l'effet de brillance (`shine-effect`) exclusivement aux CTA principaux
   - Utiliser la variante `gradient` pour les boutons d'action principaux
   - Utiliser la variante `secondary` ou `outline` pour les actions secondaires

3. **Couleurs** :
   - Limiter l'usage de la couleur tertiaire (orange) à des accents visuels spécifiques
   - Utiliser principalement les couleurs primaire et secondaire pour les éléments d'interface
   - Appliquer des dégradés pour les CTA principaux et les liens actifs

4. **Espacement et structure** :
   - Maintenir une marge verticale cohérente entre les sections (généralement py-16)
   - Adapter la disposition sur mobiles en utilisant des flex-col qui passent en flex-row sur desktop

## Structure du dossier

- `ProjectShowcase.tsx` - Section présentant les projets réalisés (portfolio)
- `ServiceOverview.tsx` - Vue d'ensemble des services proposés
- `CTASection.tsx` - Sections d'appel à l'action pour encourager les visiteurs à prendre contact
- `ValueProposition.tsx` - Section mettant en avant les valeurs et avantages concurrentiels

## Utilisation

Les templates sont importés dans les pages et servent de structure pour afficher des données spécifiques :

```tsx
import { ProjectShowcase } from '@/components/templates/ProjectShowcase';

export default function PortfolioPage() {
  return (
    <ProjectShowcase 
      title="Mes projets récents"
      projects={projectsData}
    />
  );
}
```

## Différence entre Organisms et Templates

Les organismes sont des composants autonomes qui combinent des molécules et des atomes pour former une section fonctionnelle indépendante (comme un formulaire de contact avancé).

Les templates, quant à eux, organisent ces organismes dans une structure cohérente pour former des pages complètes ou des sections majeures de pages. 