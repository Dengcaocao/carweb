<template>
    <div class="amap">
        <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap=demo"></el-amap>
    </div>
</template>
<script>
export default {
    data(){
        return {
            zoom: 18,
            center: [106.504962,29.533155],   
            // events: {
            //     init(o) {
            //         let marker = new AMap.Marker({
            //             position: [116.39, 39.9],   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            //             title: '北京'
            //         });
            //         marker.setMap(o)
            //     }
            // }
        }
    }
}
</script>
<style scoped>
    .amap{
        height: 100vh;
    }
</style>