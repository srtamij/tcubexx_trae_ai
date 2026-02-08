import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: "/tcubexx_trae_ai/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
