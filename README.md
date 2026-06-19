# John Raven Glomar — Portfolio

A clean, premium personal portfolio built with **React 19 + Vite 8 + Tailwind CSS v4**.
Dark-first design with a light/dark toggle, smooth-scroll navigation, scroll-spy header,
and subtle scroll-reveal animations. No external UI component libraries — every component
is built from scratch.

## ✨ Features

- ⚡ Vite 8 + React 19
- 🎨 Tailwind CSS v4 (via the official Vite plugin) with a semantic, themeable token system
- 🌗 Light/dark mode with no flash-of-wrong-theme (pre-paint bootstrap script)
- 🧭 Sticky, accessible header with scroll-spy active states and a mobile overlay menu
- 🪄 Subtle `IntersectionObserver` reveal animations (respects `prefers-reduced-motion`)
- ♿ Accessible: semantic landmarks, skip link, focus-visible rings, keyboard friendly
- 📱 Fully responsive, mobile-first
- 📝 **All content in one file** — edit `src/data/portfolio.js`, no component changes needed

## 🛠 Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## ✏️ Editing content

Everything you see on the site is read from **`src/data/portfolio.js`** — personal
details, experience, skills, certifications, education, and links. Update values there.

> **Links:** `github`, `portfolio`, and `udemy` are placeholders (`href: '#'`, `isPlaceholder: true`)
> because the source CV used placeholder URLs. Set the real `href` and flip `isPlaceholder` to `false`.

## 🚀 Deployment

Optimized for **Vercel** (zero-config — it auto-detects Vite). See the full step-by-step
guide that accompanies this project, or in short:

1. Push to GitHub.
2. Import the repo on [vercel.com/new](https://vercel.com/new).
3. Framework preset **Vite** → Build `npm run build` → Output `dist`.
4. Deploy.

## 📁 Structure

```
src/
├── data/portfolio.js     # ← single source of truth for all content
├── hooks/                # useTheme, useScrollSpy, useReveal
├── components/           # one file per section + UI primitives
│   ├── Header.jsx  Hero.jsx  About.jsx  Experience.jsx
│   ├── Skills.jsx  Credentials.jsx  Contact.jsx  Footer.jsx
│   └── Section, Container, Reveal, Chip, Button, ThemeToggle, icons
├── App.jsx               # composes the sections
├── main.jsx              # React entry
└── index.css             # Tailwind v4 import + theme tokens
```

Built with React & Tailwind CSS.
