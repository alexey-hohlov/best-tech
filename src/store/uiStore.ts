import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUiStore = defineStore('ui', () => {
  // state
  const menu = ref<boolean>(false);
  const modal = ref<boolean>(false);

  // actions
  const setMenu = (status: boolean) => {
    menu.value = status;
  };

  const setModal = (status: boolean) => {
    modal.value = status;
  };

  return {
    menu,
    setMenu,
    modal,
    setModal,
  };
});
