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
  DeleteFilled,
  UserFilled,
  User,
  Smoking,
  CaretLeft,
  CaretRight,
  DeleteFilled
]

const comicon = (app: App): void => {
  for (const icon of iconNames) {
    app.component(icon.name, icon)
  }
}

export const jxlsicon = (app: App) => {
  app.use(comicon)
}
