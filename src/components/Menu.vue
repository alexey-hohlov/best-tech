<script setup lang="ts">
import { onUnmounted, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { CloseIcon, HomeIcon, FavoriteIcon, CartIcon } from '@/assets';
import { AppLogo } from '@/components';
import { useProductsStore } from '@/store/productsStore';
import { useUiStore } from '@/store/uiStore';
import { formatPrice } from '@/utils/formatPrice';
import { ROUTES } from '@/constants';

interface Props {
  isOpen: boolean;
}
defineProps<Props>();
const store = useProductsStore();
const uiStore = useUiStore();
const router = useRouter();

const handleClose = () => {
  uiStore.setMenu(false);
};

const handleNavigate = (path: string) => {
  uiStore.setMenu(false);
  router.push(path);
};

watchEffect(() => {
  uiStore.menu
    ? document.body.classList.add('overflow-hidden')
    : document.body.classList.remove('overflow-hidden');
});

onUnmounted(() => {
  document.body.classList.remove('overflow-hidden');
});
</script>

<template>
  <Transition name="overlay" appear>
    <div
      v-show="isOpen"
      class="z-20 w-screen h-screen fixed top-0 right-0 bg-slate-400/60 backdrop-blur flex items-end justify-center px-2 overflow-hidden sm:hidden"
      @click="handleClose"
    >
      <Transition name="content">
        <div
          v-show="isOpen"
          class="bg-white rounded-t-xl w-full flex flex-col gap-4 items-center px-4 pt-4"
          @click.stop
        >
          <header class="py-2 px-4 flex justify-between items-center w-full">
            <AppLogo />
            <CloseIcon
              class="cursor-pointer fill-slate-600 size-8 select-none active:opacity-70"
              @click="handleClose"
            />
          </header>
          <ul class="flex flex-col gap-6 text-2xl w-max">
            <li
              @click="handleNavigate(ROUTES.HOME.PATH)"
              class="flex items-center gap-1 cursor-pointer"
            >
              <HomeIcon class="fill-slate-600 size-8" />
              Главная
            </li>
            <li
              @click="handleNavigate(ROUTES.CART.PATH)"
              class="flex items-center gap-1 cursor-pointer"
            >
              <CartIcon class="fill-slate-600 size-8" />
              Корзина
            </li>
            <li
              @click="handleNavigate(ROUTES.FAVORITES.PATH)"
              class="flex items-center gap-1 cursor-pointer"
            >
              <FavoriteIcon class="fill-slate-600 size-8" />
              Избранное
            </li>
          </ul>
          <footer class="p-4 w-full text-xl text-slate-600">
            Общая сумма корзины:
            <span class="text-black">{{ formatPrice(store.totalPrice) }}</span>
          </footer>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<style scoped>
/* overlay animation */
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 200ms linear;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

/* content animation */
.content-enter-active,
.content-leave-active {
  transition: transform 200ms linear;
}

.content-enter-from,
.content-leave-to {
  transform: translateY(100%);
}
</style>
