import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../layout/index.vue';
import Home from '../views/home/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
