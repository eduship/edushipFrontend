import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
// import axios from 'https://unpkg.com/axios/dist/axios.min.js'

Vue.config.productionTip = false;
Vue.use(Argon);
// Vue.prototype.$axios = axios;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
