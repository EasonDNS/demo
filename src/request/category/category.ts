import { jxlsaxios } from '@/services'
import { IRequest } from '@/request/type'

// 增
const regesterCategory = (pay: IRequest) => {
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
const deleteCategory = (pay: IRequest) => {
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
const patchCategory = (pay: IRequest) => {
  return jxlsaxios
    .patch<any>({
      url: pay.url,
      data: pay.data
    })
    .then((res) => {
      return res.data
    })
}

const queryCategory = (pay: IRequest) => {
  return jxlsaxios
    .post<any>({
      url: pay.url,
      data: pay.data
    })
    .then((res) => {
      return res.data
    })
}

export { regesterCategory, deleteCategory, patchCategory, queryCategory }
