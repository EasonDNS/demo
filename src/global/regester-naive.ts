import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

import { App } from 'vue'

import {
  create,
  NBackTop,
  NButton,
  NGradientText,
  NImage,
  NPagination
} from 'naive-ui'

const NaiveComponents = [NButton, NBackTop, NPagination, NGradientText, NImage]
const getRegesterNaive = create({
  components: NaiveComponents
})

const regesterNaive = (app: App) => {
  app.use(getRegesterNaive)
}

export { regesterNaive }
