# SITEMAP Révisé - IRIM Webforge

Ce document présente l'architecture complète révisée du site IRIM Webforge, avec la hiérarchie des pages et leur organisation, reflétant la nouvelle structure d'offres et l'approche éditoriale.

## Hiérarchie des pages

```
IRIM Webforge
├── Accueil
│   ├── Hero
│   │   └── "Des sites web qui libèrent votre temps et votre énergie"
│   ├── Ma différence
│   │   └── "Le pont entre votre vision et sa concrétisation digitale"
│   ├── Proposition de valeur
│   │   ├── Autonomie sereine
│   │   ├── Gain de temps mesurable
│   │   ├── Authenticité digitale
│   │   └── Évolution sans friction
│   ├── Tableau comparatif
│   │   └── "Solutions standards vs IRIM Webforge"
│   ├── Temporalité duale
│   │   ├── Ce que je réalise actuellement
│   │   └── Ce que je développe pour l'avenir
│   ├── Projets mis en avant
│   │   ├── Corps & Sens (7h → 45min)
│   │   ├── Univers des Rêves
│   │   └── Mr&Mrs CBD
│   ├── Témoignage principal
│   └── CTA Contact
│       └── "Prêt à libérer votre temps et votre énergie créative?"
│
├── Services
│   ├── Introduction
│   │   └── "Des services qui évoluent avec vous"
│   ├── Solution Présence
│   │   ├── Autonomie Numérique Simplifiée
│   │   ├── Résultats concrets
│   │   ├── Ce que comprend cette solution
│   │   └── Témoignage Marie
│   │
│   ├── Solution Intégrée
│   │   ├── Unification & Fluidité
│   │   ├── Résultats concrets
│   │   ├── Ce que comprend cette solution
│   │   └── Témoignage Alexandre
│   │
│   ├── Solution Évolutive
│   │   ├── Croissance Sans Contrainte
│   │   ├── Résultats concrets
│   │   ├── Ce que comprend cette solution
│   │   └── Témoignage Laura
│   │
│   ├── Comment je travaille différemment
│   │   ├── Compréhension métier approfondie
│   │   ├── Interfaces administratives conçues pour des humains
│   │   ├── Autonomie progressive garantie
│   │   └── Résultats mesurables, pas des promesses vagues
│   │
│   ├── Garanties concrètes
│   ├── Options de financement
│   └── Diagnostic Numérique Personnalisé
│
├── Projets
│   ├── Introduction
│   │   └── "Des transformations concrètes plutôt que des prouesses techniques"
│   ├── Filtres par type
│   │   ├── Tous
│   │   ├── Transformations
│   │   ├── Interfaces admin
│   │   ├── Thérapeutes
│   │   ├── Artisans
│   │   └── Professionnels
│   │
│   ├── Grille de projets
│   │   ├── Corps & Sens (7h → 45min)
│   │   ├── Univers des Rêves
│   │   ├── Mr&Mrs CBD
│   │   └── [Autres projets]
│   │
│   ├── Matrice de transformation
│   │   └── Visualisation des gains mesurés
│   │
│   └── Études de cas détaillées
│       ├── Corps & Sens
│       │   ├── Défi métier
│       │   ├── Immersion réalisée
│       │   ├── Solution développée
│       │   └── Transformation mesurée
│       ├── Univers des Rêves
│       ├── Mr&Mrs CBD
│       └── [Projets spécifiques]
│
├── Processus
│   ├── Introduction
│   │   └── "Un processus humain avant d'être technique"
│   ├── Vue d'ensemble
│   ├── Phase 1: Exploration
│   │   └── "Conversation découverte (45min, gratuite)"
│   ├── Phase 2: Immersion
│   │   └── "Immersion dans votre univers"
│   ├── Phases 3-5: Technique
│   │   └── "Développement, Validation, Livraison (simplifié)"
│   ├── Phase 6: Accompagnement
│   └── Garanties
│       ├── Compréhension avant code
│       ├── Communication humaine
│       ├── Transmission complète
│       ├── Disponibilité réelle
│       └── Honnêteté
│
├── À propos
│   ├── Parcours
│   │   ├── Expérience précédente
│   │   ├── Reconversion développement
│   │   └── Création IRIM Webforge
│   ├── Moment de révélation
│   │   └── "L'expérience avec mon épouse thérapeute"
│   ├── Ma posture distinctive
│   │   └── "Le guide patient qui élève"
│   ├── Compétences transférées
│   └── Vision
│
├── Contact
│   ├── Introduction
│   │   └── "Discutons de vos aspirations digitales"
│   ├── Diagnostic Numérique Personnalisé
│   │   ├── Introduction
│   │   └── Ce que vous découvrirez
│   ├── Formulaire conversationnel
│   │   ├── Informations standard
│   │   ├── "Parlez-moi de votre activité et ce qui vous passionne"
│   │   ├── "Quelle est votre principale frustration digitale?"
│   │   ├── "À quoi ressemblerait le succès pour vous?"
│   │   └── CTA: "Réserver mon diagnostic"
│   ├── Informations directes
│   │   ├── Email
│   │   ├── Téléphone
│   │   └── Adresse
│   └── Processus après contact
│       ├── Réponse sous 24h
│       ├── Planification conversation 45min
│       ├── Exploration besoins sans jargon
│       └── Premières pistes concrètes
│
└── Blog (futur)
    ├── Articles par catégorie
    ├── Ressources téléchargeables
    └── Newsletter
```

## Routes du site

| Route                        | Description                            | Priorité |
| ---------------------------- | -------------------------------------- | -------- |
| `/`                          | Page d'accueil                         | CRITIQUE |
| `/services`                  | Présentation des 3 niveaux de services | ÉLEVÉE   |
| `/projets`                   | Liste des projets avec filtres         | ÉLEVÉE   |
| `/projets/[slug]`            | Page détaillée d'un projet             | ÉLEVÉE   |
| `/processus`                 | Processus de travail                   | MOYENNE  |
| `/a-propos`                  | À propos d'Eric Zuber                  | MOYENNE  |
| `/contact`                   | Diagnostic Numérique Personnalisé      | CRITIQUE |
| `/blog`                      | Blog et ressources (futur)             | BASSE    |
| `/blog/[slug]`               | Article de blog individuel             | BASSE    |
| `/mentions-legales`          | Mentions légales                       | BASSE    |
| `/politique-confidentialite` | Politique de confidentialité           | BASSE    |

## Navigation principale

- **Logo** → Accueil
- **Services** → Services (menu déroulant)
  - Solution Présence
  - Solution Intégrée
  - Solution Évolutive
  - Comment je travaille différemment
- **Projets** → Projets
- **Processus** → Processus
- **À propos** → À propos
- **Contact** → Contact
- **Bouton CTA** → "Réserver mon diagnostic" → Contact

## Navigation secondaire (footer)

- **Services**
  - Solution Présence
  - Solution Intégrée
  - Solution Évolutive
  - Garanties
- **Ressources**
  - Blog
  - Guides gratuits
  - Processus
- **Légal**
  - Mentions légales
  - Politique de confidentialité
  - CGV
- **Contact**
  - Email
  - Téléphone
  - Adresse
- **Réseaux sociaux**
  - LinkedIn
  - Instagram

## Liens internes stratégiques

1. **Depuis page d'accueil**:

   - Hero CTA → Contact (diagnostic numérique)
   - Projets mis en avant → Pages projets individuels
   - Temporalité duale → Page services
   - Témoignage → Projet concerné
   - CTA final → Contact (diagnostic numérique)

2. **Depuis page services**:

   - Solution Présence → Exemple Corps & Sens
   - Solution Intégrée → Exemple Mr&Mrs CBD
   - Solution Évolutive → Exemple Corps et Sens (collectif)
   - Diagnostic CTA → Contact

3. **Depuis page projets**:

   - Projets → Études de cas détaillées
   - Transformations → Solutions associées
   - CTA → Contact (diagnostic numérique)

4. **Depuis page processus**:

   - Phase Exploration → Diagnostic numérique
   - Garanties → Solutions
   - CTA → Contact (diagnostic numérique)

5. **Depuis page contact**:
   - Exemples de transformation → Projets
   - Solutions recommandées → Services

## Chemins de conversion principaux

1. **Parcours Diagnostic**:

   - Accueil → CTA "Réserver mon diagnostic" → Page Contact → Formulaire conversationnel → Conversation découverte

2. **Parcours Solution Présence**:

   - Accueil → Ma différence → Services → Solution Présence → Contact

3. **Parcours Transformation**:

   - Accueil → Projets mis en avant (Corps & Sens) → Étude de cas détaillée → Solutions → Contact

4. **Parcours de confiance**:
   - Accueil → Processus → Garanties → Services → Contact

Cette architecture est conçue pour:

1. Mettre en avant la triple promesse de libération, gain de temps et autonomie
2. Démontrer les transformations concrètes via des exemples chiffrés
3. Clarifier la double temporalité (compétences actuelles/futures)
4. Guider vers le Diagnostic Numérique Personnalisé comme point d'entrée privilégié
5. Renforcer le positionnement unique de "pont entre métier et technique"
