import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr' 

const isGitHubPages = process.env.GH_PAGES === 'true';

export default defineConfig({
  base: isGitHubPages ? '/Iluha.Muzyka/' : '/',
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})