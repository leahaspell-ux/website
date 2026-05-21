# Editing the Aspell Consulting Website

This site is built so that **all the words and content live in
plain markdown files**. You don't need to touch any HTML, CSS, or
code to update the site.

Every time you save a change (commit it on GitHub), the site
**automatically rebuilds and publishes** within about a minute.

---

## Where to find each piece of content

All editable content lives in the [`src/content/`](src/content/) folder.

| What you want to change | File to edit |
| --- | --- |
| Email address, LinkedIn URL, brand tagline, nav links, footer text, SEO title | [`src/content/site.md`](src/content/site.md) |
| The big intro at the top of the page (hero section) | [`src/content/home.md`](src/content/home.md) |
| The "What we do" section heading | [`src/content/services.md`](src/content/services.md) |
| An individual service card | a file inside [`src/content/services/`](src/content/services/) |
| The About section (bio, photo, sectors list) | [`src/content/about.md`](src/content/about.md) |
| The Testimonials section heading | [`src/content/testimonials.md`](src/content/testimonials.md) |
| An individual testimonial quote | a file inside [`src/content/testimonials/`](src/content/testimonials/) |
| The Contact section copy and buttons | [`src/content/contact.md`](src/content/contact.md) |
| Any image (logo, photos) | drop files into [`public/images/`](public/images/) |

---

## How a markdown file works

Each file has two parts:

1. **Frontmatter** — settings between two `---` lines at the top of the file.
2. **Body** — the actual prose underneath, written in plain text.

Example (a service card):

```md
---
title: "Strategic Communication"
order: 2
---

Clear, consistent messaging that aligns leadership, engages
employees, and keeps stakeholders informed at every milestone.
```

The `title` shows up as the card heading. The paragraph below the
second `---` becomes the card body. The `order` number controls
where the card appears (lower numbers appear first).

### Formatting tips

In the body of any markdown file you can use:

- `**bold text**` → **bold text**
- `*italic text*` → *italic text*
- `[link text](https://example.com)` → a clickable link
- Blank lines between paragraphs to create paragraph breaks
- Quotation marks and em dashes — Astro auto-converts `"like this"`
  and `--` into pretty typographic versions

---

## Common tasks

### Update the email address or LinkedIn URL

Open [`src/content/site.md`](src/content/site.md). Change the `email:`
or `linkedinUrl:` values inside the `---` block. Save.

### Change the intro headline

Open [`src/content/home.md`](src/content/home.md). Change the
`headline:` value. Save.

### Add a new service

1. Inside [`src/content/services/`](src/content/services/), create a
   new file. Name it like `07-something.md` (the number controls
   order — pick the next available one).
2. Copy the contents of an existing service file as a starting
   point and edit the title, order, and body text.
3. Save / commit.

### Remove a service or testimonial

Just delete the file. The site will rebuild without it.

### Add a new testimonial

1. Inside [`src/content/testimonials/`](src/content/testimonials/),
   create a new file like `04-jane-doe.md`.
2. Use this template:

   ```md
   ---
   name: "Jane Doe"
   role: "Director of Operations, Acme Co."
   order: 4
   ---

   The full text of the quote goes here. You can use
   **bold** or *italics* if you'd like.
   ```

3. Save / commit.

### Replace the About photo

1. Drop the new image into [`public/images/`](public/images/) (any
   JPG or PNG works).
2. Open [`src/content/about.md`](src/content/about.md) and change
   `photo:` to point at the new filename. Keep the `/images/`
   prefix.
3. Save / commit.

### Change the navigation menu

Open [`src/content/site.md`](src/content/site.md). The `nav:` block
controls the menu items, left to right. Add or remove items by
matching the existing pattern.

---

## How publishing works

This site uses **GitHub Pages**. Every time you commit a change to
the `main` branch of the repository, GitHub automatically:

1. Builds the latest version of the site.
2. Deploys it to **https://aspellconsulting.com**.

You can watch the progress under the repository's **Actions** tab.
A green checkmark means it's live; a red X means the build broke
and the previous version is still up.

---

## Previewing changes locally (optional)

If you want to preview changes on your own computer before
committing them:

1. Install [Node.js](https://nodejs.org/) (the LTS version).
2. Open a terminal in this folder and run:

   ```bash
   npm install
   npm run dev
   ```

3. Open the URL the terminal prints (usually
   `http://localhost:4321`). The page updates live as you save
   files.

---

If something breaks or you're unsure about an edit, just revert
your change in GitHub (or ask for help) — nothing here is
permanent.
