import { resolve } from 'path'

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { codeInspectorPlugin } from 'code-inspector-plugin'
import { defineConfig, externalizeDepsPlugin, loadEnv } from 'electron-vite'

export default defineConfig(({ mode }) => {
  loadEnv(mode)
  return {
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
        codeInspectorPlugin({
          bundler: 'vite',
          showSwitch: true,
          editor: 'code'
        }),
        react(),
        tailwindcss()
      ],
      build: {
        outDir: 'out/renderer' // 也建议显式指定
      },
      server: {
        host: '0.0.0.0',
        cors: true,
        proxy: {
          '/api': {
            target: 'http://haruta.top',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
          }
        }
      }
    }
  }
})
