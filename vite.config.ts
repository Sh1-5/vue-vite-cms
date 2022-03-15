import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// element-plus按需自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      api: resolve(__dirname, 'src/api'),
      asserts: resolve(__dirname, 'src/asserts'),
      network: resolve(__dirname, 'src/network'),
      router: resolve(__dirname, 'src/router'),
      store: resolve(__dirname, 'src/store'),
      utils: resolve(__dirname, 'src/utils'),
      views: resolve(__dirname, 'src/views')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://152.136.185.210:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
