<template>
  <div class="nav-header">
    <div class="left">
      <i @click="foldClick">
        <template v-if="isFold">
          <el-icon class="jxls"><caret-right /></el-icon>
        </template>
        <template v-else>
          <el-icon><caret-left /></el-icon>
        </template>
      </i>

      <el-breadcrumb>
        <el-breadcrumb-item> 111</el-breadcrumb-item>
        <el-breadcrumb-item> 111</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right">
      <el-button> 用户 </el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

import { useStore } from '@/store'
import { mitt } from '@/services'
export default defineComponent({
  components: {},
  setup() {
    const store = useStore()
    const isFold = ref(false)
    const foldClick = () => {
      isFold.value = !isFold.value
      mitt.emit('isFold', isFold.value)
      store.dispatch('loginModule/getUserMenuAction', { url: '/menu/list' })
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
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(23, 139, 38, 0.815);

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
