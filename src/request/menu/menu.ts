import { jxlsaxios } from '@/services'
import { IRequest } from '../type'
// 创建菜单 增
const regesterMenu = (payload: IRequest) => {
  return jxlsaxios
    .post<any>({
      url: payload.url,
      data: payload.data
    })
    .then((res) => {
      return res.data
    })
}
// 删除菜单 删
const deleteMenu = (payload: IRequest) => {
  return jxlsaxios.delete<any>({
    url: payload.url,
    data: payload.data
  })
}

// 更新菜单 改
const patchMenu = (payload: IRequest) => {
  return jxlsaxios
    .patch<any>({
      url: payload.url,
      data: payload.data
    })
    .then((res) => {
      return res.data
    })
}
// 查询菜单 查
const queryMenu = (payload: IRequest) => {
  return jxlsaxios
    .post<any>({
      url: payload.url,
      data: payload.data
    })
    .then((res) => {
      return res.data
    })
}

export { regesterMenu, deleteMenu, patchMenu, queryMenu }
