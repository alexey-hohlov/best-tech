<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ROUTES } from '@/constants';
import { formatPrice } from '@/utils/formatPrice';
import { FavoriteIcon, CartIcon, MenuIcon } from '@/assets';
import { AppLogo } from '@/components';
import { useProductsStore } from '@/store/productsStore';
import { useUiStore } from '@/store/uiStore';

const store = useProductsStore();
const uiStore = useUiStore();

const handleMenu = () => {
  uiStore.setMenu(true);
};
</script>

<template>
  <header
    class="flex justify-between items-center py-2 px-6 sticky top-0 backdrop-blur-md bg-white/50 rounded-t-xl z-10 sm:px-12"
  >
    <RouterLink :to="ROUTES.HOME.PATH">
      <AppLogo />
    </RouterLink>
    <MenuIcon
      class="fill-slate-600 size-7 cursor-pointer select-none sm:hidden active:opacity-70"
      @click="handleMenu"
    />
    <ul class="hidden sm:flex justify-center items-center gap-6">
      <RouterLink :to="ROUTES.CART.PATH">
        <li class="link flex items-center gap-1 text-slate-600">
          {{ formatPrice(store.totalPrice) }}
          <CartIcon class="size-7 fill-slate-600" />
        </li>
      </RouterLink>
      <RouterLink :to="ROUTES.FAVORITES.PATH">
        <li class="link flex items-center gap-1 text-slate-600">
          Избранное
          <FavoriteIcon class="size-7 fill-slate-600" />
        </li>
      </RouterLink>
    </ul>
  </header>
</template>

<style scoped lang="scss">
.link {
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
