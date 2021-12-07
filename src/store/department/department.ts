import { Module } from 'vuex'
import { IrootState } from '../type'
import { IDepartmentState } from './type'

import {
  queryDepartment,
  regesterDepartment,
  patchDepartment,
  deleteDepartment
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
    changeDepartmentList(state, pay: any) {
      state.list = pay
    },
    changeTotalCount(state, pay: number) {
      state.totalCount = pay
    }
  },
  actions: {
    // 查询部门列表
    async queryDepartmentAction({ commit }, payload: any) {
      const resultDepartmentData = await queryDepartment({
        url: '/department/list',
        data: payload ?? {}
      })
      commit('changeDepartmentList', resultDepartmentData.data.list)
      commit('changeTotalCount', resultDepartmentData.data.totalCount)
    },
    // 创建部门
    async regesterDepartmentAction({ dispatch }, payload: any) {
      console.log(payload)
      await regesterDepartment({
        url: '/department',
        data: payload
      })
      dispatch('queryDepartmentAction')
    },
    async patchDepartmentAction({ commit, dispatch }, payload: any) {
      console.log(payload)
      await patchDepartment({
        url: `/department/${payload.id}`,
        data: payload
      })

      dispatch('queryDepartmentAction')
    },
    async deleteDepartmentAction({ dispatch }, payload: any) {
      await deleteDepartment({
        url: `/department/${payload.id}`,
        data: {}
      })
      dispatch('queryDepartmentAction')
    }
  }
}
