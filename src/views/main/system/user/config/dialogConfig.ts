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
      type: 'input',
      label: 'roleId: ',
      placeholder: '请选择角色~',
      slotName: 'role'
    },
    {
      field: 'departmentId',
      type: 'select',
      label: 'departmentId: ',
      placeholder: '请选择部门 id ~',
      slotName: 'dapartmentId',
      selectOptions: []
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      placeholder: '请选择创建时间~',
      slotName: 'createAt',
      options: {
        // readonly: true
      }
    },
    {
      field: 'updateAt',
      type: 'datepicker',
      label: '更新时间',
      placeholder: '请选择更新时间~',
      slotName: 'updateAt',
      options: {
        // readonly: true
      }
    }
  ],
  isShow: true,
  formStyle: {
    labelWidth: '100px',
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
