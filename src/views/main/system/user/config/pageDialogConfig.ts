// import { IForm } from '@/baseui/form/src/type'
import { IPageDialogConfig } from '@/components/page-dialog/src/type'

export const pageDialogConfig: IPageDialogConfig = {
  pageName: 'user',
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
      placeholder: '请输入名字~',
      slotName: 'name'
    },
    {
      field: 'realname',
      type: 'input',
      label: 'realname: ',
      placeholder: '请输入真名~'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: 'cellphone: ',
      placeholder: '请输入手机号~'
    },
    {
      field: 'enable',
      type: 'radio',
      label: 'enable: ',
      placeholder: '请选择状态~',
      otherOptions: [
        {
          label: 0,
          placeholder: '正常'
        },
        {
          label: 1,
          placeholder: '掉线'
        }
      ]
    },

    {
      field: 'roleId',
      type: 'select',
      label: 'roleId: ',
      placeholder: '请选择角色~',
      slotName: 'role',
      selectOptions: []
    },
    {
      field: 'departmentId',
      type: 'select',
      label: 'departmentId: ',
      placeholder: '请选择部门 id ~',
      slotName: 'dapartmentId',
      selectOptions: [],
      options: {
        labelWidth: '120px'
      }
    }
  ]
}
