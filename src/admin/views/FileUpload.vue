<template>
  <div>
    <div class="p-b-15">
       <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <el-icon><Folder /></el-icon> 表单
        </el-breadcrumb-item>
        <el-breadcrumb-item>文件上传</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="bg-fff p-both20 p-v-20">
      <up-load />
      <div class="content-title">支持裁剪</div>
      <div class="plugins-tips">
        vue-cropperjs：一个封装了 cropperjs 的 Vue 组件。 访问地址：
        <a href="https://github.com/Agontuk/vue-cropperjs" target="_blank"
          >vue-cropperjs</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Upload } from "@ADMIN/components/index";
export default {
  components: {
    "up-load": Upload,
  },
};
</script>

<style scoped>
</style>