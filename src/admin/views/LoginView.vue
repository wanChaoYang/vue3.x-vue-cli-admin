<template>
  <div class="login flex-dom flex-align flex-center vhgt100">
    <div class="input-container flex-dom flex-center flex-column">
      <div class="admin-title">Vue3后台管理系统</div>
      <el-form ref="login" label-width="0px" class="pad40">
        <el-form-item prop="username">
          <el-input size="large" v-model="username" placeholder="username">
            <template #prepend>
              <el-button>
                <el-icon> <User /> </el-icon
              ></el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            size="large"
            type="password"
            placeholder="password"
            v-model="password"
            @keyup.enter="submitForm()"
          >
            <template #prepend>
              <el-button>
                <el-icon><Unlock /></el-icon>
              </el-button>
            </template>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
        <p class="login-tips">Tips : 用户名和密码随便填。</p>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "HomeView",
  setup() {
    const router = useRouter();
    const userInfo = reactive({
      username: "",
      password: "",
    });
    function submitForm() {
      router.push("/systemHome");
    }
    return {
      ...toRefs(userInfo),
      submitForm,
    };
  },
});
</script>
<style lang="less">
.login {
  background-image: url("@/assets/images/login-bg.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  .input-container {
    width: 450px;
    height: 350px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
    .login-btn {
      button {
        width: 100%;
        height: 36px;
        margin-bottom: 10px;
      }
    }
    .admin-title {
      width: 100%;
      line-height: 50px;
      text-align: center;
      font-size: 20px;
      color: #fff;
      border-bottom: 1px solid #ddd;
    }
    .login-tips {
      font-size: 12px;
      line-height: 30px;
      color: #fff;
    }
  }
}
</style>
