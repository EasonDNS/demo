import { IloginState } from './login/type'

import { IuserState } from './user/type'
interface IrootState {
  name: string
  password: string
}

interface Imodule {
  loginModule: IloginState
  userModule: IuserState
}

type Istate = IrootState & Imodule

export { Istate, IrootState }
