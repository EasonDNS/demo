import { jaxiosRequestconfig, jintercepters } from './type'
import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
class JaxiosClass {
  instance: AxiosInstance
  intercepters?: jintercepters
  constructor(config: jaxiosRequestconfig) {
    this.instance = axios.create(config)

    this.intercepters = config.intercepters

    this.instance.interceptors.request.use(
      this.intercepters?.requestintercepter,
      this.intercepters?.requestintercepterCatch
    )
    this.instance.interceptors.response.use(
      this.intercepters?.responeseintercepter,
      this.intercepters?.responeseintercepterCatch
    )
  }
  request<T = AxiosResponse>(config: jaxiosRequestconfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.intercepters?.requestintercepter) {
        config = config.intercepters.requestintercepter(config)
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.intercepters?.responeseintercepter) {
            res = config.intercepters.responeseintercepter(res)
          }
          resolve(res)
        })
        .catch((err) => {
          if (config.intercepters?.responeseintercepterCatch) {
            err = config.intercepters.responeseintercepterCatch(err)
          }
          reject('服务器返回失败了~~~返回拦截器' + err)
        })
    })
  }
  get<T>(config: jaxiosRequestconfig) {
    return this.request<T>({
      ...config,
      method: 'GET'
    })
  }
  post<T>(config: jaxiosRequestconfig) {
    return this.request<T>({
      ...config,
      method: 'POST'
    })
  }
  delete<T>(config: jaxiosRequestconfig) {
    return this.request<T>({
      ...config,
      method: 'DELETE'
    })
  }
  patch<T>(config: jaxiosRequestconfig) {
    return this.request<T>({
      ...config,
      method: 'PATCH'
    })
  }
}

export default JaxiosClass
