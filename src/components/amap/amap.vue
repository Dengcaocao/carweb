<template>
  <div class="amap-warp">
    <el-amap
      ref="map"
      vid="amapDemo"
      :amap-manager="amapManager"
      :events="events"
      :center="circles.center"
      :zoom="zoom"
      class="amap-demo"
    >
      <!-- 覆盖物圆 -->
      <el-amap-circle
        :center="circles.center"
        :radius="circles.radius"
        :fillColor="circles.fillColor"
        :strokeWeight="circles.strokeWeight"
        :strokeOpacity="circles.strokeOpacity"
        :strokeColor="circles.strokeColor"
      ></el-amap-circle>
      <!-- 覆盖物-停车场 -->
      <el-amap-marker
        v-for="(marker, index) in parkingMarkers"
        :key="index"
        :position="marker.lnglat"
        :icon="marker.icon"
        :offset="marker.offset"
        :vid="index"
      ></el-amap-marker>
      <!-- 覆盖物-停车场数量 -->
      <el-amap-marker
        v-for="marker in parkingMarkers"
        :key="marker.id"
        :content="marker.content"
        :offset="marker.offsetText"
        :position="marker.lnglat"
        :events="marker.events"
      ></el-amap-marker>
      <!-- 覆盖物-停车场信息 -->
      <el-amap-marker
        v-for="info in parkingInfo"
        :key="info.time"
        :content="info.content"
        :offset="info.offset"
        :position="info.lnglat"
      ></el-amap-marker>
    </el-amap>
  </div>
</template>
<script>
import { selfLocation } from "@/components/amap/selfLocation.js";
import { walkPlanning } from "@/components/amap/walkPlanning.js"
// NPM 方式
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
let amapManager = new AMapManager();
export default {
  props: {
    parkingMarkers: Array,
  },
  data() {
    const _this = this;
    return {
      // 地图实例
      map: null,
      amapManager,
      center: [106.504962, 29.533155],
      zoom: 18,
      events: {
        // 地图初始化
        init(o) {
          // 兼容高德地图
          lazyAMapApiLoaderInstance.load().then(() => {
            _this.initMap();
          });
        },
      },
      //定位圆
      circles: {
        center: [0, 0],
        radius: 3,
        fillColor: "#34393f",
        strokeWeight: 20,
        strokeOpacity: 0.2,
        strokeColor: "#34393f"
      },
      // park信息
      parkingInfo: []
    }
  },
  watch: {
    "$store.state.selfLocation.selfLocation": function () {
      this.SelfLocation();
    },
  },
  methods: {
    initMap() {
      this.map = this.amapManager.getMap();
      console.log("地图初始化完成");
      this.$emit("callbackComponent", {
        cb: "loadMap",
      });
      this.SelfLocation();
    },
    // 自身定位
    SelfLocation() {
      selfLocation({
        onComplete: this.onComplete,
        onError: this.onError,
      });
    },
    onComplete(res) {
      console.log("定位成功");
      // const { lat, lng } = res.position;
      const { lat, lng } = res.bounds.northeast;
      let arr = [lng, lat]
      /**
       * TODO
       * 获取定位后赋值
       */
      this.circles.center = [108.40395,31.170897];
      this.center = [108.40395,31.170897];
    },
    onError() {
      console.log("定位失败");
    },
    // 线路规划
    hanleWalkPlanning(item) {
      this.parkingInfo = [{
        carsNumber: item.carsNumber,
        lnglat: item.lnglat,
        offset: [-27,-53],
        content: " "
      }]
      walkPlanning({
        map: this.map,
        start_lnglat: this.center,
        end_lnglat: item.lnglat,
        complete: this.walkComplete
      })
    },
    // 线路规划成功回调，获取结果
    walkComplete(res) {
      const {distance,time} = res.routes[0]
      console.log(distance,time)
      this.parkingInfo[0].distance = distance
      this.parkingInfo[0].time = time
      this.parkingInfo[0].content = `<div style="color:#fff;background:#34393f;width:280px;height:52px;line-height:52px;text-align:center;font-size:14px;padding:0 20px;border-radius:40px;">${this.parkingInfo[0].carsNumber}辆车 | 距离您${distance}米，预计${time}分钟到达</div>`
    }
  }
}
</script>
<style scoped>
.amap-warp {
  height: 100vh;
}
</style>