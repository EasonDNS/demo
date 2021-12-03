import { Module } from 'vuex'
import { IrootState } from '@/store/type'
import { IGoodsState } from './type'
import { getGoods, queryGoods } from '@/request/goods/goods'

export const goodsModule: Module<IGoodsState, IrootState> = {
  namespaced: true,
  state() {
    return {
      list: [],
      totalCount: 0
    }
  },
  getters: {
    getterList(state) {
      return state.list
    },
    getterTotalCount(state) {
      return state.totalCount
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
    // 初始数据
    async getGoodsAction({ commit }, pay: any) {
      const resultGoodsData = await getGoods({ url: '/goods/list', data: pay })
      // console.log(resultGoodsData.data)
      commit('changeList', resultGoodsData.data.list)
      commit('changeTotalCount', resultGoodsData.data.totalCount)
    },
    // 查询数据
    async queryGoodsAction({ commit }, pay: any) {
      const resultGoodsData = await queryGoods({
        url: '/goods/list',
        data: pay ?? {}
      })
      commit('changeList', resultGoodsData.data.list)
      commit('changeTotalCount', resultGoodsData.data.totalCount)
    }
  }
}
