// import { IPageContentConfigType } from '@/components/pageContent/type'
const pageContentConfig = {
  pageName: 'menu',
  isShowButton: false,
  isShowSerial: false,
  isShowHeader: false,
  isShowFooter: false,
  isShowSecelection: false,
  tree: {
    rowKey: 'id'
  },
  propList: [
    {
      label: '菜单id',
      prop: 'id',
      align: 'center',
      minWidth: '50px',
      sortable: true,
      slotName: 'id'
      // resizable: true
    },
    {
      label: '菜单名称',
      prop: 'name',
      align: 'center',
      minWidth: '50px',
      sortable: true,
      slotName: 'name'
    },
    {
      label: 'url',
      prop: 'url',
      align: 'center',
      minWidth: '50px',
      slotName: 'url'
    },
    {
      label: 'children',
      prop: 'children',
      align: 'center'
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
    }
  ]
}

export { pageContentConfig }
