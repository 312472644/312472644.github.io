<template>
  <div class="top-menu flex col-center">
    <div
      class="menu-item"
      v-for="(item, index) in menuList"
      :key="index"
      :class="{ active: currentPath === item.path }"
      @click="jump(item)"
    >
      {{ item.title }}
    </div>
  </div>
</template>
<script setup>
import { menuList } from '@/router';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentPath = ref('/');

const jump = item => {
  router.push(item.path);
};

watchEffect(() => {
  const path = router.currentRoute.value.path;
  currentPath.value = path;
});
</script>
<style scoped>
.top-menu .menu-item {
  font-size: 1rem;
  width: 80px;
  text-align: center;
  cursor: pointer;
}

.top-menu .menu-item.active {
  color: var(--primary-color);
}
</style>
