# Principes fondamentaux du Design System

> Ce document présente les principes fondamentaux de notre design system. Pour les détails d'implémentation spécifiques, consultez les autres sections de la [documentation du style](./index.md).

## 🎯 Principes clés

1. **Simplicité avant tout**
   - Utiliser les composants du DS Lab (`src/app/ds-lab`) comme référence
   - En cas de doute, privilégier la solution la plus simple
   - Expérimenter dans le DS Lab avant d'implémenter en production

2. **Design System vivant**
   - Le dossier `src/app/ds-lab/playground/` est dédié aux expérimentations
   - Les meilleures innovations seront intégrées au design system
   - Documentation et tests sont partie intégrante du processus

3. **Flexibilité contrôlée**
   - Base stricte + possibilité d'adaptations contextuelles
   - Adapter plutôt que créer de nouveaux éléments
   - Documenter les modifications et extensions

## 🎨 Fondamentaux

Notre design system s'articule autour de ces fondamentaux :

### Couleurs

- **Palette principale** : Turquoise (#00B3B3) + Bleu (#004466) + Orange (#F06424)
- **Hiérarchie visuelle** : Dégradé pour CTA, turquoise pour actions principales, orange pour accentuation
- **Application** : Utiliser l'orange avec parcimonie pour maintenir son impact

_Pour plus de détails, consultez la [documentation des couleurs](./colors.md)_

### Typographie

- **Primaire** : Noto Sans pour les titres (italique gras pour h1/h2)
- **Secondaire** : Questrial pour le texte courant
- **Hiérarchie** : Titres expressifs + texte lisible

_Pour plus de détails, consultez la [documentation typographique](./typography.md)_

### Composants

- Architecture Atomic Design (atomes, molécules, organismes, templates)
- Composants réutilisables et adaptatifs
- Styles cohérents à travers l'application

_Pour plus de détails, consultez la [documentation des composants](./atomic-design.md)_

## 🚀 Process d'innovation

1. **Idée nouvelle ?**
   - Expérimenter dans le playground du DS Lab
   - Documenter l'approche et les résultats
   - Partager avec l'équipe

2. **Validation**
   - Tests utilisateurs
   - Retours d'expérience
   - Intégration progressive

3. **Documentation**
   - Mettre à jour la documentation
   - Créer des exemples d'utilisation
   - Partager les bonnes pratiques

## Checklist d'implémentation

Avant d'intégrer un nouvel élément au design system, vérifiez :

- [ ] Cohérence avec les principes existants
- [ ] Tests sur différentes tailles d'écran
- [ ] Accessibilité (contraste, navigation clavier)
- [ ] Documentation des props et variantes
- [ ] Exemples d'utilisation
- [ ] Validation par l'équipe

---

> 💡 **Rappel** : Le Design System Lab (`src/app/ds-lab`) est la source de vérité pour tous les éléments de design. En cas de doute, référez-vous toujours à ces implémentations.
