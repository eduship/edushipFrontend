import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
//import Components from "./views/Components.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";

import Landing from "./views/Landing.vue";
import About from "./views/about.vue";
import Contact from "./views/Contact.vue";
import Events from "./views/Events.vue";
import Create from "./views/Create.vue";

import Newsletter from "./views/Newsletter.vue";
import SendMail from "./views/SendMail.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    /*{
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },*/
    {
      path: "/events",
      name: "events",
      components: {
        header: AppHeader,
        default: Events,
        footer: AppFooter
      }
    },
    {
      path: "/",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
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
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/contact",
      name: "contact",
      components: {
        header: AppHeader,
        default: Contact,
        footer: AppFooter
      }
    },
    {
      path: "/newsletter",
      name: "newsletter",
      components: {
        header: AppHeader,
        default: Newsletter,
        footer: AppFooter
      }
    },
    {
      path: "/sendmail_muesstepasswortgeschuetztsein",
      name: "sendmail",
      components: {
        header: AppHeader,
        default: SendMail,
        footer: AppFooter
      }
    },
    {
      path: "/create",
      name: "create",
      components: {
        header: AppHeader,
        default: Create,
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
