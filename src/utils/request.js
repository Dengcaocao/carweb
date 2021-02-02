import axios from "axios"

// 创建axios实例
let request = axios.create({
    baseURL: process.env.VUE_APP_LOGIN,
    timeout: 5000
})

// 添加请求拦截器
request.interceptors.request.use(config => {
    console.log('请求拦截')
    return config
},error => {
    console.log(error)
})
// 响应拦截器
request.interceptors.response.use(response => {
    console.log('响应拦截')
    return response
},error => {
    console.log(error)
})

export default request