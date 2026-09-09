# Personal portfolio — Astro + Tailwind

Static site. Zero JS shipped except a tiny scroll-reveal script.

## Run locally

```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Where to edit

**Almost everything lives in `src/data/config.ts`** — name, headline, about, experience,
projects, skills, education, resume filenames, social links. No HTML editing needed.

Other files:

| File | What it's for |
|---|---|
| `src/pages/index.astro` | Page structure / section order |
| `src/styles/global.css` | Colours and fonts (accent is `--color-accent`) |
| `public/` | Resumes, favicon, og-image |

## Before you publish — checklist

1. **`src/data/config.ts`** — replace the four `TODO` values:
   - `name` — your full name as you want it displayed
   - `linkedin` / `github` — your real profile URLs
   - `web3formsKey` — free key from https://web3forms.com (enter your email, it's mailed to you)
   - `url` — your live URL after the first deploy
2. **`astro.config.mjs`** — set `site` to the same live URL.
3. **`public/robots.txt`** — update the sitemap URL.
4. **Resumes** — replace the two placeholder PDFs in `public/`, keeping the same filenames:
   - `Suryanarayan-Developer-Resume.pdf`
   - `Suryanarayan-Analyst-Resume.pdf`
   Export text-based PDFs (not scans) so they stay ATS-readable.
5. **`public/og-image.png`** — regenerate or redesign if you change your name/headline.
6. Re-read your employment confidentiality agreement before publishing anything about work.

## Deploy to Cloudflare Pages (free)

1. Push this folder to a new GitHub repo.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick the repo.
3. Settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. Live in ~2 minutes at `your-project.pages.dev`.

Every later update is just `git push`.

## After launch

- Cloudflare dashboard → **Web Analytics** → add your site (cookieless, no consent banner needed).
- Google Search Console → add the property → submit `https://your-site/sitemap-index.xml`.
- Add the URL to your LinkedIn profile, GitHub profile README, and email signature.
