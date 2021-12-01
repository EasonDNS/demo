import { IloginState } from './login/type'

import { IRolestate } from './role/type'
import { IDepartmentState } from './department/type'
import { IuserState } from './user/type'
interface IrootState {
  name: string
  password: string
  departmentInfo: any[]
  roleInfo: any[]
  jurisdiction: any[]
}

interface Imodule {
  loginModule: IloginState
  userModule: IuserState
  departmentModule: IDepartmentState
  roleModule: IRolestate
}

type Istate = IrootState & Imodule

export { Istate, IrootState }
