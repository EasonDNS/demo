import { App } from 'vue'
import {
  Bowl,
  Briefcase,
  BrushFilled,
  CaretLeft,
  CaretRight,
  ChatDotRound,
  ChatLineRound,
  ChatRound,
  Cherry,
  Coffee,
  CoffeeCup,
  Delete,
  DeleteFilled,
  Edit,
  Expand,
  Fold,
  Goods,
  GoodsFilled,
  IceCream,
  Monitor,
  Refresh,
  Search,
  Setting,
  Share,
  Smoking,
  Unlock,
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
  Search,
  Unlock,
  IceCream,
  CoffeeCup,
  GoodsFilled,
  Briefcase,
  Cherry,
  Bowl,
  BrushFilled
]

const comicon = (app: App): void => {
  for (const icon of iconNames) {
    app.component(icon.name, icon)
  }
}

export const jxlsicon = (app: App) => {
  app.use(comicon)
}
