// import { IForm } from '@/baseui/form/src/type'
import { IPageDialogConfig } from '@/components/page-dialog/src/type'

export const pageDialogConfig: IPageDialogConfig = {
  pageName: 'department',
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
      placeholder: '请输入部门名字~',
      slotName: 'name'
    },
    {
      field: 'leader',
      type: 'select',
      label: 'leader: ',
      placeholder: '请选择角色~',
      slotName: 'leader',
      selectOptions: []
    }
  ]
}
