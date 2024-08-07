import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-template/",
  plugins: [react()],
  server: {
    port: 3000, // To run the app on port 3000
    open: true, // If we want to open the app once its started
  },
})
