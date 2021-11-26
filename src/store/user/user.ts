import { Module } from 'vuex'

import { IuserState } from './type'
import { IrootState } from '../type'

import { resGetUserData } from '@/request/user/user'
const userModule: Module<IuserState, IrootState> = {
  namespaced: true,
  state() {
    return {
      userName: '',
      userList: []
    }
  },
  mutations: {
    changeUserName(state, pay: string) {
      state.userName = pay
    },
    changeUserList(state, list: any[]) {
      state.userList = list
    }
  },
  actions: {
    //pay ==> {url:/usrs/list}
    async getUserDataAction({ commit }, pay: any) {
      const resultUserData = await resGetUserData(pay.url)
      console.log(resultUserData.data)
      commit('changeUserList', resultUserData.data.list)
    }
  }
}
export { userModule }
