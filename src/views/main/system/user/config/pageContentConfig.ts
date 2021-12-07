// import { IPageContentConfigType } from '@/components/pageContent/type'
const pageContentConfig = {
  propList: [
    {
      label: '用户id',
      prop: 'id',
      align: 'center',
      minWidth: '50px',
      sortable: true,
      slotName: 'id'
      // resizable: true
    },
    {
      label: '用户名',
      prop: 'name',
      align: 'center',
      minWidth: '50px',
      sortable: true,
      slotName: 'name'
    },
    {
      label: '手机号',
      prop: 'cellphone',
      align: 'center',
      minWidth: '50px',
      slotName: 'cellphone'
    },
    {
      label: '状态',
      prop: 'enable',
      align: 'center',
      minWidth: '50px',
      slotName: 'status'
    },
    {
      label: '部门ID',
      prop: 'departmentId',
      align: 'center',
      width: '80',
      slotName: 'departmentId'
    },
    {
      label: '创建时间',
      prop: 'createAt',
      align: 'center',
      minWidth: '50px',
      slotName: 'createAt'
    },
    {
      label: '更新时间',
      prop: 'updateAt',
      align: 'center',
      minWidth: '50px',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      prop: 'handleBtn',
      align: 'center',
      minWidth: '100px',
      slotName: 'handlerBtn'
    }
  ],

  pageName: 'user',
  isShowButton: true,
  isShowSerial: true,
  isShowSecelection: true
}

export { pageContentConfig }
