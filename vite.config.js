import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  // Base path ko './' karne se Netlify ko files dhundne mein aasani hoti hai
  base: './', 
  build: {
    outDir: 'dist',
  }
})