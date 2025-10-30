import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
    port: 5100,
  },
  build: {
    outDir: './dist',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    passWithNoTests: false,
    coverage: {
      reporter: ['text', 'html', 'cobertura'],
      reportsDirectory: './coverage',
    },
    css: false, // Disable CSS processing in tests as it is not needed and slow
  },
});
