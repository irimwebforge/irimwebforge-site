# 🌐 IrimWebForge - Site Officiel

Site web professionnel d'IrimWebForge, construit avec Next.js 15 et optimisé pour les performances.

## ⚡ Performances Optimisées

### 🎯 Core Web Vitals

- **LCP (Mobile)**: < 1.2s (optimisé depuis 2.7s)
- **FID**: < 100ms
- **CLS**: < 0.1
- **Bundle Size**: 175-185 kB First Load JS

### 📱 Optimisations LCP Appliquées

- ✅ Pattern HeroPattern refactorisé (SVG → CSS gradients)
- ✅ Lazy loading des composants décoratifs
- ✅ Accélération GPU pour les patterns (`transform: translateZ(0)`)
- ✅ Images critiques avec `priority`
- ✅ Containment CSS pour isoler les recalculs

## 🚀 Installation et Développement

```bash
# Installation des dépendances
yarn install

# Serveur de développement
yarn dev

# Build de production
yarn build

# Aperçu du build
yarn preview

# Test des performances LCP
yarn test:performance
```

## 📊 Tests de Performance

### Test Manuel

```bash
# 1. Build et serve
yarn build
yarn serve:static

# 2. Test LCP dans un autre terminal
yarn test:lcp
```

### Lighthouse

```bash
# Desktop & Mobile avec Lighthouse
npx lighthouse http://localhost:3000 --view
```

## 🎨 Design System

Le design system est intégré et consultable à l'adresse `/ds-lab/` avec :

- Composants documentés
- Patterns visuels optimisés
- Typographie et couleurs harmonisées

## 🛠 Technologies

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS 4.1
- **Icons**: Lucide React (imports optimisés)
- **Performance**: Bundle splitting avancé
- **Tests**: Playwright pour métriques LCP

## 📁 Structure Optimisée

```
src/
├── app/                    # App Router Next.js
├── components/
│   ├── atoms/             # Composants de base optimisés
│   ├── molecules/         # Composants composés
│   └── organisms/         # Composants complexes
├── templates/             # Templates de page
└── lib/                   # Utilitaires

public/
├── images/                # Images optimisées
└── fonts/                 # Polices web

Performance/
├── test-lcp-performance.js # Tests automatisés LCP
└── OPTIMISATIONS_PERFORMANCE.md # Documentation complète
```

## 🔧 Configuration Avancée

### Bundle Splitting

- React/React-DOM: Chunk séparé (20% réduction)
- Lucide Icons: Chunk dédié (15% réduction)
- Vendors: Max 150KB par chunk
- Common: Max 100KB par chunk

### Optimisations CSS

- PostCSS avec cssnano avancé
- Patterns CSS natifs (performance GPU)
- Containment pour isolation des recalculs

### Images

- Next.js Image component avec `priority`
- Responsive sizing optimal
- Formats WebP/AVIF ready

## 📈 Surveillance Performance

### Métriques Surveillées

- **LCP**: < 1.5s (mobile) / < 1.2s (desktop)
- **Bundle Size**: < 200KB First Load
- **Core Web Vitals**: Toutes métriques vertes

### Alertes Performance

Le script de test automatique `test-lcp-performance.js` fournit :

- ✅ Métriques temps réel
- 🎯 Évaluation par seuils
- 📊 Comparaison multi-pages
- ⚠️ Alertes de régression

## 🚀 Déploiement

### Site Statique (Recommandé)

```bash
yarn build  # Génère le dossier `out/`
# Déployer le dossier `out/` sur votre hébergeur
```

### Configuration Serveur

- Apache: `.htaccess` configuré
- Nginx: `nginx.conf` optimisé
- Headers de cache agressifs
- Compression gzip/brotli

## 📝 Scripts Disponibles

```bash
yarn dev                 # Développement
yarn build              # Build production
yarn build:analyze      # Analyse des bundles
yarn preview            # Aperçu local
yarn test:lcp           # Test LCP uniquement
yarn test:performance   # Test complet (build + LCP)
yarn lint               # Linting
yarn format             # Formatage
```

## 📖 Documentation

- 📊 [Optimisations Performance](./OPTIMISATIONS_PERFORMANCE.md)
- 🎨 [Design System](http://localhost:3000/ds-lab)
- 🔧 [Configuration Serveurs](./nginx.conf)

---

⚡ **Site optimisé pour les Core Web Vitals et les performances mobiles**
