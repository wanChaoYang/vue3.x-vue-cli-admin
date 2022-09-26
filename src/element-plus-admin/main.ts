import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import { initApp } from "../config/init";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import "@COMMON/assets/style/common.css";
import "@COMMON/assets/style/main.less";

// import '@wangeditor/editor/dist/css/style.css' // 引入 css
(async () => {
  initApp()
  const pinia = createPinia();
  const app = createApp(App);
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }

  app.config.globalProperties.app = window.app
  app.use(router).use(pinia).use(ElementPlus).mount("#app");
})()


