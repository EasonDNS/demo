import { IloginState } from './login/type'
import { IGoodsState } from '@/store/goods/type'
import { IRolestate } from './role/type'
import { IDepartmentState } from './department/type'
import { IuserState } from './user/type'
import { IMenuState } from '@/store/menu/type'
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
  menuModule: IMenuState
}

type Istate = IrootState & Imodule

interface childrenState {
  list: any[]
  totalCount: number
}
export { Istate, IrootState, childrenState }
