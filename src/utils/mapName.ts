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
}

export default new MapName()
