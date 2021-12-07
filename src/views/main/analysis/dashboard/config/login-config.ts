import { IForm } from '@/baseui/form/src/type'
import { rules } from './login-roules'
const loginConfig: IForm = {
  isShowHeader: true,
  formItems: [
    {
      field: 'name',
      prop: 'name',
      type: 'input',
      label: '用户名:',
      placeholder: '请输入用户名:'
    },
    {
      field: 'password',
      type: 'password',
      prop: 'password',
      label: '密码:',
      placeholder: '请输入密码:'
    }
  ],
  pageName: 'login',
  formStyle: {
    labelWidth: '80px',
    layout: {
      span: 24
    },
    footer: {
      researchName: '注册',
      resetName: '登陆'
    }
  },
  rules
}

export { loginConfig }
