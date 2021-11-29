import { jxlsaxios } from '@/services'

const resGetUserData = (url: string) => {
  return jxlsaxios
    .post<any>({
      url: url
    })
    .then((res) => {
      return res.data
    })
}
const resSearchUserData = (pay: any) => {
  return jxlsaxios
    .post<any>({
      url: pay.url,
      data: pay.data
    })
    .then((res) => {
      return res.data
    })
}

export { resGetUserData, resSearchUserData }
