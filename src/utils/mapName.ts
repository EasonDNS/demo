class MapName {
  page(pageName: string) {
    let queryAction
    let regesterAction
    let patchAction
    let deleteAction
    switch (pageName) {
      case 'role':
        queryAction = 'roleModule/queryRoleAction'
        regesterAction = 'roleModule/regesterRoleAction'
        patchAction = 'roleModule/patchRoleAction'
        deleteAction = 'releModule/deleteRoleAction'
        break
      case 'user':
        queryAction = 'userModule/queryUserAction'
        regesterAction = 'userModule/regesterUserAction'
        patchAction = 'userModule/patchUserAction'
        deleteAction = 'userModule/deleteUserAction'
        break
      case 'goods':
        queryAction = 'goodsModule/queryGoodsAction'
        regesterAction = 'goodsModule/regesterGoodsAction'
        patchAction = 'goodsModule/patchGoodsAction'
        deleteAction = 'goodsModule/deleteGoodsAction'
        break

      case 'department':
        queryAction = 'departmentModule/queryDepartmentAction'
        regesterAction = 'departmentModule/regesterDepartmentAction'
        patchAction = 'departmentModule/patchDepartmentAction'
        deleteAction = 'departmentModule/deleteDepartmentAction'
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
}

export default new MapName()
