<script setup lang="ts">
import { GitHubIcon } from '@/assets';
</script>

<template>
  <footer
    class="backdrop-blur-md bg-white/50 h-16 flex justify-center items-center gap-5"
  >
    <div class="hidden md:block">
      Built by <span class="text-sky-400">Alexey Hohlov</span> ©2024
    </div>
    <a
      class="flex items-center gap-2"
      href="https://github.com/alexey-hohlov"
      target="_blank"
    >
      <GitHubIcon class="size-8" />
      <span class="text-sky-400">alexey-hohlov</span>
    </a>
  </footer>
</template>
