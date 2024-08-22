import { createRouter, createWebHashHistory } from 'vue-router';
import {
  HomePage,
  CartPage,
  FavoritesPage,
  PageNotFound,
  ProductPage,
} from './pages';
import { ROUTES } from './constants';

const routes = [
  { path: ROUTES.HOME.PATH, name: ROUTES.HOME.NAME, component: HomePage },
  { path: ROUTES.CART.PATH, name: ROUTES.CART.NAME, component: CartPage },
  {
    path: ROUTES.FAVORITES.PATH,
    name: ROUTES.FAVORITES.NAME,
    component: FavoritesPage,
  },
  {
    path: ROUTES.NOT_FOUND.PATH,
    component: PageNotFound,
  },
  { path: ROUTES.PRODUCT.PATH, component: ProductPage },
];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
