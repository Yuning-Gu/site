# Yuning Gu — Academic Portfolio

Bilingual academic portfolio built with Next.js and statically exported to GitHub Pages.

## Content structure

- `src/lib/site-content.ts` — shared profile, education, experience, publication, and homepage content
- `src/components/home` — homepage sections
- `src/components/layout` — navigation, theme, and site frame
- `src/app/[lang]` — English and Chinese routes
- `src/app/globals.css` — responsive visual system and light/dark themes

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The static site is generated in `out/`. Pushes to `main` are deployed through the GitHub Pages workflow.
