import { IPageContentConfig } from '@/components/page-content/src/type'
const pageContentConfig: IPageContentConfig = {
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

  pageName: 'category',
  isShowButton: true,
  isShowSerial: true,
  isShowSecelection: true
}

export { pageContentConfig }
