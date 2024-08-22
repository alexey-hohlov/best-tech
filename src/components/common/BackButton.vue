<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ArrowBackIcon } from '@/assets';
const router = useRouter();
</script>

<template>
  <div
    @click="router.back()"
    class="back flex select-none cursor-pointer active:opacity-50 text-slate-600"
  >
    <ArrowBackIcon class="fill-slate-600" />
    Назад
  </div>
</template>

<style scoped>
.back {
  transition: color 100ms linear;
  svg {
    transition: fill 100ms linear;
  }
  &:hover {
    color: black;
    svg {
      fill: black;
    }
  }
}
</style>
