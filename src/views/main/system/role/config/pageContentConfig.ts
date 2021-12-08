// import { IPageContentConfigType } from '@/components/pageContent/type'
const pageContentConfig = {
  pageName: 'role',
  isShowButton: true,
  isShowSerial: true,
  isShowSecelection: true,
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
      label: '角色名称',
      prop: 'name',
      align: 'center',
      minWidth: '50px',
      sortable: true,
      slotName: 'name'
    },
    {
      label: '介绍介绍',
      prop: 'intro',
      align: 'center',
      minWidth: '50px',
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
  ]
}

export { pageContentConfig }
