import { jxlsaxios } from '@/services'
import { IRequest } from '@/request/type'
// 初始数据
const getGoods = (pay: IRequest) => {
  return jxlsaxios
    .post<any>({
      url: pay.url,
      data: pay.data
    })
    .then((res) => {
      return res.data
    })
}
// 查询数据 ++
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

//
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
export { getGoods, queryGoods, regesterGoods }
