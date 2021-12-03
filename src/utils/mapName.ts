class MapName {
  page(pageName: string) {
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
      queryAction
    }
  }
}

export default new MapName()
