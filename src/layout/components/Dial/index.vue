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
import { toPage } from '@/utils';

const toast = useToast();

const items = ref([
  {
    label: '联系作者',
    icon: 'pi pi-whatsapp',
    command: () => copyText(),
  },
  {
    label: '详细文档',
    icon: 'pi pi-book',
    command: () => toPage('https://312472644.github.io/develop-plugins/'),
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
  const concatText = `网易邮箱：xx312472644@163.com\r\nqq邮箱：312472644@qq.com`;
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

:deep() .p-speeddial {
  .p-speeddial-button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    border-radius: 50%;
    box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 25px rgba(102, 126, 234, 0.5);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .p-speeddial-action {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: none;
    border-radius: 50%;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
      background: #fff;
    }

    &:active {
      transform: scale(0.95);
    }

    .p-speeddial-icon {
      color: #333;
    }
  }

  .p-speeddial-mask {
    background: transparent;
  }
}
</style>
