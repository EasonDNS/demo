// import { IForm } from '@/baseui/form/src/type'
import { IPageDialogConfig } from '@/components/page-dialog/src/type'

export const pageDialogConfig: IPageDialogConfig = {
  pageName: 'goods',
  isShowHeader: true,
  formStyle: {
    labelWidth: '120px',
    layout: {
      span: 24
    },
    footer: {
      resetName: '重置',
      researchName: '提交',
      style: {
        textAlign: 'center'
      }
    }
  },
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: 'id: ',
      placeholder: '请输入id~'
    },
    {
      field: 'name',
      type: 'input',
      label: 'name: ',
      placeholder: '请输入类别名称~',
      slotName: 'name'
    },
    {
      prop: 'newPrice',
      field: 'newPrice',
      type: 'input',
      label: '新价格',
      slotName: 'newPrice'
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
    }
  ]
}
