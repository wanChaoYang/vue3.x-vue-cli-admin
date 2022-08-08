<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <el-icon><Grid /></el-icon> 基础表格
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <div class="flex-dom flex-start p-v-15">
        <el-select
          v-model="address"
          placeholder="地址"
          class="handle-select m-r-15"
        >
          <el-option key="1" label="广东省" value="广东省"></el-option>
          <el-option key="2" label="湖南省" value="湖南省"></el-option>
        </el-select>
        <el-input
          v-model="name"
          placeholder="用户名"
          class="handle-input m-r-15"
        ></el-input>
        <el-button type="primary" icon="el-icon-search" @click="handleSearch"
          >搜索</el-button
        >
      </div>
      <el-table
        :data="tableData"
        border
        class="table"
        ref="multipleTable"
        header-cell-class-name="table-header"
      >
        <el-table-column
          prop="id"
          label="ID"
          width="55"
          align="center"
        ></el-table-column>
        <el-table-column prop="name" label="用户名" width="180"></el-table-column>
        <el-table-column label="账户余额" width="180" align="center">
          <template #default="scope">￥{{ scope.row.money }}</template>
        </el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column label="状态" align="center" width="180">
          <template #default="scope">
            <el-tag
              :type="
                scope.row.state === '成功'
                  ? 'success'
                  : scope.row.state === '失败'
                  ? 'danger'
                  : ''
              "
              >{{ scope.row.state }}</el-tag
            >
          </template>
        </el-table-column>

        <el-table-column prop="date" label="注册时间" width="180"  align="center"></el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template #default="scope">
            <el-button
              :text="true"
              type="primary"
              :icon="Edit"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑
            </el-button>
            <el-button
              :text="true"
              :icon="Delete"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
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
          :total="50"
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
          <el-input v-model="name" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="address" placeholder="地址"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="editVisible = false">取 消</el-button>
          <el-button type="primary" @click="saveEdit">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { reactive, toRefs, ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { Edit, Delete } from "@element-plus/icons-vue";
export default {
  name: "baseTable",
  setup() {
    const query = reactive({
      address: "",
      name: "",
      pageIndex: 1,
      pageSize: 10,
    });
    const pageTotal = ref(4);
    const tableData = ref([
      {
        address: "四川省成都市高新区",
        date: "2019-11-1",
        id: 1,
        money: 123,
        name: "张三",
        state: "成功",
        thumb:
          "",
      },
      {
        address: "四川省乐山市马踏镇",
        date: "2019-11-1",
        id: 2,
        money: 123,
        name: "张三",
        state: "成功",
        thumb: "https://qdzhaoxiaodao.gitee.io/images/post/wms.png",
      },
      {
        address: "四川省成都市华阳镇",
        date: "2019-11-1",
        id: 3,
        money: 123,
        name: "张三",
        state: "失败",
        thumb: "https://qdzhaoxiaodao.gitee.io/images/post/wms.png",
      },
      {
        address: "四川省成都市成华区",
        date: "2019-11-1",
        id: 4,
        money: 123,
        name: "张三",
        state: "成功",
        thumb: "https://qdzhaoxiaodao.gitee.io/images/post/wms.png",
      },
    ]);

    // 查询
    const handleSearch = () => {
      query.pageIndex = 1;
    };
    // 分页导航
    const handlePageChange = (val: number) => {
      query.pageIndex = val;
    };

    // 表格编辑时弹窗和保存
    const editVisible = ref(false);
    const handleEdit = () => {
      editVisible.value = true;
    };

    //编辑框确认
    const saveEdit = () => {
      editVisible.value = false;
    };

    // 删除
    const handleDelete = (index: number) => {
      ElMessageBox.confirm("确定要删除吗？", "提示", {
        type: "warning",
      })
        .then(() => {
          ElMessage.success("删除成功");
        })
        .catch(() => {
          console.log("删除失败");
        });
    };

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
    };
  },
};
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
