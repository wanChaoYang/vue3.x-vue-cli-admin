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
          <el-form-item label="商品名称" prop="goodsInfo">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="商品价格" prop="goodsInfo">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="商品描述" prop="goodsInfo">
            <el-input type="textarea" rows="5" v-model="form"></el-input>
          </el-form-item>
          <el-form-item label="商品分类" prop="delivery"></el-form-item>
          <el-form-item label="" prop="resource">
            <el-radio-group v-model="form">
              <el-radio label="衣服"></el-radio>
              <el-radio label="T恤"></el-radio>
              <el-radio label="毛衣"></el-radio>
              <el-radio label="羽绒服"></el-radio>
            </el-radio-group>
          </el-form-item>
          <up-load/>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">表单提交</el-button>
            <el-button @click="onReset">重置表单</el-button>
          </el-form-item>
        </el-form>
        
      </div>
    </div>
  </div>
</template>
<script>
import {Upload} from "@ADMIN/components/index"
export default {
    name:"addGoods",
    components:{
        "up-load":Upload
    }
};
</script>
<style lang='less' scoped>
.form-box {
  max-width: 600px;
}
</style>