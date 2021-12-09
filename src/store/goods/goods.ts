import { Module } from 'vuex'
import { IrootState } from '@/store/type'
import { IGoodsState } from './type'
import {
  regesterGoods,
  deleteGooeds,
  patchGoods,
  queryGoods
} from '@/request/goods/goods'

export const goodsModule: Module<IGoodsState, IrootState> = {
  namespaced: true,
  state() {
    return {
      list: [],
      totalCount: 0
    }
  },

  mutations: {
    changeList(state, list: any[]) {
      state.list = list
    },
    changeTotalCount(state, totalCount: number) {
      state.totalCount = totalCount
    }
  },

  actions: {
    // 增
    async regesterGoodsAction({ dispatch }, pay: any) {
      await regesterGoods({
        url: '/goods',
        data: pay
      })
      dispatch('queryGoodsAction')
    },
    // 删  pay:{id}
    async deleteGooedsAction({ dispatch }, pay: any) {
      await deleteGooeds({
        url: `/goods/${pay.id}`,
        data: {}
      })
      dispatch('queryGoodsAction')
    },
    // 改 pay:{id}
    async patchGoodsAction({ dispatch }, pay: any) {
      await patchGoods({
        url: `/goods/${pay.id}`,
        data: pay
      })
      dispatch('queryGoodsAction')
    },
    // 查
    async queryGoodsAction({ commit }, pay: any) {
      const resultData = await queryGoods({
        url: '/goods/list',
        data: pay ?? { offset: 0, size: 10 }
      })
      commit('changeList', resultData.data.list)
      commit('changeTotalCount', resultData.data.totalCount)
    }
  }
}
