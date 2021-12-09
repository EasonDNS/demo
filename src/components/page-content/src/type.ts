import { ITableConfig } from '@/baseui/tabel/src/type'
export interface IListData {
  list: any[]
  totalCount: number
}

export interface IPageContentConfig extends ITableConfig {
  page?: string
}

// export { IPageContentConfig }
