import { jxlsaxios } from '@/services'

const accountLogin = (url: string, data: any) => {
  return jxlsaxios
    .post<any>({
      url: url,
      data: data
    })
    .then((res) => {
      return res.data
    })
}

const getUserMenu = (pay: any) => {
  return jxlsaxios
    .post<any>({
      url: pay.url
    })
    .then((res) => {
      return res.data
    })
}
export { accountLogin, getUserMenu }
