<script setup lang="ts">
import { useProductsStore } from '@/store/productsStore';
import { CartItem, OrderDetails, OrderModal } from '@/components';
import { EmptyPage } from '@/pages';

const store = useProductsStore();
</script>

<template>
  <section v-if="store.cart.length" class="wrapper w-full h-full">
    <TransitionGroup name="list" tag="ul" class="flex flex-col gap-3">
      <CartItem v-for="item in store.cart" :key="item.id" :product="item" />
    </TransitionGroup>
    <OrderDetails />
    <OrderModal />
  </section>
  <EmptyPage v-else />
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto max-content;
  gap: 15px;
}

.list-enter-active,
.list-leave-active {
  transition: all 400ms linear;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}
</style>
