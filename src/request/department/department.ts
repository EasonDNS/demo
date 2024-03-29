import { jxlsaxios } from '@/services'
import { IRequest } from '@/request/type'
// 创建部门  增
const regesterDepartment = (payload: IRequest) => {
  return jxlsaxios
    .post<any>({
      url: payload.url,
      data: payload.data
    })
    .then((res) => {
      return res.data
    })
}
// 删除部门 删
const deleteDepartment = (payload: IRequest) => {
  return jxlsaxios.delete<any>({
    url: payload.url,
    data: payload.data
  })
}
// 更新部门 改
const patchDepartment = (payload: IRequest) => {
  return jxlsaxios
    .patch<any>({
      url: payload.url,
      data: payload.data
    })
    .then((res) => {
      return res.data
    })
}
// 查询部门 查
const queryDepartment = (payload: IRequest) => {
  return jxlsaxios
    .post<any>({
      url: payload.url,
      data: payload.data
    })
    .then((res) => {
      return res.data
    })
}

export {
  regesterDepartment,
  deleteDepartment,
  patchDepartment,
  queryDepartment
}
