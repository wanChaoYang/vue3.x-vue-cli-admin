<template>
  <div class="tags" v-if="showTags">
    <ul>
      <li class="tags-li" v-for="(item, index) in tagsList" :class="{ active: isActive(item.path) }" :key="index">
        <router-link :to="item.path" class="tags-li-title">{{ item.title }}</router-link>
        <span class="tags-li-icon" @click="closeTags(item)">
          <el-icon><Close /></el-icon>
        </span>
      </li>
    </ul>
    <div class="tags-close-box">
      <el-dropdown @command="handleTags">
        <el-button size="small" type="primary">
          标签选项
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu size="small">
            <el-dropdown-item command="other">关闭其他</el-dropdown-item>
            <el-dropdown-item command="all">关闭所有</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted } from 'vue'
import { mainStore } from '@ADMIN/store/index'
import { storeToRefs } from 'pinia'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
const store = mainStore()
interface MyObject {
  [key: string]: string
}
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const { tagsList } = storeToRefs(store)
    const showTags = computed(() => tagsList.value.length > 0)
    const isActive = (path: string) => {
      return path === route.fullPath
    }

    onMounted(() => {
      setTags(route)
    })

    //关闭单个tags
    const closeTags = (delItem: MyObject): void => {
      const dataList: Array<MyObject> = store.tagsList.filter((item: MyObject) => item.name != delItem.name)
      store.$patch((state: any) => {
        state.tagsList = dataList
      })
      const item = dataList[dataList.length - 1]
      if (item) {
        delItem.path === route.fullPath && router.push(item.path)
      } else {
        router.push('/systemHome')
      }
    }

    //设置tags
    const setTags = (route: any): void => {
      const isExist: boolean = store.tagsList.some((item: any) => item.path == route.fullPath)
      if (!isExist) {
        store.$patch((state: any) => {
          state.tagsList.push({
            name: route.name,
            title: route.meta.name,
            path: route.fullPath,
          })
        })
      }
    }

    onBeforeRouteUpdate((to) => {
      setTags(to)
    })

    //标签选项
    const handleTags = (command: string) => {
      command === 'other' ? closeOther() : closeAll()
    }

    // 关闭其他标签
    const closeOther = () => {
      const curItem = store.tagsList.filter((item: MyObject) => {
        return item.path === route.fullPath
      })
      store.$patch((state) => {
        state.tagsList = curItem
      })
    }

    // 关闭全部标签
    const closeAll = () => {
      router.push('/systemHome')
      store.$patch((state) => {
        state.tagsList = []
      })
    }

    return {
      isActive,
      showTags,
      tagsList,
      setTags,
      closeTags,
      handleTags,
    }
  },
}
</script>

<style lang="less" scoped>
.tags {
  position: relative;
  height: 30px;
  overflow: hidden;
  background: #fff;
  padding-right: 120px;
  box-shadow: 0 5px 10px #ddd;
  ul {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    .tags-li {
      float: left;
      margin: 3px 5px 2px 3px;
      border-radius: 3px;
      font-size: 12px;
      overflow: hidden;
      cursor: pointer;
      height: 23px;
      line-height: 23px;
      border: 1px solid #e9eaec;
      background: #fff;
      padding: 0 5px 0 12px;
      vertical-align: middle;
      color: #666;
      -webkit-transition: all 0.3s ease-in;
      -moz-transition: all 0.3s ease-in;
      transition: all 0.3s ease-in;

      .tags-li-title {
        float: left;
        max-width: 80px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 5px;
        color: #666;
        text-decoration: none;
      }
    }
    .active {
      color: #fff;
      border: 1px solid #409eff;
      background-color: #409eff;
      a {
        color: #fff !important;
      }
    }
    .tags-li:not(.active):hover {
      background: #f8f8f8;
    }
  }
  .tags-close-box {
    position: absolute;
    right: 0;
    top: 0;
    box-sizing: border-box;
    padding-top: 1px;
    text-align: center;
    width: 110px;
    height: 30px;
    background: #fff;
    box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
}
</style>
