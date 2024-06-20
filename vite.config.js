import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'

const file = fileURLToPath(new URL('package.json', import.meta.url))
const json = readFileSync(file, 'utf8')
const pkg = JSON.parse(json)

const config = defineConfig({
  build: {
    target: 'es2020',
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  plugins: [sveltekit()],
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env.NODE_DEBUG': 'false',
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
})

export default config
