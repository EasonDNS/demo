import { IForm } from '@/baseui/form/src/type'

export const dialogConfig: IForm = {
  formItems: [
    {
      field: 'password',
      type: 'input',
      label: 'password: ',
      placeholder: '请输入password~'
    },
    {
      field: 'name',
      type: 'input',
      label: 'name: ',
      placeholder: '请输入名字~',
      slotName: 'name'
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
      field: 'realname',
      type: 'input',
      label: 'realname: ',
      placeholder: '请输入真名~'
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
      selectOptions: []
    }
  ],
  isShowHeader: true,
  formStyle: {
    labelWidth: '100px',
    justify: 'start',
    layout: {
      span: 24
    },

    footer: {
      resetName: '重置',
      researchName: '提交',
      style: {
        textAlign: 'right'
      }
    }
  },

  pageName: 'user'
}
