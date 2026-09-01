// @ts-check
import { defineConfig, envField } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://archway.vn',
  output: 'static',
  adapter: cloudflare({ imageService: 'passthrough' }),
  session: false,
  env: {
    schema: {
      RESEND_API_KEY: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
      }),
      FORM_FROM_EMAIL: envField.string({
        context: 'server',
        access: 'public',
        default: 'Archway Business Brokers <brokers@archway.vn>',
      }),
      FORM_TO_EMAIL: envField.string({
        context: 'server',
        access: 'public',
        default: 'brokers@archway.vn',
      }),
    },
  },
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') && !page.includes('/privacy-policy/'), entryLimit: 50000 })],
  vite: {
    optimizeDeps: {
      include: ['astro/assets/services/noop', 'astro/logger/json'],
    },
    plugins: [tailwindcss()],
  },
});
