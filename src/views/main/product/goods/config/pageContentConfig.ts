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
      minWidth: '20px',
      slotName: 'id'
    },
    {
      prop: 'name',
      label: '商品名称',
      minWidth: '50px',
      showOverflowTooltip: true,
      slotName: 'name'
    },
    {
      prop: 'oldPrice',
      label: '原价格',
      minWidth: '30px',
      slotName: 'oldPrice'
    },
    {
      prop: 'newPrice',
      label: '现价格',
      minWidth: '30px',
      slotName: 'newPrice'
    },
    {
      prop: 'imgUrl',
      label: '商品图片',
      width: '80px',
      slotName: 'imgUrl'
    },
    {
      prop: 'saleCount',
      label: '商品销量',
      minWidth: '40px',
      slotName: 'saleCount'
    },
    {
      prop: 'address',
      label: '产地',
      minWidth: '30px',
      slotName: 'address'
    },
    {
      prop: 'inventoryCount',
      label: '总销量',
      minWidth: '30px',
      slotName: 'inventoryCount'
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
