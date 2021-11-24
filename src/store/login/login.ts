import { Module } from 'vuex'
import { IrootState } from '../type'
import { IloginState } from './type'

import { accountLogin, getUserMenu } from '@/request/login/login'

import { localcach } from '@/utils'
const loginModule: Module<IloginState, IrootState> = {
  namespaced: true,

  state() {
    return {
      name: '',
      password: '',
      token: '',
      userMenuList: ''
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
    }
  },
  actions: {
    async accountLoignAction({ commit }, payload: any) {
      const resultUserData = await accountLogin(payload.url, payload.data)
      commit('changeName', resultUserData.data.name)
      commit('changeToken', resultUserData.data.token)
      localcach.set('token', resultUserData.data.token)
    },

    async getUserMenuAction({ commit }, payload: any) {
      const resultUserMenu = await getUserMenu(payload.url)
      console.log(resultUserMenu)
      commit('changeUserMenuList', resultUserMenu.data.list)
      localcach.set('userMenuList', resultUserMenu.data.list)
    },
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
