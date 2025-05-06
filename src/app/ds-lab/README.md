# Design System Lab (DS-Lab)

Le Design System Lab est un environnement dédié au développement, à la documentation et aux tests du design system d'IrimWebForge. Ce module permet aux développeurs et designers de visualiser, interagir avec, et comprendre les différents éléments du design system dans un contexte isolé.

## 🎯 Objectif

L'objectif du DS-Lab est de :
- Fournir un environnement de développement isolé pour le design system
- Documenter visuellement tous les composants et leurs variations
- Permettre de tester les composants dans différents contextes
- Assurer la cohérence visuelle et fonctionnelle de l'interface utilisateur
- Faciliter l'adoption des standards du design system par toute l'équipe

## 📁 Structure du dossier

```
ds-lab/
├── README.md          # Documentation du DS-Lab
├── page.tsx           # Page d'accueil du DS-Lab
├── fundamentals/      # Fondamentaux du design system (couleurs, typographie)
├── icons/             # Bibliothèque d'icônes Lucide
├── components/        # Documentation des composants (Atomic Design)
├── templates/         # Démonstration des templates
├── color-tertiary/    # Utilisation de la couleur tertiaire (orange)
└── mocks/             # Données factices pour les démonstrations
```

## 📑 Sections principales

### 1. Fondamentaux
Cette section présente les éléments fondamentaux du design system :
- Palette de couleurs (primaire, secondaire, tertiaire)
- Typographie (polices, tailles, styles)
- Espacement et grille
- Ombres et élévations

### 2. Icônes
Documentation complète de la bibliothèque d'icônes Lucide intégrée au design system :
- Recherche et navigation par catégories
- Exemples d'utilisation et de personnalisation
- Guide d'intégration des icônes dans les composants

### 3. Atomic Design
Présentation des composants suivant la méthodologie Atomic Design :
- **Atomes** : boutons, badges, icônes, typographie, etc.
- **Molécules** : formulaires, cartes, bannières, etc.
- **Organismes** : headers, footers, sections complexes, etc.

### 4. Templates
Démonstration des templates prédéfinis avec des données mock :
- Pages standards
- Layouts réutilisables
- Composants de page assemblés

### 5. Couleur Tertiaire
Documentation sur l'utilisation de la couleur tertiaire (orange) :
- Règles d'utilisation
- Exemples d'accentuation
- Accessibilité et contraste

### 6. Mocks
Documentation des données factices utilisées dans les démonstrations :
- Structure et format des données
- Utilisation dans les composants
- Exemples d'intégration

## 🚀 Comment utiliser

1. **Navigation** : Utilisez la page d'accueil pour naviguer entre les différentes sections
2. **Exploration** : Explorez chaque section pour comprendre les standards du design system
3. **Test** : Utilisez les composants interactifs pour tester leur comportement et apparence
4. **Copie** : Copiez le code des composants directement depuis la documentation

## ⚙️ Développement

Pour contribuer au DS-Lab :

1. Ajoutez de nouveaux composants dans leurs catégories appropriées
2. Respectez la structure existante pour maintenir la cohérence
3. Documentez tous les composants avec leurs propriétés et variations
4. Assurez-vous que tous les exemples sont fonctionnels

## 🔍 Remarques

- Le DS-Lab est uniquement un environnement de développement et n'est pas accessible aux utilisateurs finaux
- Tous les changements dans le design system doivent être testés dans le DS-Lab avant d'être déployés dans l'application principale
- Le DS-Lab évolue en parallèle du design system - assurez-vous de maintenir les deux synchronisés

---

© IrimWebForge - Documentation interne
