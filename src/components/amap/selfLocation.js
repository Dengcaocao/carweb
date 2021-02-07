let geolocation = null
export function selfLocation (params) {
    if(!geolocation) {
        geolocation = new AMap.CitySearch({
            enableHighAccuracy: true, //是否使用高精度定位，默认:true
            timeout: 10000, //超过10秒后停止定位，默认：无穷大
            maximumAge: 0, //定位结果缓存0毫秒，默认：0
            convert: false, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showMarker: false, //定位成功后在定位到的位置显示点标记，默认：true
            showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
            panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        })
    }
    //获取用户当前的精确位置信息
    // geolocation.getCurrentPosition((status,res) => {
    //     console.log(res)
    // })
    geolocation.getLocalCity((status,res) => {})
    // 定位成功回调
    params.onComplete && AMap.event.addListener(geolocation, 'complete', params.onComplete)
    // 定位失败回调
    params.onComplete && AMap.event.addListener(geolocation, 'error', params.onError)
}