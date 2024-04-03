<template>
  <div class="resource">
    <ListItem v-model="parentChannel" :list="channelList"></ListItem>
    <ListItem v-model="childChannel" :list="childList"></ListItem>
    <div class="resource-body">
      <div class="item landing" v-for="(item, index) in dataList" :key="index">
        <Card>
          <template #title>
            <div class="name" @click="() => toPage(item.link)">
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
  </div>
</template>
<script setup>
import { toPage } from '@/utils';
import ListItem from './ListItem.vue';

const getFilePath = path => {
  return new URL(path, import.meta.url).href;
};

const channelList = ref([
  {
    label: 'UI组件',
    value: 'UIComponents',
    children: [
      {
        label: '图表',
        value: 'Chart',
        children: [
          {
            label: 'DataV',
            desc: '主要用于构建大屏（全屏）数据展示页面即数据可视化。',
            logo: getFilePath('./images/DataV.ico'),
            link: 'http://datav.jiaminghi.com/guide/#%E7%94%A8%E5%89%8D%E5%BF%85%E7%9C%8B',
          },
          {
            label: 'BizCharts4',
            desc: '是基于 G2 4.X 封装的 React 图表库，具有 G2、React 的全部优点，可以让用户以组件的形式组合出无数种图表。',
            logo: getFilePath('./images/BizCharts.png'),
            link: 'https://bizcharts.taobao.com/product/BizCharts4/gallery',
          },
          {
            label: 'Canvas Editor',
            desc: '所见即所得的富文本编辑器。',
            logo: getFilePath('./images/CanvasEditor.png'),
            link: 'https://hufe.club/canvas-editor-docs/guide/start.html',
          },
          {
            label: 'ECharts',
            desc: '一个基于 JavaScript 的开源可视化图表库。',
            logo: getFilePath('./images/ECharts.png'),
            link: 'https://echarts.apache.org/zh/option.html#title',
          },
          {
            label: 'AntV',
            desc: '蚂蚁企业级数据可视化解决方案，让人们在数据世界里获得视觉化思考能力。',
            logo: getFilePath('./images/AntV.png'),
            link: 'https://antv.antgroup.com/',
          },
          {
            label: 'VChart',
            desc: '开箱即用的多端图表库,生动灵活的数据故事讲述者。',
            logo: getFilePath('./images/VChart.png'),
            link: 'https://www.visactor.io/vchart/example',
          },
          {
            label: 'ChartJs',
            desc: '用于现代网络的简单而灵活的 JavaScript 图表库。',
            logo: getFilePath('./images/AntV.png'),
            link: 'https://chart.nodejs.cn/docs/latest/',
          },
        ],
      },
      { label: '框架UI', value: 'FrameworkUI' },
      { label: '图标', value: 'Icon' },
      { label: '其他', value: 'Other' },
      { label: '管理系统模板', value: 'ManageFramework' },
      { label: 'CSS', value: 'Css' },
    ],
  },
  { label: 'Vue', value: 'Vue' },
  { label: '代码管理', value: 'Code' },
  { label: '工程化', value: 'Engineering' },
  { label: 'JS框架', value: 'JSFramework' },
  { label: 'Mock', value: 'Mock' },
  { label: '邮箱', value: 'Mail' },
  { label: '壁纸', value: 'Picture' },
  { label: '移动端', value: 'Mobile' },
  { label: 'Node', value: 'Node' },
  { label: '插件', value: 'Plugins' },
  { label: '其他', value: 'Other' },
]);

const parentChannel = ref(channelList.value?.[0]?.value);
const childChannel = ref(null);
const childList = ref([]);
const dataList = ref([]);

const handleParentChange = value => {
  const list = channelList.value.find(item => item.value === value)?.children || [];
  childList.value = list;
  childChannel.value = list?.[0]?.value;
};

const handleChildChange = value => {
  childChannel.value = value;
  dataList.value = childList.value.find(item => item.value === value)?.children || [];
  console.log('childChannel', dataList.value);
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
