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
  modules: ["nuxt-icons","nuxt-calendly","@nuxt/image"],
  compatibilityDate: "2025-01-03",
  image: {
    inject: true
  }
});
