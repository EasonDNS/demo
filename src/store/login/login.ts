import { Module } from 'vuex'
import { IrootState } from '../type'
import { IloginState } from './type'

const loginModule: Module<IloginState, IrootState> = {
  namespaced: true,
  state() {
    return {
      name: ''
    }
  }
}

export { loginModule }
