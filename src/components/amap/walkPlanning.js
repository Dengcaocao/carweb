let walking = null
export function walkPlanning(params) {
    //步行导航
    if(!walking) {
        walking = new AMap.Walking({
            map: params.map,
            // panel: "panel"
            hideMarkers: true
        })
    }
    //根据起终点坐标规划步行路线
    walking.search(params.start_lnglat, params.end_lnglat, (status, result) => {
        // result即是对应的步行路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_WalkingResult
        // if (status === 'complete') {
        //     console.log('绘制步行路线完成',result)
        // } else {
        //     console.log('步行路线数据查询失败')
        // }
    })
    params.complete && AMap.event.addListener(walking, 'complete', params.complete)
}