import axios from 'axios'
// 导出的axios本身是一个实例

// get/post...
axios
  .get('http://httpbin.org/get', {
    params: {
      name: 'kobe'
    }
  })
  .then((res) => {
    console.log(res)
  })

// axios的配置
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 5000

// 本质是Promise.all，多个请求一起返回
axios
  .all([
    axios('http://httpbin.org/get', {
      params: {
        name: 'james'
      }
    }),
    axios('http://httpbin.org/post', {
      params: {
        age: 18
      }
    })
  ])
  .then((res) => {
    console.log(res) // res: AxiosResponse<any, any>[]
  })

// axios的拦截器，在请求和返回前需要进行的某些操作
axios.interceptors.request.use(
  (config) => {
    // 请求成功拦截
    // 携带token
    return config
  },
  (err) => {
    // 请求失败拦截
    return Promise.reject(err)
  }
)
axios.interceptors.response.use(
  (res) => {
    // 响应成功拦截
    // 处理响应结果
    return res.data
  },
  (err) => {
    // 响应失败拦截
    return Promise.reject(err)
  }
)

// Promise本身可以有类型
new Promise<string>((resolve, reject) => {
  // resolve(1024)
  resolve('hello')
}).then((res) => {
  // res: string
  console.log(res)
})
