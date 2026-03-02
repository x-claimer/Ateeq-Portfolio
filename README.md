# Mohammed Ateeq — Portfolio

Personal portfolio website built with [Astro](https://astro.build/) using a Bento-style layout. Features a dark bento grid design with animated cards, a live EST clock, an interactive 3D globe, and a blog.

## Tech Stack

- [Astro 5](https://astro.build)
- [UnoCSS](https://unocss.dev/)
- [Motion](https://motion.dev/)
- [Solid.js](https://solidjs.com/) + [Svelte](https://svelte.dev/)
- [D3](https://d3js.org/)

---

## Local Development

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Install dependencies

```bash
pnpm install
# or
npm install
```

### Start dev server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build for production

```bash
pnpm build
```

---

## Deploying to Netlify

The project is pre-configured for Netlify SSR via Edge Functions using `@astrojs/netlify`.

### Option 1 — Deploy via Netlify UI (Recommended)

1. Push this repo to GitHub:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. Go to [app.netlify.com](https://app.netlify.com) → **"Add new site" → "Import an existing project"**.

3. Connect your GitHub account and select the **Ateeq-Portfolio** repository.

4. Set the build settings:

   | Setting | Value |
   |---|---|
   | **Build command** | `npm run build` |
   | **Publish directory** | `dist` |

5. Under **Site settings → Environment variables**, add:
   ```
   NODE_VERSION = 18
   ```

6. Click **"Deploy site"**. Netlify will build and deploy automatically.

7. Once live, go to **Site settings → Domain management** to set a custom domain or rename the Netlify subdomain (e.g. `mohammedateeq.netlify.app`).

8. Update `astro.config.mjs` with your final live URL:
   ```js
   site: "https://your-domain.netlify.app/",
   ```
   Then redeploy with a `git push`.

### Option 2 — Deploy via Netlify CLI

1. Install the CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login:
   ```bash
   netlify login
   ```

3. Initialise and deploy:
   ```bash
   netlify init
   netlify deploy --build --prod
   ```

### Continuous Deployment

After the initial setup, every `git push` to `main` triggers an automatic build and deploy on Netlify — no extra configuration needed.

---

## Customisation

| File | What to edit |
|---|---|
| `src/lib/constants.ts` | Social links (GitHub, LinkedIn, email) |
| `src/components/IntroCard.astro` | Hero intro text |
| `src/components/AboutMe.astro` | Bio paragraph |
| `src/components/ContactsCard.astro` | Contact details |
| `src/components/Now.astro` | Current status |
| `src/components/MyStack.astro` | Tech stack list |
| `src/data/blog/*.md` | Blog posts |
| `public/me.webp` | Profile / avatar image |
| `public/og-image.png` | Social preview (OG) image |
| `astro.config.mjs` | Site URL for sitemap & robots.txt |

---

## License

MIT
