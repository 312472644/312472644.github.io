<template>
  <div>
    <SpeedDial
      class="right-bottom"
      :model="items"
      :radius="80"
      :tooltipOptions="{ position: 'left' }"
      :style="{ right: 10 }"
    />
    <Toast />
  </div>
</template>
<script setup>
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
>>> .right-bottom {
  right: 20px !important;
  bottom: 50px !important;
}

>>> .p-speeddial-action {
  background: #fff;
  border: 1px solid #e2e8f0;
}
</style>
