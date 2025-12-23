#!/bin/bash
cd /Users/towy/Documents/ARGiT/airreps

LOCALES="pt es da fr"
DIRS="introduction version-info ordering links troubleshooting"

for locale in $LOCALES; do
  echo "Processing locale: $locale"
  
  # Copy top-level files
  for f in index.md contributing.md useful-apps.md; do
    if [ -f "docs/$f" ]; then
      {
        echo "---"
        echo "translationStatus: needs-translation"
        echo "---"
        echo ""
        echo "<!-- 🌐 This page needs translation from English -->"
        echo ""
        cat "docs/$f"
      } > "docs/$locale/$f"
      echo "  Created: docs/$locale/$f"
    fi
  done
  
  # Copy directory contents
  for dir in $DIRS; do
    if [ -d "docs/$dir" ]; then
      for f in docs/$dir/*.md; do
        if [ -f "$f" ]; then
          fname=$(basename "$f")
          {
            echo "---"
            echo "translationStatus: needs-translation"
            echo "---"
            echo ""
            echo "<!-- 🌐 This page needs translation from English -->"
            echo ""
            cat "$f"
          } > "docs/$locale/$dir/$fname"
          echo "  Created: docs/$locale/$dir/$fname"
        fi
      done
    fi
  done
done

echo ""
echo "✅ Done! Created placeholder content for all locales."
