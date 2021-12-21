export interface IForm {
  formItems: IFormItem[]
  pageName: string
  rules?: any
  labelPosition?: string
  formStyle?: IFormStyle
  isShowHeader?: boolean
  isShowFooter?: boolean
  footerStyle?: string
  isHandle?: boolean
}

export interface IFormItem {
  // 指定字段
  field: string
  // 指定用什么表单
  type: IFormItemType
  label: string
  itemStyle?: itemStyle
  rules?: any
  options?: any
  placeholder?: string
  prop?: string
  selectOptions?: any
  otherOptions?: any[]
  isShow?: boolean
  isRequired?: boolean
  slotName?: string
}
type IFormItemType =
  | 'input'
  | 'select'
  | 'password'
  | 'datepicker'
  | 'checkbox'
  | 'inputnumber'
  | 'radio'
  | 'tree'

type itemsize = 'medium' | 'small' | 'mini'
interface itemStyle {
  labelWidth?: string
  size?: itemsize
}
interface IFormStyle {
  layout?: any
  labelWidth?: string
  formAttr?: any
  footer?: Ifooter
  justify?: string
}

interface Ifooter {
  // 两个按钮名字的传入
  resetName?: string
  researchName?: string
  style?: {
    textAlign: string
  }
}
// export { IForm, IFormItem }
