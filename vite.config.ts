import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  esbuild: {
    // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-twin',
            {
              exclude: [
                // https://github.com/ben-rogerson/babel-plugin-twin/issues/9
                '\x00commonjsHelpers.js', // Avoid build error
              ],    
            },
          ],
          'babel-plugin-macros',
          'babel-plugin-styled-components',
        ],
      },
    }),
  ],
})
