// import { IPageContentConfigType } from '@/components/pageContent/type'
const tableConfig: any = {
  propList: [
    {
      label: '用户id',
      prop: 'id',
      align: 'center',
      minWidth: '50px',
      sortable: true,
      soltName: 'id'
      // resizable: true
    },
    {
      label: '用户名',
      prop: 'name',
      align: 'center',
      minWidth: '50px',
      sortable: true,
      soltName: 'name'
    },
    {
      label: '手机号',
      prop: 'cellphone',
      align: 'center',
      minWidth: '50px',
      soltName: 'cellphone'
    },
    {
      label: '状态',
      prop: 'enable',
      align: 'center',
      minWidth: '50px',
      soltName: 'status'
    },
    {
      label: '创建时间',
      prop: 'createAt',
      align: 'center',
      minWidth: '50px',
      soltName: 'createAt'
    },
    {
      label: '更新时间',
      prop: 'updateAt',
      align: 'center',
      minWidth: '50px',
      soltName: 'updateAt'
    },
    {
      label: '操作',
      prop: 'handlerBtn',
      align: 'center',
      minWidth: '100px',
      soltName: 'handlerBtn'
    }
  ],

  pageName: 'user',
  isShowSerial: false,
  isShowSecelection: true
}

export { tableConfig }
