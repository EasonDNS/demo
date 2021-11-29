import { IForm } from '@/baseui/form/src/type'

export const dialogConfig: IForm = {
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
      placeholder: '请输入名字~'
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
    }
  ],
  isShow: true,
  formStyle: {
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

  pageName: 'user'
}
