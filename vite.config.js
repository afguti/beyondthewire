import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import markdown from 'vite-plugin-markdown'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    markdown.plugin({
      mode: ['html', 'toc']
    })
  ],
  assetsInclude: ['**/*.md']
})
