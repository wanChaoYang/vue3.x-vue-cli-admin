<template>
  <div>
    <div class="p-b-15">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <el-icon><Folder /></el-icon> 商品管理
        </el-breadcrumb-item>
        <el-breadcrumb-item>商品列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="bg-fff p-both20 p-v-20">
      <div class="p-b-20">
        <el-input v-model="searchkey" placeholder="搜索" class="wid20 p-r-15"></el-input>
        <el-button type="primary">搜索</el-button>
      </div>
      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column align="center" type="selection" width="55" />
        <el-table-column align="center" prop="date" label="ID" width="100" />
        <el-table-column align="center" prop="name" label="商品名称" width="240" />
        <el-table-column align="center" prop="price" label="商品价格" width="120" />
        <el-table-column align="center" label="图片" width="120">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <el-image
                style="width: 120px; height: 60px"
                :src="scope.row.img"
                :preview-src-list="[scope.row.img]"
                fit="cover"
                :preview-teleported="true"
              />
            </div>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="desc" label="商品概述" />
        <el-table-column align="center" width="240" label="操作">
          <template #default="scope">
            <el-button size="small" type="primary" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="small" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="flex-dom flex-end">
        <el-pagination
          background
          small
          layout="prev, pager, next"
          :total="50"
          :current-page="query.pageIndex"
          :page-size="query.pageSize"
          @current-change="handlePageChange"
          class="m-t-10"
        ></el-pagination>
      </div>
    </div>
    <edit-goods :popsVisible="visible" @handleCancel="handleCancel" />
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { tableData } from '@/const/data'
import { EditGoods } from '@/components/index'

const query = reactive({
  pageIndex: 1,
  pageSize: 10,
})

//编辑
const visible = ref(false)
const handleEdit = () => {
  visible.value = true
}
//取消
const handleCancel = () => {
  visible.value = false
}
const searchkey = ref('')
// 分页导航
const handlePageChange = (val: number) => {
  query.pageIndex = val
}
</script>
<style lang="less" scoped></style>
