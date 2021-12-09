// import { IForm } from '@/baseui/form/src/type'
import { IPageDialogConfig } from '@/components/page-dialog/src/type'

export const pageDialogConfig: IPageDialogConfig = {
  pageName: 'role',
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
      field: 'name',
      type: 'input',
      label: 'name: ',
      placeholder: '请输入部门名字~',
      slotName: 'name'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色介绍 : ',
      placeholder: '请输入角色介绍~',
      slotName: 'intro'
    },
    {
      field: 'menuList',
      type: 'select',
      label: '角色菜单',
      placeholder: '请选择角色菜单',
      slotName: 'menuList',
      selectOptions: []
    }
  ]
}
