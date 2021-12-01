// import { IPageContentConfigType } from '@/components/pageContent/type'
import { IterTableConfig } from '@/baseui/tabel/src/type'
const tableConfig: IterTableConfig = {
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
      label: '部门ID',
      prop: 'departmentId',
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

  pageName: 'user',
  isShowButton: true,
  isShowSerial: true,
  isShowSecelection: true
}

export { tableConfig }
