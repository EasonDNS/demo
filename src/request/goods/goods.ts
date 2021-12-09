import { jxlsaxios } from '@/services'
import { IRequest } from '@/request/type'

// 增
const regesterGoods = (pay: IRequest) => {
  return jxlsaxios
    .post<any>({
      url: pay.url,
      data: pay.data
    })
    .then((res) => {
      return res.data
    })
}
// 删
const deleteGooeds = (pay: IRequest) => {
  return jxlsaxios
    .delete<any>({
      url: pay.url,
      data: pay.data
    })
    .then((res) => {
      return res.data
    })
}
// 改
const patchGoods = (pay: IRequest) => {
  return jxlsaxios
    .patch<any>({
      url: pay.url,
      data: pay.data
    })
    .then((res) => {
      return res.data
    })
}
// 查
const queryGoods = (pay: IRequest) => {
  return jxlsaxios
    .post<any>({
      url: pay.url,
      data: pay.data
    })
    .then((res) => {
      return res.data
    })
}
export { regesterGoods, deleteGooeds, patchGoods, queryGoods }
