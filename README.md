# PlayPower Reference Build — Romantic Jacuzzi 1BHK Candolim

A React + Vite recreation of the Airbnb-style listing page shown in the supplied
reference video/screenshots. Built from the evidence in
`PlayPower_Video_Evidence_Report.md` and the 22-frame reference PDF/zip.

## Run it

```bash
npm install
npm run dev       # dev server, http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # serve the production build
```

## What's implemented

- **Header** — logo, pill search bar (Anywhere / Anytime / Add guests), Become a
  host, globe, menu, sticky on scroll.
- **Hero gallery** — 5-image mosaic (1 large + 2x2 grid) with rounded corners,
  "Show all photos" control, opens the Photo Tour.
- **Photo Tour** — full-screen view with a category thumbnail strip (Living room 1,
  Living room 2, Full kitchen, Bedroom, Full bathroom, Gym, Exterior, Pool,
  Additional photos), each category showing its title/amenity subtitle and
  images; clicking an image opens the Lightbox.
- **Lightbox** — large-image state with prev/next arrows, close, and an
  "N of 43" counter; supports Escape to close and left/right arrow keys to
  navigate.
- **Sticky in-page nav** — Photos / Amenities / Reviews / Location tabs plus a
  persistent price/rating summary and Reserve button, stuck under the header
  while scrolling.
- **Listing details** — title, type/guest summary, Guest Favourite card
  (4.95, 19 reviews), host row, highlights (Outdoor entertainment / Designed
  for staying cool / Self check-in), description with the "automatically
  translated / Show original" banner and show more/less, sleeping arrangements.
- **Amenities** — highlighted grid (with the struck-through "Carbon monoxide
  alarm" exactly as observed) plus a "Show all 50 amenities" modal,
  categorized (Bathroom, Bedroom and laundry, etc.), Escape-to-close, backdrop
  click to close, scroll lock while open.
- **Calendar** — two-month view defaulting to October/November 2026 (as shown
  in the recording), click-to-select a date range, selected range styling,
  Clear dates, prev/next month arrows.
- **Reviews** — 4.95 Guest Favourite header, per-category rating bars,
  review-topic chips (Comfort, Accuracy, Hot tub, etc.), a two-column grid of
  the actual reviewer names/text from the recording, show more/less per
  review, and "Show all 19 reviews".
- **Location** — stylized original SVG map (no external map API, per the
  brief) with a pin, zoom controls, exact-location notice, and neighbourhood
  highlights.
- **Host section** — Mirashya Homes card (1,463 reviews, 4.68), co-hosts
  (Sharath, Aman Dev Pahwa, Maria Karen Priyanka).
- **Policies** — Cancellation / House rules / Safety & property, three-column
  layout with the exact text observed.
- **Nearby stays** — scrollable carousel with prev/next controls and a page
  indicator (1/2).
- **Footer**.

## Real assets used

Property photos (living room, kitchen, pool, bedroom, bathroom, gym, hero
mosaic tiles) were cropped directly from full-resolution frames of the
supplied reference recording, not re-drawn or substituted, so the visuals
match the actual property. They live in `src/assets/photos/`.

Nearby-stay cards intentionally use plain gradient placeholders rather than
another property's real photos, since those images belong to unrelated
listings, not this reference property.

## Data

All listing content (price, dates, host stats, amenities, reviews, policies,
etc.) is centralized in `src/data/listing.js` for easy editing.

## Evidence-supported deviations / things that could not be determined

- **Map**: the brief explicitly allows an original visual in place of a real
  map API. Implemented as an inline SVG, not Google/Mapbox.
- **Nearby stay images**: replaced with gradients (see above) rather than
  reusing another listing's photography.
- **Exact amenity list beyond the modal's visible rows**: the recording shows
  a partial scroll of the amenities modal. Categories/items not fully visible
  on-screen were filled in only where a reasonable, visibly-consistent
  amenity was already named elsewhere in the evidence (e.g. Wifi, TV from the
  Bedroom/Living-room subtitles). No invented hidden functionality.
- **Exact CSS pixel values, fonts, and hex colors**: not observable frame-by-
  frame at full precision from a screen recording, so implemented as the
  closest reasonable match (system font stack, Airbnb-style pink #E00B5D,
  standard 8/12/16/24px radii).
- **Guest count control**: the guests field is present in the booking card but
  not wired to an interactive stepper, since the recording does not
  demonstrate that interaction in detail.

## Remaining items for a follow-up engineering pass

- Full keyboard focus-trapping inside the Photo Tour/Lightbox/Amenities modal
  (Escape-to-close and initial focus are implemented; a complete trap that
  cycles Tab within the modal is not yet added).
- Scroll-spy to auto-highlight the active sticky-nav tab as the user scrolls
  (currently highlights only on click).
- Mobile-specific gallery/carousel layouts beyond basic responsiveness.
- Automated visual regression testing against the reference frames. This
  build environment could not launch a headless browser to capture
  screenshots for comparison, so visual QA here was via code review and a
  clean production build rather than pixel-diffing.
