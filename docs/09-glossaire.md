---
title: "Glossaire"
category: "reference"
status: "active"
---

# Glossaire de Termes Techniques

Ce document définit la terminologie standard utilisée dans le projet IrimWebForge pour assurer une cohérence dans la documentation et le code.

## A

### Atomic Design
Méthodologie de conception qui décompose les interfaces en cinq niveaux : atomes, molécules, organismes, templates et pages.

### Atom (Atome)
Le plus petit composant indivisible dans la hiérarchie Atomic Design, comme un bouton ou une icône.

## B

### Breakpoint
Point de rupture responsive où la mise en page change en fonction de la largeur de l'écran.

## C

### Component (Composant)
Élément d'interface réutilisable qui encapsule une fonctionnalité spécifique.

### Container (Conteneur)
Composant qui définit une largeur maximale et des marges pour le contenu, assurant la cohérence de la mise en page.

### CTA (Call-to-Action)
Élément d'interface qui incite l'utilisateur à effectuer une action, généralement un bouton avec un texte d'action.

## D

### Design System
Ensemble de composants, de règles et de directives qui définissent le style et le comportement de l'interface utilisateur.

### Dark Mode
Mode d'affichage sombre, avec des couleurs inversées par rapport au mode clair.

## F

### FeatureSection
Composant qui affiche une section de fonctionnalités ou d'avantages, disponible en plusieurs variantes de mise en page.

### Footer
Pied de page du site contenant les liens de navigation secondaires et les informations légales.

## H

### Header
En-tête du site contenant le logo et la navigation principale.

### HeroSection
Grande section en haut d'une page, souvent avec une image de fond, un titre accrocheur et un CTA.

## J

### JSX
Extension de syntaxe JavaScript utilisée par React pour décrire la structure de l'interface utilisateur.

## L

### Layout
Structure de base d'une page ou d'une application qui définit l'agencement des éléments principaux.

## M

### Molecule (Molécule)
Composant qui combine plusieurs atomes pour former une unité fonctionnelle plus complexe dans la hiérarchie Atomic Design.

## N

### Next.js
Framework React utilisé pour le développement du site, qui offre le rendu côté serveur et la génération de sites statiques.

## O

### Organism (Organisme)
Composant complexe qui combine plusieurs molécules pour former une section complète dans la hiérarchie Atomic Design.

## P

### Prop
Propriété passée à un composant React pour configurer son comportement ou son apparence.

### PageHeader
Composant qui affiche l'en-tête d'une page interne, avec un titre, un sous-titre et éventuellement un fil d'Ariane.

## R

### Responsive
Conception qui s'adapte à différentes tailles d'écran et appareils.

## T

### Template
Composant qui définit la structure d'une page en combinant plusieurs organismes, sans contenu spécifique.

### Tailwind CSS
Framework CSS utilisé dans le projet pour le styling des composants.

### Token
Valeur de design (couleur, espacement, typographie) définie dans le système de design et réutilisée dans l'application.

### Typography
Composant qui gère l'affichage du texte selon la hiérarchie typographique définie.

## V

### Variant
Version alternative d'un composant avec une apparence ou un comportement différent, mais la même fonction de base.

## Conventions de nommage

- **Noms de composants** : PascalCase en anglais (ex: `Button`, `FeatureSection`)
- **Props de composants** : camelCase en anglais (ex: `onClick`, `backgroundColor`)
- **Variables CSS** : kebab-case précédées de `--` (ex: `--color-primary`)
- **Classes Tailwind** : kebab-case selon la convention Tailwind (ex: `text-primary`, `bg-white`)
- **Noms de fichiers de composants** : PascalCase en anglais (ex: `Button.tsx`, `FeatureSection.tsx`) 