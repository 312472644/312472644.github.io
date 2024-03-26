import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';

const plugins = [
  vue(),
  Components({
    resolvers: [PrimeVueResolver()],
  }),
];

export { plugins };
