import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Start from "./views/map.vue";
import Impressum from "./views/impressum.vue";
import SingleEvent from "./views/singleEvent.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [{
    path: "/",
    name: "start",
    components: {
      header: AppHeader,
      default: Start,
      footer: AppFooter
    }
  },
  {
    path: "/impressum",
    name: "impressum",
    components: {
      header: AppHeader,
      default: Impressum,
      footer: AppFooter
    }
  },
  {
    path: "/event",
    name: "event",
    components: {
      header: AppHeader,
      default: SingleEvent,
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
