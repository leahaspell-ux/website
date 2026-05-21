import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ------------------------------------------------------------------
// Content collections power the website. Each collection corresponds
// to a folder of markdown files under src/content/.
//
// Editors should only ever need to edit the markdown files themselves
// — not this file. See EDITING.md at the repo root for instructions.
// ------------------------------------------------------------------

// Top-level "page sections": home, about, contact, etc.
// One markdown file per section, lives directly inside src/content/.
const sections = defineCollection({
  loader: glob({
    pattern: ['*.md', '!README.md'],
    base: './src/content',
  }),
  schema: z.object({
    // ---------- Used by section "home.md" only ----------
    eyebrow: z.string().optional(),
    headline: z.string().optional(),
    subheading: z.string().optional(),
    ctas: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
          style: z.enum(['primary', 'ghost']).default('primary'),
        }),
      )
      .optional(),
    statNumber: z.string().optional(),
    statLabel: z.string().optional(),
    tags: z.array(z.string()).optional(),

    // ---------- Used by section "about.md" only ----------
    photo: z.string().optional(),
    photoAlt: z.string().optional(),
    sectors: z.array(z.string()).optional(),

    // ---------- Used by section "contact.md" only ----------
    ctaEmailLabel: z.string().optional(),
    emailSubject: z.string().optional(),
    ctaLinkedinLabel: z.string().optional(),

    // ---------- Used by section "site.md" only (global) ----------
    brandName: z.string().optional(),
    brandTagline: z.string().optional(),
    email: z.string().email().optional(),
    linkedinUrl: z.string().url().optional(),
    nav: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .optional(),
    footerCopyright: z.string().optional(),

    // ---------- Optional SEO overrides for any section ----------
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

// Individual service cards — one markdown file per service.
const services = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/services',
  }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(99),
  }),
});

// Individual testimonial quotes — one markdown file per quote.
const testimonials = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/testimonials',
  }),
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { sections, services, testimonials };
