# Guide de style IRIM Webforge

## Structure du projet

Le projet IRIM Webforge est composé de trois parties distinctes :

1. **App principale** - L'application centrale du site (`/src/app`)
2. **Blog** - Une section blog (non encore développée)
3. **Design System Lab (DS-Lab)** - Source de vérité pour tous les éléments de design (`/src/app/ds-lab`)

> ⚠️ **Important** : Le Design System Lab (`/src/app/ds-lab`) est établi comme la **source de vérité unique** pour notre design system. Toute modification du design system doit d'abord être développée et testée dans le DS-Lab.

### Sections du DS-Lab

| Section                                       | Description                                             | Statut               |
| --------------------------------------------- | ------------------------------------------------------- | -------------------- |
| [Fondamentaux](/src/app/ds-lab/fundamentals/) | Couleurs, typographie, et fondamentaux du design system | Développé            |
| [Composants](/src/app/ds-lab/components/)     | Bibliothèque de composants (atomic design)              | Développé            |
| [Templates](/src/app/ds-lab/templates/)       | Modèles de pages et sections réutilisables              | Développé            |
| [Icônes](/src/app/ds-lab/icons/)              | Bibliothèque d'icônes intégrée                          | **En développement** |

## Guide de documentation

Cette documentation est organisée par thèmes pour faciliter la consultation :

### Fondamentaux

- [Principes généraux](./principles.md) - Principes fondamentaux de notre design system
- [Couleurs](./colors.md) - Palette de couleurs et utilisation
- [Typographie](./typography.md) - Système typographique et hiérarchie textuelle
- [Espacement](./spacing.md) - Système d'espacement et mise en page
- [Responsive](./responsive.md) - Principes et implémentation du responsive design

### Composants

- [Atomic Design](./atomic-design.md) - Présentation de notre architecture de composants
- [Atomes](./atoms.md) - Composants de base indivisibles
- [Molécules](./molecules.md) - Combinaisons d'atomes
- [Organismes](./organisms.md) - Sections complètes de l'interface

## Principes de maintenance

Pour maintenir cette documentation à jour :

1. **Éviter les redondances** - Chaque information doit exister à un seul endroit
2. **Référencer plutôt que dupliquer** - Utiliser des liens vers d'autres parties de la documentation
3. **Valider avec le DS-Lab** - En cas de doute, se référer à l'implémentation dans le DS-Lab
4. **Documenter les changements** - Mettre à jour la documentation lors de modifications du design system

## Expérimentation et innovation

Le design system n'est pas statique. Pour proposer des améliorations :

1. Utilisez le dossier `/src/app/ds-lab/playground/` pour expérimenter
2. Documentez vos innovations et les résultats obtenus
3. Proposez l'intégration des éléments validés dans le design system principal

---

> 🔍 **Pour plus de détails techniques** sur l'implémentation des composants et du design system, consultez directement les fichiers dans `/src/app/ds-lab/`.
