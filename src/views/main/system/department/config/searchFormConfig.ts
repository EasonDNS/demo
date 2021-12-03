import { IForm } from '@/baseui/form/src/type'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      // prop: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      // prop: 'name',
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'leader',
      type: 'input',
      label: '上司:',
      placeholder: '上司~~'
    },
    {
      field: 'parentId',
      type: 'input',
      label: '部门Id: ',
      placeholder: '选择部门ID~'
    },

    {
      prop: 'createAt',
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      options: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  isShowHeader: true,
  pageName: 'department'
}
