import { RouteRecordRaw } from 'vue-router'

class MapMenu {
  firstMenu: any = null
  regRoute(menus: any): RouteRecordRaw[] {
    const userRoutes: RouteRecordRaw[] = []
    // 得到 所有
    const allRoutes: RouteRecordRaw[] = []

    const routeFiles = require.context('../router/main', true, /\.ts/)
    routeFiles.keys().forEach((key) => {
      const route = require('../router/main' + key.split('.')[1])
      allRoutes.push(route.default)
    })

    const _recurseGetRoute = (menus: any[]) => {
      for (const item of menus) {
        if (item.type === 2) {
          if (!this.firstMenu) {
            this.firstMenu = item
          }
          const route = allRoutes.find((route) => item.url === route.path)
          if (route) {
            userRoutes.push(route)
          }
        } else {
          _recurseGetRoute(item.children)
        }
      }
    }
    _recurseGetRoute(menus)
    return userRoutes
  }
  findByid(menus: any, id: number) {
    for (const item of menus) {
      if (item.id === id) {
        return item
      } else if (item.type === 1) {
        const subitem: any = this.findByid(item.children, id)
        if (subitem) {
          return subitem
        }
      }
    }
  }
  findByPath(menus: any, path: string) {
    for (const item of menus) {
      if (item.url === path) {
        return item
      } else if (item.type === 1) {
        const subitem: any = this.findByPath(item.children, path)
        if (subitem) {
          return subitem
        }
      }
    }
  }
}

export default new MapMenu()
