<template>
  <div class="nav">
    <el-config-provider :locale="zhCn">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
export default defineComponent({
  components: {
    ElConfigProvider
  },
  setup() {
    return {
      zhCn
    }
  }
})
</script>

<style lang="less">
html {
  height: 100%;
  background-color: rgba(26, 25, 24, 0.349);
}
body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  // background-color: orange;
  // display: flex;
  justify-content: center;
  align-items: center;
  .nav {
    height: 100%;
    height: 100%;
  }
}
</style>
