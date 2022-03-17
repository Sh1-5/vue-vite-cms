<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'overview',
  setup() {
    const counter = ref(100)
    return {
      counter
    }
  }
})
</script>

<template>
  <div class="overview">
    <h1>{{ counter }}</h1>
    <el-button @click="counter++">+</el-button>
  </div>
</template>

<style scoped lang="scss"></style>
