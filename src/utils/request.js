import axios from "axios"
/**
 * TODO
 */
// cookies
import { getToken, getUsername } from "./cookies";

// 创建axios实例
let request = axios.create({
    baseURL: '',
    timeout: 5000
})

// 添加请求拦截器
request.interceptors.request.use(config => {
    console.log('请求拦截')
    /**
     * TODO
     */
    // 在发送请求之前做些什么
    config.headers['Token'] = getToken();  // 携带token
    config.headers['Username'] = getUsername();  // 携带token
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