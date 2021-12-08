export interface ITableConfig {
  pageName: string
  propList: any[]
  isShowSerial?: boolean
  isShowButton?: boolean
  isShowSecelection?: boolean
  isShowHeader?: boolean
  isShowFooter?: boolean
  footer?: footer
  tree?: any
}

interface footer {
  total?: number
  small?: boolean
  currentPage?: number
  pageSizes?: number[]
  pageSize?: number
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
