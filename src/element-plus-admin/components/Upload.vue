<template>
  <div class="up-load">
    <el-form-item label="上传图片"></el-form-item>
    <el-upload
      class="upload-demo"
      drag
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
    >
      <el-icon class="up-load-filled"><UploadFilled /></el-icon>
      <div class="el-upload-text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">只能上传 jpg/png 文件，且不超过 500kb</div>
      </template>
    </el-upload>
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
    .up-load-filled {
      font-size: 67px;
      color: #c0c4cc;
    }
    .el-upload-text {
      color: #97a8be;
      font-size: 14px;
      em {
        color: #20a0ff;
      }
    }
  }
}
</style>
