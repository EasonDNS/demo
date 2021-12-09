import { IForm } from '@/baseui/form/src/type'

export const pageFormConfig: IForm = {
  isShowHeader: true,
  isShowFooter: true,
  pageName: 'department',
  formItems: [
    {
      field: 'id',
      prop: 'id',
      type: 'input',
      label: 'id:',
      placeholder: '请输入部门id~'
    },
    {
      prop: 'name',
      field: 'name',
      type: 'input',
      label: '部门名:',
      placeholder: '请输入部门名~'
    },
    {
      prop: 'leader',
      field: 'leader',
      type: 'select',
      label: '选择领导',
      // itemStyle: {
      //   labelWidth: '80px'
      // },
      selectOptions: []
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
