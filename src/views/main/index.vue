<script setup lang="ts">
import NavMenu from '@/layout/nav-menu/index.vue'
import NavHeader from '@/layout/nav-header/index.vue'
import { ref } from 'vue'

const isCollapse = ref(false)
const handleFoldChange = (isFold: boolean) => {
  isCollapse.value = isFold
}
</script>

<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside :width="isCollapse ? '66px' : '210px'">
        <nav-menu :isCollapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @foldChange="handleFoldChange" />
        </el-header>
        <el-main class="page-content">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;

  .main-container {
    height: 100%;

    .el-aside {
      background-color: #001529;
      height: 100%;
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
      }
    }
  }
}
</style>
