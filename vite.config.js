import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// ✅ Vite configuration for GitHub Pages (repo name: layout4)
export default defineConfig({
  plugins: [react()],
  base: '/', // 👈 must match your GitHub repo name exactly
});

