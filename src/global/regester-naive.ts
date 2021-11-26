import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

import { App } from 'vue'

import { create, NBackTop, NButton } from 'naive-ui'

const NaiveComponents = [NButton, NBackTop]
const getRegesterNaive = create({
  components: NaiveComponents
})

const regesterNaive = (app: App) => {
  app.use(getRegesterNaive)
}

export { regesterNaive }
