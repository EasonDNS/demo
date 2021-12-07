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
    const totalCount = computed(() => store.state.roleModule.totalCount)
    const listData = ref({ list, totalCount })
    return {
      tableConfig,
      listData,
      totalCount
    }
  }
})
</script>
<style lang="less" scoped></style>
