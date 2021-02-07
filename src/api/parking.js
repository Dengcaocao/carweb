import service from "../utils/request.js"
export function parking(){
    return service.request({
        method: "post",
        url: `${process.env.VUE_APP_WEBAPI}/parking/`
    })
}