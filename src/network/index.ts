import Service from './request/request'

const service = new Service({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  // 给此实例添加拦截器
  interceptors: {
    requestInterceptor: (config) => {
      return config
    },
    requestInterceptorCatch: (err) => {
      return Promise.reject(err)
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return Promise.reject(err)
    }
  }
})

export default service
