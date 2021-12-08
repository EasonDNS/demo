class MapName {
  page(pageName: string) {
    // 注册 增
    let regesterAction
    // 删除 删
    let deleteAction
    //更新 改
    let patchAction
    // 查询 查
    let queryAction
    switch (pageName) {
      case 'department':
        regesterAction = 'departmentModule/regesterDepartmentAction'
        deleteAction = 'departmentModule/deleteDepartmentAction'
        patchAction = 'departmentModule/patchDepartmentAction'
        queryAction = 'departmentModule/queryDepartmentAction'
        break
      case 'menu':
        regesterAction = 'menuModule/regesterMenuAction'
        deleteAction = 'menuModule/deleteMenuAction'
        patchAction = 'menuModule/patchMenuAction'
        queryAction = 'menuModule/queryMenuAction'
        break
      case 'role':
        regesterAction = 'roleModule/regesterRoleAction'
        deleteAction = 'releModule/deleteRoleAction'
        patchAction = 'roleModule/patchRoleAction'
        queryAction = 'roleModule/queryRoleAction'
        break
      case 'user':
        regesterAction = 'userModule/regesterUserAction'
        deleteAction = 'userModule/deleteUserAction'
        patchAction = 'userModule/patchUserAction'
        queryAction = 'userModule/queryUserAction'
        break
      case 'goods':
        regesterAction = 'goodsModule/regesterGoodsAction'
        deleteAction = 'goodsModule/deleteGoodsAction'
        patchAction = 'goodsModule/patchGoodsAction'
        queryAction = 'goodsModule/queryGoodsAction'
        break

      default:
        break
    }
    return {
      queryAction,
      regesterAction,
      patchAction,
      deleteAction
    }
  }
  select(list: any[]): any[] {
    const selectnames: any[] = []
    list.forEach((item) => {
      selectnames.push({
        value: item.id,
        label: item.name
      })
    })
    return selectnames
  }
}

export default new MapName()
