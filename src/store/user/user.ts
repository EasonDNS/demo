import { Module } from 'vuex'
import { IuserState } from './type'
import { IrootState } from '../type'

import {
  regesterUser,
  deleteUser,
  patchUser,
  queryUser
} from '@/request/user/user'
const userModule: Module<IuserState, IrootState> = {
  namespaced: true,
  state() {
    return {
      list: [],
      totalCount: 0
    }
  },
  mutations: {
    changeList(state, pay: any[]) {
      state.list = pay
    },
    changeTotalCount(state, pay: number) {
      state.totalCount = pay
    }
  },
  actions: {
    // 增加用户 增
    async regesterUserAction({ dispatch }, pay: any) {
      await regesterUser({
        url: '/users',
        data: pay
      })
      dispatch('queryUserAction')
    },
    // 删除用户 删  pay:{id}
    async deleteUserAction({ dispatch }, pay: any) {
      await deleteUser({
        url: `/users/${pay.id}`,
        data: {}
      })
      dispatch('queryUserAction')
    },
    // 更新用户 改 pay:{id}
    async patchUserAction({ dispatch }, pay: any) {
      await patchUser({
        url: `/users/${pay.id}`,
        data: pay
      })
      dispatch('queryUserAction')
    },
    //查询用户 查
    async queryUserAction({ commit }, pay: any) {
      const resultUser = await queryUser({
        url: '/users/list',
        data: pay ?? {}
      })
      commit('changeList', resultUser.data.list)
      commit('changeTotalCount', resultUser.data.totalCount)
    }
  }
}
export { userModule }
