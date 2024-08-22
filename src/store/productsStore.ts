import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { IProduct, ICartItem } from '@/types/productsTypes';
import { SortBy } from '@/types/storeTypes';
import { setLocalStorage } from '@/utils/localStorage';
import { LOCAL_CART, LOCAL_FAVORITES } from '@/constants';

export const useProductsStore = defineStore('products', () => {
  // state
  const products = ref<IProduct[]>([]);
  const favorites = ref<IProduct[]>([]);
  const cart = ref<ICartItem[]>([]);
  const searchQuery = ref<string>('');
  const sortBy = ref<SortBy>(SortBy.default);

  // getters
  const totalPrice = computed(() =>
    cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );

  const totalQuantity = computed(() =>
    cart.value.reduce((acc, item) => acc + 1 * item.quantity, 0)
  );

  const filteredProducts = computed(() => {
    let filtered = products.value.filter(product =>
      product.name
        .toLocaleLowerCase()
        .includes(searchQuery.value.toLocaleLowerCase())
    );

    switch (sortBy.value) {
      case SortBy.default:
        break;
      case SortBy.ascilation:
        filtered = filtered.sort((a, b) => a.price - b.price);
        break;
      case SortBy.descilation:
        filtered = filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return filtered;
  });

  // actions
  const setProducts = (data: IProduct[]) => {
    products.value = data;
  };

  const setCart = (data: ICartItem[]) => {
    cart.value = data;
  };

  const setFavorites = (data: IProduct[]) => {
    favorites.value = data;
  };

  const addToFavorites = (data: IProduct) => {
    favorites.value.push(data);
  };

  const removeFromFavorites = (id: string) => {
    const index = favorites.value.findIndex(item => item.id == id);
    if (index === -1) return;
    favorites.value.splice(index, 1);
  };

  const addToCart = (product: IProduct) => {
    cart.value.push({ ...product, quantity: 1 });
  };

  const removeFromCart = (id: string) => {
    const index = cart.value.findIndex(item => item.id === id);
    if (index !== -1) {
      cart.value.splice(index, 1);
    }
  };

  const increaceQuantity = (id: string) => {
    const index = cart.value.findIndex(item => item.id === id);
    cart.value[index].quantity++;
  };

  const decreaseQuantity = (id: string) => {
    const index = cart.value.findIndex(item => item.id === id);
    cart.value[index].quantity--;
  };

  const setSearchQuery = (query: string) => {
    searchQuery.value = query;
  };

  const setSort = (sort: string) => {
    sortBy.value = sort as SortBy;
  };

  // watchers
  watch(
    () => cart.value,
    newCartItems => {
      setLocalStorage(LOCAL_CART, newCartItems);
    },
    { deep: true }
  );

  watch(
    () => favorites.value,
    newFavorites => {
      setLocalStorage(LOCAL_FAVORITES, newFavorites);
    },
    { deep: true }
  );

  return {
    products,
    favorites,
    cart,
    setProducts,
    setCart,
    setFavorites,
    addToFavorites,
    removeFromFavorites,
    addToCart,
    removeFromCart,
    totalPrice,
    totalQuantity,
    increaceQuantity,
    decreaseQuantity,
    filteredProducts,
    setSearchQuery,
    searchQuery,
    sortBy,
    setSort,
  };
});
