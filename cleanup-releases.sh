#!/bin/bash
set -e

# Script de nettoyage des anciennes releases (libère ~12GB)

echo "🧹 Nettoyage des anciennes releases"
echo "================================"

REMOTE_HOST="vps"
REMOTE_PATH="/srv/www/internal/irimwebforge.com"

echo "⚠️  Ceci va supprimer toutes les anciennes releases (~12GB)"
read -p "Continuer ? (y/N) " -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]; then
  ssh $REMOTE_HOST "
    # Supprimer toutes les releases
    rm -rf $REMOTE_PATH/releases

    # Afficher l'espace libéré
    echo '✅ Anciennes releases supprimées'
    echo '💾 Espace disque:'
    df -h /srv/www/internal/irimwebforge.com/
  "
  echo "✨ Nettoyage terminé !"
else
  echo "❌ Annulé"
fi
