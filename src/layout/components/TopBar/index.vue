<template>
  <div class="layout-topbar">
    <div class="layout-topbar-inner">
      <div class="layout-topbar-logo-container">
        <img class="layout-topbar-logo" src="../../../assets/images/logo.svg" />
      </div>
      <ul class="list flex col-center">
        <li class="link">
          <a href="https://github.com/312472644" target="_blank"><i class="pi pi-github"></i></a>
        </li>
        <li class="link">
          <i class="pi pi-sun" @click="switchTheme"></i>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const switchTheme = () => {
  const theme = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
};
</script>
<style scoped>
.layout-topbar {
  border-bottom: 1px solid var(--border-color);
  left: 0;
  position: fixed;
  top: 0;
  transition: background-color 0.5s, border-color 0.5s;
  width: 100%;
  height: var(--top-bar-height);
  z-index: 1100;
  /* backdrop-filter: blur(8px); */
}

.layout-topbar-inner {
  margin: 0 auto;
  max-width: var(--content-max-width);
  align-items: center;
  display: flex;
  height: inherit;
  justify-content: space-between;
  padding: 0 var(--topbar-spacing);
}
.layout-topbar-logo {
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.list {
  display: flex;
}
.link {
  border: 1px solid var(--border-color);
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  margin: 0;
  padding: 4px 6px;
  text-align: left;
  transition: border-color 0.3s ease-in-out;
}
.link:hover {
  border-color: var(--primary-color);
}
.link + .link {
  margin-left: 0.5rem;
}
</style>
