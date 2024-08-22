<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { PageNotFound } from '@/pages';
import { IProduct } from '@/types/productsTypes';
import { BASE_URL } from '@/constants';
import { formatPrice } from '@/utils/formatPrice';
import { FavoriteIcon, FavoriteSolidIcon } from '@/assets';
import { Button } from '@/components';
import { useProductsStore } from '@/store/productsStore';
import { ROUTES } from '@/constants';

const product = ref<IProduct | null>(null);
const route = useRoute();
const router = useRouter();

const getProduct = async () => {
  const id = route.params.id;
  try {
    const response = await axios.get(BASE_URL);
    const products = response.data.products;
    product.value = products.find((item: IProduct) => item.id === id) || null;
  } catch (error) {
    console.error('Error fetching products', error);
  }
};

const store = useProductsStore();

const handleAddFavorite = () => {
  product.value && store.addToFavorites(product.value);
};

const handleRemoveFavorite = () => {
  product.value && store.removeFromFavorites(product.value.id);
};

const handleAddToCart = () => {
  product.value && store.addToCart(product.value);
};

const handleNavigateToCart = () => {
  router.push(ROUTES.CART.PATH);
};

onMounted(() => {
  getProduct();
});
</script>

<template>
  <section v-if="product" class="product-wrapper h-full px-12">
    <img
      class="object-contain h-auto w-full"
      :src="product.imageUrl"
      alt="productImage"
    />
    <div class="flex flex-col gap-6 items-start">
      <span class="text-center text-4xl text-slate-800 font-bold">{{
        product.name
      }}</span>
      <div class="flex flex-wrap justify-start gap-3 w-full">
        <span class="p-4 bg-zinc-100 rounded-xl w-1/5 min-w-max text-center">{{
          formatPrice(product.price)
        }}</span>
        <div
          v-if="store.favorites.some(item => item.id === product?.id)"
          @click="handleRemoveFavorite"
          class="p-4 bg-zinc-100 rounded-xl w-max cursor-pointer select-none"
        >
          <FavoriteSolidIcon class="fill-red-500" />
        </div>
        <div
          class="favorite p-4 bg-zinc-100 rounded-xl w-max cursor-pointer select-none"
          @click="handleAddFavorite"
          v-else
        >
          <FavoriteIcon class="fill-black" />
        </div>
        <Button
          title="Перейти в корзину"
          class="text-rose-400 border border-rose-400 min-w-52 w-1/4"
          @click="handleNavigateToCart"
          v-if="store.cart.some(item => item.id === product?.id)"
        />
        <Button
          title="Купить"
          class="bg-rose-400 text-white min-w-24 w-1/4"
          @click="handleAddToCart"
          v-else
        />
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-3xl text-slate-700">Описание:</span>
        <p class="text-xl">{{ product.description }}</p>
      </div>
    </div>
  </section>
  <PageNotFound v-else />
</template>

<style scoped lang="scss">
.product-wrapper {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: minmax(200px, 300px) auto;
  gap: 40px;
}

.favorite {
  &:hover {
    svg {
      transition: fill 100ms linear;
      fill: #ef4444;
    }
  }
}

@media screen and (max-width: 768px) {
  .product-wrapper {
    grid-template-columns: 100%;

  img {
    max-width: 250px;
    height: auto;
    justify-self: center;
  }
  }
}
</style>
