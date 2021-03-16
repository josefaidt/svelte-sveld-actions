import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import sveld from 'sveld'
import pkg from './package.json'

const name = pkg.name

export default {
  input: pkg.svelte,
  output: [
    { file: pkg.module, format: 'es' },
    { file: pkg.main, format: 'umd', name },
  ],
  plugins: [
    svelte({
      emitCss: false,
    }),
    resolve(),
    sveld(),
  ],
}