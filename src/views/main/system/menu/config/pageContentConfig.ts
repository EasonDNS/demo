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
      width: '80px',
      slotName: 'id'
    },
    {
      label: '菜单名称',
      prop: 'name',
      minWidth: '50px',
      slotName: 'name'
    },
    {
      label: 'url',
      prop: 'url',
      minWidth: '50px',
      slotName: 'url'
    },
    {
      label: 'sort',
      prop: 'sort',
      width: '50px'
    },
    {
      label: 'permission',
      prop: 'permission'
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
