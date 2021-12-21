import { IPageFormConfig } from '@/components/page-form/src/type'

export const regesterConfig: IPageFormConfig = {
  pageName: 'regester',
  labelPosition: 'top',
  footerStyle: 'center',
  isHandle: true,
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: 'ID:',
      placeholder: '输入你喜欢的ID~'
    },
    {
      field: 'name',
      type: 'input',
      label: '用户名:',
      placeholder: '请输入用户名'
    },
    {
      field: 'password',
      type: 'password',
      label: '密码:',
      placeholder: '请输入密码'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码:',
      placeholder: '请输入电话号码'
    },
    {
      field: 'roleId',
      type: 'select',
      label: '角色:',
      placeholder: '请选择角色',
      selectOptions: []
    },
    {
      field: 'departmentId',
      type: 'select',
      label: '部门: ',
      placeholder: '请选择部门',
      selectOptions: []
    }
  ],
  formStyle: {
    layout: {},
    labelWidth: '150px',
    footer: {
      researchName: '提交'
    }
  }
}
