<template>
  <div>
    <div class="p-b-20">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <el-icon><Grid /></el-icon> 基础表格
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="p-v-20 p-both20 bg-fff">
      <div class="flex-dom flex-start p-b-20">
        <el-select v-model="address" placeholder="地址" class="handle-select m-r-15">
          <el-option key="1" label="广东省" value="广东省"></el-option>
          <el-option key="2" label="湖南省" value="湖南省"></el-option>
        </el-select>
        <el-input v-model="name" placeholder="用户名" class="handle-input m-r-15"></el-input>
        <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
      </div>
      <el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
        <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
        <el-table-column prop="name" label="用户名" width="180"></el-table-column>
        <el-table-column prop="order" label="订单编号" width="180" align="center"></el-table-column>
        <el-table-column label="单价" width="120" align="center">
          <template #default="scope">￥{{ scope.row.money }}</template>
        </el-table-column>
        <el-table-column prop="address" label="邮寄地址"></el-table-column>
        <el-table-column prop="phone" label="联系电话" width="160" align="center"></el-table-column>
        <el-table-column label="状态" align="center" width="100">
          <template #default="scope">
            <el-tag type="success" v-if="scope.row.state == '1'">已发货</el-tag>
            <el-tag type="danger" v-else>待发货</el-tag>
          </template>
        </el-table-column>

        <el-table-column prop="date" label="下单时间" width="180" align="center"></el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template #default="scope">
            <el-button :text="true" type="primary" :icon="Edit" @click="handleEdit(scope.$index, scope.row)"
              >编辑
            </el-button>
            <el-button :text="true" :icon="Delete" type="danger" @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="flex-dom flex-end">
        <el-pagination
          background
          small
          layout="prev, pager, next"
          :total="12"
          :current-page="pageIndex"
          :page-size="pageSize"
          @current-change="handlePageChange"
          class="m-t-10"
        ></el-pagination>
      </div>
    </div>
    <!-- 编辑弹出框 -->
    <el-dialog title="编辑" v-model="editVisible" width="30%">
      <el-form label-width="70px">
        <el-form-item label="用户名">
          <el-input v-model="from.name" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="from.address" placeholder="地址"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="from.phone" placeholder="联系电话" ></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="editVisible = false">取 消</el-button>
          <el-button type="primary" @click="saveEdit(from.idx)">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { reactive, toRefs, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Edit, Delete } from '@element-plus/icons-vue'
import { orderList } from '@ADMIN/const/data'
export default {
  name: 'baseTable',
  setup() {
    const query = reactive({
      address: '',
      name: '',
      pageIndex: 1,
      pageSize: 10,
    })
    const from = reactive({
      address: '',
      name: '',
      phone: '',
      idx: '',
    })
    const pageTotal = ref(4)
    const tableData = ref(orderList)

    // 查询
    const handleSearch = () => {
      query.pageIndex = 1
    }
    // 分页导航
    const handlePageChange = (index: number) => {
      query.pageIndex = index
    }

    // 表格编辑时弹窗和保存
    const editVisible = ref(false)
    const handleEdit = (idx: string, val: any) => {
      from.address = val.address
      from.name = val.name
      from.phone = val.phone
      from.idx = idx
      editVisible.value = true
    }

    //编辑框确认
    const saveEdit = (idx: number) => {
      tableData.value[idx].address = from.address
      tableData.value[idx].name = from.name
      tableData.value[idx].phone = from.phone
      editVisible.value = false
    }

    // 删除
    const handleDelete = (index: number) => {
      ElMessageBox.confirm('确定要删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          tableData.value = tableData.value.filter((item, idx) => idx != index)
          ElMessage.success('删除成功')
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '已取消删除！',
          })
        })
    }

    return {
      ...toRefs(query),
      handleSearch,
      tableData,
      handlePageChange,
      handleEdit,
      pageTotal,
      editVisible,
      saveEdit,
      handleDelete,
      Delete,
      Edit,
      from,
    }
  },
}
</script>
<style lang="less" scoped>
.handle-select {
  width: 120px;
}
.handle-input {
  width: 300px;
}
.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}
.table-td-thumb .image-slot {
  font-size: 30px;
}
.table-td-thumb .image-slot .el-icon {
  font-size: 30px;
}
.table-td-thumb .el-image {
  width: 100%;
  height: 200px;
}
</style>
