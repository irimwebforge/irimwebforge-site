---
title: "Documentation IrimWebForge"
category: "index"
status: "active"
---

# Documentation IrimWebForge

## 🌟 Source de Vérité : DS-Lab

Le Design System Lab (`src/app/ds-lab`) est établi comme la source de vérité unique pour notre design system. Toute la documentation présente dans ce dossier doit être alignée avec les implémentations et les standards définis dans le DS-Lab.

Pour plus d'informations sur les implémentations de référence, consultez :
- Les templates validés : `/src/app/ds-lab/templates`
- Les exemples de couleur tertiaire : `/src/app/ds-lab/color-tertiary`
- Les données mockées de référence : `/src/app/ds-lab/mocks`

Bienvenue dans la documentation du projet IrimWebForge. Cette documentation contient toutes les informations nécessaires pour comprendre, développer et maintenir le site.

## Structure de la documentation

### Vision et stratégie
- [00-sitemap-revised.md](./00-sitemap-revised.md) - Plan du site révisé
- [01-positionnement-strategique.md](./01-positionnement-strategique.md) - Positionnement stratégique de la marque
- [02-offres-commerciales.md](./02-offres-commerciales.md) - Détails des offres commerciales

### Architecture et contenu
- [03-architecture-pages.md](./03-architecture-pages.md) - Architecture détaillée des pages
- [04-guide-contenu-textuel.md](./04-guide-contenu-textuel.md) - Guide du contenu textuel
- [amendement-ethique.md](./amendement-ethique.md) - Amendement éthique pour la communication

### Design system
- [Guide de style](./style/index.md) - Documentation du design system
  - [Principes généraux](./style/principles.md) - Principes fondamentaux
  - [Couleurs](./style/colors.md) - Système de couleurs
  - [Typographie](./style/typography.md) - Système typographique
  - [Espacement](./style/spacing.md) - Système d'espacement
  - [Design Responsive](./style/responsive.md) - Responsive design
  - [Composants atomiques](./style/atoms.md) - Documentation des composants de base
  - [Composants moléculaires](./style/molecules.md) - Documentation des composants intermédiaires
  - [Composants organismes](./style/organisms.md) - Documentation des sections de page

### Structure technique
- [07-structure-fichiers.md](./07-structure-fichiers.md) - Structure des fichiers du projet
- [08-workflows.md](./08-workflows.md) - Workflows de développement

### Références
- [09-glossaire.md](./09-glossaire.md) - Glossaire des termes techniques
- [10-mapping-doc-implementation.md](./10-mapping-doc-implementation.md) - Correspondance entre documentation et implémentation

## Structure du projet

Le projet IrimWebForge est composé de trois parties distinctes :

1. **App principale** - L'application centrale du site (`/src/app`)
2. **Blog** - Une section blog (non encore développée)
3. **Design System Lab (DS-Lab)** - Source de vérité pour tous les éléments de design (`/src/app/ds-lab`)

> ⚠️ **Important** : La section DS-Lab/icons est actuellement **en cours de développement**.

## Comment utiliser cette documentation

1. **Pour comprendre le projet** : Commencez par lire les documents de vision et stratégie (01 à 02)
2. **Pour développer des pages** : Consultez l'architecture des pages (03) et le guide de contenu (04)
3. **Pour créer des composants** : Référez-vous au guide de style et à la documentation des composants
4. **Pour suivre les bonnes pratiques** : Lisez les workflows de développement (08)

## Mise à jour de la documentation

Cette documentation est conçue pour évoluer avec le projet. Pour la maintenir à jour :

1. Utilisez le format YAML en-tête pour toutes les métadonnées (`title`, `category`, `status`)
2. Suivez les conventions de nommage et la terminologie du glossaire
3. Mettez à jour le mapping documentation-implémentation lorsque des composants évoluent

## Contribuer à la documentation

Pour améliorer cette documentation :

1. Identifiez les sections qui manquent de clarté ou d'exhaustivité
2. Proposez des modifications en suivant le format et la structure existants
3. Assurez-vous que les modifications sont cohérentes avec le reste de la documentation

## License

© IrimWebForge - Tous droits réservés

# Maintenir la documentation : approche flexible et vivante

## Principes de maintenance

- **Simplicité et clarté** : Privilégier des documents courts, structurés, et faciles à mettre à jour.
- **Expérimentation encouragée** : Utiliser le dossier `playground` du DS Lab pour tester de nouvelles idées sans contrainte.
- **Documentation des essais** : Toute expérimentation ou variation doit être brièvement documentée (résultat, contexte, apprentissage).
- **Intégration progressive** : Les innovations validées par l'usage ou les retours utilisateurs sont intégrées dans les guides principaux.
- **Liberté d'expression** : Les guides sont des repères, pas des carcans. Adaptez-les à vos besoins et à votre style.

## Processus recommandé

1. **Prototyper dans le playground**
   - Créez, testez, itérez sans crainte d'erreur.
2. **Documenter l'expérimentation**
   - Ajoutez une note dans le playground ou dans une section "Expérimentation" du guide concerné.
3. **Recueillir des retours**
   - Demandez des avis, testez auprès d'utilisateurs ou de pairs.
4. **Intégrer si pertinent**
   - Si l'expérimentation est concluante, intégrez-la dans le guide principal, en gardant la structure légère.

## Bonnes pratiques

- Utilisez des tags (#expérimentation, #validé, #en_test) pour suivre l'évolution des idées.
- Privilégiez la clarté et la concision dans la documentation.
- N'hésitez pas à proposer des variantes ou à remettre en question les guides existants.

Cette approche vise à garder la documentation vivante, utile et adaptée à l'évolution du projet et de l'équipe. 