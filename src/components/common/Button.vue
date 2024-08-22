<script setup lang="ts">
interface Props {
  title: string;
  onClick?: () => void;
}
defineProps<Props>();
</script>

<template>
  <button @click="onClick" class="button rounded-xl p-3 min-w-max">
    {{ title }}
  </button>
</template>

<style scoped lang="scss">
.button {
  &:active {
    scale: 0.99;
    opacity: 0.95;
  }
}
</style>
