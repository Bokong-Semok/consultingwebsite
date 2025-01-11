import {createPinia} from 'pinia'
import {useGlobalIconStore} from '@/store/global-icons-store.js'

export default defineNuxtPlugin((nuxtApp) => {
    const pinia = createPinia()
    nuxtApp.vueApp.use(pinia)

    const globalIconStore = useGlobalIconStore()
    nuxtApp.vueApp.provide('globalIconStore', globalIconStore)
});