<template>
  <el-form-item label="上传图片">
    <el-upload
      v-model:file-list="fileList"
      action="#"
      list-type="picture-card"
      :auto-upload="false"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-change="handleChang"
      :limit="9"
    >
      <el-icon><Plus /></el-icon>
    </el-upload>
    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
  </el-form-item>
</template>
<script lang="ts" setup>
import { ref, defineEmits } from "vue";
import type { UploadProps, UploadUserFile } from "element-plus";
const fileList = ref<UploadUserFile[]>([]);
const emits = defineEmits(["handleChang"]);
const handleRemove: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
  //   console.log(uploadFile, uploadFiles);
  emits("handleChang", uploadFile);
};
const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const handlePictureCardPreview: UploadProps["onPreview"] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!;
  dialogVisible.value = true;
};

const handleChang = (uploadFile: any): void => {
  emits("handleChang", uploadFile);
};
</script>
<style lang='less' scoped>
</style>