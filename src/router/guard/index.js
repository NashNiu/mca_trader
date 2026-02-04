import createPageLoadingGuard from './pageLoading';
import createPageTitleGuard from './pageTitle';
import createPermissionGuard from './permission';

export default function setupRouterGuard(router) {
  createPageLoadingGuard(router);
  createPageTitleGuard(router);
  createPermissionGuard(router);
}
