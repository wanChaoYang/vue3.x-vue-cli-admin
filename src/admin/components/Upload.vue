<template>
  <div class="up-load">
    <el-form-item label="上传图片"></el-form-item>
    <el-upload
      class="upload-demo"
      drag
      action="http://jsonplaceholder.typicode.com/api/posts/"
      multiple
    >
      <el-icon><MostlyCloudy /></el-icon>
      <div class="el-upload-text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">只能上传 jpg/png 文件，且不超过 500kb</div>
      </template>
    </el-upload>

    <div class="content-title">支持裁剪</div>
    <div class="plugins-tips">
      vue-cropperjs：一个封装了 cropperjs 的 Vue 组件。 访问地址：
      <a href="https://github.com/Agontuk/vue-cropperjs" target="_blank"
        >vue-cropperjs</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "up-load",
  props: {
    msg: String,
  },
});
</script>
<style scoped lang="less">
.up-load {
  padding-bottom: 20px;
  .upload-demo {
    width: 360px;
    .el-upload-text {
      color: #97a8be;
      font-size: 14px;
      em{
        color: #20a0ff;
      }
    }
  }
}
</style>
