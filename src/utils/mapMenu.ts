import { RouteRecordRaw, routerKey } from 'vue-router'
class mapMenu {
  jxls(): RouteRecordRaw[] {
    const routes: RouteRecordRaw[] = []
    const allFiles = require.context('/src/router/main/', true, /\.ts/)
    allFiles.keys().forEach((item) => {
      const route = require('../router' + item.split('.')[1])
      console.log(route)
      routes.push(route)
    })
    console.log(routes)
    return routes
  }
}
export default new mapMenu()
