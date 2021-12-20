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
          <transition
            appear
            name="header"
            mode="out-in"
            enter-active-class="animate__animated animate__backInDown"
            leave-active-class="animate__animated animate__bounceOutRight"
          >
            <nav-header></nav-header>
          </transition>
        </el-header>
        <el-main>
          <!-- <router-view></router-view> -->
          <transition
            appear
            name="jxls"
            mode="out-in"
            enter-active-class="animate__animated animate__bounceInRight"
            leave-active-class="animate__animated animate__bounceOutRight"
          >
            <router-view></router-view>
          </transition>
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
  display: block;
  .el-container {
    height: 100%;
    .el-aside {
      height: 100%;
      .el-menu {
        border-right: none;
        background-color: #545c64;
        height: 100%;
      }
    }
  }
  .el-header {
    height: 40px;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
