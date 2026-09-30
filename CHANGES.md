# Correction pass — changes

Evidence: frames from the supplied screen recording (≈1280×619 CSS viewport).

## Behaviour / accessibility
- `useFocusTrap`: only the top-most overlay handles Tab/Escape (Escape in the
  Lightbox previously closed the Photo Tour underneath and left the Lightbox open).
- `useFocusTrap`: `onClose` is read via a ref, so re-renders (e.g. arrow-key
  navigation) no longer re-run the effect and pull focus out of the dialog.
- Focus is restored once, on close, to the element that opened the overlay.
- "Show all photos" opens the Photo Tour at the top; hero tiles jump to their category.
- `prefers-reduced-motion` disables overlay animations.

## Visual
- Lightbox: counter reads "N of M"; image fills the stage (top ≈73px); 33px
  outlined circular arrows ≈17px from the edges; dotted-grid icon; 60px top bar.
- Photo Tour: thumbnail strip scrolls with the page and wraps left-aligned;
  815px content column (text | 383px image column); 26px titles; 4px image radius;
  removed the floating grid button (not in the reference).
- Hero gallery: 935:411 aspect ratio, 7px gaps, 12px radius, smaller
  "Show all photos" control with dotted-grid icon.

## Not changed / cannot be verified
See the final report: missing photo set (12 vs 43), typography (Airbnb Cereal
is not available), header/search-pill sizing, and animation timings.
