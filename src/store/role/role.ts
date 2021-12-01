import { Module } from 'vuex'
import { IRolestate } from './type'
import { IrootState } from '../type'

import { getRoleList } from '@/request/role/role'
export const roleModule: Module<IRolestate, IrootState> = {
  namespaced: true,
  state() {
    return {
      roleList: [],
      totalCount: 0
    }
  },
  mutations: {
    changeRoleList(state, pay: any) {
      state.roleList = pay
    },
    changeRoleTotalCount(state, pay: number) {
      state.totalCount = pay
    }
  },
  actions: {
    // 分发的时候给pay 一个url
    async getRoleListAction({ commit }) {
      const resultRoleData = await getRoleList({ url: '/role/list' })
      // console.log(11111111111111111)
      // console.log(resultRoleData)

      commit('changeRoleList', resultRoleData.data.list)
      commit('changeRoleTotalCount', resultRoleData.data.totalCount)
    }
  }
}
