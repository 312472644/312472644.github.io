<template>
  <div v-if="list.length" class="lib-channel-container">
    <div class="lib-channel" ref="channelRef">
      <span
        v-for="(item, index) in list"
        :key="index"
        class="channel-item"
        @click="handleClick(item)"
        :class="{ active: item.value === activeChannel }"
      >
        {{ item.label }}
      </span>
    </div>
    <div v-if="overflow" class="lib-expand-btn" @click="handleExpand">
      <span style="padding-right: 4px">{{ !expanded ? '展开' : '收起' }}</span>
      <i v-if="!expanded" class="pi pi-chevron-down"></i>
      <i v-else class="pi pi-chevron-up"></i>
    </div>
  </div>
</template>
<script setup>
const emits = defineEmits(['change', 'update:modelValue']);
const props = defineProps({
  modelValue: {
    type: [String, Number],
  },
  list: {
    type: Array,
    required: true,
  },
  itemHeight: {
    type: String,
    default: '28px',
  },
});

watch(
  () => props.modelValue,
  () => {
    activeChannel.value = props.modelValue;
  }
);

const height = ref(props.itemHeight);
const channelRef = ref(null);
const activeChannel = ref(props.modelValue);
const overflow = ref(false);
const expanded = ref(false);

const handleClick = item => {
  activeChannel.value = item.value;
  emits('update:modelValue', item.value);
  emits('change', item.value);
};

const isOverflow = () => {
  const channel = channelRef.value;
  overflow.value = channel.scrollHeight > parseInt(height.value);
};

const handleExpand = () => {
  expanded.value = !expanded.value;
  channelRef.value.style.height = expanded.value ? 'auto' : height.value;
};

onMounted(() => {
  if (!props.list.length) return;
  isOverflow();
  window.addEventListener('resize', isOverflow);
});

onUnmounted(() => {
  window.removeEventListener('resize', isOverflow);
});
</script>
<style scoped>
.lib-channel-container {
  position: relative;
}
.lib-channel-container .lib-channel {
  position: relative;
  overflow: hidden;
  height: v-bind(height);
  line-height: v-bind(height);
  margin-bottom: 6px;
  padding-right: 60px;
}
.lib-channel-container .channel-item {
  font-size: 14px;
  position: relative;
  color: var(--text-color);
  margin-right: 28px;
  display: inline-block;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
}
.lib-channel-container .channel-item.active {
  color: var(--primary-color);
}
.lib-channel-container .lib-expand-btn {
  position: absolute;
  color: var(--text-color);
  right: 0;
  top: 0;
  height: 100%;
  line-height: v-bind(height);
  cursor: pointer;
}
</style>
