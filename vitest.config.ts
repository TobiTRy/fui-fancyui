import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    include: ['**/?(*.)test.tsx?(x)'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Match the alias with the one in tsconfig.json
    },
  },
});
