import { jxlsaxios } from '@/services'
import { IRequest } from '../type'

const queryDashboard = (pay: IRequest) => {
  return jxlsaxios
    .get<any>({
      url: pay.url,
      data: pay.data
    })
    .then((res) => {
      return res.data
    })
}

export { queryDashboard }
