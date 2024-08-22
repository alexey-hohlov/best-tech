<script setup lang="ts">
interface Props {
  placeholder: string;
  onChange: (event: Event) => void;
  value: string;
}
defineProps<Props>();
</script>

<template>
  <input
    class="outline-none border border-gray-300 rounded-md py-1 px-2 focus:border-gray-400"
    type="text"
    :placeholder="placeholder"
    @input="onChange"
    :value="value"
  />
</template>
