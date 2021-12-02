import { Module } from 'vuex'
import { IRolestate } from './type'
import { IrootState } from '../type'

import { getRoleList, queryRole } from '@/request/role/role'
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
    // 分发的时候给pay 一个url 淘汰
    // 淘汰
    async getRoleListAction({ commit }) {
      const resultRoleData = await getRoleList({ url: '/role/list', data: {} })
      commit('changeRoleList', resultRoleData.data.list)
      commit('changeRoleTotalCount', resultRoleData.data.totalCount)
    },
    async queryRoleAction({ commit }, pay: any) {
      const resultRoleData = await queryRole({ url: '/role/list', data: pay })
      // console.log(resultRoleData.data)
      commit('changeRoleList', resultRoleData.data.list)
      commit('changeRoleTotalCount', resultRoleData.data.totalCount)
    }
  }
}
