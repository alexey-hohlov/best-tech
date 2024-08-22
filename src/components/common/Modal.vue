<script setup lang="ts">
import { watchEffect, onUnmounted } from 'vue';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}
const props = defineProps<Props>();

watchEffect(() => {
  props.isOpen
    ? document.body.classList.add('overflow-hidden')
    : document.body.classList.remove('overflow-hidden');
});

onUnmounted(() => {
  document.body.classList.remove('overflow-hidden');
});
</script>

<template>
  <Transition name="overlay">
    <div
      class="z-20 w-screen h-screen fixed top-0 right-0 bg-slate-400/60 backdrop-blur flex items-center justify-center px-2 overflow-hidden"
      v-show="isOpen"
      @click="handleClose"
    >
      <Transition name="content">
        <div
          class="bg-white rounded-xl p-4 max-w-max"
          v-show="isOpen"
          @click.stop
        >
          <slot></slot>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<style scoped>
/* overlay animation */
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 200ms linear;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

/* content animation */
.content-enter-active,
.content-leave-active {
  transition: scale 200ms linear;
}

.content-enter-from,
.content-leave-to {
  scale: 0.5;
}
</style>
