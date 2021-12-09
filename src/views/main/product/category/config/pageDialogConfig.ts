// import { IForm } from '@/baseui/form/src/type'
import { IPageDialogConfig } from '@/components/page-dialog/src/type'

export const pageDialogConfig: IPageDialogConfig = {
  pageName: 'category',
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
    }
    // {
    //   field: 'createAt',
    //   type: 'datepicker',
    //   label: '创建时间 ',
    //   placeholder: '请选择创建时间~',
    //   slotName: 'createAt'
    // },
    // {
    //   field: 'updateAt',
    //   type: 'datepicker',
    //   label: '更新时间',
    //   placeholder: '请选择更新时间~',
    //   slotName: 'createAt'
    // }
  ]
}
