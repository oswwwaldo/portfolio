// @ts-check
import { defineConfig, envField } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  env: {
    schema: {
      YT_DATA_API_KEY: envField.string({ context: "server", access: "secret" }),
    },
  },
});
