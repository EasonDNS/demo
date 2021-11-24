interface IForm {
  formitems: IFormItem[]
  pageName: string
  rules?: any
  formStyle?: IFormStyle
}

interface IFormItem {
  field: string
  type: IFormItemType
  label: string
  rules?: any
  options?: any
  placeholder?: string
  prop?: string
  isRequired?: boolean
}
type IFormItemType =
  | 'input'
  | 'select'
  | 'password'
  | 'datepicker'
  | 'checkbox'
  | 'inputnumber'

interface IFormStyle {
  colSpan?: number
  layout?: any
  labelWidth?: string
}

export { IForm, IFormItem }
