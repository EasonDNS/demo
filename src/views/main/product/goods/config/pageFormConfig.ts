import { IForm } from '@/baseui/form/src/type'

export const pageFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      prop: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入需要查询的id~'
      // rules: [
      //   {
      //     required: true,
      //     message: '请输入正确的id~',
      //     trigger: 'blur'
      //   },
      //   {
      //     min: 3,
      //     max: 5,
      //     message: '长度必须为 be 3 to 5',
      //     trigger: 'blur'
      //   }
      // ]
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
      placeholder: '请输入需要查询的商品类别码~',
      itemStyle: {
        labelWidth: '120px'
      }
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
  ],
  isShowHeader: true,
  pageName: 'goods'
}
