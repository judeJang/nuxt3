// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url';

export default defineNuxtConfig({
    typescript: {
        shim: false,
        typeCheck: true,
    },
    devtools: { enabled: true },
    alias: {
        '@': fileURLToPath(new URL('./', import.meta.url)),
    },
    ssr: true,
    css: ['@/assets/styles/service_mobile.scss'],
    postcss: {
        plugins: { autoprefixer: {} },
    },
    build: {
        transpile: ['postcss', 'autoprefixer'],
    },
});
