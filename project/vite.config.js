import { defineConfig } from 'vite'
import { resolve } from 'path'

// Multi-page Vite config: each page is a separate HTML entry point.
// Plain HTML/CSS/JS — no frameworks, no build dependencies beyond Vite itself.
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        academics: resolve(__dirname, 'academics.html'),
        boarding: resolve(__dirname, 'boarding.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})
