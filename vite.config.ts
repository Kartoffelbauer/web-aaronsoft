/**
 * @fileoverview Minimalist Vite configuration.
 * Serves static assets and transpiles TypeScript natively without plugins.
 */

import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      target: 'esnext',
      minify: 'terser',
      outDir: 'dist'
    }
  };
});