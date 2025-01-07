// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon","nuxt-calendly","@nuxt/image"],
  compatibilityDate: "2025-01-03",
  image: {
    inject: true
  },
  experimental: { appManifest: false }
});
