<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'dashboard',
  setup() {
    const counter = ref(0)
    return {
      counter
    }
  }
})
</script>

<template>
  <div class="dashboard">
    <h1>{{ counter }}</h1>
    <el-button @click="counter++">+</el-button>
  </div>
</template>

<style scoped lang="scss"></style>
