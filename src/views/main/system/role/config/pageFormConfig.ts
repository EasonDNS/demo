import { IForm } from '@/baseui/form/src/type'

export const pageFormConfig: IForm = {
  pageName: 'role',
  isShowHeader: true,
  isShowFooter: true,
  formStyle: {
    justify: 'start'
  },
  formItems: [
    {
      field: 'id',
      prop: 'id',
      type: 'input',
      label: 'id:',
      placeholder: '请输入角色id~'
    },
    {
      prop: 'name',
      field: 'name',
      type: 'input',
      label: '角色名:',
      placeholder: '请输入角色名~'
    },
    {
      prop: 'intro',
      field: 'intro',
      type: 'input',
      label: '角色介绍:',
      placeholder: '请输入角色介绍~'
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
