import { jxlsaxios } from '@/services'

const resGetUserData = (url: string) => {
  return jxlsaxios
    .post<any>({
      url: url
    })
    .then((res) => {
      return res.data
    })
}

export { resGetUserData }
