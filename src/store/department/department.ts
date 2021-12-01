import { Module } from 'vuex'
import { IrootState } from '../type'
import { IDepartmentState } from './type'

import {
  getDepartmentList,
  getDepartmentListAndQuery
} from '@/request/department/department'
export const departmentModule: Module<IDepartmentState, IrootState> = {
  namespaced: true,
  state() {
    return {
      departmentList: [],
      totalCount: 0
    }
  },
  mutations: {
    changeDepartmentList(state, pay: any) {
      state.departmentList = pay
    },
    changeTotalCount(state, pay: number) {
      state.totalCount = pay
    }
  },
  actions: {
    async getDepartmentListAction({ commit }) {
      const reslultDepartmentList = await getDepartmentList({
        url: '/department/list'
      })
      commit('changeDepartmentList', reslultDepartmentList.data.list)
      commit('changeTotalCount', reslultDepartmentList.data.totalCount)
    },
    async getDepartmentListAndQueryAction({ commit }, pay: any) {
      const resultDepartmentList = await getDepartmentListAndQuery({
        url: '/department/list',
        data: pay
      })
      console.log(resultDepartmentList.data)
      commit('changeDepartmentList', resultDepartmentList.data.list)
      commit('changeTotalCount', resultDepartmentList.data.totalCount)
    }
  }
}
