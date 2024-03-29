import { IForm } from '@/baseui/form/src/type'

export const pageFormConfig: IForm = {
  isShowHeader: true,
  isShowFooter: true,
  pageName: 'user',
  formItems: [
    {
      field: 'id',
      prop: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      prop: 'name',
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      prop: 'realname',
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      prop: 'cellphone',
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },

    {
      prop: 'createAt',
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间'
    },
    {
      prop: 'updateAt',
      field: 'updateAt',
      type: 'datepicker',
      label: '创建时间'
    }
  ]
}
