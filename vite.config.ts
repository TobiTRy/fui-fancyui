import { defineConfig, type Plugin } from 'vite';

import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'node:path';
import preserveDirectives from 'rollup-preserve-directives';
import dts from 'vite-plugin-dts';

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    preserveDirectives() as Plugin, // This plugin is used to preserve the directives in the output files (e.g. "use client")
    visualizer(),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, './lib/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      treeshake: true,
      external: ['react', 'react-dom', 'styled-components', '@react-spring/web', 'react/jsx-runtime', 'color'],
      output: {
        preserveModulesRoot: '.',
        preserveModules: true,
        entryFileNames: ({ name: fileName }) => {
          return `${fileName}.js`;
        },
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
      },
    },
  },
});
