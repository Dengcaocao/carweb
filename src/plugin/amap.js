import Vue from 'vue'
// 引入vue-amap
import VueAMap from 'vue-amap';
Vue.use(VueAMap);

// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: '4f27869231b30b234d0995a96fa86792',
  // 插件集合
  plugin: ['AMap.Geolocation','AMap.CitySearch','AMap.Walking'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
});