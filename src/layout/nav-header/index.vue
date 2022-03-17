<script setup lang="ts">
import { ref, defineEmits, computed } from 'vue'
import localCache from '@/utils/cache'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { StoreType } from '@/store/types'
import { pathMapBreadCrumb } from '@/utils/map-bread-crumb'

// 折叠/展开菜单
const isFold = ref(false)
const handleArrowChange = () => {
  isFold.value = !isFold.value
  emits('foldChange', isFold.value)
}
const emits = defineEmits(['foldChange'])

// 退出登录
const router = useRouter()
const logout = () => {
  localCache.clearCache()
  router.push('/login')
}

// 全屏/退出全屏
const isFull = ref(false)
const full = () => {
  if (isFull.value) {
    document.exitFullscreen()
  } else {
    document.body.requestFullscreen()
  }
  isFull.value = !isFull.value
}

// 获取面包屑和用户名称
const route = useRoute()
const store = useStore<StoreType>()
const name = computed(() => store.state.login.userInfo.name)
const breadCrumb = computed(() =>
  pathMapBreadCrumb(store.state.login.userMenus, route.path)
)
</script>

<template>
  <div class="nav-header">
    <div class="left-breadcrumb">
      <el-icon class="fold" @click="handleArrowChange">
        <component :is="isFold ? 'expand' : 'fold'"></component>
      </el-icon>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item, index) in breadCrumb" :key="index">{{
          item
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right-operate">
      <el-icon class="full" @click="full">
        <full-screen />
      </el-icon>
      <el-avatar
        size="small"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <el-dropdown>
        <span class="el-dropdown-link">
          欢迎您，{{ name }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav-header {
  display: flex;
  justify-content: space-between;

  .left-breadcrumb {
    display: flex;
    justify-content: flex-start;

    .fold {
      height: 48px;
      font-size: 20px;
      cursor: pointer;
      line-height: 48px;
    }

    .el-breadcrumb {
      height: 48px;
      line-height: 48px;
      margin-left: 20px;
    }
  }

  .right-operate {
    padding: 0 10px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    .full {
      font-size: 20px;
      cursor: pointer;
    }

    .el-avatar {
      margin: 0 10px 0 18px;
    }

    .el-dropdown {
      cursor: pointer;
    }
  }
}
</style>
