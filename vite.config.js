import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    hmr: {
      overlay: false, // Disable the error overlay
      clientPort: 5173, // Ensure consistent port for HMR
    },
    watch: {
      usePolling: true, // Use polling for file changes in Docker
      interval: 1000, // Check for changes every second
    },
  },
  // Optimize build settings
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    sourcemap: false,
  },
  // Resolve aliases for cleaner imports
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
