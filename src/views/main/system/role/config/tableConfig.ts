// import { IPageContentConfigType } from '@/components/pageContent/type'
import { ITableConfig } from '@/baseui/tabel/src/type'
const tableConfig: ITableConfig = {
  propList: [
    {
      label: '角色id',
      prop: 'id',
      align: 'center',
      minWidth: '50px',
      sortable: true,
      slotName: 'id'
      // resizable: true
    },
    {
      label: '角色名',
      prop: 'name',
      align: 'center',
      minWidth: '50px',
      sortable: true,
      slotName: 'name'
    },

    {
      label: 'intro',
      prop: 'intro',
      align: 'center',
      width: '120',
      slotName: 'intro'
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

  pageName: 'role',
  isShowButton: true,
  isShowSerial: true,
  isShowSecelection: true
}

export { tableConfig }
