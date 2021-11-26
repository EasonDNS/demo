import { IForm } from '@/baseui/form'
import { rules } from './login-roules'
const loginConfig: IForm = {
  formItems: [
    {
      field: 'name',
      prop: 'name',
      type: 'input',
      label: '用户名:',
      placeholder: '请输入用户名:'
      // rules: [
      //   {
      //     required: true,
      //     message: '用户名是必传内容~',
      //     trigger: 'blur'
      //   },
      //   {
      //     pattern: /^[a-z0-9]{5,10}$/,
      //     message: '用户名必须是5~10个字母或者数字~',
      //     trigger: 'blur'
      //   }
      // ]
    },
    {
      field: 'password',
      type: 'password',
      prop: 'password',
      label: '密码:',
      placeholder: '请输入密码:',
      isRequired: true
      //     rules: [
      //       {
      //         required: true,
      //         message: '密码是必传内容~',
      //         trigger: 'blur'
      //       },
      //       {
      //         pattern: /^[a-z0-9]{3,}$/,
      //         message: '用户名必须是3位以上的字母或者数字~',
      //         trigger: 'blur'
      //       }
      //     ]
    }
  ],
  pageName: 'login',
  formStyle: {
    labelWidth: '80px',
    layout: {
      span: 24
    }
  },
  rules
}

export { loginConfig }
