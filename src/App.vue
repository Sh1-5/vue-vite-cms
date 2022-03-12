<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import service from './network'
interface DataTYpe {
  data: any
  code: boolean
}
const res = await service.post<DataTYpe>({
  url: '/login',
  data: {
    name: 'coderwhy',
    password: '123456'
  }
})
console.log(res)
</script>

<style scoped lang="scss"></style>
