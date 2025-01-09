import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
        // "@fortawesome/free-brands-svg-icons",
        // "@fortawesome/free-regular-svg-icons",
        // "@fortawesome/free-solid-svg-icons",
        // "@fortawesome/vue-fontawesome"
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
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({autoImport: true}))
            })
        }
    ],

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
