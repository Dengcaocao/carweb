import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//导入重置样式表
import '@/assets/reset.css'

//导入地图插件
import '@/plugin/amap.js'

// 引入全局组件
import '@/allComponents.js'

// 引入ui组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
