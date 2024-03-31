/**
 * 将路由数据转换为菜单数据
 * @param {Array} router
 * @returns {Array}
 */
export function getMenuList(routerList = []) {
  const list = [];

  routerList.sort((a, b) => a.sort - b.sort);
  routerList.forEach(item => {
    if (!item.hidden) {
      list.push({
        icon: item.meta?.icon,
        title: item.meta?.title,
        path: item.path,
      });
    }
  });
  return list;
}
