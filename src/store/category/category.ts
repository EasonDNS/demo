import { Module } from 'vuex'
import { IrootState } from '../type'
import { ICategoryState } from './type'

import {
  regesterCategory,
  deleteCategory,
  patchCategory,
  queryCategory
} from '@/request/category/category'

const categoryModule: Module<ICategoryState, IrootState> = {
  namespaced: true,
  state() {
    return {
      list: [],
      totalCount: 0
    }
  },
  mutations: {
    changeList(state, pay: any) {
      state.list = pay
    },
    changeTotalCount(state, pay: any) {
      state.totalCount = pay
    }
  },
  actions: {
    // 增
    async regesterCategoryAction({ dispatch }, pay: any) {
      await regesterCategory({
        url: '/category',
        data: pay
      })
      dispatch('queryCategoryAction')
    },

    // 删   pay:{id} id必传
    async deleteCategoryAction({ dispatch }, pay: any) {
      await deleteCategory({
        url: `/category/${pay.id}`,
        data: {}
      })
      dispatch('queryCategoryAction')
    },

    // 改 pay:{id}
    async patchCategoryAction({ dispatch }, pay: any) {
      await patchCategory({
        url: `/category/${pay.id}`,
        data: pay
      })
      dispatch('queryCategoryAction')
    },
    // 查
    async queryCategoryAction({ commit }, pay: any) {
      const resultData = await queryCategory({
        url: '/category/list',
        data: pay ?? { offset: 0, size: 100 }
      })
      commit('changeList', resultData.data.list)
      commit('changeTotalCount', resultData.data.totalCount)
    }
  }
}

export { categoryModule }
