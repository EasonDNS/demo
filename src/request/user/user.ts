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

// 需要有{url:'/users/id,data:data}
const resPatchUserData = (pay: any) => {
  console.log('==============')
  console.log(pay)
  console.log('==============')
  return jxlsaxios
    .patch<any>({
      url: pay.url,
      data: pay.data
    })
    .then((res) => {
      console.log(res)
      return res
    })
}

export { resGetUserData, resSearchUserData, resPatchUserData }
