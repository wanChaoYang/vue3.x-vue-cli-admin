<template>
  <el-dialog title="编辑" v-model="props.visible" width="50%" @close="close" destroy-on-close>
    <div>
      <div class="wid50">
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
        </el-form>
      </div>
      <upload-list @handleChang="handleChang" />
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="saveEdit(formRef)">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import { ref, reactive, watch } from 'vue'
import { UploadList } from '@ADMIN/components/index'
import { ElMessage } from 'element-plus'

export default {
  components: {
    'upload-list': UploadList,
  },
  emits: ['handleCancel'],
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  setup(props: any, ctx: any) {
    const rules = {
      name: {
        required: true,
        message: '请输入商品名称',
        trigger: 'blur',
      },
      price: {
        required: true,
        message: '请输入单价',
        trigger: 'blur',
      },
    }

    const form = reactive({
      name: '',
      price: '',
      desc: '',
      type: '短裤',
    })
    //编辑框确认
    const formRef = ref()
    const saveEdit = () => {
      if (!formRef.value) return
      formRef.value.validate((valid: any) => {
        if (valid) {
          ElMessage.success('提交成功！')
          ctx.emit('handleCancel', false)
        } else {
          console.log('error submit!')
          return false
        }
      })
    }
    const close = () => {
      ctx.emit('handleCancel', false)
    }
    //取消
    const handleCancel = () => {
      ctx.emit('handleCancel', false)
    }

    //选择上传图片回调
    const handleChang = (res: any) => {
      console.log(res)
    }

    return {
      form,
      rules,
      saveEdit,
      handleChang,
      handleCancel,
      formRef,
      props,
      close,
    }
  },
}
</script>
<style lang="less" scoped></style>
