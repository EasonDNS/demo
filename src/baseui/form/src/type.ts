export interface IForm {
  formItems: IFormItem[]
  pageName: string
  rules?: any
  formStyle?: IFormStyle
  isShow?: boolean
}

export interface IFormItem {
  field: string
  type: IFormItemType
  label: string
  rules?: any
  options?: any
  placeholder?: string
  prop?: string
  otherOptions?: any[]
  isRequired?: boolean
}
type IFormItemType =
  | 'input'
  | 'select'
  | 'password'
  | 'datepicker'
  | 'checkbox'
  | 'inputnumber'
  | 'radio'

interface IFormStyle {
  layout?: any
  labelWidth?: string
  formAttr?: any
  footer?: Ifooter
}

interface Ifooter {
  resetName?: string
  researchName?: string
  style?: {
    textAlign: string
  }
}
// export { IForm, IFormItem }
