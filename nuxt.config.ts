// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url';

export default defineNuxtConfig({
    typescript: {
        typeCheck: true,
    },
    devtools: { enabled: true },
    alias: {
        '@': fileURLToPath(new URL('./', import.meta.url)),
    },
    ssr: true,
    postcss: {
        plugins: {
            autoprefixer: {},
        },
    },
});
