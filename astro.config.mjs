// @ts-check
import { defineConfig, envField } from 'astro/config';
import icon from 'astro-icon';
import sitemap from "@astrojs/sitemap";

const getSiteUrl = () => {
    if (process.env.CF_PAGES_BRANCH === 'main') {
        return 'http://portfolio.ofdelossantosa.workers.dev/';
    }
    if (process.env.CF_PAGES_URL) {
        return process.env.CF_PAGES_URL; 
    }
        
    return 'http://localhost:4321'; 
};

// https://astro.build/config
export default defineConfig({
    site: getSiteUrl(),
    integrations: [icon(), sitemap()],
    env: {
        schema: {
            YT_DATA_API_KEY: envField.string({ context: "server", access: "secret" }),
        },
    },
});