<script setup lang="ts">
import NavMenu from '@/layout/nav-menu/index.vue'
import NavHeader from '@/layout/nav-header/index.vue'
import { computed, ref, nextTick } from 'vue'
import { useStore } from 'vuex'
import { StoreType } from '@/store/types'
import { useRouter, useRoute } from 'vue-router'

// 折叠/展开菜单
const isCollapse = ref(false)
const handleFoldChange = (isFold: boolean) => {
  isCollapse.value = isFold
}

// 标签页
const store = useStore<StoreType>()
const router = useRouter()
const route = useRoute()
// 获取需要缓存的页面
const aliveMenus = computed(() => store.state.aliveMenus)
const currentIndex = ref(0)
nextTick(() => {
  currentIndex.value = aliveMenus.value.length - 1
})
// 点击标签
const handleClickTag = (item: any, index: number) => {
  router.push(item.url)
  currentIndex.value = index
}
// 点击菜单
const itemClick = (url: string) => {
  for (const index in store.state.aliveMenus) {
    if (store.state.aliveMenus[Number(index)].url === url) {
      currentIndex.value = Number(index)
      break
    }
  }
}
// 获取需要缓存的页面name
const getAliveMenus = () => {
  const include: string[] = []
  for (const item of store.state.aliveMenus) {
    const res = item.url.split('/')
    include.push(res.pop())
  }
  return include
}
// 关闭页面
const handleCloseTag = (item: any, index: number) => {
  // 关闭的页面不是当前页
  if (route.path !== item.url) {
    store.commit('removeFromAliveMenus', index)
    // 关闭的页面在活跃页面之前
    if (currentIndex.value > index) {
      currentIndex.value -= 1
    }
  } else {
    store.commit('removeFromAliveMenus', index)
    router.push(store.state.aliveMenus[store.state.aliveMenus.length - 1].url)
    currentIndex.value -= 1
  }
}
</script>

<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside :width="isCollapse ? '66px' : '210px'">
        <nav-menu :isCollapse="isCollapse" @itemClick="itemClick" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @foldChange="handleFoldChange" />
        </el-header>
        <el-main class="page-content">
          <div class="tag">
            <el-tag
              v-for="(item, index) in aliveMenus"
              :key="item.id"
              :effect="index === currentIndex ? 'dark' : 'plain'"
              :closable="index !== 0"
              @click="handleClickTag(item, index)"
              @close="handleCloseTag(item, index)"
            >
              {{ item.name }}
            </el-tag>
          </div>
          <div class="content">
            <router-view v-slot="{ Component }">
              <keep-alive :include="getAliveMenus()">
                <component :is="Component" />
              </keep-alive>
            </router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.main {
  height: 100%;

  .main-container {
    height: 100%;

    .el-aside {
      height: 100%;
      background-color: #001529;
    }

    .page {
      height: 100%;

      .page-header {
        height: 48px;
        background-color: #fff;
      }

      .page-content {
        height: calc(100% - 48px);
        background-color: #f0f2f5;
        padding: 10px;

        .tag {
          height: 25px;
          overflow-x: auto;

          display: flex;
          align-items: center;

          .el-tag {
            margin-right: 4px;
            cursor: pointer;
          }
        }

        /* 隐藏滚动条 */
        .tag::-webkit-scrollbar {
          display: none;
        }

        .content {
          height: calc(100% - 60px);
          background-color: #fff;
          border: 1px solid rgb(255, 255, 255, 0);
          margin-top: 10px;
          padding: 10px;
        }
      }
    }
  }
}
</style>
