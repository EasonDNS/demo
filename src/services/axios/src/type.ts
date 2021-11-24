import type { AxiosRequestConfig, AxiosResponse } from 'axios'
interface jaxiosRequestconfig extends AxiosRequestConfig {
  intercepters?: jintercepters
}
interface jintercepters<T = AxiosResponse> {
  requestintercepter?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestintercepterCatch?: (err: any) => any
  responeseintercepter?: (res: any) => any
  responeseintercepterCatch?: (err: any) => any
}

export { jaxiosRequestconfig, jintercepters }
