import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import setupRouterGuard from './guard';

export const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: true,
});

export function setupRouter(app) {
  app.use(router);
  setupRouterGuard(router);
}
