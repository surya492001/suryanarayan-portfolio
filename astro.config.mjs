// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Change this once you know your final Cloudflare Pages URL (or custom domain).
  site: 'https://suryanarayan.pages.dev',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
