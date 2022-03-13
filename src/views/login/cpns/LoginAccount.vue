<script setup lang="ts">
import { ref, reactive } from 'vue'
import rules from '../config/account-config'

const formRef = ref(null)
const account = reactive({
  name: '',
  password: ''
})
const login = (isKeepPassword: boolean) => {
  ;(formRef.value as any)?.validate((valid: boolean) => {
    if (valid) {
      // 登录逻辑
    }
  })
}
defineExpose({
  login
})
</script>

<template>
  <div class="login-account">
    <el-form :model="account" :rules="rules" ref="formRef" label-width="60px">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss"></style>
