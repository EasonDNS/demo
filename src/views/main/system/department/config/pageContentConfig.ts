// import { IPageContentConfigType } from '@/components/pageContent/type'
const pageContentConfig = {
  propList: [
    {
      label: '部门id',
      prop: 'id',
      align: 'center',
      minWidth: '50px',
      sortable: true,
      slotName: 'id'
      // resizable: true
    },
    {
      label: '部门名称',
      prop: 'name',
      align: 'center',
      minWidth: '50px',
      sortable: true,
      slotName: 'name'
    },
    {
      label: '上级部门ID',
      prop: 'parentId',
      align: 'center',
      minWidth: '50px',
      slotName: 'parentId'
    },
    {
      label: '上级领导',
      prop: 'leader',
      align: 'center',
      minWidth: '50px',
      slotName: 'leader'
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

  pageName: 'department',
  isShowButton: true,
  isShowSerial: true,
  isShowSecelection: true
}

export { pageContentConfig }
