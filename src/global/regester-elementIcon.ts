import { App } from 'vue'
import {
  CaretLeft,
  CaretRight,
  ChatDotRound,
  ChatLineRound,
  ChatRound,
  Coffee,
  Delete,
  DeleteFilled,
  Edit,
  Expand,
  Fold,
  Goods,
  Monitor,
  Refresh,
  Search,
  Setting,
  Share,
  Smoking,
  User,
  UserFilled
} from '@element-plus/icons'

const iconNames = [
  Edit,
  Share,
  Goods,
  Setting,
  Monitor,
  ChatRound,
  Expand,
  Fold,
  ChatDotRound,
  Coffee,
  ChatLineRound,
  Delete,
  UserFilled,
  User,
  Smoking,
  CaretLeft,
  CaretRight,
  DeleteFilled,
  Refresh,
  Search
]

const comicon = (app: App): void => {
  for (const icon of iconNames) {
    app.component(icon.name, icon)
  }
}

export const jxlsicon = (app: App) => {
  app.use(comicon)
}
