import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Election-website-/',
  plugins: [react()],
  publicDir: 'public',
  build: {
    outDir: 'dist',
  },
});
