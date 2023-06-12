import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8040,
    cors: true,

  },
  build: {
    outDir: '../jpackagefx-main/src/main/resources/ui_build',
  },
})

