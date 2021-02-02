import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index/index.vue";
import User from "../views/user/index.vue";
import Security from "../views/security/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Index,
    children: [
      {
        path: "/login",
        name: "login",
        components: {
          login: () => import('@/views/login/index.vue')
        }
      },
      {
        path: "/user",
        name: "user",
        component: User,
      },
      {
        path: "/security",
        name: "security",
        component: Security
      },
      {
        path: "/security/password",
        name: "password",
        component: () => import('@/views/security/password.vue')
      },
      {
        path: "/security/bindtel",
        name: "bindtel",
        component: () => import('@/views/security/tel.vue')
      },
      {
        path: "/security/bindbank",
        name: "bindbank",
        component: () => import('@/views/security/bank.vue')
      },
      {
        path: "/security/setpassword",
        name: "setpassword",
        component: () => import('@/views/security/setpassword.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
