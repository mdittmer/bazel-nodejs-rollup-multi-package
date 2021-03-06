'use strict';

import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.js',
  output: {
    format: 'cjs',
  },
  plugins: [nodeResolve(), commonjs({ignoreDynamicRequires: true})]
};
