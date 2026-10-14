import { copyFileSync } from 'node:fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    // Vercel serves dist/404.html with a real 404 status for unknown URLs; the SPA then shows its NotFound page.
    { name: 'spa-404', apply: 'build', closeBundle: () => copyFileSync('dist/index.html', 'dist/404.html') },
  ],
})
