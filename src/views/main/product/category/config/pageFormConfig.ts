import { IPageFormConfig } from '@/components/page-form/src/type'

export const pageFormConfig: IPageFormConfig = {
  isShowHeader: true,
  isShowFooter: true,
  pageName: 'category',
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
      label: '类别名称',
      placeholder: '请输入类别名称'
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
      label: '更新时间'
    }
  ]
}
