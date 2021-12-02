import { useStore } from '@/store'
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
    let listData = []
    let total = 0
    switch (pageName) {
      case 'role':
        listData = store.state.roleModule.roleList
        total = store.state.roleModule.totalCount
        break
      case 'user':
        listData = store.state.userModule.userList
        total = store.state.userModule.userTotal
        break
      default:
        break
    }
    return {
      listData: listData,
      total: total
    }
  }
}

export default new MapName()
