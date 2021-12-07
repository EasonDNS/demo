import { ITableConfig } from '@/baseui/tabel/src/type'
const pageContentConfig: ITableConfig = {
  propList: [
    {
      label: 'id',
      prop: 'id',
      align: 'center',
      minWidth: '50px',
      sortable: true,
      soltName: 'id'
      // resizable: true
    },
    {
      label: 'name',
      prop: 'name',
      align: 'center',
      minWidth: '50px',
      sortable: true,
      soltName: 'name'
    },
    {
      label: '上司id',
      prop: 'parentId',
      align: 'center',
      minWidth: '50px',
      sortable: true,
      soltName: 'parentId'
    },

    {
      label: 'leader',
      prop: 'leader',
      align: 'center',
      width: '80',
      soltName: 'leader'
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
      prop: 'handleBtn',
      align: 'center',
      minWidth: '100px',
      soltName: 'handlerBtn'
    }
  ],

  pageName: 'department',
  isShowButton: true,
  isShowSerial: true,
  isShowSecelection: true
}

export { pageContentConfig }
