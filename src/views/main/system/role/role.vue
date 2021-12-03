<template>
  <div class="">
    <page-content
      :pageContentConfig="tableConfig"
      :listData="listData"
    ></page-content>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, computed } from 'vue'
import { useStore } from '@/store'

import { tableConfig } from './config/tableConfig'
import pageContent from '@/components/page-content'
export default defineComponent({
  components: { pageContent },
  setup() {
    const store = useStore()
    const list = computed(() => store.state.roleModule.roleList)
    const count = computed(() => store.state.roleModule.totalCount)
    const listData = ref({ list: list, count: count })
    return {
      tableConfig,
      listData,
      count
    }
  }
})
</script>
<style lang="less" scoped></style>
