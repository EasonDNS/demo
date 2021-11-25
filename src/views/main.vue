<template>
  <div class="main">
    <el-container>
      <el-aside>
        <el-menu>
          <nav-aside></nav-aside>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <nav-header></nav-header>
        </el-header>
        <el-main>4 </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

import NavHeader from '@/components/nav-header'
import NavAside from '@/components/nav-aside'

import { mitt } from '@/services'

import { mapMenu } from '@/utils'
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

    mapMenu.jxls()
    return {}
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
    background-color: rgba(255, 166, 0, 0.116);
  }
  // .el-header {
  //   background-color: orange;
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  // }
}
</style>
