#!/bin/bash
set -e

# Script de rollback - restaure la version précédente

echo "⏮️  Rollback IRIM Webforge"
echo "================================"

REMOTE_HOST="vps"
REMOTE_PATH="/srv/www/internal/irimwebforge.com"
BACKUP_PATH="$REMOTE_PATH/backup"
CURRENT_PATH="$REMOTE_PATH/current"

ssh $REMOTE_HOST "
  if [ -d $BACKUP_PATH ]; then
    rm -rf $CURRENT_PATH
    cp -r $BACKUP_PATH $CURRENT_PATH
    echo '✅ Version précédente restaurée'
  else
    echo '❌ Aucun backup disponible'
    exit 1
  fi
"

echo "✨ Rollback terminé !"
