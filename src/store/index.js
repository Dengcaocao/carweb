import Vue from "vue";
import Vuex from "vuex";
import selfLocation from "./moduld/location.js"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    selfLocation
  }
});
