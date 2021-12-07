import { jxlsaxios } from '@/services'
import { IRequest } from '@/request/type'
const getRoleList = (pay: IRequest) => {
  return jxlsaxios
    .post<any>({
      url: pay.url
    })
    .then((res) => {
      return res.data
    })
}

const queryRole = (pay: IRequest) => {
  return jxlsaxios.post<any>({
    url: pay.url,
    data: {
      ...pay.data
    }
  })
}

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
export { getRoleList, queryRole, regesterRole }
