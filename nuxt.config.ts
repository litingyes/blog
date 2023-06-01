import { resolve } from 'node:path'

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
        '@nuxt/content',
        '@pinia/nuxt',
        'dayjs-nuxt',
        'nuxt-simple-sitemap',
        'nuxt-simple-robots',
        'nuxt-module-feed',
        'nuxt-lodash',
    ],
    colorMode: {
        storageKey: 'liting-blog-color-mode',
        preference: 'dark',
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
        provider: 'ipx',
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
    content: {
        documentDriven: true,
        sources: {
            content: {
                driver: 'fs',
                prefix: '/articles',
                base: resolve(__dirname, 'articles'),
            },
        },
        highlight: {
            theme: {
                default: 'rose-pine-dawn',
                dark: 'rose-pine-moon',
            },
        },
        markdown: {
            anchorLinks: {
                depth: 2,
                exclude: [1],
            },
        },
    },
    pinia: {
        autoImports: ['defineStore', 'storeToRefs'],
    },
    dayjs: {
        // locales: ['zh-cn'],
        // defaultLocale: 'zh-cn',
        // defaultTimezone: 'Asia/Shanghai',
        // plugins: ['utc', 'timezone'],
    },
    sitemap: {
        siteUrl: 'https://www.liting.ink',
    },
    robots: {
        sitemap: '/sitemap.xml',
    },
    feed: {
        sources: [
            {
                path: '/rss.xml',
                type: 'rss2',
                cacheTime: 60 * 15,
            },
        ],
    },
    imports: {
        dirs: ['stores'],
    },
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.liting.ink',
        },
    },
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in',
        },
        layoutTransition: {
            name: 'page',
            mode: 'out-in',
        },
    },
    sourcemap: {
        client: false,
        server: false,
    },
    typescript: {
        typeCheck: true,
    },
})
