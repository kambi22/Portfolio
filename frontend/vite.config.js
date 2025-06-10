import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA(
      {
      registerType: 'autoUpdate', // Auto-update service worker
      manifest: {
        name: `Satnam Singh`,
        short_name: 'Satnam',
        description: `Hi, I'm satnam singh, welcome to my portfolio`,
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone', // Fullscreen PWA
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
    {
      strategies: 'injectManifest', // Use custom SW
      srcDir: 'src',
      filename: 'sw.js',
      // ... rest of config
    }
  ],
  server: {
    host: true
  }
})
