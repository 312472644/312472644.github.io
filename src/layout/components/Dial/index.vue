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
    command: () => copyText(),
  },
]);

const copySuccess = () => {
  toast.add({
    severity: 'success',
    summary: '复制成功',
    life: 3000,
    detail: '作者邮箱已复制到剪贴板',
  });
};

const commandCopy = text => {
  const inputDom = document.createElement('input');
  inputDom.setAttribute('readonly', 'readonly');
  inputDom.value = text;
  document.body.appendChild(inputDom);
  inputDom.select();
  const result = document.execCommand('copy');
  if (result) {
    copySuccess();
  }
  document.body.removeChild(inputDom);
};

const copyText = () => {
  const concatText = `网易邮箱：xx312472644@163.com\nqq邮箱：312472644@qq.com`;
  if (window.navigator.clipboard) {
    navigator.clipboard
      .writeText(concatText)
      .then(() => {
        copySuccess();
      })
      .catch(() => {
        commandCopy(concatText);
      });
  } else {
    commandCopy(concatText);
  }
};
</script>
<style scoped>
:deep() .right-bottom {
  position: fixed !important;
  right: 20px !important;
  bottom: 50px !important;
}

:deep() .p-speeddial-action {
  background: #fff;
  border: 1px solid #e2e8f0;
}
</style>
