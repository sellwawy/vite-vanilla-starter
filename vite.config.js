// /** @type {import('vite').UserConfig} */
import { resolve } from 'path'
import pxtorem from 'postcss-pxtorem'
import autoprefixer from 'autoprefixer'

export default {
   server: {
      port: 3000,
   },
   root: 'src',
   emptyOutDir: true,
   build: {
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
         input: {
            main: resolve(__dirname, 'src/index.html'),
            about: resolve(__dirname, 'src/about.html'),
         },
      },
   },
   css: {
      devSourcemap: true,
      preprocessorOptions: {
         scss: {
            api: 'modern-compiler', // or "modern"
         },
      },
      postcss: {
         plugins: [
            pxtorem({
               propList: ['*'],
            }),
            autoprefixer,
         ],
      },
   },
}
