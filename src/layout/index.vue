<template>
  <div class="layout-wrapper">
    <TopBar />
    <div class="layout-content">
      <router-view v-slot="{ Component }">
        <transition>
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script setup>
import TopBar from './components/TopBar/index.vue';
</script>
<style scoped>
.layout-wrapper {
  background-image: url('../assets/images/pattern.png');
  background-position: top;
  background-repeat: no-repeat;
  background-size: auto 20rem;
  min-height: 100%;
  background-color: var(--bg-color);
}
.layout-content {
  margin: 0 auto;
  max-width: var(--content-max-width);
  padding: var(--top-bar-height) var(--topbar-spacing) 0;
  padding-top: calc(var(--top-bar-height) + 20px);
}
</style>
