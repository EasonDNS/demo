<template>
  <div class="nav-header">
    <div class="left">
      <i @click="foldClick">
        <template v-if="isFold">
          <el-icon><expand /></el-icon>
        </template>
        <template v-else>
          <el-icon><fold /></el-icon>
        </template>
      </i>

      <jxls-breadcrumb></jxls-breadcrumb>
    </div>
    <div class="right">
      <el-button> 用户 </el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

import { mitt } from '@/services'

import jxlsBreadcrumb from './cpns/breadcrumb.vue'
export default defineComponent({
  components: { jxlsBreadcrumb },
  setup() {
    const isFold = ref(false)
    const foldClick = () => {
      isFold.value = !isFold.value
      mitt.emit('isFold', isFold.value)
    }
    return {
      isFold,
      foldClick
    }
  }
})
</script>
<style lang="less" scoped>
.nav-header {
  // margin-top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(107, 16, 107, 0.829);
  // border-radius: 10px;

  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    .el-icon {
      font-size: 40px;
      padding-right: 20px;
      padding-top: 5px;
      cursor: pointer;
    }
  }
}
</style>
