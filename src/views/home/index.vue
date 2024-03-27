<template>
  <div class="home">
    <div class="doc-intro">
      <h1>插件</h1>
      <p>各种插件集合.</p>
    </div>
    <div class="plugins">
      <div v-for="item in pluginsList" :key="item.name" class="plugin-item">
        <Card class="landing">
          <template #title>{{ item.name }}</template>
          <template #content>
            <div class="plugin-desc">{{ item.desc }}</div>
            <div class="plugin-tag">
              <Tag v-for="(tag, index) in item.tags" :key="index" severity="secondary">
                {{ tag }}
              </Tag>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
<script setup>
import Card from 'primevue/card';

const pluginsList = [
  {
    name: 'sugar-video-player',
    desc: 'sugar-video-player是一个基于React开发的视频播放插件，支持一些基础视频播放设置。',
    link: 'https://www.npmjs.com/package/sugar-video-player',
    tags: ['react', 'video', 'plugin', 'npm', 'ts'],
  },
];
</script>
<style>
.plugins {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, calc((100% - 2rem) / 3)));
}

.plugin-item {
  height: 180px;
}

.doc-intro {
  margin-bottom: 1.5rem;
}

.p-card {
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.p-tag {
  font-size: 14px;
  padding: 4px 8px;
  font-weight: normal;
}

.p-card-title {
  font-size: 1.5rem;
}

.plugin-desc {
  font-size: 1.1rem;
}

.plugin-tag {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.landing {
  position: relative;
  z-index: 0;
}

.landing:hover::before,
.landing:hover::after {
  opacity: 1;
  z-index: 9;
}

.landing::before {
  animation: clippath 3s linear infinite;
  border: 1px solid var(--primary-color);
  border-radius: 10px;
  bottom: -2px;
  content: '';
  left: -2px;
  opacity: 0;
  position: absolute;
  right: -2px;
  top: -2px;
  transition: all 0.5s;
  z-index: -1;
}

.landing::after {
  animation: clippath 3s linear -1.5s infinite;
  border: 1px solid var(--primary-color);
  border-radius: 10px;
  bottom: -2px;
  content: '';
  left: -2px;
  opacity: 0;
  position: absolute;
  right: -2px;
  top: -2px;
  transition: all 0.5s;
  z-index: -1;
}

@keyframes clippath {
  0%,
  100% {
    clip-path: inset(0 0 98% 0);
  }
  25% {
    clip-path: inset(0 98% 0 0);
  }

  50% {
    clip-path: inset(98% 0 0 0);
  }
  75% {
    clip-path: inset(0 0 0 98%);
  }
}
</style>
