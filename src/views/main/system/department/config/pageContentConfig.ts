// import { IPageContentConfigType } from '@/components/pageContent/type'
const pageContentConfig = {
  pageName: 'department',
  isShowButton: true,
  isShowSerial: true,
  isShowSecelection: true,
  propList: [
    {
      label: '部门id',
      prop: 'id',
      minWidth: '50px',
      slotName: 'id'
    },
    {
      label: '部门名称',
      prop: 'name',
      minWidth: '50px',
      slotName: 'name'
    },
    {
      label: '上级部门ID',
      prop: 'parentId',
      minWidth: '50px',
      slotName: 'parentId'
    },
    {
      label: '上级领导',
      prop: 'leader',
      minWidth: '50px',
      slotName: 'leader'
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
