<script setup lang="ts">
interface Props {
  quantity: number;
  increment: () => any;
  decrement: () => any;
}
defineProps<Props>();
</script>

<template>
  <div
    class="flex justify-center items-center border border-slate-300 w-min rounded"
  >
    <button
      class="h-full w-6 border border-slate-300 border-t-0 border-b-0 border-l-0 active:opacity-50"
      @click="decrement"
    >
      -
    </button>
    <span class="px-2">{{ quantity }}</span>
    <button
      class="h-full w-6 border border-slate-300 border-t-0 border-b-0 border-r-0 active:opacity-50"
      @click="increment"
    >
      +
    </button>
  </div>
</template>
