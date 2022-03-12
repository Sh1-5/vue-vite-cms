import Service from './request/request'

const service = new Service({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  // 给此实例添加拦截器
  interceptors: {
    requestInterceptors: (config) => {
      return config
    },
    requestInterceptorsCatch: (err) => {
      return Promise.reject(err)
    },
    responseInterceptors: (res) => {
      return res
    },
    responseInterceptorsCatch: (err) => {
      return Promise.reject(err)
    }
  }
})

export default service
