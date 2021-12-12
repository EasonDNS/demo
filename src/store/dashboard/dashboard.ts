import { Module } from 'vuex'
import { IrootState } from '../type'
import { IDashboardState } from './type'

import { queryDashboard } from '@/request/dashboard/dashboard'
const dashboardModule: Module<IDashboardState, IrootState> = {
  namespaced: true,
  state() {
    return {
      goodsCount: [],
      goodsSale: [],
      goodsFavor: [],
      goodsSaleTop: [],
      goodsAddressSale: [],
      goodsAmountList: []
    }
  },
  mutations: {
    changeGoodsCount(state, pay: any[]) {
      state.goodsCount = pay
    },
    changeGoodsSale(state, pay: any[]) {
      state.goodsSale = pay
    },
    changeGoodsFavor(state, pay: any) {
      state.goodsFavor = pay
    },
    changeGoodsSaleTop(state, pay: any[]) {
      state.goodsSaleTop = pay
    },
    changeGoodsAddressSale(state, pay: any[]) {
      state.goodsAddressSale = pay
    },
    changeGoodsAmountList(state, pay: any[]) {
      state.goodsAmountList = pay
    }
  },
  actions: {
    // 查
    async queryDashboardAction({ dispatch }) {
      dispatch('queryGoodsCountAction')
      dispatch('queryGoodsSaleAction')
      dispatch('queryGoodsFavorAction')
      dispatch('queryGoodsSaleTopAction')
      dispatch('queryGoodsAddressSaleAction')
      dispatch('queryGoodsAmountListAction')
    },
    async queryGoodsCountAction({ commit }, pay: any) {
      const resultData = await queryDashboard({
        url: '/goods/category/count',
        data: {}
      })
      commit('changeGoodsCount', resultData.data)
    },
    async queryGoodsSaleAction({ commit }) {
      const resultData = await queryDashboard({
        url: '/goods/category/sale',
        data: {}
      })
      commit('changeGoodsSale', resultData.data)
    },
    async queryGoodsFavorAction({ commit }) {
      const resultData = await queryDashboard({
        url: 'goods/category/favor',
        data: {}
      })
      commit('changeGoodsFavor', resultData.data)
    },
    async queryGoodsSaleTopAction({ commit }) {
      const resultData = await queryDashboard({
        url: '/goods/sale/top10',
        data: {}
      })
      commit('changeGoodsSaleTop', resultData.data)
    },
    async queryGoodsAddressSaleAction({ commit }) {
      const resultData = await queryDashboard({
        url: 'goods/address/sale',
        data: {}
      })
      commit('changeGoodsAddressSale', resultData.data)
    },
    async queryGoodsAmountListAction({ commit }) {
      const resultData = await queryDashboard({
        url: '/goods/amount/list',
        data: {}
      })
      commit('changeGoodsAmountList', resultData.data)
    }
  }
}

export { dashboardModule }
