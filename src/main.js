import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/iconfont/iconfont.css'
import './style/common.scss'
import './config/rem'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
