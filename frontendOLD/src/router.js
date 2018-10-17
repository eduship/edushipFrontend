import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Start from "./views/map.vue";
import LegalInformation from "./views/legal.vue";
import About from "./views/about.vue";
import Support from "./views/support.vue";
import Organiser from "./views/organiser.vue";
import Privacy from "./views/privacy.vue";
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
    path: "/legal",
    name: "legalInformation",
    components: {
      header: AppHeader,
      default: LegalInformation,
      footer: AppFooter
    }
  },
  {
    path: "/about",
    name: "about",
    components: {
      header: AppHeader,
      default: About,
      footer: AppFooter
    }
  },
  {
    path: "/support",
    name: "support",
    components: {
      header: AppHeader,
      default: Support,
      footer: AppFooter
    }
},
  {
  path: "/privacy",
  name: "privacy",
  components: {
    header: AppHeader,
    default: Privacy,
    footer: AppFooter
  }
},
{
  path: "/organiser",
  name: "organiser",
  components: {
    header: AppHeader,
    default: Organiser,
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
