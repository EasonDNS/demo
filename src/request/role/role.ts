import { jxlsaxios } from '@/services'
import { IRequest } from '@/request/type'
export const getRoleList = (pay: IRequest) => {
  return jxlsaxios
    .post<any>({
      url: pay.url
    })
    .then((res) => {
      return res.data
    })
}

export const queryRole = (pay: IRequest) => {
  return jxlsaxios.post<any>({
    url: pay.url,
    data: {
      ...pay.data
    }
  })
}
