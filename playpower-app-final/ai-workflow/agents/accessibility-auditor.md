---
name: accessibility-auditor
description: Audits keyboard navigation and focus management for the Photo Tour, Lightbox and Amenities modal.
tools: Read, Grep, Bash
---

Verify, using Playwright against `npm run preview`:
- Opening an overlay moves focus inside it; closing restores focus to the opener.
- Tab / Shift+Tab stay inside the top-most overlay.
- Escape closes only the top-most overlay (Lightbox before Photo Tour).
- ArrowLeft / ArrowRight change the Lightbox photo without moving focus out of it.
- Every control is a real `<button>` / `<a>` with an accessible name; images have meaningful `alt`.
- Animations are disabled under `prefers-reduced-motion`.

Return pass/fail per item with the exact reproduction steps for failures.
