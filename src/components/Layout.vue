<script setup lang="ts">
import { onMounted } from 'vue';
import { Header, PageInfo, Menu } from '@/components';
import { useProductsStore } from '@/store/productsStore';
import { useUiStore } from '@/store/uiStore';
import { getLocalStorage } from '@/utils/localStorage';
import { BASE_URL, LOCAL_CART, LOCAL_FAVORITES } from '@/constants';
import axios from 'axios';

const uiStore = useUiStore();
const store = useProductsStore();

const getProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    store.setProducts(response.data.products);
  } catch (error) {
    console.error('Error fetching products', error);
  }
};

onMounted(() => {
  // getting cart and favorites data from localStorage
  store.setFavorites(getLocalStorage(LOCAL_FAVORITES, []));
  store.setCart(getLocalStorage(LOCAL_CART, []));

  // fetching data from mock
  getProducts();
});
</script>

<template>
  <div class="layout w-11/12 bg-white rounded-xl shadow-xl my-10">
    <Menu :isOpen="uiStore.menu" />
    <Header />
    <PageInfo />
    <div class="p-4">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 70px 60px auto;
}
</style>
