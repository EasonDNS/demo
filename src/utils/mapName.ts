import { useStore } from '@/store'
// import { computed } from 'vue'
class MapName {
  id(menus: any[], id: number) {
    menus.forEach((item) => {
      if (item.id === id) {
        return item
      }
    })
  }
  findDeparmentNamebyId(id: number) {
    const store = useStore()

    const list = store.state.departmentModule.departmentList
    const departmentName = list.find((item: any) => {
      return item.id === id
    })
    return departmentName.name
  }

  footerData(pageName: string) {
    const store = useStore()
    let listData: any[] = []
    let total
    let queryAction

    switch (pageName) {
      case 'role':
        listData = store.state.roleModule.roleList
        total = store.state.roleModule.totalCount
        queryAction = 'roleModule/queryRoleAction'
        break
      case 'user':
        listData = store.state.userModule.userList
        total = store.state.userModule.userTotal
        queryAction = 'userModule/queryUserAction'
        break
      case 'goods':
        listData = store.state.goodsModule.list
        total = store.state.goodsModule.totalCount
        // listData = store.getters
        queryAction = 'goodsModule/queryGoodsAction'
        break
      default:
        break
    }
    return {
      listData: listData,
      total: total,
      queryAction: queryAction
    }
  }
}

export default new MapName()
