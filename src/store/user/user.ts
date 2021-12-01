import { Module } from 'vuex'

import { IuserState } from './type'
import { IrootState } from '../type'

import {
  resGetUserData,
  resSearchUserData,
  resPatchUserData
} from '@/request/user/user'
const userModule: Module<IuserState, IrootState> = {
  namespaced: true,
  state() {
    return {
      userName: '',
      userList: []
    }
  },
  mutations: {
    changeUserName(state, pay: string) {
      state.userName = pay
    },
    changeUserList(state, list: any[]) {
      state.userList = list
    }
  },
  actions: {
    //pay ==> {url:/usrs/list}
    async getUserDataAction({ commit }, pay: any) {
      const resultUserData = await resGetUserData(pay.url)

      commit('changeUserList', resultUserData.data.list)
    },

    async resSearchUserDataAction({ commit }, pay: any) {
      const resultUserData = await resSearchUserData({
        url: '/users/list',
        data: pay
      })
      commit('changeUserList', resultUserData.data.list)
    },

    async resPatchUserDataAction({ dispatch }, data: any) {
      await resPatchUserData({ url: `/users/${data.id}`, data: { ...data } })
      // dispatch('resSearchUserDataAction', { url: '/users/list', data: {} })
    }
  }
}
export { userModule }
