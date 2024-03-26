import './assets/index.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primeicons/primeicons.css';
import locale from '../locale/zh-CN.json';

const app = createApp(App);

app.use(PrimeVue, {
  ripple: true,
  locale: locale['zh-CN'],
});
app.use(router);

app.mount('#app');
