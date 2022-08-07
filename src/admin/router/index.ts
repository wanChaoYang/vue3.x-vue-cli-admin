import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LoginView from "../views/LoginView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
    children: [
      {
        path: "/systemHome",
        name: "systemHome",
        component: () =>
          import(
            /* webpackChunkName: "systemHome" */ "../views/SystemHome.vue"
          ),
        meta: {
          name: "系统首页",
        },
      },
      {
        path: "/table",
        name: "table",
        component: () =>
          import(/* webpackChunkName: "systemHome" */ "../views/BaseTable.vue"),
        meta: {
          name: "表格",
        },
      },
      {
        path: "/message",
        name: "message",
        component: () =>
          import(
            /* webpackChunkName: "systemHome" */ "../views/MessageView.vue"
          ),
        meta: {
          name: "信息",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
