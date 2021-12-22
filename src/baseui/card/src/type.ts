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

export interface ICard1Config {
  style?: cardstyle
  title?: string
  content?: any
  footer?: footer
  number?: number
}

interface cardstyle {
  background?: string
  height?: string
}
interface footer {
  icon?: string
  url?: string
  Disable?: boolean
  link?: string
}
