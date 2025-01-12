import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
                {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
                {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
                {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
                {rel: 'manifest', href: '/site.webmanifest'}
            ]
        }
    },


    build: {
        transpile: [
            'vuetify',
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-brands-svg-icons',
            '@fortawesome/free-regular-svg-icons',
            '@fortawesome/free-solid-svg-icons',
            '@fortawesome/vue-fontawesome'

        ],

    },

    devtools: {enabled: true},
    css: [
        "~/assets/css/main.css",
        '@fortawesome/fontawesome-svg-core/styles.css',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        "@nuxt/icon",
        "nuxt-calendly",
        "@nuxt/image",
        "nuxt-gtag",
        '@nuxtjs/tailwindcss',
        '@unocss/nuxt',
        '@nuxtjs/turnstile',
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({autoImport: true}))
            })
        }
    ],
    plugins: [
        '~/plugins/global-icons-plugins.js'
    ],

    turnstile: {
        siteKey: '0x4AAAAAAA5Go8cn_-PWpmIU',
    },

    runtimeConfig: {
        turnstile: {
            // This can be overridden at runtime via the NUXT_TURNSTILE_SECRET_KEY
            // environment variable.
            secretKey: '0x4AAAAAAA5Go3VJArNCNRd_oewrzGHkfp8',
        },
    },

    compatibilityDate: "2025-01-03",
    image: {
        inject: true
    },
    experimental: {appManifest: false},
    nitro: {
        devProxy: {
            host: 'localhost',
        },
    },
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
});
