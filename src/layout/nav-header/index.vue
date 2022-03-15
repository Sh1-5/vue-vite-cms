<script setup lang="ts">
import { ref, defineEmits } from 'vue'
const isFold = ref(false)
const handleArrowChange = () => {
  isFold.value = !isFold.value
  emits('foldChange', isFold.value)
}
const emits = defineEmits(['foldChange'])
</script>

<template>
  <div class="nav-header">
    <el-icon class="d-arrow" @click="handleArrowChange">
      <component :is="isFold ? 'd-arrow-right' : 'd-arrow-left'"></component>
    </el-icon>
  </div>
</template>

<style scoped lang="scss">
.nav-header {
  .d-arrow {
    height: 48px;
    font-size: 30px;
    cursor: pointer;
    line-height: 48px;
  }
}
</style>
