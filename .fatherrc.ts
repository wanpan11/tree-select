import { defineConfig } from 'father';

export default defineConfig({
  platform: 'browser',
  cjs: { output: 'lib' },
  esm: {
    output: 'es',
    alias: {
      'rc-util/lib': 'rc-util/es',
      'rc-tree/lib': 'rc-tree/es',
      'rc-select/lib': 'rc-select/es',
    },
  },
});
