import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ServiceInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

export interface ServiceConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: ServiceInterceptors<T>
}
