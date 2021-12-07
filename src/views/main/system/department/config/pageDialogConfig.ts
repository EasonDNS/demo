import { IForm } from '@/baseui/form/src/type'

export const pageDialogConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: 'name: ',
      placeholder: '请输入部门名 ~',
      slotName: 'name'
      // selectOptions: [],
      // itemStyle: {
      //   labelWidth: '120px'
      // }
    },
    {
      field: 'leader',
      type: 'select',
      label: 'leader: ',
      placeholder: '请选择部门领导 ~',
      slotName: 'leader',
      selectOptions: [],
      itemStyle: {
        labelWidth: '120px'
      }
    },
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '查看 id'
    },

    {
      field: 'parentId',
      type: 'select',
      label: 'parentId',
      placeholder: '请选择上司ID',
      slotName: 'parentId',
      selectOptions: []
    }
  ],
  isShowHeader: true,
  formStyle: {
    labelWidth: '120px',
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

  pageName: 'department'
}
