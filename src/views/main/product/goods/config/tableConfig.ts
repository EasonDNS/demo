// import { IPageContentConfigType } from '@/components/pageContent/type'
import { IterTableConfig } from '@/baseui/tabel/src/type'
const tableConfig: IterTableConfig = {
  propList: [
    {
      label: '商品id',
      prop: 'id',
      align: 'center',
      minWidth: '50px',
      sortable: true,
      slotName: 'id'
      // resizable: true
    },
    {
      label: '商品名称',
      prop: 'name',
      align: 'center',
      minWidth: '50px',
      sortable: true,
      slotName: 'name'
    },

    {
      label: '商品图片',
      prop: 'imgUrl',
      align: 'center',
      minWidth: '120',
      slotName: 'intro'
    },
    {
      label: '商品状态',
      prop: 'status',
      align: 'center',
      minWidth: '20',
      slotName: 'status'
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

  pageName: 'goods',
  isShowButton: true,
  isShowSerial: true,
  isShowSecelection: true
}

export { tableConfig }
