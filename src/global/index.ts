import { App } from 'vue'
import { jxlsicon } from './regester-elementIcon'
const regesterGlobal = (app: App) => {
  app.use(jxlsicon)
}
export { regesterGlobal }
