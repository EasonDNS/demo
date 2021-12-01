import { jxlsaxios } from '@/services'

export const getRoleList = (pay: any) => {
  return jxlsaxios
    .post<any>({
      url: pay.url
    })
    .then((res) => {
      return res.data
    })
}
