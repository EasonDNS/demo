<template>
  <div class="card">
    <el-card :shadow="shadow ?? 'alway'">
      <template #header v-if="isShowHeader">
        <div class="header">
          <span> {{ title }} </span>
        </div>
      </template>
      <div class="item" :style="bodyStyle ?? { height: '360px' }">
        <slot></slot>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'card',
  props: {
    title: {
      type: String,
      default: '这是标题'
    },
    isShowHeader: {
      type: Boolean,
      default: true
    },
    shadow: String,
    bodyStyle: {
      type: Object
    }
  },
  setup() {
    const h = ref('')
    return { h }
  }
})
</script>
<style lang="less" scoped>
&:deep(.el-card__header) {
  padding: 10px 20px !important;
}
.header {
  height: 15px;
  text-align: left;
}
.item {
  // height: 360px;
}
</style>
