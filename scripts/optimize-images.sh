#!/bin/bash
set -e

# Script d'optimisation des images pour IRIM Webforge
# Convertit les grosses images JPG en WebP optimisé

echo "🖼️  Optimisation des images IRIM Webforge"
echo "=========================================="

# Vérifier les dépendances
check_dependencies() {
  if ! command -v cwebp &> /dev/null; then
    echo "❌ cwebp n'est pas installé"
    echo "📦 Installation : brew install webp (Mac) ou apt-get install webp (Linux)"
    exit 1
  fi

  if ! command -v convert &> /dev/null; then
    echo "⚠️  ImageMagick non installé (optionnel pour resize)"
    echo "📦 Installation : brew install imagemagick"
  fi
}

# Créer un backup
backup_images() {
  echo "💾 Création du backup..."
  if [ ! -d "public/images/projects/backup" ]; then
    mkdir -p public/images/projects/backup
    cp public/images/projects/*.jpg public/images/projects/backup/ 2>/dev/null || true
    cp public/images/projects/*.png public/images/projects/backup/ 2>/dev/null || true
    echo "✅ Backup créé dans public/images/projects/backup/"
  else
    echo "⚠️  Backup existe déjà, skip"
  fi
}

# Optimiser une image
optimize_image() {
  local input=$1
  local output=${input%.*}.webp
  local size_before=$(du -h "$input" | cut -f1)

  echo "🔄 Conversion : $(basename $input)"

  # Conversion WebP avec qualité optimale
  cwebp -q 85 -m 6 -mt "$input" -o "$output" 2>/dev/null

  local size_after=$(du -h "$output" | cut -f1)
  echo "   ✅ $size_before → $size_after"
}

# Images prioritaires à optimiser
PRIORITY_IMAGES=(
  "public/images/projects/moodcycle.jpg"
  "public/images/projects/corps-et-sens.jpg"
  "public/images/projects/cbd-site.jpg"
  "public/images/projects/corps-et-sens-detail.png"
)

# Main
check_dependencies
backup_images

echo ""
echo "🎯 Optimisation des images prioritaires (>380KB)"
echo "------------------------------------------------"

for img in "${PRIORITY_IMAGES[@]}"; do
  if [ -f "$img" ]; then
    optimize_image "$img"
  fi
done

echo ""
echo "📊 Autres images JPG/PNG à considérer :"
echo "---------------------------------------"

# Lister les autres JPG/PNG
find public/images -type f \( -name "*.jpg" -o -name "*.png" \) \
  -not -path "*/backup/*" \
  -exec ls -lh {} \; | awk '{print $5 "\t" $9}' | sort -rh | head -10

echo ""
echo "✨ Optimisation terminée !"
echo ""
echo "⚠️  IMPORTANT : Après conversion, modifier le code :"
echo "1. Mettre à jour les imports dans src/app/(main)/projets/client.tsx"
echo "2. Remplacer .jpg par .webp pour ces images :"
echo "   - moodcycle.jpg → moodcycle.webp"
echo "   - corps-et-sens.jpg → corps-et-sens.webp"
echo "   - cbd-site.jpg → cbd-site.webp"
echo ""
echo "3. Tester : npm run dev && open http://localhost:3000/projets/"
echo "4. Déployer : ./deploy.sh"