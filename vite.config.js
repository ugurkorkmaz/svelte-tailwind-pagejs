import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const path = require('path');

export default defineConfig({
  plugins: [
    svelte({
      emitCss: false,
      preprocess: require('svelte-preprocess')({
        postcss: {
          plugins: [require('tailwindcss')(), require('autoprefixer')()],
        },
      }),
    })
  ],

  build: {
    outDir: 'build',
    lib: {
      entry: 'src/app.js',
      formats: ['iife'],
      name: 'app.js',
     
    }
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
  },
})