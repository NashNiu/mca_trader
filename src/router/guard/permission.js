import NoAuthRouters from '@/router/routes/noAuth';
import AuthRoutes from '@/router/routes/auth';
import appConst from '@/config/appConst.js';
import { loginRoute, errorRoutes } from '@/router/routes';

const whiteListPath = [...NoAuthRouters, loginRoute, ...errorRoutes].map((item) => item.path);
const authRoutesPath = AuthRoutes.map((item) => item.path);
// 验证身份
const verifyToken = () => false;
export default function createPermissionGuard(router) {
  router.beforeEach(async (to) => {
    // 不需要登录的 直接过
    if (whiteListPath.includes(to.path)) {
      return true;
    } if (authRoutesPath.includes(to.path)) {
      // 验证身份或者登录信息
      if (!verifyToken()) {
        window.$message.error('请先登录');
        return {
          path: appConst.loginPath,
        };
      }
      return true;
    }
    return true;
  });
}
