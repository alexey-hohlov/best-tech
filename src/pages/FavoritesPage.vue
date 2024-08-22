<script setup lang="ts">
import { useProductsStore } from '@/store/productsStore';
import { Card } from '@/components';
import { EmptyPage } from '@/pages';
const store = useProductsStore();
</script>

<template>
  <section v-if="store.favorites.length">
    <TransitionGroup
      class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4"
      name="list"
      tag="ul"
    >
      <Card v-for="item in store.favorites" :key="item.id" :product="item" />
    </TransitionGroup>
  </section>
  <EmptyPage v-else />
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 300ms linear;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>
