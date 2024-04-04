<template>
  <div class="flex">
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
    <div class="mobile" @click="visible = !visible">
      <i class="pi pi-bars"></i>
    </div>
    <Sidebar v-model:visible="visible" header="Sidebar">
      <template #container>
        <div class="sidebar">
          <div
            class="menu-item"
            v-for="(item, index) in menuList"
            :key="index"
            :class="{ active: currentPath === item.path }"
            @click="jump(item)"
          >
            <i class="pi" :class="item.icon"></i>
            <span style="padding-left: 10px">{{ item.title }}</span>
          </div>
        </div>
      </template>
    </Sidebar>
  </div>
</template>
<script setup>
import { menuList } from '@/router';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentPath = ref('/');
const visible = ref(false);

const jump = item => {
  router.push(item.path);
  visible.value = false;
};

watchEffect(() => {
  const path = router.currentRoute.value.path;
  currentPath.value = path;
});
</script>
<style scoped>
.top-menu .menu-item {
  font-size: 1rem;
  width: 60px;
  text-align: center;
  cursor: pointer;
  transition: color 0.3s;
}

.menu-item.active {
  color: var(--primary-color);
}

.sidebar {
  padding: 10px 20px;
}

.sidebar .menu-item {
  font-size: 1rem;
  height: 40px;
  line-height: 40px;
  width: 100%;
  cursor: pointer;
}

.mobile {
  display: none;
}

@media screen and (max-width: 768px) {
  .top-menu {
    display: none;
  }
  .mobile {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
  }
}
</style>
