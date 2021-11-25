<template>
  <div class="login">
    <div class="header">
      <h2>吉祥超市系统</h2>
    </div>

    <div class="content">
      <login-content />
    </div>

    <div class="footer">
      <!-- <h2>登陆</h2> -->
      <!-- <el-button type="primary">登陆</el-button> -->
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

import LoginContent from './cpns/login-content.vue'
export default defineComponent({
  components: { LoginContent },
  setup() {
    const msg = ref('msg in app')
    return {}
  }
})
</script>
<style lang="less" scoped>
.login {
  height: 100%;
  background-color: rgba(187, 255, 170, 0.808);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;

  .content {
    width: 400px;
    height: 300px;
    padding-top: 10px;
    background-color: rgba(122, 177, 78, 0.747);
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
}
</style>
