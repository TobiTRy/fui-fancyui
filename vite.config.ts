import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'node:path';
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
    visualizer(),
  ],
  build: {
    copyPublicDir: false,

    lib: {
      entry: path.resolve(__dirname, './lib/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components', '@react-spring/web', 'react/jsx-runtime', 'color'],
      output: {
        preserveModulesRoot: 'src',
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
