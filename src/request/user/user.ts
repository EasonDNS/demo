import { jxlsaxios } from '@/services'
import { IRequest } from '../type'

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

const resRegesterUser = (pay: any) => {
  return jxlsaxios.post<any>({
    url: pay.url,
    data: pay.data
  })
}

// 注册 用户
const regesterUser = (pay: IRequest) => {
  return jxlsaxios
    .post<any>({
      url: pay.url,
      data: pay.data
    })
    .then((res) => {
      return res.data
    })
}

export {
  resGetUserData,
  resSearchUserData,
  resPatchUserData,
  resRegesterUser,
  regesterUser
}
