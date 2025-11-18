# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [Non publié]

### Ajouté

- Documentation de déploiement (`DEPLOYMENT.md`)
- Script de déploiement simplifié (`deploy.sh`)
- Script de rollback (`rollback.sh`)
- Script de nettoyage des anciennes releases (`cleanup-releases.sh`)
- Script d'optimisation des images (`optimize-images.sh`)
- Documentation Claude Code (`CLAUDE.md`)
- Ce fichier CHANGELOG.md

### Optimisé

- **Images des projets converties en WebP** : Réduction de 72% du poids
  - `moodcycle.jpg` : 537KB → 68KB (-87%)
  - `corps-et-sens.jpg` : 409KB → 230KB (-44%)
  - `cbd-site.jpg` : 380KB → 60KB (-84%)
  - `corps-et-sens-detail.png` : 220KB → 69KB (-69%)
  - **Impact** : 1.1MB économisés, amélioration significative du temps de chargement sur mobile
  - **Fichiers modifiés** : `src/app/(main)/projets/client.tsx`

### Corrigé

- **Bug CSS critique** : Les pages mentions-légales et politique-confidentialité ne chargeaient pas le CSS
  - **Cause** : Incohérence entre le hash CSS référencé dans le HTML (`fd0ed08bcd9a54aa.css`) et le fichier CSS disponible (`eaef4767d9338a4f.css`)
  - **Solution** : Ajout de la prop `sizes` au composant `Logo` pour éviter les incohérences de build Next.js
  - Fichier modifié : `src/components/atoms/Logo.tsx`

### Modifié

- Système de déploiement migré de git-hook vers rsync
  - Ancien : Build sur serveur, 700MB par release, 17 releases = 12GB
  - Nouveau : Build local, 8MB déployés, 1 backup
  - Gain : ~12GB d'espace disque, déploiement 50x plus rapide

### Déprécié

- Git hook `post-receive` pour déploiement (voir `DEPLOYMENT.md` pour la migration)

---

## [1.0.0] - 2025-05-28

Version initiale du site IRIM Webforge déployée en production.

### Caractéristiques principales

- Site statique Next.js 15 avec génération SSG
- Design system complet avec Atomic Design
- Optimisations Core Web Vitals (LCP < 1.2s)
- Bundle splitting avancé (~175KB First Load JS)
- Tailwind CSS 4.1
- Formulaires de contact et diagnostic
- Pages de services, projets, à propos
- Design responsive et accessible (WCAG 2.1 AA)

### Performance

- LCP Mobile : < 1.2s
- FID : < 100ms
- CLS : < 0.1
- Score Lighthouse : 95+

### SEO

- Sitemap XML automatique
- Métadonnées optimisées
- Schema.org LocalBusiness
- Robots.txt configuré

---

## Format des versions

- **[Non publié]** : Changements en développement, pas encore déployés
- **[X.Y.Z]** : Version déployée avec date

### Types de changements

- **Ajouté** : Nouvelles fonctionnalités
- **Modifié** : Changements de fonctionnalités existantes
- **Déprécié** : Fonctionnalités bientôt supprimées
- **Supprimé** : Fonctionnalités supprimées
- **Corrigé** : Corrections de bugs
- **Sécurité** : Corrections de vulnérabilités
