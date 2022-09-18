<template>
  <div class="login flex-dom flex-align flex-center vhgt100">
    <div class="input-container flex-dom flex-center flex-column">
      <div class="admin-title">Vue3后台管理系统</div>
      <el-form ref="loginRef" label-width="0px" class="pad40" :model="userInfo" :rules="rules">
        <el-form-item prop="username">
          <el-input size="large" v-model="userInfo.username" placeholder="请输入用户名">
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
            placeholder="密码"
            v-model="userInfo.password"
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
          <el-button type="primary" @click="submitForm(loginRef)">登录</el-button>
        </div>
        <p class="login-tips">Tips : 用户名和密码随便填。</p>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { useRouter } from 'vue-router'
// import { loginData } from '../types/login'
import { login } from '@COMMON/http/api'

export default defineComponent({
  name: 'HomeView',
  setup() {
    const router = useRouter()
    const loginRef = ref<FormInstance>()
    const rules = {
      username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    }

    const userInfo = reactive({
      username: '',
      password: '',
    })

    function submitForm(formEl: FormInstance | undefined) {
      if (!formEl) return
      formEl.validate((valid) => {
        if (!valid) return false
        login(userInfo)
          .then((res) => {
            console.log(res)
            router.push('/systemHome')
          })
          .catch((err) => {
            console.log(err)
          })
      })
    }
    return {
      userInfo,
      rules,
      loginRef,
      submitForm,
    }
  },
})
</script>
<style lang="less">
.login {
  background-image: url('@/assets/images/login-bg.jpg');
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
