# CLAUDE.md - IRIM Webforge Site

## AVANT DE CODER

**Strategie migration (dec 2025)** : Hub one-page + Blog MDX

- Hub = conversion en 10 secondes (telephone XXL)
- Blog = contenu detaille (pages existantes migrees en articles)
- Le contenu ne disparait pas, il se reorganise

**Utilise les composants existants** : `src/components/`

- Button, Badge, Card, Typography, Container, Icon
- PageHeader, CTASection, Timeline, ConversationForm
- NE PAS recoder from scratch

**Brief complet** : `cockpit/active/brief-hub.md`

---

## Vue d'ensemble du projet

Site statique Next.js 15 pour IRIM Webforge. Deploye sur VPS via rsync.

### Stack

- Next.js 15 + TypeScript + Tailwind CSS
- Design system Atomic Design dans `src/components/`
- Score Lighthouse 95+, LCP < 1.2s

## Historique Claude Code

**OUI** - Claude Code a déjà été utilisé sur ce projet :

- Commit 3117296 (Oct 9 2025) : Fix bug CSS + simplification déploiement
- Migration système déploiement : git hook → rsync
- Création scripts : deploy.sh, rollback.sh, cleanup-releases.sh
- Documentation : DEPLOYMENT.md, CHANGELOG.md

## Architecture et conformité

### Structure projet

```
irimwebforge-site/
├── src/                # Code source application
│   ├── app/           # Pages et routes Next.js
│   ├── components/    # Composants Atomic Design
│   └── styles/        # Styles globaux
├── docs/              # Documentation projet
├── public/            # Assets statiques
├── scripts/           # Scripts deploy/rollback/cleanup
├── tests/             # Tests performance et diagnostics
├── out/               # Build SSG (8MB)
└── .claude/           # Config Claude locale
```

### Conformité ADR

- ✅ ADR-000 : Structure respectée (4 sous-dossiers max)
- ✅ ADR-001 : Type 1 VPS Direct avec rsync (adapté)
- ❌ ADR-002 : Non applicable (projet existant avant ADR)

## Déploiement

### Méthode actuelle (simplifiée)

```bash
scripts/deploy.sh    # Build local + rsync vers VPS
scripts/rollback.sh  # Restauration version précédente
```

### Architecture serveur

```
/srv/www/internal/irimwebforge.com/
├── current/   # Version servie (8MB)
├── backup/    # Sauvegarde pour rollback
└── releases/  # [DEPRECATED] À nettoyer avec cleanup-releases.sh
```

### Workflow

1. Développement local
2. `npm run build` → génère `out/`
3. `scripts/deploy.sh` → rsync `out/` vers VPS
4. Nginx sert depuis `current/`

## Commandes essentielles

```bash
# Développement
npm run dev           # Dev server localhost:3000
npm run build         # Build production
npm run lint          # Vérification code

# Déploiement
scripts/deploy.sh          # Déployer nouvelle version
scripts/rollback.sh        # Revenir version précédente
scripts/cleanup-releases.sh # Nettoyer anciennes releases (12GB)

# Tests
npm test                        # Tests unitaires
node tests/test-lcp-performance.js  # Test performances

# Accès serveur
ssh vps              # Connexion VPS
```

## Points d'attention

### CSS Bug historique

- **Problème** : Hash CSS incohérent entre HTML et fichiers
- **Solution** : Ajout prop `sizes` au composant Logo
- **Fichier** : `src/components/atoms/Logo.tsx`

### Performance

- Bundle First Load JS : ~175KB
- LCP < 1.2s (critique pour UX)
- Images optimisées avec next/image
- Fonts préchargées

### SEO

- Sitemap XML automatique
- Métadonnées structurées
- Schema.org LocalBusiness
- Redirections dans nginx.conf

## Intégrité avant mission

### À vérifier

1. `git status` → Working tree clean
2. `npm run build` → Build réussi
3. Tests performances passent
4. Backup actuel sur VPS existe

### Maintenance régulière

- Nettoyer `releases/` si espace < 5GB
- Vérifier logs nginx pour 404
- Mettre à jour dépendances mensuellement
- Backup avant changements majeurs

## Contact et support

- Site : https://irimwebforge.com
- Email : contact@irimwebforge.com
- Responsable : Eric Zuber
- Téléphone : 06 78 76 45 59

## Notes Claude Code

### Conventions

- Pas d'emojis sauf demande explicite
- Préférer Edit à Write pour fichiers existants
- TodoWrite pour tâches complexes (3+ étapes)
- Commits avec signature Claude uniquement si demandé

### Permissions automatiques

- `ssh vps` et commandes associées
- `npm run build:*` et `yarn lint:*`
- Lecture fichiers SSH config
- Navigation arborescence avec tree/find
