<template>
  <div class="layout-wrapper">
    <TopBar />
    <div class="layout-content">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
    <SpeedDial
      class="right-bottom"
      :model="items"
      :transitionDelay="80"
      :radius="80"
      :tooltipOptions="{ position: 'left' }"
      :style="{ right: 10 }"
    />
    <Toast />
  </div>
</template>
<script setup>
import TopBar from './components/TopBar/index.vue';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const items = ref([
  {
    label: '联系作者',
    icon: 'pi pi-whatsapp',
    command: () => {
      navigator.clipboard
        .writeText('网易邮箱：xx312472644@163.com\nqq邮箱：312472644@qq.com ')
        .then(() => {
          toast.add({
            severity: 'success',
            summary: '复制成功',
            life: 3000,
            detail: '作者邮箱已复制到剪贴板',
          });
        });
    },
  },
]);
</script>
<style scoped>
.layout-wrapper {
  position: relative;
  background-image: url('../assets/images/pattern.png');
  background-position: top;
  background-repeat: no-repeat;
  background-size: auto 20rem;
  min-height: 100%;
  background-color: var(--bg-color);
}
.layout-content {
  margin: 0 auto;
  max-width: var(--content-max-width);
  padding: var(--top-bar-height) var(--topbar-spacing) 0;
  padding-top: calc(var(--top-bar-height) + 20px);
}

>>> .right-bottom {
  right: 20px !important;
  bottom: 50px !important;
}
</style>
