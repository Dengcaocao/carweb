import service from "../utils/request.js"
export function GetCode(data){
    return service.request({
        method: "post",
        url: "/getCode/",
        data
    })
}