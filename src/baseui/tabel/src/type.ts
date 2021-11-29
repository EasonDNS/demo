export interface IterTableConfig {
  propList: any[]
  isShowSerial?: boolean
  isShowButton?: boolean
  isShowSecelection?: boolean
  pageName?: string
}

// export { IterTableConfig }
import { IForm } from '@/baseui/form/src/type'
export interface IDialogConfig {
  dialogData: any
  pageName?: string
  isShowDialog?: boolean
  dialogStyle?: any
  formConfig: IForm
}
