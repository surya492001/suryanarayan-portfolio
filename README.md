# Personal portfolio

Suryanarayan Satheesh Pillai. Astro + Tailwind, static output, no framework JS shipped
except a small scroll-reveal script.

## Run locally

```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Where to edit

**Almost everything lives in `src/data/config.ts`**: headline, intro, experience, education,
certifications, projects, skills, resume filenames, social links. No HTML editing needed.

| File | What it is for |
|---|---|
| `src/data/config.ts` | All content |
| `src/pages/index.astro` | Page structure and section order |
| `src/styles/global.css` | Colours and fonts (accent is `--color-accent`) |
| `public/` | Resumes, favicon, og-image, robots.txt |

## Still to do before publishing

1. **Web3Forms key.** The contact form will not send until this is set. Get a free key at
   https://web3forms.com (enter your email, the key is mailed to you), then paste it into
   `web3formsKey` in `src/data/config.ts`.
2. **Live URL.** After the first deploy, set the real URL in three places:
   `site.url` in `src/data/config.ts`, `site` in `astro.config.mjs`, and the sitemap line
   in `public/robots.txt`.

## Deploy to Cloudflare Pages (free)

1. Push this folder to a new GitHub repo.
2. Cloudflare dashboard, **Workers & Pages > Create > Pages > Connect to Git**, pick the repo.
3. Settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. Live in about two minutes at `your-project.pages.dev`.

Every later update is just `git push`.

## After launch

- Cloudflare dashboard, **Web Analytics**, add your site. Cookieless, so no consent banner.
- Google Search Console, add the property, submit `https://your-site/sitemap-index.xml`.
- Add the URL to your LinkedIn profile, GitHub profile README, and email signature.

## Resumes

`public/` holds the two CVs, served at these paths:

- `/Suryanarayan-Satheesh-Pillai-Developer.pdf`
- `/Suryanarayan-Satheesh-Pillai-Analyst.pdf`

To update either one, overwrite the file keeping the same name.
