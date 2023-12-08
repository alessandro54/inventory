import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'src/public',
    rollupOptions: {
      input: 'src/frontend/main.js', // Change this to match your entry point
      output: {
        format: 'iife',
        entryFileNames: 'bundle.js',
      },
    },
  },
});
