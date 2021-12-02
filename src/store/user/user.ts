import { Module } from 'vuex'

import { IuserState } from './type'
import { IrootState } from '../type'

import {
  resGetUserData,
  resSearchUserData,
  resPatchUserData,
  resRegesterUser
} from '@/request/user/user'
const userModule: Module<IuserState, IrootState> = {
  namespaced: true,
  state() {
    return {
      userName: '',
      userList: [],
      userTotal: 0
    }
  },
  mutations: {
    changeUserName(state, pay: string) {
      state.userName = pay
    },
    changeUserList(state, list: any[]) {
      state.userList = list
    },
    changeUserTotal(state, total: number) {
      state.userTotal = total
    }
  },
  actions: {
    //pay ==> {url:/usrs/list}
    async getUserDataAction({ commit }, pay: any) {
      const resultUserData = await resGetUserData(pay.url)
      commit('changeUserList', resultUserData.data.list)
      commit('changeUserTotal', resultUserData.data.totalCount)
    },

    // 查询用户 ==> 传数据过来
    async resSearchUserDataAction({ commit }, pay: any) {
      const resultUserData = await resSearchUserData({
        url: '/users/list',
        data: pay
      })
      commit('changeUserList', resultUserData.data.list)
    },

    // 修改用户 ==> 传数据过来
    async resPatchUserDataAction({ dispatch }, data: any) {
      await resPatchUserData({ url: `/users/${data.id}`, data: { ...data } })
      dispatch('getUserDataAction', { url: '/users/list', data: {} })
    },

    // 注册 用户 ==>只需要传入数据过来
    async resRegesterUserAction({ dispatch }, pay: any) {
      console.log(pay)
      await resRegesterUser({ url: '/users', data: pay })
      dispatch('getUserDataAction', { url: '/users/list' })
    }
  }
}
export { userModule }
