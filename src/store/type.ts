import { IloginState } from './login/type'

interface IrootState {
  name: string
  password: string
}

interface Imodule {
  loginModule: IloginState
}

type Istate = IrootState & Imodule

export { Istate, IrootState }
