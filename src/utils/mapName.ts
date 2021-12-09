import menuMask from 'naive-ui/lib/_internal/menu-mask'

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
      case 'category':
        regesterAction = 'categoryModule/regesterCategoryAction'
        deleteAction = 'categoryModule/deleteCategoryAction'
        patchAction = 'categoryModule/patchCategoryAction'
        queryAction = 'categoryModule/queryCategoryAction'
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
  //list 数据,config:配置文件 ,field 处理字段,value:选项值字段 label:显示字段  pay:下拉事件触发传过来的值
  visible(
    list: any[],
    config: any,
    field: string,
    value: string,
    label: string,
    pay: any
  ) {
    const ctrlItem = config.formItems.find((item: any) => {
      return item.field === pay.field
    })
    if (ctrlItem?.field === field) {
      ctrlItem.selectOptions = []
      list.forEach((item) => {
        ctrlItem.selectOptions.push({
          value: item[value],
          label: item[label]
        })
      })
    }
  }
  // 查询 配置文件里的所有插槽
  slots(config: any[]): string[] {
    const slotNames: string[] = []
    config?.forEach((item) => {
      if (item.slotName) {
        slotNames.push(item.slotName)
      }
    })
    return slotNames
  }

  // 查询menulist 里的所有菜单
  getid(list: any[], id: number): number[] {
    // 找到这个item ==>menuList
    const item = list.find((item) => item.id === id)
    //定义 接收数组
    const arrs: number[] = []
    // 定义递归函数
    const _recurse = (menus: any[]) => {
      menus.forEach((item) => {
        arrs.push(item.id)
        if (item.type != 3) {
          _recurse(item.children ?? [])
        }
      })
    }

    arrs.push(item.id)
    _recurse(item.menuList)
    return arrs
  }
}

export default new MapName()
