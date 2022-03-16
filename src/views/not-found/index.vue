<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="not-found">
    <img src="@/assets/img/404.svg" alt="404" />
    <el-button type="primary" @click="router.replace('/analysis/overview')"
      >返回</el-button
    >
  </div>
</template>

<style scoped lang="scss">
.not-found {
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
