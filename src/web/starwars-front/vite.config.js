import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/starwars-movies': 'http://localhost:3000',
      '/starwars-characters': 'http://localhost:3000',
    }
  }
})
