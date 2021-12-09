import { createStore, Store, useStore as usevuexStore } from 'vuex'
import { loginModule } from './login/login'
import { Istate } from './type'
import { departmentModule } from './department/department'
import { menuModule } from './menu/menu'
import { roleModule } from './role/role'
import { userModule } from './user/user'
import { categoryModule } from './category/category'
import { goodsModule } from '@/store/goods/goods'
export const store = createStore({
  state() {
    return {
      name: '',
      password: ''
    }
  },
  mutations: {},
  actions: {},
  modules: {
    loginModule,
    departmentModule,
    menuModule,
    roleModule,
    userModule,
    categoryModule,
    goodsModule
  }
})

export const setStoreLocal = () => {
  store.dispatch('loginModule/setStoreLocalAction')
}

export function useStore(): Store<Istate> {
  return usevuexStore()
}
