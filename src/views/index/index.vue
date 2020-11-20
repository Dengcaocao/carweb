<template>
    <div class="home">
        <!-- 地图 -->
        <Amap />
        <!-- 汽车列表 -->
        <Cars />
        <!-- 会员 -->
        <div class="children-view" :class="{'active': isActive}">
            <router-view></router-view>
        </div>
        <!-- 底部导航 -->
        <NavBar />
    </div>
</template>
<script>
import Amap from "@/components/amap/amap.vue";
import Cars from "@/views/cars/index.vue";
import NavBar from "@/components/navBar/index.vue";
export default {
    data(){
        return {
            
        }
    },
    created(){
        
    },
    components: {
        Amap,
        Cars,
        NavBar
    },
    computed: {
        // 用于显示或隐藏会员列表
        isActive(){
            return this.$route.path === '/user'
        }
    }
}
</script>
<style scoped>
    .children-view{
        position: fixed;
        top: 0;
        bottom: 0;
        right: -410px;
        z-index: 999;
        width: 410px;
        background-color: #34393f;
        transition: 0.3s;
        /* 做浏览器兼容 */
        -webkit-transition: 0.3s;
        -moz-transition: 0.3s;
        -o-transition: 0.3s;
    }
    .active{
        right: 0;
    }
</style>