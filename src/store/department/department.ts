import { Module } from 'vuex'
import { IrootState } from '../type'
import { IDepartmentState } from './type'

import {
  regesterDepartment,
  deleteDepartment,
  patchDepartment,
  queryDepartment
} from '@/request/department/department'
export const departmentModule: Module<IDepartmentState, IrootState> = {
  namespaced: true,
  state() {
    return {
      list: [],
      totalCount: 0
    }
  },
  mutations: {
    changeDepartmentList(state, pay: any[]) {
      state.list = pay
    },
    changeTotalCount(state, pay: number) {
      state.totalCount = pay
    }
  },
  actions: {
    // 创建部门 增
    async regesterDepartmentAction({ dispatch }, payload: any) {
      await regesterDepartment({
        url: '/department',
        data: payload
      })
      dispatch('queryDepartmentAction')
    },
    // 删除部门 删
    async deleteDepartmentAction({ dispatch }, payload: any) {
      await deleteDepartment({
        url: `/department/${payload.id}`,
        data: {}
      })
      dispatch('queryDepartmentAction')
    },

    // 更新部门数据 改
    async patchDepartmentAction({ dispatch }, payload: any) {
      await patchDepartment({
        url: `/department/${payload.id}`,
        data: payload
      })

      dispatch('queryDepartmentAction')
    },
    // 查询部门数据 查
    async queryDepartmentAction({ commit }, payload: any) {
      const resultDepartmentData = await queryDepartment({
        url: '/department/list',
        data: payload ?? {}
      })
      commit('changeDepartmentList', resultDepartmentData.data.list)
      commit('changeTotalCount', resultDepartmentData.data.totalCount)
    }
  }
}
