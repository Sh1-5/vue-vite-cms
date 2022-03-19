<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'overview',
  setup() {
    return {}
  }
})
</script>

<template>
  <div class="overview">
    <h4>开发工具：Visual Studio Code</h4>
    <h4>编程语言：TypeScript</h4>
    <h4>构件工具：Vite</h4>
    <h4>前端框架：Vite-TS</h4>
    <h4>路由工具：Vue Router 4.x</h4>
    <h4>状态管理：Vuex 4.x</h4>
    <h4>UI框架：Element Plus</h4>
    <h4>CSS预编译：Sass</h4>
    <h4>网络请求L：Axios</h4>
    <h4>Git Hook工具：Husky</h4>
    <h4>代码规范：EditorConfig + Prettier + ESLint</h4>
    <h4>提交规范：Commitizen + CommitLint</h4>
  </div>
</template>

<style scoped lang="scss"></style>
