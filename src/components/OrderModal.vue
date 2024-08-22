<script setup lang="ts">
import { useUiStore } from '@/store/uiStore';
import { useProductsStore } from '@/store/productsStore';
import { Modal, Button } from '@/components';
import { formatDeclination } from '@/utils/formatDeclination';
import { formatPrice } from '@/utils/formatPrice';

const uiStore = useUiStore();
const store = useProductsStore();

const handleClose = () => {
  uiStore.setModal(false);
};

const handleClick = () => {
  store.setCart([]);
  handleClose();
};
</script>

<template>
  <Modal :isOpen="uiStore.modal" :handleClose="handleClose">
    <div class="flex flex-col">
      <div class="flex flex-col gap-6 items-center">
        <h3 class="font-bold text-2xl text-slate-500">Ваш заказ</h3>
        <div>
          В вашей корзине
          <span class="font-bold text-sky-500"
            >{{ store.totalQuantity }}
            {{
              formatDeclination(
                store.totalQuantity,
                'товар',
                'товара',
                'товаров'
              )
            }}</span
          >
          на сумму
          <span class="font-bold text-sky-500">
            {{ formatPrice(store.totalPrice) }}
          </span>
        </div>
        <Button
          title="Перейти к оформлению*"
          :onClick="handleClick"
          class="bg-sky-400 text-white"
        />
      </div>
      <span class="text-sm italic text-slate-400 mt-8"
        >*Это демо приложение, нажатие на кнопку приведет к очистке
        корзины</span
      >
    </div>
  </Modal>
</template>
