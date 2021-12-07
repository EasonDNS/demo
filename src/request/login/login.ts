import { jxlsaxios } from '@/services'
import { IRequest } from '@/request/type'
const accountLogin = (pay: IRequest) => {
  return jxlsaxios
    .post<any>({
      url: pay.url,
      data: pay.data
    })
    .then((res) => {
      return res.data
    })
}

const getUserMenu = (pay: IRequest) => {
  return jxlsaxios
    .post<any>({
      url: pay.url
    })
    .then((res) => {
      return res.data
    })
}
export { accountLogin, getUserMenu }
