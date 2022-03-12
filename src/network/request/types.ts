import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ServiceInterceptors<T = AxiosResponse> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  responseInterceptors?: (res: T) => T
  responseInterceptorsCatch?: (err: any) => any
}

export interface ServiceConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: ServiceInterceptors<T>
}
