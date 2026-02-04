import appConst from '@/config/appConst.js';
import noAuthRoutes from './noAuth';
import authRoutes from './auth';
// login page
export const loginRoute = {
  path: appConst.loginPath,
  name: 'Login',
  component: () => import('@/pages/login/index.vue'),
  meta: {
    title: '登录页',
  },
};
export const errorRoutes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/error/404.vue'),
  },
  {
    path: '/403',
    name: 'NoAuthority',
    component: () => import('@/pages/error/403.vue'),
  },
];
export default [
  loginRoute,
  ...noAuthRoutes,
  ...authRoutes,
  ...errorRoutes,
];
