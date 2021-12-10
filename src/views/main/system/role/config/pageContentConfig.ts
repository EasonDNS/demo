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
      minWidth: '50px',
      slotName: 'id'
    },
    {
      label: '角色名称',
      prop: 'name',
      minWidth: '50px',
      slotName: 'name'
    },
    {
      label: '介绍介绍',
      prop: 'intro',
      minWidth: '50px',
      slotName: 'intro'
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
