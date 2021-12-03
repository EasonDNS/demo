class MapName {
  id(menus: any[], id: number) {
    menus.forEach((item) => {
      if (item.id === id) {
        return item
      }
    })
  }

  footerData(pageName: string) {
    let queryAction
    switch (pageName) {
      case 'role':
        queryAction = 'roleModule/queryRoleAction'
        break
      case 'user':
        queryAction = 'userModule/queryUserAction'
        break
      case 'goods':
        queryAction = 'goodsModule/queryGoodsAction'
        break
      default:
        break
    }
    return {
      queryAction: queryAction
    }
  }
}

export default new MapName()
