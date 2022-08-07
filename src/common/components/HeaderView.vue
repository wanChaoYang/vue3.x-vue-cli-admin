<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="collapseChage">
      <el-icon v-if="collapse"><Expand /></el-icon>
      <el-icon v-else><Fold /></el-icon>
    </div>
    <div class="logo">Vue3后台管理系统</div>
    <div class="header-right">
      <div class="header-user-con">
        <!-- 消息中心 -->
        <div class="btn-bell">
          <el-tooltip
            effect="dark"
            :content="message ? `有${message}条未读消息` : `消息中心`"
            placement="bottom"
          >
            <router-link to="/message">
              <el-icon class="el-icon-bell"><Bell /></el-icon>
            </router-link>
          </el-tooltip>
          <span class="btn-bell-badge" v-if="message"></span>
        </div>
        <!-- 用户头像 -->
        <div class="user-avator">
          <img src="../assets/images/img.jpg" />
        </div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            admin<el-icon><CaretBottom /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>项目仓库</el-dropdown-item>
              <el-dropdown-item command="user">个人中心</el-dropdown-item>
              <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { mainStore } from "@/store/index";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const message = 2;
    // 侧边栏折叠
    const store = mainStore();
    const { collapse } = storeToRefs(store);
    const collapseChage = () => {
      store.collapse = !store.collapse;
    };

    // 用户名下拉菜单选择事件
    const router = useRouter();
    const handleCommand = (command) => {
      if (command == "loginout") {
        router.replace("/");
      } else if (command == "user") {
        router.push("/user");
      }
    };

    return {
      collapseChage,
      message,
      handleCommand,
      collapse,
    };
  },
};
</script>
<style lang="less" scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
  background-color: #242f42;
  .collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
  }
  .logo {
    float: left;
    width: 250px;
    line-height: 70px;
  }
  .header-right {
    float: right;
    padding-right: 50px;
    .header-user-con {
      display: flex;
      height: 70px;
      align-items: center;
      .user-avator {
        margin-left: 20px;
        img {
          display: block;
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
      .user-name {
        margin-left: 10px;
        .el-dropdown-link {
          color: #fff;
          cursor: pointer;
        }
      }

      .btn-bell {
        position: relative;
        cursor: pointer;
        .btn-bell-badge {
          position: absolute;
          right: 0;
          top: -2px;
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background: #f56c6c;
          color: #fff;
        }
        .el-icon-bell {
          color: #fff;
        }
      }
    }
  }
}
</style>
