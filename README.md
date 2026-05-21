# Aspell Consulting Website

Marketing site for [aspellconsulting.com](https://aspellconsulting.com).
Built with [Astro](https://astro.build), deployed to GitHub Pages.

## For content editors

**You almost certainly want [`EDITING.md`](EDITING.md).** All page
content lives in plain markdown files under
[`src/content/`](src/content/) — no HTML or code changes needed.

## For developers

```bash
npm install        # install dependencies (one time)
npm run dev        # local preview at http://localhost:4321
npm run build      # production build into ./dist
npm run preview    # serve the production build locally
```

### Project layout

```
public/                 Static assets served as-is
  CNAME                 Custom-domain pointer for GitHub Pages
  robots.txt            Allows crawlers; links to sitemap
  images/               Logos and photos (referenced by /images/...)
src/
  content/              Editable markdown content (see EDITING.md)
  components/           Astro components — render the content
  layouts/              Page-level layout (SEO meta, JSON-LD, fonts)
  pages/                Routes (currently just index.astro)
  styles/styles.css     All site styling
  content.config.ts    Content-collection schemas
astro.config.mjs        Astro + sitemap integration config
.github/workflows/      Auto-deploy to GitHub Pages on push to main
```

### SEO

- `<title>`, `<meta description>`, canonical URL, Open Graph, and
  Twitter Card tags are generated in
  [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro).
- Page titles and descriptions can be overridden globally in
  [`src/content/site.md`](src/content/site.md).
- JSON-LD `ProfessionalService` structured data is emitted on every
  page so search engines understand the business.
- `sitemap-index.xml` is generated automatically at build time by
  [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
  and linked from `public/robots.txt`.

### Deployment

Pushes to `main` trigger
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes it via GitHub Pages.
One-time repository setup:

1. Settings → Pages → **Source** = `GitHub Actions`.
2. Settings → Pages → **Custom domain** = `aspellconsulting.com`
   (DNS A/CNAME records must already point at GitHub Pages).
