import { jxlsaxios } from '@/services'

const getDepartmentList = (pay: any) => {
  return jxlsaxios
    .post<any>({
      url: pay.url
    })
    .then((res) => {
      return res.data
    })
}
const getDepartmentListAndQuery = (pay: any) => {
  return jxlsaxios
    .post<any>({
      url: pay.url,
      data: pay.data
    })
    .then((res) => {
      return res.data
    })
}

export { getDepartmentList, getDepartmentListAndQuery }
