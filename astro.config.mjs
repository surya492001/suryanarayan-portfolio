// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Change this if you move to a custom domain.
  site: 'https://suryanarayan-portfolio.surya492001.workers.dev',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
