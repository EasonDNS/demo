import { App } from 'vue'
import { jxlsicon } from './regester-elementIcon'
import { regesterNaive } from './regester-naive'
const regesterGlobal = (app: App) => {
  app.use(jxlsicon)
  app.use(regesterNaive)
}
export { regesterGlobal }
