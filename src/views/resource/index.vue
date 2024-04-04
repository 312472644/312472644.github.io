<template>
  <div class="resource">
    <ListItem v-model="parentChannel" :list="channelList"></ListItem>
    <ListItem v-model="childChannel" :list="childList"></ListItem>
    <div v-if="dataList.length" class="resource-body">
      <div
        class="item landing"
        v-for="(item, index) in dataList"
        :key="index"
        @click="() => toPage(item.link)"
      >
        <Card>
          <template #title>
            <div class="name">
              <span><img style="width: 30px; height: 30px" :src="item.logo" /></span>
              <span class="label">{{ item.label }}</span>
            </div>
          </template>
          <template #content>
            <div class="content-desc" :title="item.desc">
              {{ item.desc }}
            </div>
          </template>
        </Card>
      </div>
    </div>
    <Empty v-if="!dataList.length" style="margin-top: 10px" />
  </div>
</template>
<script setup>
import Empty from '@/components/Empty/index.vue';
import ListItem from './ListItem.vue';

import { toPage } from '@/utils';
import { channelList } from './data';

const parentChannel = ref(channelList[0].value);
const childChannel = ref(null);
const childList = ref([]);
const dataList = ref([]);

const handleParentChange = value => {
  const item = channelList.find(item => item.value === value) || {};
  if (item.hasChildren) {
    childList.value = item.children;
    childChannel.value = item.children?.[0]?.value;
    dataList.value = [];
  } else {
    childList.value = [];
    childChannel.value = null;
    dataList.value = item.children || [];
  }
};

const handleChildChange = value => {
  if (!value) return;
  childChannel.value = value;
  dataList.value = childList.value.find(item => item.value === value)?.children || [];
};

watch(() => parentChannel.value, handleParentChange, { immediate: true });

watch(() => childChannel.value, handleChildChange, { immediate: true });
</script>
<style scoped>
.resource-body {
  margin-top: 10px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(100px, calc((100% - 5rem) / 6)));
  grid-template-rows: 120px;
}
.item {
  cursor: pointer;
}
.item .name {
  display: flex;
  gap: 10px;
  overflow: hidden;
  white-space: nowrap;
}
.label {
  transition: color 0.2s ease-in-out;
}
.item:hover .label {
  color: var(--primary-color);
}
.content-desc {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
