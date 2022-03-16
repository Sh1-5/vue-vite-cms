export const pathMapBreadCrumb = (userMenus: any, path: string) => {
  const breadCrumb: string[] = []
  pathMapMenu(userMenus, path, breadCrumb)
  return breadCrumb
}

export const pathMapMenu = (
  userMenus: any,
  path: string,
  breadCrumb?: string[]
) => {
  for (const item of userMenus) {
    if (item.type === 1) {
      const findMenu: any = pathMapMenu(item.children ?? [], path)
      if (findMenu) {
        breadCrumb?.push(item.name)
        breadCrumb?.push(findMenu.name)
        return findMenu
      }
    } else if (item.type === 2 && item.url === path) {
      return item
    }
  }
}
