// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import icon from 'astro-icon';

// https://astro.build/config
// https://docs.astro.build/en/guides/integrations-guide/cloudflare/
export default defineConfig({
  integrations: [icon()],
  output: 'static', // or 'server'
  adapter: cloudflare(),
  vite: {
    ssr: {
      noExternal: ['astro-icon', 'debug'], 
    },
  },
});
