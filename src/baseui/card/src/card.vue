<template>
  <div class="card" :style="Config.style">
    <el-card :shadow="Config.shadow" :body-style="Config.elBodyStyle">
      <template #header v-if="Config.isShowTitle">
        <div class="header" :style="Config.header">
          <slot name="header">
            {{ Config.title }}
          </slot>
        </div>
      </template>

      <div class="body" :style="Config.body">
        <slot> body </slot>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { ICardConfig } from './type'
export default defineComponent({
  name: 'card',
  props: {
    Config: {
      type: Object as PropType<ICardConfig>,
      default: () => {
        return {
          isShowTitle: false,
          style: {
            textAlign: 'left'
          },
          shadow: 'always',
          title: '这是标题~',
          header: {
            height: '10px'
          },
          elBodyStyle: {
            padding: '15px',
            height: '360px'
          },
          body: {
            textAlign: 'center'
          }
        }
      }
    }
  },
  setup() {
    const cardConfig = {}

    return {
      cardConfig
    }
  }
})
</script>
<style lang="less" scoped>
.card {
  height: '800px';
  background-color: orange;
  text-align: left;
}
</style>
