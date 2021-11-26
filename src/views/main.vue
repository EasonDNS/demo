<template>
  <div class="main">
    <el-container>
      <el-aside :width="isFold ? '60' : '300'">
        <el-menu>
          <nav-aside></nav-aside>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <nav-header></nav-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

import NavHeader from '@/components/nav-header'
import NavAside from '@/components/nav-aside'

import { mitt } from '@/services'

export default defineComponent({
  components: {
    NavAside,
    NavHeader
  },
  setup() {
    const isFold: any = ref(false)

    mitt.on('isFold', (pay) => {
      isFold.value = pay
    })

    return {
      isFold
    }
  }
})
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  background-color: #bfa;
  display: block;

  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #545c64;
    // border-right: none;
    .el-menu {
      border-right: none;
    }
  }
  .el-header {
    padding: 0;
  }
}
</style>
