import service from "../utils/request.js"
// 获取验证码
export function GetCode(data){
    return service.request({
        method: "post",
        url: `${process.env.VUE_APP_LOGIN}/getCode/`,
        data
    })
}
// 登录
export function Login(data){
    return service.request({
        method: "post",
        url: `${process.env.VUE_APP_LOGIN}/login/`,
        data
    })
}