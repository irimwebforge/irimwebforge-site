#!/bin/bash
set -e

# Script de déploiement simplifié pour irimwebforge.com
# Build en local, upload seulement le dossier out/ (8MB au lieu de 700MB)

echo "🚀 Déploiement IRIM Webforge"
echo "================================"

# Variables
REMOTE_HOST="vps"
REMOTE_PATH="/srv/www/internal/irimwebforge.com"
BACKUP_PATH="$REMOTE_PATH/backup"
CURRENT_PATH="$REMOTE_PATH/current"

# 1. Build local
echo "📦 Build de l'application..."
npm run build

# 2. Créer un backup de la version actuelle
echo "💾 Sauvegarde de la version actuelle..."
ssh $REMOTE_HOST "
  if [ -d $CURRENT_PATH ]; then
    rm -rf $BACKUP_PATH
    cp -r $CURRENT_PATH $BACKUP_PATH
    echo '✅ Backup créé'
  fi
"

# 3. Sync du dossier out/ vers le serveur
echo "📤 Upload des fichiers (rsync)..."
rsync -avz --delete \
  --exclude='*.map' \
  --exclude='*.txt' \
  out/ $REMOTE_HOST:$CURRENT_PATH/

# 4. Vérification
echo "🔍 Vérification du déploiement..."
ssh $REMOTE_HOST "
  if [ -f $CURRENT_PATH/index.html ]; then
    echo '✅ Fichiers déployés avec succès'
    echo '📊 Taille: \$(du -sh $CURRENT_PATH | cut -f1)'
  else
    echo '❌ Erreur: index.html introuvable'
    exit 1
  fi
"

echo ""
echo "✨ Déploiement terminé avec succès !"
echo "🌐 Site: https://irimwebforge.com"
echo ""
echo "💡 Pour revenir en arrière: ./rollback.sh"
