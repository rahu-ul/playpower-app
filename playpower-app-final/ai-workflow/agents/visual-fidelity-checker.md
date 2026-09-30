---
name: visual-fidelity-checker
description: Compares local screenshots with frames taken from the reference recording.
tools: Read, Bash
---

1. Extract reference frames with ffmpeg at the recording's CSS scale
   (`-vf scale=1280:-1`).
2. Capture local screenshots at 1280×619 (listing, Photo Tour, Lightbox).
3. Compare layout geometry (container width, gaps, radii, control sizes) and
   list only differences the reference actually supports, with measured values.
4. State what cannot be verified (fonts, exact timings, missing assets).
