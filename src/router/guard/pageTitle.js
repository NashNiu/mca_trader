export default function createPageTitleGuard(router) {
  router.afterEach((to) => {
    const pageTitle = to.meta?.title;
    if (pageTitle) {
      document.title = `${pageTitle} | MCA`;
    } else {
      document.title = 'MCA';
    }
  });
}
