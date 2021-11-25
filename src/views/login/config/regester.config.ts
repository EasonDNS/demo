import { IForm } from '@/baseui/form'

const regesterConfig: IForm = {
  formitems: [
    {
      field: 'name',
      prop: 'name',
      label: '昵称:',
      placeholder: '请输入名字~',
      type: 'input'
    },
    {
      field: 'realname',
      prop: 'realname',
      type: 'input',
      label: '真名:',
      placeholder: '请输入真实姓名~'
    },
    {
      field: 'cellphone',
      prop: 'cellphone',
      type: 'input',
      label: '电话:',
      placeholder: '请输入电话号码~'
    },
    {
      field: 'password',
      prop: 'password',
      type: 'password',
      label: '密码:',
      placeholder: '请输入密码'
    }
  ],
  pageName: 'login',
  formStyle: {
    labelWidth: '60px',
    layout: {
      span: 24
    }
  }
}

export { regesterConfig }
