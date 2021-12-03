import { IForm } from '@/baseui/form/src/type'

export const pageFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      prop: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入需要查询的id~'
    },
    {
      field: 'name',
      prop: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入需要查询的商品名称~'
    },
    {
      field: 'address',
      prop: 'address',
      type: 'input',
      label: '生产地: ',
      placeholder: '请输入需要查询的商品生产地~'
    },
    {
      prop: 'categoryId',
      field: 'categoryId',
      type: 'input',
      label: '商品类别码: ',
      placeholder: '请输入需要查询的商品类别码~'
    },

    {
      prop: 'createAt',
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间'
      // options: {
      //   startPlaceholder: '开始时间',
      //   endPlaceholder: '结束时间',
      //   type: 'daterange'
      // }
    },
    {
      prop: 'updateAt',
      field: 'updateAt',
      type: 'datepicker',
      label: '创建时间'
    }
  ],
  isShow: true,
  pageName: 'goods'
}
