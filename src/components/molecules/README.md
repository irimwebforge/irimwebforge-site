# Composants Moléculaires IrimWebForge

Les composants moléculaires combinent plusieurs composants atomiques pour créer des éléments d'interface plus complexes et fonctionnels. Ils suivent l'approche Atomic Design et forment la couche intermédiaire de notre architecture UI.

## Liste des composants

### Composants de base
1. **Card** - Carte polyvalente pour afficher du contenu structuré
2. **Testimonial** - Affiche des témoignages clients avec citation et auteur
3. **FormField** - Champ de formulaire avec validation et gestion d'erreurs
4. **Step/StepList** - Affiche les étapes d'un processus de manière visuelle
5. **ProjectPreview** - Aperçu visuel des projets avec image et description
6. **ServiceHighlight** - Met en valeur les services avec icône et description
7. **ContactForm** - Formulaire de contact complet et validé
8. **FeatureGrid** - Grille de fonctionnalités avec icônes et descriptions
9. **CallToAction** - Bannière d'appel à l'action avec titre et bouton

### Composants avancés
10. **PricingPlan** - Affiche des forfaits tarifaires avec liste de fonctionnalités
   - Variantes: default, featured, compact
   - Props: title, description, price, features, ctaText, ctaLink, etc.

11. **FAQ** - Système d'accordéon pour questions/réponses
   - Variantes: default, separated, bordered
   - Props: items, allowMultiple, icon, accentColor, etc.

12. **ProcessTimeline** - Chronologie visuelle pour présenter les étapes d'un processus
   - Orientations: horizontal, vertical
   - Props: steps, orientation, withNumbers, currentStep, etc.

13. **TechnologyStack** - Affiche les technologies utilisées avec logos
   - Variantes: grid, list, carousel, grouped
   - Props: technologies, logoSize, showLabels, groupByCategory, etc.

14. **ComparativeTable** - Tableau comparatif pour différentes options
   - Props: columns, rows, stickyHeader, highlightRecommended, etc.

15. **BlogPostCard** - Carte d'article de blog avec image et métadonnées
   - Variantes: default, featured, compact, horizontal
   - Props: title, excerpt, coverImage, author, tags, etc.

16. **StatCard** - Affiche des statistiques avec valeur et tendance
   - Variantes: default, bordered, minimal, accent
   - Props: title, value, trend, icon, layout, animateValue, etc.

17. **LightBox** - Visionneuse d'images plein écran avec navigation
   - Props: images, showThumbnails, enableZoom, animation, etc.

18. **Carousel** - Diaporama rotatif pour afficher plusieurs éléments
   - Props: autoPlay, controls, slidesPerView, centerMode, etc.

19. **Modal** - Fenêtres modales pour dialogues, alertes et confirmations
   - Variantes: standard, confirm, alert
   - Props: title, isOpen, onClose, size, animation, etc.

20. **Pagination** - Navigation entre pages avec plusieurs styles
   - Variantes: default, simple, compact
   - Props: currentPage, totalPages, showNumbers, siblingCount, etc.

21. **Tabs** - Système d'onglets pour organiser le contenu
   - Variantes: default, boxed, pills, underlined
   - Props: tabs, orientation, animated, alignment, etc.

## Caractéristiques communes

Tous nos composants moléculaires partagent ces caractéristiques:

- **Responsifs** - S'adaptent à tous les formats d'écran
- **Accessibles** - Conformes aux normes WCAG (navigation clavier, ARIA, etc.)
- **Thématiques** - S'adaptent automatiquement aux thèmes clair/sombre
- **Personnalisables** - Nombreuses options de variantes et de configuration
- **Typés** - Interface TypeScript complète pour une meilleure autocomplétion

## Utilisation

```jsx
import { PricingPlan } from '@/components/molecules/PricingPlan';
import { FAQ } from '@/components/molecules/FAQ';

export default function PricingPage() {
  const pricingFeatures = [
    { id: 'feature1', text: 'Fonctionnalité de base', included: true },
    { id: 'feature2', text: 'Fonctionnalité premium', included: false },
  ];

  const faqItems = [
    { id: 'faq1', question: 'Question fréquente', answer: 'Réponse détaillée' },
  ];

  return (
    <div>
      <PricingPlan
        title="Forfait Standard"
        price={{ amount: 99, period: 'mois' }}
        features={pricingFeatures}
        ctaText="Commencer"
      />
      
      <FAQ 
        items={faqItems} 
        title="Questions fréquentes"
        allowMultiple={true}
      />
    </div>
  );
}
``` 