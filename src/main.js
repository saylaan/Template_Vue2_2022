import "es6-promise/auto";
import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import { sync } from "vuex-router-sync";
import store from "@/store/store";
import Panel from "@/components/Global/Panel";
import Widget from "@/components/Global/Widget";

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  iconfont: "md",
});
Vue.component("panel", Panel);
Vue.component("widget", Widget);

sync(store, router);

new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  router,
  store,
  components: { App },
  template: "<App/>",
});
