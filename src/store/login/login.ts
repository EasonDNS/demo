import { Module } from 'vuex'
import { IrootState } from '../type'
import { IloginState } from './type'

import { accountLogin, getUserMenu } from '@/request/login/login'

import router from '@/router'
import { localcach, mapMenu } from '@/utils'
const loginModule: Module<IloginState, IrootState> = {
  namespaced: true,

  state() {
    return {
      name: '',
      password: '',
      token: '',
      userMenuList: '',
      userPermissions: []
    }
  },
  mutations: {
    changeName(state, pay: string) {
      state.name = pay
    },
    changePassword(state, pay: string) {
      state.password = pay
    },
    changeToken(state, pay: string) {
      state.token = pay
    },
    changeUserMenuList(state, pay: any) {
      state.userMenuList = pay
      mapMenu.regRoute(pay).forEach((route) => {
        router.addRoute('main', route)
      })
      // 权限数组
      const permissions = mapMenu.findJurisdiction(pay)
      state.userPermissions = permissions
    }
  },
  actions: {
    async accountLoignAction({ commit, dispatch }, payload: any) {
      // 1, 登陆 拿 到token
      const resultUserData = await accountLogin(payload.url, payload.data)
      commit('changeName', resultUserData.data.name)
      commit('changeToken', resultUserData.data.token)
      localcach.set('token', resultUserData.data.token)
      // 2,去拿到菜单
      const resultUserMenu = await getUserMenu({ url: '/menu/list' })
      commit('changeUserMenuList', resultUserMenu.data.list)
      localcach.set('userMenuList', resultUserMenu.data.list)
      // 3, 去拿到departmentInfo
      dispatch('departmentModule/getDepartmentListAction', null, { root: true })
      // 4, 拿 roleinfo

      dispatch('roleModule/getRoleListAction', null, { root: true })
      router.push('/main')
    },

    setStoreLocalAction({ commit, dispatch }) {
      const name = localcach.get('name')
      const password = localcach.get('password')
      const token = localcach.get('token')
      const userMenuList = localcach.get('userMenuList')
      if (name) {
        commit('changeName', name)
      }
      if (password) {
        commit('changePassword', password)
      }
      if (token) {
        commit('changeToken', token)
        dispatch('roleModule/getRoleListAction', null, { root: true })
        dispatch('departmentModule/getDepartmentListAction', null, {
          root: true
        })
      }
      if (userMenuList) {
        commit('changeUserMenuList', userMenuList)
      }
      // console.log('================1')
      // dispatch('roleModule/getRoleListAciton', null, { root: true })
      // dispatch('getDepartmentListAciton', {}, { root: true })
    }
  }
}

export { loginModule }
