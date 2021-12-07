import { jxlsaxios } from '@/services'
import { IRequest } from '@/request/type'

//创建角色 增
const regesterRole = (pay: IRequest) => {
  return jxlsaxios
    .post<any>({
      url: pay.url,
      data: pay.data
    })
    .then((res) => {
      return res.data
    })
}
//删除角色 删
const deleteRole = (pay: IRequest) => {
  return jxlsaxios
    .delete<any>({
      url: pay.url,
      data: pay.data
    })
    .then((res) => {
      return res.data
    })
}
// 更新角色 改
const patchRole = (pay: IRequest) => {
  return jxlsaxios
    .patch<any>({
      url: pay.url,
      data: pay.data
    })
    .then((res) => {
      return res.data
    })
}
// 查询角色 查
const queryRole = (pay: IRequest) => {
  return jxlsaxios
    .post<any>({
      url: pay.url,
      data: pay.data
    })
    .then((res) => {
      return res.data
    })
}
export { regesterRole, deleteRole, patchRole, queryRole }
