import { IloginState } from './login/type'

import { IDepartmentState } from './department/type'
import { IuserState } from './user/type'
interface IrootState {
  name: string
  password: string
}

interface Imodule {
  loginModule: IloginState
  userModule: IuserState
  departmentModule: IDepartmentState
}

type Istate = IrootState & Imodule

export { Istate, IrootState }
