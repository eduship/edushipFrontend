import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import * as VueGoogleMaps from "vue2-google-maps";
import firebase from 'firebase';

const config = {
}

firebase.initializeApp(config);

export const db = firebase.firestore();

Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
