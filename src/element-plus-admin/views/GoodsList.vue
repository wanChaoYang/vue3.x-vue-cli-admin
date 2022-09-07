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
      <el-table :data="data" border stripe style="width: 100%">
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

        <el-table-column align="center" label="状态" width="160">
          <template #default="scope">
            <span class="color-green" v-if="scope.row.status == '1'">已上架</span>
            <span class="color-red" v-else>已下架</span>
          </template>
        </el-table-column>

        <el-table-column align="center" width="260" label="操作">
          <template #default="scope">
            <el-button size="small" type="success">上架</el-button>
            <el-button size="small" type="warning">下架</el-button>
            <el-button size="small" type="primary" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="flex-dom flex-between flex-align m-t-10">
        <div>
          <el-button size="small" type="success">批量上架</el-button>
          <el-button size="small" type="warning">批量下架</el-button>
          <el-button size="small" type="danger">批量删除</el-button>
        </div>
        <el-pagination
          background
          small
          layout="prev, pager, next"
          :total="50"
          :current-page="query.pageIndex"
          :page-size="query.pageSize"
          @current-change="handlePageChange"
        ></el-pagination>
      </div>
    </div>
    <edit-goods :visible="visible" @handleCancel="handleCancel" />
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { tableData } from '@/const/data'
import { EditGoods } from '@/components/index'
import { ElMessage, ElMessageBox } from 'element-plus'
const data = ref(tableData)
const query = reactive({
  pageIndex: 1,
  pageSize: 10,
})

//编辑
const visible = ref(false)
const handleEdit = (val) => {
  console.log(val);
  visible.value = true
}

//取消编辑
const handleCancel = () => {
  visible.value = false
}

//删除
const handleDelete = (res) => {
  ElMessageBox.confirm('确定需要删除此商品吗?删除后无法恢复！', '温馨提示:', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      const idx = res.$index
      data.value = data.value.filter((item, index) => idx != index)
      ElMessage({
        type: 'success',
        message: '删除成功！',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消删除！',
      })
    })
}

const searchkey = ref('')
// 分页导航
const handlePageChange = (val: number) => {
  query.pageIndex = val
}
</script>
<style lang="less" scoped></style>
