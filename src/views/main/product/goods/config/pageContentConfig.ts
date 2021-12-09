import { IPageContentConfig } from '@/components/page-content/src/type'
const pageContentConfig: IPageContentConfig = {
  pageName: 'goods',
  isShowButton: true,
  isShowSerial: true,
  isShowSecelection: true,
  propList: [
    {
      label: 'id',
      prop: 'id',
      align: 'center',
      minWidth: '20px',
      sortable: true,
      slotName: 'id'
    },
    {
      prop: 'name',
      label: '商品名称',
      align: 'center',
      minWidth: '50px',
      sortable: true,
      slotName: 'name'
    },
    {
      prop: 'oldPrice',
      label: '原价格',
      align: 'center',
      minWidth: '30px',
      sortable: true,
      slotName: 'oldPrice'
    },
    {
      prop: 'newPrice',
      label: '现价格',
      align: 'center',
      minWidth: '30px',

      sortable: true,
      slotName: 'newPrice'
    },
    {
      prop: 'imgUrl',
      label: '商品图片',
      align: 'center',
      width: '80px',
      slotName: 'imgUrl'
    },
    {
      prop: 'saleCount',
      label: '商品销量',
      minWidth: '40px',
      align: 'center',
      slotName: 'saleCount'
    },
    {
      prop: 'address',
      label: '产地',
      align: 'center',
      minWidth: '30px',
      slotName: 'address'
    },
    {
      prop: 'inventoryCount',
      label: '总销量',
      align: 'center',
      minWidth: '30px',
      slotName: 'inventoryCount'
    },

    // {
    //   label: '创建时间',
    //   prop: 'createAt',
    //   align: 'center',
    //   sortable: true,
    //   minWidth: '50px',
    //   slotName: 'createAt'
    // },
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
      slotName: 'handlerBtn'
    }
  ]
}

export { pageContentConfig }
