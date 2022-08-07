<template>
  <div class="sub-menu">
    <el-menu
      class="sub-menu-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in submenu">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index" :key="item.index">
            <template #title>
              <el-icon v-if="item.icon == 'FolderOpened'"><FolderOpened /></el-icon>
              <el-icon v-else-if="item.icon == 'Setting'"><Setting /></el-icon>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-sub-menu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"
              >
                <template #title>{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >
                  {{ threeItem.title }}</el-menu-item
                >
              </el-sub-menu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index"
                >{{ subItem.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>

        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <el-icon v-if="item.icon == 'HomeFilled'"><HomeFilled /></el-icon>
            <el-icon v-else-if="item.icon == 'Grid'"><Grid /></el-icon>
            <el-icon v-else-if="item.icon == 'Link'"><Link /></el-icon>
            <el-icon v-else-if="item.icon == 'PieChart'"><PieChart /></el-icon>
            <el-icon v-else-if="item.icon == 'UserFilled'"><UserFilled /></el-icon>
            <el-icon v-else><Menu /></el-icon>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { mainStore } from "@/store/index";
import { submenu } from "@COMMON/const/index";
export default {
  setup() {
    const route = useRoute();
    const onRoutes = computed(() => {
      return route.path;
    });
    const store = mainStore();
    const collapse: boolean = computed(() => store.collapse);
    return {
      submenu,
      onRoutes,
      collapse,
    };
  },
};
</script>
<style lang="less" scoped>
.sub-menu {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
  overflow: hidden;
  background-color: rgb(50, 65, 87);

  .sub-menu::-webkit-scrollbar {
    width: 0;
  }
  .sub-menu-el-menu:not(.el-menu--collapse) {
    width: 250px;
  }
  .sidebsub-menuar > ul {
    height: 100%;
  }
}
</style>
