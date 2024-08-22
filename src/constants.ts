export const BASE_URL = '/mock.json';
export const LOCAL_CART = 'cart';
export const LOCAL_FAVORITES = 'favorites';

export const ROUTES = {
  HOME: {
    PATH: '/',
    NAME: 'Все товары',
  },
  CART: {
    PATH: '/cart',
    NAME: 'Корзина',
  },
  FAVORITES: {
    PATH: '/favorites',
    NAME: 'Избранное',
  },
  PRODUCT: {
    PATH: '/product/:id',
  },
  NOT_FOUND: {
    PATH: '/:pathMatch(.*)*',
  },
};
