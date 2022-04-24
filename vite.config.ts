import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    base: "/easybank-landing-page/",
    plugins: [vue()],
    resolve: {
        alias: {
            '@components': resolve(__dirname, 'src/components'),
            '@assets': resolve(__dirname, 'src/assets'),
        },
    },
})
