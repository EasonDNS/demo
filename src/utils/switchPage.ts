const switchPage = (name: string, payload?: any): ISwitchItem => {
  switch (name) {
    case 'user':
      if (payload.name === 'reSet') {
        return {
          action: 'userModule/getUserListAction',
          url: '/users/list'
        }
      } else {
        return {
          action: 'userModule/getUserQueryAction',
          url: '/users/list'
        }
      }

      break

    case 'department':
      return {
        url: '/department/list',
        action: 'departmentModule/getDepartmentListAndQueryInfo',
        list: 'store.state.departmentModule.departmentList'
      }
      break

    case 'menu':
      if (payload) {
        if (payload.id) {
          if (payload.id == '') {
            return {
              url: '/menu/list',
              action: 'menuModule/getMenuListAction',
              list: 'store.state.menuModule.menuList'
            }
          } else {
            return {
              url: `/menu/${payload.id}`,
              action: 'menuModule/getMenuListAndQueryInfoAction',
              list: 'store.state.menuModule.menuList'
            }
          }
        } else {
          return {
            url: '/menu/list',
            action: 'menuModule/getMenuListAction',
            list: 'store.state.menuModule.menuList'
          }
        }
      } else {
        return {
          url: '/menu/list',
          action: 'menuModule/getMenuListAction',
          list: 'store.state.menuModule.menuList'
        }
      }
      break

    default:
      return {
        url: '',
        action: '',
        list: ''
      }
  }
}

export { switchPage }

interface ISwitchItem {
  url: string
  action: string
  list?: string
  map?: any
}
