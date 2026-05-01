# Radical Feminist Manifesto

An interactive political manifesto webpage built with React and Vite. The site presents a radical feminist argument against sexual exploitation through pornography and forced/coerced marriage, with full-page scroll animations, a marquee banner, stats section, issue cards, and a cited works section.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Build & Preview](#build--preview)
- [Design Notes](#design-notes)

---

## Tech Stack

- **React 19** with Vite 8
- **CSS custom properties** for theming (no external UI library)
- **Intersection Observer API** for scroll-reveal animations
- Google Fonts: Bebas Neue, Barlow Condensed, Space Mono

---

## Project Structure

```
rad-fem-manifesto/
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── App.jsx         # All page sections and content
    ├── App.css         # Full stylesheet (layout, animations, components)
    ├── index.css       # Base reset and root variables
    └── main.jsx        # React entry point
```

All content — sources, issue cards, and demands — lives as data arrays at the top of `App.jsx`, making it easy to update without touching layout code.

---

## Getting Started

**Prerequisites:** Node.js 20+ (required by Vite 8)

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at `http://localhost:5173`.

---

## Development

```bash
npm run dev      # Start dev server with HMR
npm run lint     # Run ESLint
```

To update content, edit the arrays near the top of `src/App.jsx`:

- `sources` — cited works shown in the footer section
- `issues` — the four issue cards
- `demands` — the bulleted demand list

---

## Build & Preview

```bash
npm run build    # Production build to dist/
npm run preview  # Preview the production build locally
```
