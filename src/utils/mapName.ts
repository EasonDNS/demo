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
        deleteAction = 'roleModule/deleteRoleAction'
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
  //list 数据,config:配置文件 ,field 处理字段,value:选项值字段   pay:下拉事件触发传过来的值
  visible(list: any[], config: any, field: string, value: string, pay: any) {
    const ctrlItem = config.formItems.find((item: any) => {
      return item.field === pay.field
    })
    if (ctrlItem?.field === field) {
      ctrlItem.selectOptions = []
      list.forEach((item) => {
        ctrlItem.selectOptions.push({
          value: item[value],
          label: item[field]
        })
      })
    }
  }
}

export default new MapName()
