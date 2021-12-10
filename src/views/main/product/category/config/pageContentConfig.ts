import { IPageContentConfig } from '@/components/page-content/src/type'
const pageContentConfig: IPageContentConfig = {
  pageName: 'category',
  isShowButton: true,
  isShowSerial: true,
  isShowSecelection: true,
  propList: [
    {
      label: 'id',
      prop: 'id',
      align: 'center',
      minWidth: '50px',
      sortable: true,
      slotName: 'id'
    },
    {
      prop: 'name',
      label: '类别名称',
      align: 'center',
      minWidth: '50px',
      sortable: true,
      slotName: 'name'
    },

    {
      label: '创建时间',
      prop: 'createAt',
      align: 'center',
      minWidth: '50px',
      slotName: 'createAt',
      showOverflowTooltip: true
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
