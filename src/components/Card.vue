<script setup lang="ts">
import { useRouter } from 'vue-router';
import { IProduct } from '@/types/productsTypes';
import { useProductsStore } from '@/store/productsStore';
import { formatPrice } from '@/utils/formatPrice';
import {
  FavoriteIcon,
  FavoriteSolidIcon,
  AddToCartIcon,
  RemoveFromCartIcon,
} from '@/assets';
import { ROUTES } from '@/constants';

interface Props {
  product: IProduct;
}
const props = defineProps<Props>();
const store = useProductsStore();
const router = useRouter();

const handleAddFavorite = () => {
  store.addToFavorites(props.product);
};

const handleRemoveFavorite = () => {
  store.removeFromFavorites(props.product.id);
};

const handleAddToCart = () => {
  store.addToCart(props.product);
};

const handleRemoveFromCart = () => {
  store.removeFromCart(props.product.id);
};

const goToProduct = () => {
  router.push(ROUTES.PRODUCT.PATH.replace(':id', props.product.id));
};
</script>

<template>
  <li
    class="h-96 rounded-2xl bg-zinc-50 border border-slate-200 p-4 flex flex-col gap-2 justify-between cursor-pointer transition md:hover:-translate-y-2 md:hover:shadow-xl"
    @click="goToProduct"
  >
    <img
      class="w-auto h-3/5 object-contain"
      :src="product.imageUrl"
      alt="cardImage"
    />
    <span class="text-center overflow-hidden">{{ product.name }}</span>
    <div class="flex justify-between items-center cursor-auto" @click.stop>
      <div class="flex flex-col">
        <span>Цена:</span>
        <b>{{ formatPrice(product.price) }}</b>
      </div>
      <div class="flex gap-3">
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
        <RemoveFromCartIcon
          class="cursor-pointer size-7 fill-red-500 transition"
          @click="handleRemoveFromCart"
          v-if="store.cart.some(item => item.id === product.id)"
        />
        <AddToCartIcon
          class="cursor-pointer size-7 fill-slate-400 hover:fill-sky-500 transition"
          @click="handleAddToCart"
          v-else
        />
      </div>
    </div>
  </li>
</template>
