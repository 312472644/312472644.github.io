<template>
  <div class="home">
    <div class="doc-item">
      <div class="doc-intro">
        <h1>插件</h1>
      </div>
      <div class="plugins">
        <div
          v-for="item in pluginsList"
          :key="item.name"
          class="plugin-item"
          @click="toPage(item.link)"
        >
          <Card class="landing">
            <template #title>{{ item.name }}</template>
            <template #content>
              <div class="plugin-desc">{{ item.desc }}</div>
              <div class="plugin-tag">
                <Tag
                  style=""
                  v-for="(tag, index) in item.tags"
                  :key="index"
                  :severity="getSeverity(tag)"
                >
                  {{ tag }}
                </Tag>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
    <div class="doc-item">
      <div class="doc-intro">
        <h1>作品</h1>
      </div>
      <div class="plugins">
        <div
          v-for="item in worksList"
          :key="item.name"
          class="plugin-item"
          @click="handleToPage(item)"
        >
          <Card class="landing">
            <template #title>{{ item.name }}</template>
            <template #content>
              <div class="plugin-desc">{{ item.desc }}</div>
            </template>
          </Card>
        </div>
      </div>
    </div>
    <Dialog
      v-model:visible="visible"
      modal
      dismissableMask
      header="刀塔辅助助手"
      :style="{ width: '400px' }"
    >
      <div style="display: flex; justify-content: center; align-items: center">
        <Image :src="WxBarCode" alt="Image" width="250" />
      </div>
    </Dialog>
  </div>
</template>
<script setup>
import { toPage } from '@/utils';
import Card from 'primevue/card';
import WxBarCode from '@/assets/images/wx_bar_cod.jpg';

const visible = ref(false);
const pluginsList = [
  {
    name: 'sugar-video-player',
    desc: 'sugar-video-player是一个基于React开发的视频播放器插件，支持自定义UI、自定义控制条、自定义事件等。',
    link: 'https://www.npmjs.com/package/sugar-video-player',
    tags: ['react', 'video', 'plugin', 'npm', 'ts'],
  },
  {
    name: 'chrome-plugins-cli',
    desc: 'chrome-plugins-cli是一个基于Node.js开发的Chrome插件开发脚手架，支持一键生成Chrome插件项目。',
    link: 'https://www.npmjs.com/package/chrome-plugins-cli',
    tags: ['chrome', 'chrome-plugins', 'cli', 'npm', 'Node'],
  },
  {
    name: 'webpack-plugin-dist-zip',
    desc: 'webpack-plugin-dist-zip是一个基于Webpack开发的打包后自动压缩成zip包的插件。',
    link: 'https://www.npmjs.com/package/webpack-plugin-dist-zip',
    tags: ['webpack', 'build', 'plugin', 'npm'],
  },
  {
    name: 'vite-build-git-info',
    desc: 'vite-build-git-info是一个基于Vite开发的自动获取Git信息并注入到Vite构建环境中的插件。',
    link: 'https://www.npmjs.com/package/vite-build-git-info',
    tags: ['vite', 'vue3', 'build', 'plugin', 'npm'],
  },
  {
    name: 'g-vue-template-cli',
    desc: 'g-vue-template-cli是一个基于Vue3开发的Vue3项目模板脚手架，支持一键生成Vue3项目模板。',
    link: 'https://www.npmjs.com/package/g-vue-template-cli',
    tags: ['vue3', 'cli', 'npm', 'Node', 'template'],
  },
  {
    name: 'View Node Version',
    desc: 'View Node Version是一个基于VSCode开发的查看Node.js版本信息以及切换全局Npm代理地址的插件。',
    type: 'vscode',
    link: 'vscode:extension/xx312472644.xx-node-version',
    tags: ['node', 'npm', 'registry', 'vscode', 'plugin'],
  },
];

const worksList = [
  {
    name: '刀塔数据 Web',
    desc: '刀塔数据是一个基于Vue3开发的刀塔据查询网站，支持查询英雄、装备、阵容、队伍、实时赛事等数据。',
    link: 'http://124.70.218.140/#/dota-data',
  },
  {
    name: '刀塔辅助助手小程序',
    desc: '刀塔辅助助手是一个基于微信原生开发的刀塔据查询小程序，支持查询英雄、装备、阵容、队伍、实时赛事等数据。',
  },
];

const getSeverity = name => {
  if (name.includes('react')) return 'info';
  if (name.includes('vue')) return 'success';
  return 'secondary';
};

const handleToPage = item => {
  const link = item.link;
  if (link) {
    toPage(link);
    return;
  }
  visible.value = true;
  console.log('item', item);
};
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

.doc-item {
  margin-bottom: 20px;
}
</style>
