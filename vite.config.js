import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Tailwind v4 is wired in via its official Vite plugin (no PostCSS config needed).
  plugins: [react(), tailwindcss()],
})
