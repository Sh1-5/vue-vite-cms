import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { ServiceInterceptors, ServiceConfig } from './types'
import localCache from '../../utils/cache'

class Service {
  instance: AxiosInstance
  interceptors?: ServiceInterceptors
  constructor(config: ServiceConfig) {
    this.instance = axios.create(config)
    // 给单个实例添加拦截器
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 给所有实例添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        const token = localCache.getCache('token')
        if (token) {
          // config.headers.Authorization = `Bearer ${token}` // 草
          // headers: AxiosRequestHeaders
          // AxiosRequestHeaders: Record<string, string | number | boolean>
          // type Record<K extends keyof any, T> = {
          //   [P in K]: T
          // }
          config.headers = {
            Authorization: `Bearer ${token}`
          }
        }
        return config
      },
      (err) => {
        return Promise.reject(err)
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return Promise.reject(err)
      }
    )
  }
  // request<T>(config: AxiosRequestConfig): Promise<T> {
  //   return this.instance.request(config)
  // }
  // 给request请求添加拦截器
  request<T>(config: ServiceConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get<T>(config: ServiceConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: ServiceConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: ServiceConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: ServiceConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default Service
