import { createPinia } from 'pinia';

export { default as useUserStore } from './module/user';

export function setupStore(app) {
  app.use(createPinia());
}
