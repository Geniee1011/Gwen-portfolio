
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: '0.0.0.0', // Make it listen on all interfaces
    port: 3000, // Or any other port you're using
    proxy: null,  // Disable proxy temporarily to test
  },
})


