import { createRouter, createWebHistory } from 'vue-router';
import { getMenuList } from './tool.js';
import Layout from '../layout/index.vue';
import Home from '@/views/home/index.vue';

const routes = [
  {
    path: '/',
    meta: { title: '主页' },
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
    ],
  },
  {
    path: '/about',
    meta: { title: '关于' },
    component: Layout,
    children: [
      {
        path: '',
        name: 'About',
        component: () => import('@/views/about/index.vue'),
      },
    ],
  },
  {
    path: '/note',
    meta: { title: '笔记' },
    component: Layout,
    children: [
      {
        path: '',
        name: 'Note',
        component: () => import('@/views/note/index.vue'),
      },
    ],
  },
  {
    path: '/resource',
    meta: { title: '资源' },
    component: Layout,
    children: [
      {
        path: '',
        name: 'Resource',
        component: () => import('@/views/resource/index.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
    hidden: true,
  },
  {
    path: '/404',
    hidden: true,
    component: Layout,
    children: [
      {
        path: '',
        name: '404',
        meta: { title: '404' },
        component: () => import('@/views/404/index.vue'),
      },
    ],

    hidden: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export const menuList = getMenuList(routes);

export default router;
