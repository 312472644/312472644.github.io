<template>
  <div class="setting-theme" @click="toggle">
    <OverlayPanel ref="op" :baseZIndex="999">
      <template #container>
        <ul class="theme-ul">
          <li
            v-for="item in themeList"
            :key="item.name"
            class="theme-item"
            :class="{ current: item.theme === currentTheme }"
            @click="switchTheme(item)"
          >
            <span :style="`color:${item.theme === currentTheme ? item.color : ''}`">{{
              item.name
            }}</span>
            <span class="theme-circle" :style="`background:${item.color}`"></span>
          </li>
        </ul>
      </template>
    </OverlayPanel>
    <i class="pi pi-palette"></i>
    <FullLoading ref="fullLoadingRef" />
  </div>
</template>
<script setup>
import FullLoading from '@/components/FullLoading/index.vue';
import { usePrimeVue } from 'primevue/config';

const PrimeVue = usePrimeVue();
const op = ref();
const fullLoadingRef = ref();
const currentTheme = ref(localStorage.getItem('theme') || 'aura-light-green');

const toggle = event => {
  op.value.toggle(event);
};

const themeList = [
  { name: '绿色', theme: 'aura-light-green', color: '#10b981' },
  { name: '紫色', theme: 'md-light-indigo', color: '#3f51b5' },
  { name: '黑色', theme: 'aura-light-noir', color: '#020617' },
  { name: '橙色', theme: 'aura-light-amber', color: '#ff5722' },
];

const switchTheme = item => {
  const theme = item.theme;
  localStorage.setItem('theme', theme);
  PrimeVue.changeTheme(currentTheme.value, theme, 'theme-link', () => {
    currentTheme.value = theme;
  });
};

const loadTheme = () => {
  fullLoadingRef.value.toggle();
  const linkThemeDOM = document.getElementById('theme-link');
  const cacheTheme = localStorage.getItem('theme');
  const themeHref = `/themes/${cacheTheme || 'aura-light-green'}.css`;
  if (linkThemeDOM) {
    linkThemeDOM.href = themeHref;
    return;
  }

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = themeHref;
  link.type = 'text/css';
  link.id = 'theme-link';
  document.head.appendChild(link);
  link.onload = function () {
    setTimeout(() => fullLoadingRef.value.toggle(), 1000);
  };
};

onMounted(() => {
  loadTheme();
});
</script>
<style scoped>
.setting-theme {
  position: relative;
}
.setting-theme::after {
  content: '';
  position: absolute;
  margin: -4px -6px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
}
.theme-ul {
  padding: 1rem 0;
}
.theme-item {
  color: #334155;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 30px;
  line-height: 30px;
  transition: all 0.3s ease-in-out;
}
.theme-item.current {
  background-color: #f1f5f9;
}
.theme-item:hover {
  cursor: pointer;
  background-color: #f1f5f9;
}
.theme-circle {
  width: 15px;
  height: 15px;
  background-color: #3f51b5;
  border-radius: 50%;
}
</style>
