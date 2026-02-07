#!/bin/bash
set -e

PORTFOLIO_DIR="$(cd "$(dirname "$0")" && pwd)"
GITHUB_IO_DIR="$(cd "$PORTFOLIO_DIR/../abinovarghese.github.io" && pwd)"
BACKUP_DIR="$GITHUB_IO_DIR/_backup/$(date +%Y%m%d_%H%M%S)"
BUILD_OUTPUT="$PORTFOLIO_DIR/dist/portfolio/browser"

echo "=== Portfolio Deploy Script ==="
echo ""
echo "Portfolio:  $PORTFOLIO_DIR"
echo "GitHub IO:  $GITHUB_IO_DIR"
echo "Backup:     $BACKUP_DIR"
echo ""

# Step 1: Build the project
echo "[1/3] Building Angular project (production)..."
cd "$PORTFOLIO_DIR"
npx ng build --configuration=production
echo "Build complete."
echo ""

# Verify build output exists
if [ ! -d "$BUILD_OUTPUT" ]; then
  echo "ERROR: Build output not found at $BUILD_OUTPUT"
  echo "Checking dist structure..."
  ls -R "$PORTFOLIO_DIR/dist/portfolio/" 2>/dev/null || echo "No dist/portfolio found"
  exit 1
fi

# Step 2: Backup current github.io contents
echo "[2/3] Backing up current site to $BACKUP_DIR..."
mkdir -p "$BACKUP_DIR"

# Move everything except .git and _backup
cd "$GITHUB_IO_DIR"
for item in *; do
  if [ "$item" != "_backup" ] && [ "$item" != ".git" ]; then
    mv "$item" "$BACKUP_DIR/"
  fi
done

# Also handle hidden files (except .git, .gitignore, .nojekyll)
for item in .[!.]*; do
  if [ "$item" != ".git" ] && [ "$item" != ".gitignore" ] && [ "$item" != ".nojekyll" ] && [ -e "$item" ]; then
    mv "$item" "$BACKUP_DIR/"
  fi
done

echo "Backup complete."
echo ""

# Step 3: Copy build files to github.io
echo "[3/3] Deploying build files..."
cp -R "$BUILD_OUTPUT"/* "$GITHUB_IO_DIR/"

# Add .nojekyll to prevent GitHub Pages from ignoring files starting with _
touch "$GITHUB_IO_DIR/.nojekyll"

echo ""
echo "=== Deploy Complete ==="
echo ""
echo "Files deployed to: $GITHUB_IO_DIR"
echo "Backup saved to:   $BACKUP_DIR"
echo ""
echo "Next steps:"
echo "  cd $GITHUB_IO_DIR"
echo "  git add -A"
echo "  git commit -m 'Deploy portfolio update'"
echo "  git push"
