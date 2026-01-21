import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { codeInspectorPlugin } from 'code-inspector-plugin'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    build: {
      outDir: 'out/preload' // 显式指定输出目录
    }
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [
      react(),
      tailwindcss(),
      codeInspectorPlugin({
        bundler: 'vite',
        showSwitch: true,
        editor: 'code'
      })
    ],
    build: {
      outDir: 'out/renderer' // 也建议显式指定
    },
    server: {
      host: '0.0.0.0',
      cors: true,
      proxy: {
        '/api': {
          // target: 'http://192.168.1.242:8000',
          // target: 'http://127.0.0.1:3000',
          target: 'https://elysia.ljflovezxm.cn',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
