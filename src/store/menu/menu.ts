import { IMenuState } from './type'
import { IrootState } from '../type'
import { Module } from 'vuex'

import {
  regesterMenu,
  deleteMenu,
  patchMenu,
  queryMenu
} from '@/request/menu/menu'
export const menuModule: Module<IMenuState, IrootState> = {
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
    // 创建菜单 增 ==> pay =data
    async regesterMenuAction({ dispatch }, pay: any) {
      await regesterMenu({
        url: '/menu',
        data: pay
      })
      dispatch('queryMenuAction')
    },
    // 删除菜单 删 pay{id}
    async deleteMenuAction({ dispatch }, pay: any) {
      await deleteMenu({
        url: `/menu/${pay.id}`,
        data: pay
      })
      dispatch('queryMenuAction')
    },
    // 更新菜单 改 pay{id}
    async patchMenuAction({ dispatch }, pay: any) {
      await patchMenu({
        url: `/menu/${pay.id}`,
        data: pay
      })
      dispatch('queryMenuAction')
    },
    // 查询菜单 查 pay:{可有可无}
    async queryMenuAction({ commit }, pay: any) {
      const resultMenu = await queryMenu({
        url: '/menu/list',
        data: pay ?? {}
      })
      commit('changeList', resultMenu.data.list)
      commit('changeTotalCount', resultMenu.data.totalCount)
    }
  }
}
