<template>
  <div>
    <div class="p-b-15">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <el-icon><Folder /></el-icon> 表单
        </el-breadcrumb-item>
        <el-breadcrumb-item>基本表单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="p-both20 p-v-20 bg-fff">
      <div class="form-box">
        <el-form ref="formRef" :rules="rules" :model="form" label-width="80px">
          <el-form-item label="商品名称" prop="name">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="商品单价" prop="price">
            <el-input v-model="form.price" />
          </el-form-item>
          <el-form-item label="商品描述" prop="desc">
            <el-input type="textarea" rows="5" v-model="form.desc" />
          </el-form-item>
          <el-form-item label="商品分类" prop="delivery"></el-form-item>
          <el-form-item label="" prop="type">
            <el-radio-group v-model="form.type">
              <el-radio label="短裤"></el-radio>
              <el-radio label="T恤"></el-radio>
              <el-radio label="毛衣"></el-radio>
              <el-radio label="羽绒服"></el-radio>
            </el-radio-group>
          </el-form-item>
          <upload-list @handleChang="handleChang" />
          <el-form-item>
            <el-button type="primary" @click="onSubmit(formRef)"
              >表单提交</el-button
            >
            <el-button @click="onReset(formRef)">重置表单</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { UploadList } from "@ADMIN/components/index";
import { reactive, ref } from "vue";
import { ElMessage } from "element-plus";
export default {
  name: "addGoods",
  components: {
    "upload-list": UploadList,
  },
  setup() {
    const formRef = ref();
    const rules = {
      name: { required: true, message: "请输入商品名称", trigger: "blur" },
      price: { required: true, message: "请输入单价", trigger: "blur" },
    };
    const form = reactive({
      name: "",
      price: "",
      desc: "",
      type: "短裤",
    });

    //提交
    const onSubmit = () => {
      if (!formRef.value) return;
      formRef.value.validate((valid) => {
        if (valid) {
          ElMessage.success("提交成功！");
        } else {
          console.log("error submit!");
          return false;
        }
      });
    };
    // 重置
    const onReset = () => {
      formRef.value.resetFields();
    };

    //选择上传图片回调
    const handleChang = (res) => {
      console.log(res);
    };

    return {
      rules,
      form,
      onSubmit,
      onReset,
      formRef,
      handleChang,
    };
  },
};
</script>
<style lang='less' scoped>
.form-box {
  max-width: 600px;
}
</style>