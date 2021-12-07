import { jxlsaxios } from '@/services'
import { IRequest } from '../type'

// 注册用户  增
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
// 删除用户 删
const deleteUser = (pay: IRequest) => {
  return jxlsaxios
    .delete<any>({
      url: pay.url,
      data: pay.data
    })
    .then((res) => {
      return res.data
    })
}
// 更新用户  改
const patchUser = (pay: IRequest) => {
  return jxlsaxios
    .patch<any>({
      url: pay.url,
      data: pay.data
    })
    .then((res) => {
      return res.data
    })
}
// 查询用户 查
const queryUser = (pay: IRequest) => {
  return jxlsaxios
    .post<any>({
      url: pay.url,
      data: pay.data
    })
    .then((res) => {
      return res.data
    })
}

export { regesterUser, deleteUser, patchUser, queryUser }
