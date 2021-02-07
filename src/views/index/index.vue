<template>
    <div class="home">
        <!-- 地图 -->
        <Amap ref="mapComponent" id="mapbox" @callbackComponent="callbackComponent" :parkingMarkers="parkingMarkers" />
        <!-- 汽车列表 -->
        <Cars />
        <!-- 会员 -->
        <div class="children-view" id="children-view" :class="{'active': isActive}">
            <router-view></router-view>
        </div>
        <!-- 底部导航 -->
        <NavBar id="navBarC" />
        <!-- 登录渲染 -->
        <router-view name="login"></router-view>
    </div>
</template>
<script>
import Amap from "@/components/amap/amap.vue";
import Cars from "@/views/cars/index.vue";
import NavBar from "@/components/navBar/index.vue";
import {parking} from "@/api/parking.js"
export default {
    data() {
        return {
            parkingMarkers: []
        }
    },
    mounted() {
        let mapbox = document.getElementById('mapbox')
        mapbox.addEventListener('click',() => {
             if(this.$route.path == '/') return
            this.$router.push('/')
        })
        // document.addEventListener('click', e => {
        //     let userCon = document.getElementById('children-view')
        //     let navBarC = document.getElementById('navBarC')
        //     if(userCon && !userCon.contains(e.target)) {
        //         if(navBarC && !navBarC.contains(e.target)) {
        //             if(this.$route.path == '/') return
        //             this.$router.push('/')
        //         }
        //     }
        // })
    },
    components: {
        Amap,
        Cars,
        NavBar
    },
    computed: {
        // 用于显示或隐藏会员列表
        isActive(){
            return this.$route.path !== '/' && this.$route.path !== '/login'
        }
    },
    methods: {
        callbackComponent(params) {
            // 地图初始化完成回调，this[params.cb] = this.loadMap
            params.cb && this[params.cb](params.data)
        },
        loadMap() {
            this.getParking()
        },
        // 获取停车场
        getParking() {
            parking().then(res => {
                if(res.data.resCode === 0) {
                    const {data} = res.data.data
                    // 获取成功
                    this.parkingMarkers = data.map(item => {
                        item.lnglat = item.lnglat.split(',')
                        item.icon = require('../../assets/parking-icon.png')
                        item.offset = [-40, -60]
                        item.offsetText = [-30,-55]
                        item.content=`<div style="width:60px;height:60px;line-height:60px;color:#fff;text-align:center;">${item.carsNumber}</div>`
                        item.events = {
                            click: () => {this.handleMarkerClick(item)}
                        }
                        return item
                    })
                }else {
                    // 停车场获取失败
                    this.$message({
                        message: '停车场获取失败，请重新刷新页面',
                        type: 'error'
                    });
                } 
            })
        },
        // 点标记点击事件
        handleMarkerClick(item) {
            this.$refs.mapComponent.hanleWalkPlanning(item)
        }
    },
}
</script>
<style scoped>
    .home{
        position: relative;
    }
    .children-view{
        position: fixed;
        top: 0;
        bottom: 0;
        right: -410px;
        z-index: 999;
        width: 380px;
        padding: 0 30px;
        box-sizing: border-box;
        background-color: #34393f;
        box-shadow: -5px 0 38px rgba(0,0,0,.4);
        transition: 0.3s;
        /* 做浏览器兼容 */
        -webkit-transition: 0.3s;
        -moz-transition: 0.3s;
        -o-transition: 0.3s;
    }
    .active{
        right: 0;
    }
    .login-warp{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.4);
    }
</style>