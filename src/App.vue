<template>
  <div class="nav">
    <el-config-provider :locale="zhCn">
      <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
        <router-view />
      </n-config-provider>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
//elementPlus国际化
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
//Naive 国际化
import { NConfigProvider } from 'naive-ui'
import { zhCN, dateZhCN } from 'naive-ui'
export default defineComponent({
  components: {
    ElConfigProvider,
    NConfigProvider
  },
  setup() {
    return {
      zhCn,
      zhCN,
      dateZhCN
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
    .n-config-provider {
      height: 100%;
      .main {
        height: 100%;
      }
    }
  }
}
</style>
