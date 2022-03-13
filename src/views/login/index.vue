<script setup lang="ts">
import LoginPanel from './cpns/LoginPanel.vue'
</script>

<template>
  <div class="login">
    <LoginPanel />
  </div>
</template>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
