import Vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';
import AutoImportPlugin from 'unplugin-auto-import/vite';

const plugins = [
  Vue(),
  AutoImportPlugin({
    imports: ['vue', 'vue-router'],
    resolvers: [PrimeVueResolver()],
  }),
  Components({
    resolvers: [PrimeVueResolver()],
  }),
];

export { plugins };
