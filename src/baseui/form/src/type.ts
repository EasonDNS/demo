interface IForm {
  formitems: IFormItem[]
  pageName: string
  formStyle?: IFormStyle
}

interface IFormItem {
  field: string
  type: IFormItemType
  label: string
  rules?: []
  options?: any
  placeholder?: string
  prop?: string
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
