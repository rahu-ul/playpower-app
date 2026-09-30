---
name: visual-diff
description: Capture consistent screenshots of the listing, Photo Tour and Lightbox for comparison with the reference.
---

# Visual diff workflow

```bash
npm run build && npx vite preview --port 4173 &
python3 scripts/capture.py   # writes screenshots to ./screenshots
```

Viewport: 1280x619. Capture: listing, listing scrolled, Photo Tour (top),
Lightbox, Lightbox next photo. Compare against frames extracted from the
reference recording; never copy code from the reference.
