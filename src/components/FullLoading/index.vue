<template>
  <div class="full-loading" v-if="visible">
    <div class="loading">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>
</template>
<script setup>
const visible = ref(false);

const toggle = () => {
  visible.value = !visible.value;
};

defineExpose({ toggle });
</script>
<style>
.full-loading {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  min-height: 100vh;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #f8fafc, #f0f8ff);
}

.loading {
  position: relative;
  width: 8rem;
  height: 8rem;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-perspective: 40rem;
  perspective: 40rem;
  pointer-events: none;
  margin-bottom: 40px;
}

.loading .line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-bottom: 0.15rem solid var(--primary-color);
}

.loading .line:first-child {
  -webkit-animation: rotate1 1.15s linear infinite;
  animation: rotate1 1.15s linear infinite;
}

.loading .line:nth-child(2) {
  -webkit-animation: rotate2 1.15s linear infinite;
  animation: rotate2 1.15s linear infinite;
}

.loading .line:nth-child(3) {
  -webkit-animation: rotate3 1.15s linear infinite;
  animation: rotate3 1.15s linear infinite;
}

.loading .line:first-child {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

.loading .line:nth-child(2) {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}

.loading .line:nth-child(3) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}

@keyframes rotate1 {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotate(0);
  }

  to {
    transform: rotateX(35deg) rotateY(-45deg) rotate(1turn);
  }
}

@keyframes rotate2 {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotate(0);
  }

  to {
    transform: rotateX(50deg) rotateY(10deg) rotate(1turn);
  }
}

@keyframes rotate3 {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotate(0);
  }

  to {
    transform: rotateX(35deg) rotateY(55deg) rotate(1turn);
  }
}
</style>
