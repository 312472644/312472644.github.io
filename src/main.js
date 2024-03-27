import './assets/index.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
import ToastService from 'primevue/toastservice';
import locale from '../locale/zh-CN.json';

const app = createApp(App);

app.use(PrimeVue, {
  ripple: true,
  unstyled: false,
  locale: locale['zh-CN'],
});
app.use(ToastService);
app.use(router);

app.mount('#app');
