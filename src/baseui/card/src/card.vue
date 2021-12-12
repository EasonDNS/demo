<template>
  <div class="card">
    <el-card shadow="always">
      <template #header>
        <div class="header">
          <slot name="header">
            {{ cardConfig.header.title ?? '头部' }}
          </slot>
        </div>
      </template>

      <div class="body">
        <slot name="body"> body </slot>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  name: 'card',
  props: {
    cardConfig: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup() {
    const defaultValue = reactive({
      header: {
        style: {}
      }
    })

    return { defaultValue }
  }
})
</script>
<style lang="less" scoped>
.card {
  .header {
    text-align: left;
    height: 10px;
  }
  .body {
    height: 400px;
    // background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
