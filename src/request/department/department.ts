import { jxlsaxios } from '@/services'
import { IRequest } from '@/request/type'
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
const deleteDepartment = (payload: IRequest) => {
  return jxlsaxios.delete<any>({
    url: payload.url,
    data: payload.data
  })
}

export {
  queryDepartment,
  regesterDepartment,
  patchDepartment,
  deleteDepartment
}
