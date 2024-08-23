<script setup lang="ts">
import { useProductsStore } from '@/store/productsStore';
import { formatDeclination } from '@/utils/formatDeclination';
import { formatPrice } from '@/utils/formatPrice';
import { Button } from '@/components';
import { useUiStore } from '@/store/uiStore';

const store = useProductsStore();
const uiStore = useUiStore();

const handleOrder = () => {
  uiStore.setModal(true);
};
</script>

<template>
  <div
    class="flex flex-col gap-4 w-full md:w-1/2 min-w-72 min-h-40  bg-zinc-50 self-end justify-between justify-self-center outline-dashed outline-offset-2 outline-2 outline-slate-400 p-2 rounded-xl transition hover:outline-sky-500"
  >
    <span class="font-bold text-lg text-center select-none text-slate-600"
      >Детали заказа</span
    >
    <div class="flex flex-col gap-1 justify-center">
      <span class="text-sm text-slate-500 select-none">Итого:</span>
      <div>
        <span class="font-bold"
          >{{ store.totalQuantity }}
          {{
            formatDeclination(store.totalQuantity, 'товар', 'товара', 'товаров')
          }}</span
        >
        на сумму
        <span class="font-bold">
          {{ formatPrice(store.totalPrice) }}
        </span>
      </div>
    </div>
    <div class="flex justify-center">
      <Button
        title="Оформить заказ"
        class="bg-green-600 text-white w-1/2 h-12 min-w-44 max-w-full"
        @click="handleOrder"
      />
    </div>
  </div>
</template>
