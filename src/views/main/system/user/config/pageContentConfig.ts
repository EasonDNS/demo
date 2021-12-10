// import { IPageContentConfigType } from '@/components/pageContent/type'
const pageContentConfig = {
  pageName: 'user',
  isShowButton: true,
  isShowSerial: true,
  isShowSecelection: true,
  propList: [
    {
      label: '用户id',
      prop: 'id',
      minWidth: '50px',
      slotName: 'id'
      // resizable: true
    },
    {
      label: '用户名',
      prop: 'name',
      minWidth: '50px',
      slotName: 'name'
    },
    {
      label: '手机号',
      prop: 'cellphone',
      minWidth: '50px',
      slotName: 'cellphone'
    },
    {
      label: '状态',
      prop: 'enable',
      minWidth: '50px',
      slotName: 'status'
    },
    {
      label: '部门ID',
      prop: 'departmentId',
      width: '80',
      slotName: 'departmentId'
    },
    {
      label: '创建时间',
      prop: 'createAt',
      minWidth: '50px',
      slotName: 'createAt'
    },
    {
      label: '更新时间',
      prop: 'updateAt',
      minWidth: '50px',
      slotName: 'updateAt'
    }
  ]
}

export { pageContentConfig }
