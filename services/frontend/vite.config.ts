import { defineConfig } from vite
import react from @vitejs/plugin-react

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      /api: {
        target: http://django:8000,
        changeOrigin: true,
      },
      /agent: {
        target: http://fastapi:8000,
        changeOrigin: true,
      }
    }
  }
})
