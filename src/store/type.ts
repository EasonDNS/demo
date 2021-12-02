import { IloginState } from './login/type'
import { IGoodsState } from '@/store/goods/type'
import { IRolestate } from './role/type'
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
  roleModule: IRolestate
  goodsModule: IGoodsState
}

type Istate = IrootState & Imodule

export { Istate, IrootState }
