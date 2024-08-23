<script setup lang="ts">
import { ICartItem } from '@/types/productsTypes';
import { formatPrice } from '@/utils/formatPrice';
import { FavoriteSolidIcon, DeleteIcon, FavoriteIcon } from '@/assets';
import { Counter } from '@/components';
import { useProductsStore } from '@/store/productsStore';

interface Props {
  product: ICartItem;
}
const props = defineProps<Props>();
const store = useProductsStore();

const handleAddFavorite = () => {
  const { quantity, ...rest } = props.product;
  store.addToFavorites(rest);
};

const handleRemoveFavorite = () => {
  store.removeFromFavorites(props.product.id);
};

const handleRemoveFromCart = () => {
  store.removeFromCart(props.product.id);
};

const increment = () => {
  store.increaceQuantity(props.product.id);
};

const decrement = () => {
  if (props.product.quantity <= 1) return;
  store.decreaseQuantity(props.product.id);
};
</script>

<template>
  <li
    class="content bg-zinc-50 border border-slate-200 w-full h-auto p-2 md:p-4 rounded-2xl"
  >
    <img
      class="h-28 w-auto object-contain place-self-center sm:h-32"
      :src="product.imageUrl"
      :alt="product.name"
    />
    <div class="flex flex-col justify-between items-start">
      <span class="text-xl">{{ product.name }}</span>
      <div class="min-h-14 flex flex-col justify-between">
        <Counter
          :quantity="product.quantity"
          :product="product"
          :increment="increment"
          :decrement="decrement"
        />
        <span class="text-slate-500" v-if="product.quantity > 1"
          >{{ formatPrice(product.price) }} / шт.</span
        >
      </div>
      <div class="flex gap-1">
        Цена:
        <span class="font-bold">{{
          formatPrice(product.price * product.quantity)
        }}</span>
      </div>
    </div>
    <div class="flex flex-wrap gap-2 self-start justify-self-end">
      <FavoriteSolidIcon
        class="cursor-pointer size-7 fill-red-500 transition"
        @click="handleRemoveFavorite"
        v-if="store.favorites.some(item => item.id === product.id)"
      />
      <FavoriteIcon
        class="cursor-pointer size-7 fill-slate-400 hover:fill-red-500 transition"
        @click="handleAddFavorite"
        v-else
      />
      <DeleteIcon
        class="cursor-pointer size-7 fill-slate-400 hover:fill-sky-500 transition"
        @click="handleRemoveFromCart"
      />
    </div>
  </li>
</template>

<style scoped>
.content {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 128px auto auto;
  gap: 20px;
}

@media screen and (max-width: 640px) {
  .content {
    grid-template-columns: 64px auto auto;
    gap: 10px;
  }
}
</style>
