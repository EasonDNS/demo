import { App } from 'vue'
import {
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
  Share
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
