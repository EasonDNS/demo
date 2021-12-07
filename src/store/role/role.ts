import { Module } from 'vuex'
import { IRolestate } from './type'
import { IrootState } from '../type'

import {
  regesterRole,
  deleteRole,
  patchRole,
  queryRole
} from '@/request/role/role'
export const roleModule: Module<IRolestate, IrootState> = {
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
    // 创建角色  增
    async regesterRoleAction({ dispatch }, pay: any) {
      await regesterRole({
        url: '/role',
        data: pay ?? {}
      })
      dispatch('queryRoleAction')
    },
    // 删除角色  删  pay:{id}
    async deleteRoleAction({ dispatch }, pay: any) {
      await deleteRole({
        url: `/role/${pay.id}`,
        data: {}
      })
      dispatch('queryRoleAction')
    },
    // 更新角色 改 pay:{id}
    async patchRoleAction({ dispatch }, pay: any) {
      await patchRole({
        url: `/role/${pay.id}`,
        data: pay
      })
      dispatch('queryRoleAction')
    },
    // 查询角色 查
    async queryRoleAction({ commit }, pay: any) {
      const resultRole = await queryRole({
        url: '/role/list',
        data: pay ?? {}
      })
      commit('changeList', resultRole.data.list)
      commit('changeTotalCount', resultRole.data.totalCount)
    }
  }
}
