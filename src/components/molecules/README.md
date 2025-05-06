# Composants Moléculaires IrimWebForge

Les composants moléculaires combinent plusieurs composants atomiques pour créer des éléments d'interface plus complexes et fonctionnels. Ils suivent l'approche Atomic Design et forment la couche intermédiaire de notre architecture UI.

## Principes de conception

Les composants moléculaires respectent les principes suivants :
- **Composition** : Assemblage cohérent de composants atomiques
- **Réutilisabilité** : Conçus pour être utilisés dans diverses sections du site
- **Personnalisation** : Options flexibles via des props bien définies
- **Accessibilité** : Conformes aux normes WCAG 2.1 AA
- **Cohérence** : Suivent la hiérarchie visuelle du design system

## Hiérarchie visuelle

Nos composants moléculaires suivent la même hiérarchie visuelle que les composants atomiques :

### Couleurs
- **Primaire (Turquoise)** : `#00B3B3` - Éléments interactifs, accentuation, focus
- **Secondaire (Bleu foncé)** : `#004466` - Éléments de structure, en-têtes
- **Tertiaire (Orange)** : `#F06424` - Éléments d'accentuation limités (badges, alertes, mise en évidence de textes clés)

### Effets spéciaux
- **Effet brillance** : Exclusivement utilisé sur les CTA principaux avec le dégradé
- **Dégradé** : Réservé aux CTA principaux et éléments importants d'appel à l'action
- **Typographie en italique gras** : Pour les titres principaux (h1, h2)
- **Soulignements** : Pour les éléments de navigation et onglets actifs

## Composants principaux

### Card
Conteneur polyvalent pour présenter du contenu structuré avec différentes variantes visuelles.

```jsx
<Card 
  title="Titre de la carte"
  subtitle="Sous-titre optionnel"
  variant="accent" 
  color="tertiary"
  hover={true}
>
  Contenu de la carte
</Card>

// Avec dégradé et effet brillance pour CTA principal
<Card 
  title="Carte premium"
  gradient={true}
  footer={<Button variant="gradient" className="shine-effect">Action principale</Button>}
>
  Contenu avec en-tête en dégradé et CTA brillant
</Card>
```

**Variantes** : `default`, `outlined`, `elevated`, `accent`, `highlight`  
**Fonctionnalités** : En-tête en dégradé, accentuation colorée, effets de survol

### Tabs
Système d'onglets pour organiser le contenu en sections accessibles.

```jsx
<Tabs
  tabs={[
    { id: "tab1", label: "Premier onglet", content: <div>Contenu 1</div> },
    { id: "tab2", label: "Second onglet", content: <div>Contenu 2</div> }
  ]}
  variant="underlined"
  alignment="center"
/>

// Utilisation avec TabGroup et liens actifs en dégradé
<TabGroup variant="pills">
  <Tab id="tab1" label={<NavLink href="#" useGradient exact>Premier onglet</NavLink>}>
    Contenu du premier onglet
  </Tab>
  <Tab id="tab2" label="Second onglet">
    Contenu du second onglet
  </Tab>
</TabGroup>
```

**Variantes** : `default`, `boxed`, `pills`, `underlined`  
**Fonctionnalités** : Orientation verticale/horizontale, badges, icônes, animation, liens actifs en dégradé

### FAQ
Accordéon optimisé pour les sections de questions/réponses avec animations fluides.

```jsx
<FAQ 
  items={[
    { 
      question: 'Comment fonctionne le service ?', 
      answer: 'Notre service fonctionne en trois étapes simples...'
    },
    // Autres questions
  ]} 
  allowMultiple={true}
  color="tertiary"
/>
```

**Variantes** : `default`, `separated`, `bordered`  
**Fonctionnalités** : Ouverture multiple/unique, icônes personnalisables, accentuation

### CallToAction
Bannière d'appel à l'action pour encourager l'engagement des utilisateurs.

```jsx
<CallToAction
  title="Prêt à démarrer votre projet ?"
  description="Nous vous accompagnons de la conception au déploiement"
  primaryAction={{
    text: "Contactez-nous",
    url: "/contact",
    variant: "gradient",
    className: "shine-effect"
  }}
  variant="card"
  color="primary"
  withBackground={true}
/>
```

**Variantes** : `default`, `card`, `fullWidth`, `accent`  
**Fonctionnalités** : Arrière-plan en dégradé, effet de brillance sur le CTA, image d'illustration

### FeatureGrid
Grille de fonctionnalités avec icônes pour présenter les avantages du service.

```jsx
<FeatureGrid
  features={[
    {
      title: "Développement web",
      description: "Sites et applications web sur mesure",
      icon: <Icon name="Code" />
    },
    // Autres fonctionnalités
  ]}
  columns={3}
  variant="card"
/>
```

**Variantes** : `card`, `minimal`, `bordered`  
**Fonctionnalités** : Disposition responsive, animations, accentuation colorée

## Liste complète des composants

1. **Card** - Conteneur polyvalent pour contenu structuré
2. **Tabs** - Système d'onglets pour organisation du contenu
3. **FAQ** - Accordéon pour questions/réponses
4. **CallToAction** - Bannière d'appel à l'action
5. **FeatureGrid** - Grille de fonctionnalités avec icônes
6. **PricingPlan** - Conteneur structuré pour afficher les forfaits et tarifs avec gestion d'options, fonctionnalités phares et promotions. Inclut des éléments de mise en avant pour le forfait recommandé.
7. **Testimonial** - Composant pour présenter les avis clients et témoignages avec photo, nom, fonction et évaluation. Supporte différents styles visuels et peut être intégré dans un carousel.
8. **ProcessTimeline** - Visualisation des étapes d'un processus ou d'un parcours client avec indicateurs d'étapes, jalons et descriptions. Supporte les orientations verticale et horizontale.
9. **FormField** - Champ de formulaire avancé combinant label, input, validation et messages d'aide. Centralise la gestion des états des formulaires et des retours utilisateur.
10. **ContactForm** - Formulaire de contact complet avec validation, reCAPTCHA et messages de succès/erreur. Inclut des champs configurables et une gestion des soumissions.
11. **BlogPostCard** - Carte pour présenter un article de blog avec image mise en avant, date, auteur, catégories et résumé. Inclut des éléments de métadonnées et temps de lecture.
12. **LightBox** - Visionneuse d'images en plein écran avec navigation, zoom, légendes et contrôles. Supporte les galeries d'images et la navigation tactile.
13. **Carousel** - Diaporama interactif pour présenter du contenu séquentiel avec contrôles de navigation, pagination et différentes transitions. Supporte l'autoplay et les interactions tactiles.
14. **Modal** - Fenêtre de dialogue modale avec gestion d'ouverture/fermeture, focus piégé et animations. Inclut des variantes pour différents types de dialogues (alerte, confirmation, formulaire).
15. **Pagination** - Contrôles de navigation paginée avec indicateurs de page actuelle, boutons précédent/suivant et accès direct aux pages. S'adapte automatiquement au nombre total de pages.
16. **ComparativeTable** - Tableau comparatif pour présenter différentes options ou forfaits côte à côte. Inclut la mise en évidence des différences et des avantages de chaque option.
17. **TechnologyStack** - Présentation visuelle des technologies, frameworks et outils utilisés avec logos, descriptions et niveaux d'expertise. Organisation par catégories.
18. **StatCard** - Carte pour présenter des métriques, statistiques et indicateurs clés avec visualisations, tendances et comparaisons. Supporte différents formats de données.
19. **ServiceHighlight** - Mise en valeur visuelle d'un service spécifique avec icône, titre, description et appel à l'action. Utilisé pour attirer l'attention sur des services phares.
20. **ProjectPreview** - Aperçu de projet ou étude de cas avec image, titre, description courte et lien vers le projet complet. Inclut des indicateurs de technologies utilisées.
21. **Step** - Représentation visuelle d'une étape individuelle dans un processus, avec numéro, titre, description et indicateur de statut. Peut être utilisé seul ou au sein d'un ProcessTimeline.

## Utilisation avec les composants atomiques

Les composants moléculaires s'intègrent parfaitement avec les composants atomiques :

```jsx
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/molecules/Card';
import { Tabs, Tab } from '@/components/molecules/Tabs';
import { FeatureGrid } from '@/components/molecules/FeatureGrid';

export default function ServicePage() {
  return (
    <div className="container mx-auto py-12">
      <Typography as="h1" variant="h1" className="font-bold italic">
        Nos services
      </Typography>
      
      <Tabs variant="underlined" className="mt-6">
        <Tab id="web" label="Développement web">
          <Card variant="accent" color="tertiary" className="mt-4">
            <Typography variant="lead">
              Développement de sites et applications web sur mesure
            </Typography>
            
            <FeatureGrid
              features={[
                {
                  title: "Applications React/Next.js",
                  description: "Sites modernes et performants",
                  icon: <Icon name="Code" />
                },
                // Autres fonctionnalités
              ]}
              columns={2}
            />
            
            <div className="mt-6">
              <Button variant="gradient" className="shine-effect">
                Découvrir nos projets
              </Button>
            </div>
          </Card>
        </Tab>
        
        <Tab id="design" label="Design UX/UI">
          {/* Contenu de l'onglet Design */}
        </Tab>
      </Tabs>
    </div>
  );
}
```

## Bonnes pratiques

1. **Composabilité** - Utilisez les composants moléculaires pour créer des sections cohérentes
2. **Hiérarchie** - Respectez la hiérarchie visuelle du design system :
   - Réservez le dégradé avec effet brillance aux CTA principaux uniquement
   - Utilisez la couleur tertiaire (orange) avec parcimonie pour les éléments d'accentuation
   - Appliquez l'italique gras pour les titres h1/h2
3. **Personnalisation** - Adaptez via les props plutôt que par des styles directs
4. **Accessibilité** - Assurez-vous que tous les éléments interactifs sont accessibles
5. **Cohérence** - Maintenez une expérience utilisateur cohérente entre les sections
6. **Documentation** - Ajoutez des commentaires JSDoc aux props pour une meilleure auto-documentation
7. **Utilisation de l'utilitaire cn** - Utilisez systématiquement la fonction `cn` pour composer les classes CSS 