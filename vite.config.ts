import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://alexgomezde.github.io/workout-cr-app",
  plugins: [react()],
})
