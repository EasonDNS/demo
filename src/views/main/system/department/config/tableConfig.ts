// import { IPageContentConfigType } from '@/components/pageContent/type'
import { IterTableConfig } from '@/baseui/tabel/src/type'
const tableConfig: IterTableConfig = {
  propList: [
    {
      label: '上司',
      prop: 'leader',
      align: 'center',
      minWidth: '50px',
      sortable: true,
      soltName: 'leader'
      // resizable: true
    },
    {
      label: '部门名',
      prop: 'name',
      align: 'center',
      minWidth: '50px',
      sortable: true,
      soltName: 'name'
    },

    {
      label: '部门ID',
      prop: 'id',
      align: 'center',
      width: '80',
      soltName: 'departmentId'
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

export { tableConfig }
