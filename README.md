# Spice Route Kitchen — React + Vite

Premium single-page restaurant demo for Hyderabad. All restaurant text and editable sample content live in `src/data/content.js`.

## Requirements
- Node.js 18.18+ (Node 20 LTS recommended)
- npm

## Install and run
```bash
cd spice-route-kitchen
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Responsive QA
Check the page at:
- 375px: mobile navigation, stacked sections, horizontally scrollable menu tabs, booking form and lightbox controls.
- 768px: tablet grid transitions and readable content widths.
- 1280px: full desktop navigation, 3D hero scene, multi-column menu and story layout.

Use browser devtools responsive mode to verify these widths. The 3D scene is hidden below 768px and the hero's CSS background remains as the lightweight mobile fallback.

## Notes
- Booking is front-end demo validation only. It does not send or persist reservations.
- Map is a visual placeholder, not a live map.
- Menu, prices, reviews, address and contact details are dummy content.
- Food imagery is loaded from Unsplash URLs; replace with locally hosted, licensed images for production.
- Google Fonts are loaded in `index.html`.
- Framer Motion components respect `prefers-reduced-motion`.
