<template>
  <div class="empty">
    <img :src="url" alt="empty" />
    <p>{{ emptyText }}</p>
  </div>
</template>
<script setup>
import emptySVG from '@/assets/images/empty.svg';

defineProps({
  emptyText: {
    type: String,
    default: '暂无数据',
  },
  url: {
    type: String,
    default: emptySVG,
  },
});
</script>
<style scoped>
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
}
</style>
