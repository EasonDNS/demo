enum Ishadow {
  'always',
  'hover',
  'never'
}
interface IelbodyStyle {
  padding: string
}

export interface ICardConfig {
  isShowTitle?: boolean
  style?: any
  shadow?: Ishadow
  title?: string
  header?: any
  elBodyStyle?: IelbodyStyle
  body?: any
}
