'use strict';

import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.js',
  output: {
    file: 'out/alpha.cjs.js',
    format: 'cjs',
  },
  plugins: [nodeResolve(), commonjs({ignoreDynamicRequires: true})]
};
