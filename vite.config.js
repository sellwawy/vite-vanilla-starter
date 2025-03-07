// /** @type {import('vite').UserConfig} */
import { resolve } from 'path'
import pxtorem from 'postcss-pxtorem'
import { defineConfig } from 'vite'

export default defineConfig({
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
            about: resolve(__dirname, 'src/about/index.html'),
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
         plugins: [pxtorem({ propList: process.env.NODE_ENV === 'development' ? ['!*'] : ['*'] })],
      },
   },
})
