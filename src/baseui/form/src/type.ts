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
