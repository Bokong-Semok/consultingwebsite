export default defineNuxtPlugin((nuxtApp) => {
    const iconsDatax = import.meta.glob("@/assets/icons/**/*.{svg,png,jpg}", {eager: true, import: 'default'});
    // console.log(iconsData);
    nuxtApp.provide("iconsData", iconsDatax);
});