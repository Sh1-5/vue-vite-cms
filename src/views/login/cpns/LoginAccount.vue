<script setup lang="ts">
import { ref, reactive } from 'vue'
import rules from '../config/account-config'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'
import { StoreType } from '@/store/types'

const store = useStore<StoreType>()
const formRef = ref(null)
const account = reactive({
  name: localCache.getCache('name') ?? 'coderwhy',
  password: localCache.getCache('password') ?? '123456'
})
const login = (isKeepPassword: boolean) => {
  // eslint-disable-next-line @typescript-eslint/no-extra-semi
  ;(formRef.value as any)?.validate((valid: boolean) => {
    if (valid) {
      // 1.判断是否需要记住密码
      if (isKeepPassword) {
        localCache.setCache('name', account.name)
        localCache.setCache('password', account.password)
      } else {
        localCache.removeCache('name')
        localCache.removeCache('password')
      }
      // 2.登录逻辑
      store.dispatch('login/accountLoginAction', { ...account })
    }
  })
}
// eslint-disable-next-line no-undef
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
        <el-input type="password" v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss"></style>
