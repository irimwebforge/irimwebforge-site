# Architecture des Pages - IrimWebForge

Ce document détaille l'architecture complète de chaque page principale du site IrimWebForge, incluant les sections, composants, hiérarchie et spécificités responsives.

## 💫 Source de Vérité et Référence d'Implémentation

Pour assurer la cohérence avec le design system, toute implémentation doit se référer au **Design System Lab** (`src/app/ds-lab`), qui est la source de vérité unique :

- Les templates validés dans `src/app/ds-lab/templates/page.tsx` servent de modèles d'implémentation
- Les adaptateurs dans `src/app/ds-lab/templates/` (projectAdapter.ts, serviceAdapter.ts, etc.) doivent être utilisés pour transformer les données
- Le style et le comportement des composants doivent respecter ceux définis dans `src/app/ds-lab/components/page.tsx`

Les spécifications dans ce document doivent être suivies en conjonction avec les exemples du DS-Lab pour garantir la cohérence visuelle et fonctionnelle.

### Référence d'Implémentation

- **Template de base** : Voir `src/app/ds-lab/templates/page.tsx` pour l'implémentation de référence
- **Adaptateurs de données** : Utiliser les adaptateurs appropriés (projectAdapter.ts, serviceAdapter.ts, etc.)
- **Composants** : Se référer à `src/app/ds-lab/components/page.tsx` pour les styles et variantes

## 1. Page d'accueil

### Structure globale

- **Rôle** : Premier contact, présentation de la promesse unique de valeur, différenciation et transformation concrète
- **URL** : `/`
- **Balise title** : "IrimWebForge | Des sites web qui libèrent votre temps et votre énergie"
- **Meta description** : "Développeur freelance spécialisé en interfaces admin sur mesure. Je crée des sites web qui libèrent votre temps et votre énergie. Passez de 7h à 45min d'administration hebdomadaire."

### Sections (dans l'ordre)

#### 1.1 Hero Section

- **Composant** : `HeroSection`
- **Hiérarchie** :
  - H1 : "Des sites web qui libèrent votre temps et votre énergie"
  - Sous-titre (p.lead) : "Je crée des interfaces qui respectent votre métier, votre identité et votre besoin d'autonomie"
- **Contenu** :
  - CTA principal : `Button` variant="gradient" className="shine-effect" : "Discutons de vos aspirations digitales"
  - CTA secondaire : `Button` variant="outline" : "Découvrir mon approche"
- **Responsive** :
  - Desktop : Image à droite, texte à gauche (flex-row)
  - Tablette : Stacking vertical (flex-col), image plus petite
  - Mobile : Stacking vertical, réduction de l'espacement
- **Notes techniques** :
  - Les titres H1/H2 doivent utiliser la classe `font-bold italic`
  - Le CTA principal doit avoir l'effet "shine-effect" sur le dégradé

#### 1.2 Ma différence

- **Composant** : `FeatureSection` (avec layout="cards" et columns=3)
- **Hiérarchie** :
  - H2 : "Le pont entre votre vision et sa concrétisation digitale"
  - Paragraphe introduction : "Mon parcours atypique..."
- **Contenu** :
  - Grille de 3 blocs avec icônes :
    1. **Double compréhension** - "Je comprends à la fois votre réalité métier et les solutions techniques"
    2. **Relation d'écoute** - "J'accorde autant d'importance à ce que vous dites qu'à ce que vous ne dites pas"
    3. **Libération mentale** - "Je prends en charge la responsabilité technique pour que vous restiez concentré sur votre cœur de métier"
  - Citation signature : "Je traduis vos aspirations en réalités digitales concrètes et autonomes"
- **Responsive** :
  - Desktop : Grille 3 colonnes
  - Tablette : Grille 2 colonnes
  - Mobile : Empilement vertical
- **Notes techniques** :
  - Section CRITIQUE à ne pas omettre
  - Utiliser l'effet hover sur les cartes
  - Icônes Lucide-React (Translate, EarListen, Brain)

#### 1.3 Proposition de valeur

- **Composant** : `FeatureSection` (avec layout="grid" et columns=4)
- **Hiérarchie** :
  - H2 : "Une approche qui transforme concrètement votre quotidien"
  - 4 blocs de valeur
- **Contenu** :
  - Blocs avec titres et descriptions :
    1. **Autonomie sereine** - "Reprenez le contrôle sans dépendance technique"
    2. **Gain de temps mesurable** - "Passez de 7h à 45min d'administration hebdomadaire"
    3. **Authenticité digitale** - "Une présence en ligne qui reflète véritablement qui vous êtes"
    4. **Évolution sans friction** - "Des solutions qui grandissent avec vous"
- **Responsive** :
  - Desktop : Grille 2x2
  - Tablette : Grille 2x2 (plus petit)
  - Mobile : Empilement vertical
- **Notes techniques** :
  - Inclure des indicateurs/badges chiffrés pour les gains de temps (-70%)
  - Animations subtiles au survol

#### 1.4 Tableau comparatif

- **Composant** : `ComparativeTable`
- **Hiérarchie** :
  - H2 : "Solutions standards vs IrimWebForge"
- **Contenu** :
  - Tableau comparatif à 2 colonnes :
    | SOLUTIONS CMS STANDARDS | IRIMWEBFORGE |
    |-------------------------|--------------|
    | Vous vous adaptez à l'interface | L'interface s'adapte à VOUS |
    | Navigation complexe et options inutiles | Interface épurée sur mesure |
    | 7h/semaine en moyenne pour les mises à jour | 45min/semaine pour mêmes tâches |
    | Dépendance technique | Autonomie totale |
    | Abonnements mensuels sans fin | Investissement puis indépendance |
- **Responsive** :
  - Desktop : Tableau côte à côte
  - Tablette : Maintenir tableau côte à côte
  - Mobile : Transformer en cartes comparatives empilées
- **Notes techniques** :
  - Utiliser un contraste visuel fort entre les colonnes
  - Mettre en évidence la colonne "IrimWebForge" (couleur primaire)
  - Point critique à ne pas omettre

#### 1.5 Temporalité duale

- **Composant** : `TemporalSplit`
- **Hiérarchie** :
  - H2 : "Mon parcours d'évolution"
  - Deux sections côte à côte
- **Contenu** :
  - **Section "Ce que je réalise actuellement"** :
    - Sites web personnalisés avec interfaces administratives sur mesure
    - Cas d'étude Corps & Sens : transformation 7h → 45min
    - Adapté aux thérapeutes, artisans, professionnels en transition
  - **Section "Ce que je développe pour l'avenir"** :
    - Applications web/mobiles personnalisées (exemple MoodCycle)
    - Écosystèmes digitaux complets
    - Vision à long terme
  - Message central : "Rejoignez mon parcours d'évolution et grandissons ensemble"
- **Responsive** :
  - Desktop : Deux colonnes distinctes
  - Tablette : Deux colonnes
  - Mobile : Empilement vertical avec séparateur visuel
- **Notes techniques** :
  - Utiliser style visuel distinct mais complémentaire pour chaque colonne
  - Structure temporelle duale explicite à ne pas omettre

#### 1.6 Projets mis en avant

- **Composant** : `ProjectShowcase`
- **Hiérarchie** :
  - H2 : "Des transformations concrètes plutôt que des prouesses techniques"
  - Grille de 1-3 projets
- **Contenu** :
  - **Corps & Sens** (prioritaire) :
    - Transformation mesurable : 7h → 45min
    - Interface sur mesure pour thérapeute/artiste
  - **Univers des Rêves** (secondaire) :
    - Interface de gestion pour onirologue
    - Autonomie éditoriale complète
  - **Mr&Mrs CBD** (secondaire) :
    - Libération des coûts mensuels et dépendance technique
    - Interface admin intuitive
  - CTA : "Voir tous les projets"
- **Responsive** :
  - Desktop : Grille 3 colonnes
  - Tablette : Grille 2 colonnes
  - Mobile : 1 colonne, carousel natif
- **Notes techniques** :
  - Accent sur les transformations et résultats, pas sur le code
  - Images avant/après pour Corps & Sens
  - Badges ou icônes pour indiquer les gains (temps, coût, autonomie)

#### 1.7 Témoignage principal

- **Composant** : `Testimonial` variant="featured"
- **Hiérarchie** :
  - H2 visually-hidden : "Ce que disent mes clients"
- **Contenu** :
  - Citation : "Eric a fait plus que créer un site web, il a véritablement compris mon métier et mes contraintes. Je ne perds plus mon dimanche à mettre à jour mon site. J'ai maintenant une interface simple qui me correspond et me fait gagner un temps précieux."
  - Auteur : "[Nom client ou mentor], [Profession]"
  - Photo (optionnelle)
- **Responsive** :
  - Design unique adaptable
- **Notes techniques** :
  - Style distinctif (couleur de fond différente)
  - Grandes guillemets décoratifs
  - Animation texte lente si plusieurs témoignages

#### 1.8 Call-to-action final

- **Composant** : `CTASection`
- **Hiérarchie** :
  - H2 : "Prêt à libérer votre temps et votre énergie créative?"
  - Paragraphe : "Réservons une conversation découverte de 45 minutes, sans jargon technique"
- **Contenu** :
  - CTA principal : `Button` variant="gradient" className="shine-effect" : "Réserver ma conversation découverte"
- **Responsive** :
  - Centré sur toutes tailles d'écran
  - Espacement et taille ajustés selon viewport
- **Notes techniques** :
  - Utiliser fond dégradé subtil ou image de fond atténuée
  - CTA avec effet "shine-effect" sur le dégradé

## 2. Page Services

### Structure globale

- **Rôle** : Présenter les services avec clarté et distinction temporelle
- **URL** : `/services`
- **Balise title** : "Services | IrimWebForge - Des services qui évoluent avec vous"
- **Meta description** : "Découvrez mes services de création de sites web personnalisés avec interfaces administratives sur mesure. Libérez votre temps et concentrez-vous sur votre métier."

### Sections (dans l'ordre)

#### 2.1 Services Header

- **Composant** : `PageHeader`
- **Hiérarchie** :
  - H1 : "Des services qui évoluent avec vous"
  - Sous-titre (p.lead) : "Je vous présente avec transparence ce que je réalise actuellement et ce que je développe pour l'avenir"
- **Contenu** :
  - Fil d'Ariane : Accueil > Services
- **Responsive** :
  - Pleine largeur sur tous les appareils
  - Hauteur réduite sur mobile
- **Notes techniques** :
  - Titre H1 avec classe `font-bold italic`
  - Fond avec subtil dégradé ou image d'arrière-plan désaturée

#### 2.2 Solution Présence

- **Composant** : `ServiceCard` variant="featured"
- **Hiérarchie** :
  - H2 : "Solution Présence : Autonomie Numérique Simplifiée"
  - H3 : "Résultats concrets que vous obtiendrez"
- **Contenu** :
  - Prix : "1500-2200€ + 70€/mois"
  - Cible : "Indépendants qui veulent gérer facilement leur site sans dépendre d'un technicien"
  - **Résultats concrets** (liste) :
    1. **Gain de temps mesurable** : "Réduction de 70% du temps consacré à la gestion de votre présence en ligne"
    2. **Autonomie réelle** : "Capacité à mettre à jour vous-même votre site sans crainte de 'tout casser'"
    3. **Image professionnelle** : "Une présence web qui inspire confiance à vos prospects et clients"
  - **Ce que comprend cette solution** (liste) :
    1. Site web professionnel responsive adapté à votre métier spécifique
    2. Interface d'administration simplifiée avec uniquement les fonctions nécessaires
    3. Formation pratique individuelle (2h) avec supports visuels
    4. Transfert complet de vos contenus existants
    5. 4 sessions d'assistance prioritaire de 20 minutes
    6. Garantie de résultat : réduction d'au moins 60% du temps administratif ou remboursement partiel
  - Témoignage : Marie, thérapeute énergétique
  - CTA : `Button` variant="primary" : "En savoir plus sur cette solution"
- **Responsive** :
  - Desktop : Layout deux colonnes (résultats/inclus)
  - Tablette : Layout flexible
  - Mobile : Empilement vertical complet
- **Notes techniques** :
  - Structure "Résultats d'abord, moyens ensuite" à respecter strictement
  - Mise en évidence visuelle des résultats (couleur, icônes)
  - Distinction visuelle entre résultats et inclusions

#### 2.3 Solution Intégrée

- **Composant** : `ServiceCard` variant="standard"
- **Hiérarchie** :
  - H2 : "Solution Intégrée : Unification & Fluidité"
  - H3 : "Résultats concrets que vous obtiendrez"
- **Contenu** :
  - Prix : "2800-3800€ + 140€/mois"
  - Cible : "Professionnels qui jonglent actuellement entre plusieurs outils"
  - **Résultats concrets** (liste) :
    1. **Centralisation efficace** : "Fin du jonglage entre 3-5 outils différents non connectés"
    2. **Automatisation intelligente** : "Les tâches répétitives s'exécutent sans votre intervention"
    3. **Cohérence professionnelle** : "Une expérience fluide pour vos clients, du premier contact à la facturation"
  - **Ce que comprend cette solution** (liste) :
    1. Écosystème numérique unifié
    2. Intégration avec vos outils existants essentiels
    3. Formation progressive (4h en 2 sessions)
    4. Plan de transition en douceur
    5. 8 sessions d'assistance prioritaire
    6. Garantie de résultat : réduction d'au moins 70% ou remboursement partiel
  - Témoignage : Alexandre, artisan CBD
  - CTA : `Button` variant="primary" : "Explorer cette solution"
- **Responsive** :
  - Même structure que Solution Présence
- **Notes techniques** :
  - Style visuel légèrement différent mais cohérent
  - Même structure de données pour faciliter la comparaison

#### 2.4 Solution Évolutive

- **Composant** : `ServiceCard` variant="premium"
- **Hiérarchie** :
  - H2 : "Solution Évolutive : Croissance Sans Contrainte"
  - H3 : "Résultats concrets que vous obtiendrez"
- **Contenu** :
  - Prix : "5200-7500€ + 280€/mois"
  - Cible : "Entrepreneurs établis prêts à faire évoluer leur infrastructure numérique"
  - **Résultats concrets** (liste) :
    1. **Scalabilité immédiate** : "Capacité à augmenter votre volume d'activité de 30% sans charge administrative supplémentaire"
    2. **Pilotage stratégique** : "Tableau de bord personnalisé avec vos indicateurs clés"
    3. **Différenciation concurrentielle** : "Des fonctionnalités sur mesure que vos concurrents n'ont pas"
  - **Ce que comprend cette solution** (liste) :
    1. Architecture numérique évolutive complète
    2. Formation complète pour vous et votre équipe (6h)
    3. Revue stratégique trimestrielle
    4. Plan d'évolution adaptatif sur 12 mois
    5. Support prioritaire illimité pendant 90 jours, puis 12 sessions par an
    6. Garantie de résultat : augmentation de capacité d'au moins 25% ou révision gratuite
  - Témoignage : Laura, fondatrice d'un collectif thérapeutique
  - CTA : `Button` variant="primary" : "Découvrir cette solution"
- **Responsive** :
  - Même structure que les autres solutions
- **Notes techniques** :
  - Style premium (bordure distinctive, fond subtil)
  - Identique en structure aux autres services pour faciliter comparaison

#### 2.5 Mes différenciateurs

- **Composant** : `FeatureGrid`
- **Hiérarchie** :
  - H2 : "Comment je travaille différemment des autres développeurs"
- **Contenu** :
  - Grille 2x2 avec 4 caractéristiques :
    1. **Compréhension métier approfondie**
    2. **Interfaces administratives conçues pour des humains**
    3. **Autonomie progressive garantie**
    4. **Résultats mesurables, pas des promesses vagues**
- **Responsive** :
  - Desktop : Grille 2x2
  - Tablette : Grille 2x2
  - Mobile : Empilement vertical
- **Notes techniques** :
  - Utiliser des icônes significatives pour chaque point
  - Style cohérent avec l'identité visuelle

#### 2.6 Garanties concrètes

- **Composant** : `GuaranteesSection`
- **Hiérarchie** :
  - H2 : "Garanties concrètes"
- **Contenu** :
  - Liste de garanties :
    1. **Engagement de résultat chiffré** spécifique à votre situation
    2. **Période d'essai de 30 jours** avec option de modification ou remboursement partiel
    3. **Transparence totale** : pas de coûts cachés ni de surprises
  - Garanties spécifiques par niveau :
    - **Solution Présence** : Réduction d'au moins 60% de votre temps administratif ou remboursement partiel
    - **Solution Intégrée** : Réduction d'au moins 70% de votre temps administratif ou remboursement partiel
    - **Solution Évolutive** : Augmentation de capacité d'au moins 25% ou révision gratuite du système
- **Responsive** :
  - Desktop : Disposition horizontale des garanties principales
  - Tablette/Mobile : Empilement vertical
- **Notes techniques** :
  - Utiliser la couleur tertiaire (orange) pour les éléments d'accentuation
  - Style visuel distinct (encadré, fond différent)

#### 2.7 Options de financement

- **Composant** : `FinancingOptions`
- **Hiérarchie** :
  - H2 : "Options de financement"
- **Contenu** :
  - **Flexibilité de paiement** :
    - Paiement en 3 fois sans frais pour toutes les solutions
    - Plans d'échelonnement sur 6 ou 12 mois (Solutions Intégrée et Évolutive)
    - Formule progressive possible
- **Responsive** :
  - Layout simple adaptable
- **Notes techniques** :
  - Style sobre et rassurant
  - Icônes financières appropriées

#### 2.8 Diagnostic Numérique

- **Composant** : `DiagnosticCTA`
- **Hiérarchie** :
  - H2 : "Votre premier pas : Diagnostic Numérique Personnalisé (Offert)"
- **Contenu** :
  - Description : "En 30 minutes d'échange concret, découvrez..."
  - Liste des bénéfices du diagnostic
  - CTA principal : `Button` variant="gradient" className="shine-effect" : "Réserver mon diagnostic"
- **Responsive** :
  - Centré sur tous les appareils
- **Notes techniques** :
  - Accent visuel fort (couleur de fond distinctive)
  - CTA avec effet "shine-effect" sur le dégradé

## 3. Page Contact

### Structure globale

- **Rôle** : Faciliter la prise de contact et initier la conversation
- **URL** : `/contact`
- **Balise title** : "Contact | IrimWebForge - Discutons de vos aspirations digitales"
- **Meta description** : "Réservez votre diagnostic numérique personnalisé gratuit de 30 minutes et découvrez comment libérer votre temps professionnel."

### Sections (dans l'ordre)

#### 3.1 Contact Header

- **Composant** : `PageHeader` variant="small"
- **Hiérarchie** :
  - H1 : "Discutons de vos aspirations digitales"
  - Sous-titre : "Initier une conversation, c'est déjà commencer à clarifier votre vision"
- **Contenu** :
  - Fil d'Ariane : Accueil > Contact
- **Responsive** :
  - Pleine largeur sur tous les appareils
  - Hauteur réduite sur mobile
- **Notes techniques** :
  - Titre H1 avec classe `font-bold italic`
  - Style épuré pour mettre en avant le formulaire

#### 3.2 Structure Contact

- **Composant** : `TwoColumnLayout`
- **Hiérarchie** :
  - Formulaire à gauche
  - Informations complémentaires à droite
- **Responsive** :
  - Desktop : Deux colonnes 60%/40%
  - Tablette : Deux colonnes 50%/50%
  - Mobile : Empilement vertical (formulaire puis infos)
- **Notes techniques** :
  - Espacement approprié entre les colonnes
  - Assurer la lisibilité sur tous les appareils

#### 3.3 Formulaire conversationnel

- **Composant** : `ConversationForm`
- **Hiérarchie** :
  - H2 : "Réservez votre diagnostic numérique personnalisé"
  - Labels des champs comme conversations
- **Contenu** :
  - Champs repensés pour dialogue :
    - Nom complet
    - Email
    - Téléphone (optionnel)
    - "Parlez-moi de votre activité et ce qui vous passionne"
    - "Quelle est votre principale frustration avec votre présence digitale actuelle?"
    - "À quoi ressemblerait le succès pour vous?"
    - "Comment avez-vous entendu parler de moi?"
  - CTA : `Button` variant="gradient" className="shine-effect" : "Réserver mon diagnostic"
- **Responsive** :
  - Pleine largeur dans sa colonne
  - Champs textarea plus petits sur mobile
- **Notes techniques** :
  - Style conversationnel à ne pas omettre
  - Focus styles accessibles
  - Validation interactive
  - Messages d'erreur clairs

#### 3.4 Informations de contact

- **Composant** : `ContactInfo`
- **Hiérarchie** :
  - H2 : "Informations directes"
- **Contenu** :
  - Email : contact@irimwebforge.com
  - Téléphone : 06 78 76 45 59
  - Adresse : 11 route de Paris, 67117 Ittenheim
- **Responsive** :
  - Disposition verticale adaptable
- **Notes techniques** :
  - Icônes pour chaque type d'information
  - Liens cliquables (mailto, tel)

#### 3.5 Processus après contact

- **Composant** : `ProcessSteps`
- **Hiérarchie** :
  - H2 : "Et ensuite?"
- **Contenu** :
  - Liste numérotée des étapes :
    1. "Je vous réponds personnellement sous 24h maximum"
    2. "Nous planifions une conversation découverte de 45 minutes"
    3. "Nous explorons ensemble vos besoins et aspirations sans jargon technique"
    4. "Vous recevez des premières pistes de réflexion, que nous travaillions ensemble ou non"
- **Responsive** :
  - Desktop/Tablette : Disposition horizontale avec séparateurs
  - Mobile : Liste verticale numérotée
- **Notes techniques** :
  - Indicateurs visuels de progression
  - Style rassurant et clair

## 4. Page Projets

### Structure globale

- **Rôle** : Présenter les projets réalisés avec accent sur les transformations
- **URL** : `/projets`
- **Balise title** : "Projets | IrimWebForge - Des transformations concrètes"
- **Meta description** : "Découvrez comment je transforme l'expérience numérique de mes clients, avec des résultats mesurables comme passer de 7h à 45min d'administration hebdomadaire."

### Sections (dans l'ordre)

#### 4.1 Projects Header

- **Composant** : `PageHeader`
- **Hiérarchie** :
  - H1 : "Des transformations concrètes plutôt que des prouesses techniques"
  - Sous-titre : "Chaque projet est une histoire de libération de temps et d'énergie"
- **Contenu** :
  - Fil d'Ariane : Accueil > Projets
- **Responsive** :
  - Pleine largeur sur tous les appareils
  - Hauteur réduite sur mobile
- **Notes techniques** :
  - Titre H1 avec classe `font-bold italic`
  - Fond avec subtil dégradé ou image d'arrière-plan

#### 4.2 Filtres de projets

- **Composant** : `ProjectsFilter`
- **Hiérarchie** :
  - Pas de titre visible (rôle fonctionnel)
- **Contenu** :
  - Boutons de filtrage par catégorie :
    - Tous
    - Transformations
    - Interfaces admin
    - Thérapeutes
    - Artisans
    - Professionnels
- **Responsive** :
  - Desktop : Ligne horizontale de boutons
  - Tablette : Ligne horizontale scrollable
  - Mobile : Dropdown select
- **Notes techniques** :
  - État actif clairement visible
  - Animation douce lors du filtrage
  - Accessibilité (rôle, aria-current, etc.)

#### 4.3 Grille de projets

- **Composant** : `ProjectsGrid`
- **Hiérarchie** :
  - Pas de titre visible (contenu principal)
- **Contenu** :
  - Grille de projets avec :
    - **Corps & Sens** (prioritaire)
    - **Univers des Rêves**
    - **Mr&Mrs CBD**
    - Autres projets
  - Chaque carte contient :
    - Image principale
    - Titre du projet
    - Type de client
    - Transformation principale (ex: "7h → 45min")
    - Lien vers projet détaillé
- **Responsive** :
  - Desktop : Grille 3 colonnes
  - Tablette : Grille 2 colonnes
  - Mobile : Empilement vertical
- **Notes techniques** :
  - Utiliser `ProjectCard` pour chaque projet
  - Animation hover subtile
  - Lazy loading des images
  - Focus sur les transformations, pas sur les technologies

#### 4.4 Matrice de transformation

- **Composant** : `TransformationMatrix`
- **Hiérarchie** :
  - H2 : "Impact mesurable sur votre activité"
- **Contenu** :
  - Visualisation des gains mesurés par projet
  - Axes : Type de gain (temps, coût, autonomie) vs Ampleur du gain
  - Points représentant chaque projet
- **Responsive** :
  - Desktop/Tablette : Visualisation complète
  - Mobile : Version simplifiée ou scroll horizontal
- **Notes techniques** :
  - Utiliser des couleurs contrastées
  - Assurer l'accessibilité des données visuelles
  - Inclure une légende claire

#### 4.5 Call-to-action final

- **Composant** : `CTASection`
- **Hiérarchie** :
  - H2 : "Votre projet pourrait être le prochain"
  - Sous-titre : "Commençons par discuter de vos aspirations digitales"
- **Contenu** :
  - CTA principal : `Button` variant="gradient" className="shine-effect" : "Réserver mon diagnostic"
- **Responsive** :
  - Centré sur tous les appareils
- **Notes techniques** :
  - Utiliser l'effet "shine-effect" sur le bouton
  - Style cohérent avec les autres CTA du site

## Notes générales d'implémentation

### Hiérarchie typographique

- **H1** : `text-4xl md:text-5xl lg:text-6xl font-bold italic text-secondary`
- **H2** : `text-3xl md:text-4xl font-bold italic text-secondary`
- **H3** : `text-2xl md:text-3xl font-bold text-secondary`
- **H4** : `text-xl md:text-2xl font-bold text-secondary`
- **Paragraphes lead** : `text-lg md:text-xl text-gray-700`
- **Paragraphes standards** : `text-base text-gray-600`

### Système de couleurs

- **Primaire** (Turquoise) : `#00A0A0` - Éléments interactifs, accentuation
- **Secondaire** (Bleu foncé) : `#004466` - Textes d'en-tête, éléments structurants
- **Tertiaire** (Orange) : `#F06424` - Éléments d'accentuation limités
- **Gris clair** : `#F5F7FA` - Fonds de sections
- **Gris texte** : `#4A5568` - Texte standard
- **Blanc** : `#FFFFFF` - Fonds et textes inversés

### Composants globaux

- **Container** : Largeur maximale et marges latérales automatiques
- **Buttons** : Variantes "primary", "secondary", "outline", "gradient"
- **NavLink** : Liens avec état actif (dégradé ou soulignement)
- **Typography** : Composant pour gestion cohérente des textes

### Effets et animations

- **Effet "shine-effect"** : Animation subtile de brillance sur les boutons dégradés
- **Hover** : Transition douce

### Conformité avec le Design System Lab

Toute l'implémentation doit suivre les principes et patterns établis dans le DS-Lab. En cas de divergence entre ce document et le DS-Lab, le DS-Lab fait autorité. Toute modification nécessaire doit d'abord être validée et implémentée dans le DS-Lab avant d'être appliquée au site principal.
