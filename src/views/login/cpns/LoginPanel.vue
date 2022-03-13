<script setup lang="ts">
import { ref } from 'vue'
import { User, Phone } from '@element-plus/icons-vue'
import LoginAccount from './LoginAccount.vue'
import LoginPhone from './LoginPhone.vue'

const activeName = ref('account')
const isKeepPassword = ref(false)
const accountRef = ref(null)
const handleLogin = () => {
  if (activeName.value === 'account') {
    ;(accountRef.value as any)?.login(isKeepPassword.value)
  } else {
    console.log('手机登录')
  }
}
</script>

<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs v-model="activeName" type="border-card" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><user /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="password">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><phone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone ref="phone" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLogin"
      >立即登录</el-button
    >
  </div>
</template>

<style scoped lang="scss">
.login-panel {
  width: 320px;
  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;

    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
