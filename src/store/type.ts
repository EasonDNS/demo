import { IloginState } from './login/type'
import { IGoodsState } from '@/store/goods/type'
import { IRolestate } from './role/type'
import { IDepartmentState } from './department/type'
import { IuserState } from './user/type'
import { IMenuState } from '@/store/menu/type'
import { ICategoryState } from './category/type'
interface IrootState {
  name: string
  password: string
}

interface Imodule {
  loginModule: IloginState
  userModule: IuserState
  departmentModule: IDepartmentState
  roleModule: IRolestate
  menuModule: IMenuState
  categoryModule: ICategoryState
  goodsModule: IGoodsState
}

type Istate = IrootState & Imodule

interface childrenState {
  list: any[]
  totalCount: number
}
export { Istate, IrootState, childrenState }
