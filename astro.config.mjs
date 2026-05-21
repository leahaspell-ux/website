// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://aspellconsulting.com',
  // Markdown options — applied to every .md file in src/content.
  markdown: {
    // Convert plain quotes/dashes to typographically correct characters.
    smartypants: true,
  },
  integrations: [
    sitemap({
      // Sitemap is consumed by search engines (Google, Bing, etc.) to
      // discover and index every page on the site. Output: /sitemap-index.xml
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date(),
    }),
  ],
});
