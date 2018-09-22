import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Map from "./views/map.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [{
    path: "/",
    name: "start",
    components: {
      default: Start,
      footer: AppFooter
    }
  }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
