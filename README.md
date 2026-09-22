# AD-REM

Statická webová stránka farmy v Behynciach pri Tornali — poľnohospodárstvo, chov hovädzieho dobytka a lesnícke služby.

Postavené na [Astro](https://astro.build) a nasadzované na GitHub Pages.

## Požiadavky

- Node.js 22.12+ (v repozitári je `.nvmrc`)

## Lokálny vývoj

```bash
nvm use
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Výstup je v `dist/`.

## GitHub Pages

Po pushnutí do `main` workflow `.github/workflows/deploy.yml` zostaví a nasadí stránku.

1. V repozitári: **Settings → Pages → Source → GitHub Actions**
2. Stránka bude na `https://jrozsa.github.io/ad-rem/`

Konfigurácia `site` a `base` je v `astro.config.mjs`.

## Obsah

Texty a štruktúra vychádzajú z `WEBSITE_CONTENT_PLAN.md`. Údaje v hranatých zátvorkách a v `src/data/site.ts` nahraďte skutočnými firemnými údajmi a fotografiami.
