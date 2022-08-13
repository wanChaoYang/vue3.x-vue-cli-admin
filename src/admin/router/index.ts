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
      {
        path: "/addGoods",
        name: "addGoods",
        component: () =>
          import(
            /* webpackChunkName: "systemHome" */ "../views/AddGoods.vue"
          ),
        meta: {
          name: "商品添加",
        },
      },
      {
        path: "/goodsList",
        name: "goodsList",
        component: () =>
          import(
            /* webpackChunkName: "systemHome" */ "../views/GoodsList.vue"
          ),
        meta: {
          name: "商品列表",
        },
      },
      {
        path: "/chartView",
        name: "chartView",
        component: () =>
          import(
            /* webpackChunkName: "systemHome" */ "../views/ChartView.vue"
          ),
        meta: {
          name: "schart图表",
        },
      },
      {
        path: "/fileUpload",
        name: "fileUpload",
        component: () =>
          import(
            /* webpackChunkName: "systemHome" */ "../views/FileUpload.vue"
          ),
        meta: {
          name: "文件上传",
        },
      },
      {
        path: "/editorView",
        name: "editorView",
        component: () =>
          import(
            /* webpackChunkName: "systemHome" */ "../views/EditorView.vue"
          ),
        meta: {
          name: "富文本编辑",
        },
      },
      {
        path: "/authorSupport",
        name: "authorSupport",
        component: () =>
          import(
            /* webpackChunkName: "systemHome" */ "../views/AuthorSupport.vue"
          ),
        meta: {
          name: "富文本编辑",
        },
      },
      {
        path: "/permission",
        name: "permission",
        component: () =>
          import(
            /* webpackChunkName: "systemHome" */ "../views/Permission.vue"
          ),
        meta: {
          name: "权限设置",
        },
      },
      {
        path: "/404",
        name: "404",
        component: () =>
          import(
            /* webpackChunkName: "systemHome" */ "../views/404.vue"
          ),
        meta: {
          name: "404",
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
