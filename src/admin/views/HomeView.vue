<template>
  <div class="home">
    <header-view />
    <sub-menu />
    <div class="container" :class="{ 'content-collapse': collapse }">
      <tags-view />
      <div class="content">
        <router-view v-slot="{ Component }">
          <transition name="move" mode="out-in">
            <keep-alive :include="tagsList">
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import HeaderView from "@COMMON/components/HeaderView.vue";
import SubMenu from "@COMMON/components/SubMenu.vue";
import TagsView from "@COMMON/components/TagsView.vue";
import { mainStore } from "../store/index";

export default defineComponent({
  name: "HomeView",
  components: {
    "header-view": HeaderView,
    "sub-menu": SubMenu,
    "tags-view": TagsView,
  },
  setup() {
    const store = mainStore();
    const tagsList: Array<string> = computed(() => {
      return store.tagsList.map((item) => item.name);
    });
    const collapse: boolean = computed(() => store.collapse);
    return {
      tagsList,
      collapse,
    };
  },
});
</script>
<style lang="less" scoped>
.container {
  position: absolute;
  left: 250px;
  right: 0;
  top: 70px;
  bottom: 0;
  padding-bottom: 30px;
  transition: left 0.3s ease-in-out;
  background: #f0f0f0;
}
.content-collapse {
  left: 65px !important;
}
</style>
