<script setup lang="ts">
interface Props {
  options: { value: string; name: string }[];
  onChange: (event: Event) => void;
}
defineProps<Props>();
</script>

<template>
  <select
    class="outline-none border border-gray-300 rounded-md py-1 px-2 text-gray-500"
    @change="onChange"
  >
    <option v-for="item in options" :value="item.value">{{ item.name }}</option>
  </select>
</template>
