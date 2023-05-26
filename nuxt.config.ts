export default defineNuxtConfig({
    modules: [
        '@nuxtjs/eslint-module',
        '@unocss/nuxt',
        '@nuxt/image-edge',
        '@nuxthq/ui',
        '@nuxtjs/color-mode',
        '@nuxtjs/stylelint-module',
        '@nuxtjs/fontaine',
        '@nuxt/image-edge',
        '@vueuse/nuxt',
        '@vite-pwa/nuxt',
    ],
    colorMode: {
        preference: 'dark',
        fallback: 'dark',
        storageKey: 'liting-blog-color-mode',
    },
    css: [
        '@unocss/reset/tailwind-compat.css',
        '@/assets/styles/root.scss',
    ],
    stylelint: {},
    image: {
        screens: {
            sm: 676,
            md: 960,
            lg: 1440,
        },
    },
    pwa: {
        registerType: 'autoUpdate',
        manifest: {
            name: '文侯的博客',
            short_name: '博客',
        },
        client: {
            installPrompt: true,
        },
        devOptions: {
            enabled: true,
            type: 'module',
        },
    },
})
