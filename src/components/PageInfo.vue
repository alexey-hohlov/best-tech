<script setup lang="ts">
import { BackButton } from '@/components';
</script>

<template>
  <div
    class="w-full py-2 px-12 flex items-center justify-between"
  >
    <span class='font-bold text-2xl text-slate-500 select-none'>
      {{ $route.name }}
    </span>

    <BackButton />
  </div>
</template>
