import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './public/nepal_nightlights_dashboard.html'
      }
    }
  }
})