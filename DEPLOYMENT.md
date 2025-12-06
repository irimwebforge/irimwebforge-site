# 🚀 Guide de Déploiement

## Vue d'ensemble

Le site irimwebforge.com utilise un déploiement statique simplifié avec rsync.
Les fichiers sont buildés en local puis synchronisés sur le serveur.

## Architecture

```
/srv/www/internal/irimwebforge.com/
├── current/          # Version actuellement servie par Nginx (8MB)
├── backup/           # Backup de la version précédente (pour rollback)
└── releases/         # [DEPRECATED] Anciennes releases à nettoyer
```

## Prérequis

- Accès SSH au serveur configuré (`ssh vps`)
- Node.js et npm/yarn installés en local
- rsync installé

## Déploiement

### Méthode Simple (Recommandée)

```bash
# Déployer la nouvelle version
./deploy.sh
```

Ce script :

1. ✅ Build l'application en local (`npm run build`)
2. 💾 Sauvegarde la version actuelle dans `backup/`
3. 📤 Synchronise le dossier `out/` vers `current/`
4. 🔍 Vérifie que le déploiement a réussi

**Avantages** :

- ⚡ Rapide (seulement 8MB uploadés au lieu de 700MB)
- 💾 Économise ~12GB d'espace disque
- 🎯 Simple et fiable

### Rollback

En cas de problème :

```bash
./rollback.sh
```

Restaure instantanément la version précédente depuis le backup.

## Nettoyage

### Supprimer les anciennes releases

Les anciennes releases (système précédent) prennent ~12GB. Pour les nettoyer :

```bash
./cleanup-releases.sh
```

⚠️ **Note** : Ce script supprime le dossier `/srv/www/internal/irimwebforge.com/releases/` contenant 17 anciennes releases.

## Ancien Système (Deprecated)

L'ancien système utilisait un git hook `post-receive` qui :

- Clonait tout le repo sur le serveur
- Installait les node_modules (700MB)
- Buildait sur le serveur
- Créait une nouvelle release à chaque déploiement

**Problèmes** :

- ❌ 700MB stockés par release (au lieu de 8MB)
- ❌ 17 releases = 12GB gaspillés
- ❌ Build sur le serveur (charge CPU)
- ❌ Pas de vérification avant déploiement

**Migration** :

1. Utiliser `./deploy.sh` pour les prochains déploiements
2. Lancer `./cleanup-releases.sh` pour libérer l'espace

## Configuration Nginx

Le serveur pointe vers :

```nginx
root /srv/www/internal/irimwebforge.com/current;
```

Voir `nginx.conf` pour la configuration complète.

## Dépannage

### Le CSS ne charge pas

- Vérifier que tous les fichiers du dossier `out/` sont bien synchronisés
- Le build local doit être cohérent (même hash CSS dans HTML et fichiers CSS)
- Solution : Re-déployer avec `./deploy.sh`

### Espace disque plein

```bash
# Vérifier l'utilisation
ssh vps "df -h /"

# Nettoyer les anciennes releases
./cleanup-releases.sh
```

### Vérifier la version déployée

```bash
ssh vps "ls -lh /srv/www/internal/irimwebforge.com/current/"
```

## Sécurité

- Les scripts utilisent `set -e` (arrêt en cas d'erreur)
- Un backup est toujours créé avant déploiement
- Le rollback est instantané

## Performance

**Nouveau système** :

- Upload : ~8MB
- Temps : ~2-3 secondes
- Pas de build serveur

**Ancien système** :

- Upload : ~700MB
- Temps : ~3-5 minutes
- Build serveur (charge CPU)

---

💡 **Bonne pratique** : Toujours tester le build en local avant de déployer.
