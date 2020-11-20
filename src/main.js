import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//导入重置样式表
import '@/assets/reset.css'

//导入地图插件
import '@/plugin/amap.js'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
