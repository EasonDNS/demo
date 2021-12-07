<template>
  <div class="">
    <page-form :pageFormConfig="pageFormConfig"> </page-form>
    <page-content :pageContentConfig="tableConfig" :listData="listData">
    </page-content>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from '@/store'

import { pageFormConfig } from './config/pageFormConfig'
import pageForm from '@/components/page-form'
import { tableConfig } from './config/tableConfig'
import pageContent from '@/components/page-content'

export default defineComponent({
  components: {
    pageContent,
    pageForm
  },
  setup() {
    const store = useStore()
    onMounted(() => {
      store.dispatch('goodsModule/getGoodsAction', {})
    })
    const list = computed(() => store.state.goodsModule.list)
    const totalCount = computed(() => store.state.goodsModule.totalCount)
    const listData = ref({
      list,
      totalCount
    })
    return {
      pageFormConfig,
      tableConfig,
      listData
    }
  }
})
</script>
<style lang="less" scoped></style>
