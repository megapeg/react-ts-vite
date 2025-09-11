import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  define: { 'process.env': {} },
  plugins: [react()],
  server: {
    host: true,
    port: 5100,
  },
  build: {
    outDir: './dist',
  },
});
