# Sitemap IrimWebForge

Ce document présente l'architecture complète du site IrimWebForge, avec la hiérarchie des pages et leur organisation.

## Hiérarchie des pages

```
IrimWebForge
├── Accueil
│   ├── Hero
│   ├── Proposition de valeur
│   ├── Projets mis en avant
│   ├── Témoignage principal
│   ├── Aperçu des services
│   └── CTA Contact
│
├── Services
│   ├── Vue d'ensemble
│   ├── Sites web personnalisés
│   │   ├── Description
│   │   ├── Processus
│   │   ├── Exemples
│   │   └── Tarifs
│   │
│   ├── Applications sur mesure
│   │   ├── Description
│   │   ├── Processus
│   │   ├── Exemples
│   │   └── Tarifs
│   │
│   ├── Interfaces admin
│   │   ├── Description
│   │   ├── Avantages
│   │   └── Vision
│   │
│   └── Forfaits d'accompagnement
│       ├── Expertise à la demande
│       ├── Forfait Sérénité
│       ├── Forfait Évolution
│       └── Programme Premiers Partenaires
│
├── Projets
│   ├── Liste des projets
│   │   ├── Filtres par type
│   │   └── Grille de projets
│   │
│   ├── Études de cas
│   │   ├── Mr&Mrs CBD
│   │   ├── Echo des Rêves
│   │   ├── MoodCycle
│   │   └── [Projets de formation]
│   │
│   └── Technologies maîtrisées
│
├── Processus
│   ├── Vue d'ensemble
│   ├── Phase 1: Exploration
│   ├── Phase 2: Immersion
│   ├── Phase 3: Développement
│   ├── Phase 4: Validation
│   ├── Phase 5: Livraison
│   ├── Phase 6: Accompagnement
│   └── Garanties
│
├── À propos
│   ├── Parcours
│   ├── Valeurs
│   ├── Compétences
│   └── Vision
│
├── Contact
│   ├── Formulaire de contact
│   ├── Informations directes
│   └── Processus après contact
│
└── Blog (futur)
    ├── Articles par catégorie
    ├── Ressources téléchargeables
    └── Newsletter
```

## Routes du site

| Route | Description | Priorité |
|-------|-------------|----------|
| `/` | Page d'accueil | CRITIQUE |
| `/services` | Vue d'ensemble des services | ÉLEVÉE |
| `/services/sites-web` | Détail services sites web | MOYENNE |
| `/services/applications` | Détail services applications | MOYENNE |
| `/services/interfaces-admin` | Détail services interfaces admin | MOYENNE |
| `/services/forfaits` | Forfaits d'accompagnement | ÉLEVÉE |
| `/projets` | Liste des projets | ÉLEVÉE |
| `/projets/[slug]` | Page détaillée d'un projet | ÉLEVÉE |
| `/processus` | Processus de travail | MOYENNE |
| `/a-propos` | À propos d'Eric Zuber | MOYENNE |
| `/contact` | Page de contact | CRITIQUE |
| `/blog` | Blog et ressources (futur) | BASSE |
| `/blog/[slug]` | Article de blog individuel | BASSE |
| `/ressources` | Ressources téléchargeables | BASSE |
| `/mentions-legales` | Mentions légales | BASSE |
| `/politique-confidentialite` | Politique de confidentialité | BASSE |

## Navigation principale

- **Logo** → Accueil
- **Services** → Services (menu déroulant)
  - Sites web personnalisés
  - Applications sur mesure
  - Interfaces admin
  - Forfaits d'accompagnement
- **Projets** → Projets
- **Processus** → Processus
- **À propos** → À propos
- **Contact** → Contact
- **Bouton CTA** → "Discutons de votre projet" → Contact

## Navigation secondaire (footer)

- **Services**
  - Sites web personnalisés
  - Applications sur mesure
  - Interfaces admin
  - Forfaits d'accompagnement
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
   - Hero CTA → Contact (consultation gratuite)
   - Projets mis en avant → Pages projets individuels
   - Services → Page services
   - Témoignage → Projet concerné

2. **Depuis page services**:
   - Exemples de réalisations → Projets spécifiques
   - CTA → Contact

3. **Depuis page projets**:
   - Étude de cas → Service correspondant
   - CTA → Contact (projet similaire)

4. **Depuis page processus**:
   - Phases → Services correspondants
   - Garanties → À propos (crédibilité)
   - CTA → Contact

Cette architecture est conçue pour:
1. Présenter clairement l'offre de services
2. Mettre en valeur les projets comme preuves de compétence
3. Expliquer le processus pour rassurer le prospect
4. Faciliter la prise de contact à chaque étape
5. Soutenir un parcours utilisateur logique vers la conversion