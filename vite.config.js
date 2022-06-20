import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Icons from 'unplugin-icons/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { qrcode } from 'vite-plugin-qrcode';
import removeConsole from 'vite-plugin-remove-console';
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Icons({ /* options */ }),
    viteStaticCopy({
      targets: [
        {
          src: 'php/**.**',
          dest: 'php'
        }
      ]
    }),
    qrcode(),
    removeConsole(),
    VitePWA(),
  ],
  base: 'geotica_new'
})
