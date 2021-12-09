import { IPageFormConfig } from '@/components/page-form/src/type'

export const pageFormConfig: IPageFormConfig = {
  isShowHeader: true,
  isShowFooter: true,
  pageName: 'goods',
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
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      prop: 'oldPrice',
      field: 'oldPrice',
      type: 'input',
      label: '原价格',
      slotName: 'oldPrice'
    },
    {
      prop: 'newPrice',
      field: 'newPrice',
      type: 'input',
      label: '新价格',
      slotName: 'newPrice'
    },
    {
      prop: 'saleCount',
      field: 'saleCount',
      type: 'input',
      label: '销量'
    },
    {
      prop: 'address',
      field: 'address',
      type: 'input',
      label: '产地'
    },
    {
      prop: 'categoryId',
      field: 'categoryId',
      type: 'input',
      label: '所属类别'
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
