import { createStore, Store, useStore as usevuexStore } from 'vuex'
import { loginModule } from './login/login'
import { Istate } from './type'

import { roleModule } from './role/role'
import { departmentModule } from './department/department'
import { userModule } from './user/user'
export const store = createStore({
  state() {
    return {
      name: '',
      password: '',
      departmentInfo: [],
      roleInfo: [],
      jurisdiction: []
    }
  },
  mutations: {},
  actions: {},
  modules: {
    loginModule,
    userModule,
    departmentModule,
    roleModule
  }
})

export const setStoreLocal = () => {
  store.dispatch('loginModule/setStoreLocalAction')
}

export function useStore(): Store<Istate> {
  return usevuexStore()
}
