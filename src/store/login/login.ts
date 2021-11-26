import { Module } from 'vuex'
import { IrootState } from '../type'
import { IloginState } from './type'

import { accountLogin, getUserMenu } from '@/request/login/login'

import router from '@/router'
import { localcach, mapMenu } from '@/utils'
const loginModule: Module<IloginState, IrootState> = {
  namespaced: true,

  state() {
    return {
      name: '',
      password: '',
      token: '',
      userMenuList: '',
      other: ''
    }
  },
  mutations: {
    changeName(state, pay: string) {
      state.name = pay
    },
    changePassword(state, pay: string) {
      state.password = pay
    },
    changeToken(state, pay: string) {
      state.token = pay
    },
    changeUserMenuList(state, pay: any) {
      state.userMenuList = pay
      mapMenu.regRoute(pay).forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    async accountLoignAction({ commit, dispatch }, payload: any) {
      const resultUserData = await accountLogin(payload.url, payload.data)
      commit('changeName', resultUserData.data.name)
      commit('changeToken', resultUserData.data.token)
      localcach.set('token', resultUserData.data.token)

      const resultUserMenu = await getUserMenu({ url: '/menu/list' })
      console.log(resultUserMenu)
      commit('changeUserMenuList', resultUserMenu.data.list)
      localcach.set('userMenuList', resultUserMenu.data.list)

      // dispatch('loginModule/getUserMenuAction', { url: '/menu/list' })
      // 拿到菜单再跳转
      router.push('/main')
      // mapMenu.regesRoutes(resultUserData.data.list)
    },

    // async getUserMenuAction({ commit }, payload: any) {
    //   const resultUserMenu = await getUserMenu(payload.url)

    //   commit('changeUserMenuList', resultUserMenu.data.list)
    //   localcach.set('userMenuList', resultUserMenu.data.list)

    //   // mapMenu.regesRoutes(resultUserMenu.data.list).forEach((route) => {
    //   //   console.log('==============')
    //   //   console.log(route)
    //   //   router.addRoute('main', route)
    //   // })
    // },

    setStoreLocalAction({ commit }) {
      const name = localcach.get('name')
      const password = localcach.get('password')
      const token = localcach.get('token')
      const userMenuList = localcach.get('userMenuList')
      if (name) {
        commit('changeName', name)
      }
      if (password) {
        commit('changePassword', password)
      }
      if (token) {
        commit('changeToken', token)
      }
      if (userMenuList) {
        commit('changeUserMenuList', userMenuList)
      }
    }
  }
}

export { loginModule }