import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import UnoCSS from 'unocss/vite'
import i18nextLoader from 'vite-plugin-i18next-loader'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        UnoCSS(),
        i18nextLoader({paths: ['./locales']})
    ],
})
