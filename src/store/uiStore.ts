import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUiStore = defineStore('ui', () => {
  // state
  const menu = ref<boolean>(false);
  const modal = ref<boolean>(false);
  const isLoading = ref<boolean>(false);

  // actions
  const setMenu = (status: boolean) => {
    menu.value = status;
  };

  const setModal = (status: boolean) => {
    modal.value = status;
  };

  const setIsLoading = (status: boolean) => {
    isLoading.value = status;
  };

  return {
    menu,
    setMenu,
    modal,
    setModal,
    isLoading,
    setIsLoading,
  };
});
