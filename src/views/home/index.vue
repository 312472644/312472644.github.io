<template>
  <div class="home">
    <div class="doc-item">
      <div v-if="loading" class="loading-container">
        <ProgressSpinner />
      </div>
      <div v-else class="plugins">
        <div v-for="item in pluginsList" :key="item.name" class="plugin-item" @click="toPage(item.url)">
          <Card class="landing">
            <template #title>{{ item.name }}</template>
            <template #content>
              <div class="plugin-desc" :title="item.desc">{{ item.desc }}</div>
              <div class="plugin-tag">
                <Tag style="" v-for="(tag, index) in item.tags" :key="index" severity="info">
                  {{ tag }}
                </Tag>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { toPage } from '@/utils';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import ProgressSpinner from 'primevue/progressspinner';
import WxBarCode from '@/assets/images/wx_bar_cod.jpg';
import { onMounted, ref } from 'vue';

const pluginsList = ref([]);
const loading = ref(false);

function getPluginsList() {
  loading.value = true;
  fetch('https://raw.githubusercontent.com/312472644/develop-plugins/main/plugin-meta.json')
    .then(res => res.json())
    .then(data => {
      pluginsList.value = data.plugins;
    })
    .finally(() => {
      loading.value = false;
    });
}

onMounted(() => {
  getPluginsList();
});
</script>
<style>
.home {
  padding-bottom: 30px;
}

.plugins {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, calc((100% - 2rem) / 3)));
}

/* .plugin-item {
  min-height: 150px;
} */

.p-card {
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.p-card-caption {
  height: 30px;
  line-height: 30px;
  margin-bottom: 8px;
}

.p-card-content {
  height: calc(100% - 38px);
  display: flex;
  flex-direction: column;
}

.p-card-body {
  height: 100%;
}

.p-tag {
  font-size: 14px;
  padding: 4px 8px;
  font-weight: normal;
}

.p-card-title {
  font-weight: lighter;
  font-size: 1.5rem;
  font-weight: bold;
}

.plugin-desc {
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: #666;
  font-size: 14px;
}

.plugin-tag {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.doc-item {
  margin-bottom: 20px;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
}
</style>
