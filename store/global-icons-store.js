import {defineStore} from 'pinia'

export const useGlobalIconStore = defineStore('globalIconStore', {
    state: () => ({
        allIcons: import.meta.glob("@/assets/icons/**/*.{svg,png,jpg}", {eager: true, import: "default"}),
        allIconsLoaded: true,
        // ... other global variables
    }),
    actions: {
        setUser(allIcons) {
            this.allIcons = allIcons;
        },
        setTheme(allIconsLoaded) {
            this.allIconsLoaded = allIconsLoaded;
        },
        // ... other actions to modify global state
    },
})